from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# Load synonym database
def load_synonyms():
    try:
        with open('data/synonyms.json', 'r', encoding='utf-8') as f:
            return json.load(f)
    except:
        return {}

synonym_db = load_synonyms()

@app.route('/api/synonyms', methods=['GET'])
def get_synonyms():
    return jsonify(synonym_db)

@app.route('/api/synonyms/<word>', methods=['GET'])
def get_word_synonyms(word):
    word = word.lower()
    synonyms = synonym_db.get(word, [])
    return jsonify({
        'word': word,
        'synonyms': synonyms,
        'found': len(synonyms) > 0
    })

@app.route('/api/scan', methods=['POST'])
def scan_text():
    data = request.json
    text = data. get('text', '')
    words = text.split()
    replaceable = []
    
    for word in words:
        clean_word = word.lower().replace('.,!?;:—-()', '')
        if clean_word in synonym_db:
            replaceable.append({
                'word': word,
                'synonyms': synonym_db[clean_word]
            })
    
    return jsonify({
        'total_words': len(words),
        'replaceable_words': len(replaceable),
        'replaceable': replaceable
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)