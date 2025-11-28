class SynonymApp {
    constructor() {
        this.synonymDatabase = {};
        this.currentWord = null;
        this.currentWordPosition = null;
        this.selectedSynonym = null;
        
        this.initElements();
        this.initEventListeners();
        this.loadSynonymDatabase();
    }

    initElements() {
        this.textInput = document.getElementById('textInput');
        this.scanBtn = document.getElementById('scanBtn');
        this.outputSection = document.getElementById('outputSection');
        this.textDisplay = document.getElementById('textDisplay');
        this.modal = document.getElementById('synonymModal');
        this.selectedWordSpan = document.getElementById('selectedWord');
        this. synonymList = document.getElementById('synonymList');
        this.replaceBtn = document.getElementById('replaceBtn');
        this.cancelBtn = document.getElementById('cancelBtn');
        this.closeBtn = document.querySelector('.close');
        this.replaceableCount = document.getElementById('replaceableCount');
        this. totalCount = document.getElementById('totalCount');
    }

    initEventListeners() {
        this.scanBtn.addEventListener('click', () => this.scanText());
        this.replaceBtn.addEventListener('click', () => this.replaceWord());
        this.cancelBtn. addEventListener('click', () => this. closeModal());
        this.closeBtn.addEventListener('click', () => this.closeModal());
        window.addEventListener('click', (e) => {
            if (e. target === this.modal) this.closeModal();
        });
    }

    async loadSynonymDatabase() {
        try {
            const response = await fetch('/api/synonyms');
            this.synonymDatabase = await response.json();
        } catch (error) {
            console.warn('Menggunakan database lokal:', error);
            this.synonymDatabase = this.getLocalSynonymDatabase();
        }
    }

    getLocalSynonymDatabase() {
        // Database sinonim lokal yang komprehensif
        return {
            'penelitian': ['kajian', 'studi', 'penyelidikan', 'pengkajian', 'analisis'],
            'dilakukan': ['dikerjakan', 'dijalankan', 'diimplementasikan', 'diselenggarakan', 'diterapkan'],
            'untuk': ['guna', 'demi', 'bagi', 'tujuan', 'maksud'],
            'mengetahui': ['mengerti', 'memahami', 'menyadari', 'mengenali', 'mempelajari'],
            'efektivitas': ['keefektifan', 'efisiensi', 'ketepatan', 'keberhasilan', 'produktivitas'],
            'metode': ['cara', 'teknik', 'pendekatan', 'strategi', 'sistem'],
            'pembelajaran': ['pengajaran', 'proses belajar', 'edukasi', 'pelatihan', 'pendidikan'],
            'hasil': ['akibat', 'konsekuensi', 'dampak', 'keluaran', 'temuan'],
            'menunjukkan': ['menampilkan', 'memperlihatkan', 'mengungkapkan', 'menunjukkan', 'menyatakan'],
            'peningkatan': ['kenaikan', 'pertumbuhan', 'perkembangan', 'kemajuan', 'akselerasi'],
            'signifikan': ['bermakna', 'penting', 'berarti', 'substansial', 'nyata'],
            'dibandingkan': ['jika dibanding', 'dalam perbandingan', 'ketika diukur', 'relatif terhadap'],
            'kelompok': ['grup', 'tim', 'komunitas', 'kategori', 'segmen'],
            'kontrol': ['pengendalian', 'pengawasan', 'manajemen', 'pemantauan', 'regulasi'],
            'strategi': ['rencana', 'taktik', 'pendekatan', 'cara', 'metode'],
            'implementasi': ['penerapan', 'eksekusi', 'pelaksanaan', 'realisasi', 'operasionalisasi'],
            'analisis': ['penelaahan', 'pengkajian', 'telaah', 'pemeriksaan', 'studi'],
            'data': ['informasi', 'keterangan', 'angka', 'fakta', 'bukti'],
            'melalui': ['via', 'dengan cara', 'melewati', 'menggunakan', 'melalui'],
            'menunjukkan': ['menampilkan', 'memerlihatkan', 'mengungkapkan', 'menyatakan', 'membuktikan'],
            'kesimpulan': ['simpulan', 'konklusi', 'hasil akhir', 'putusan', 'keputusan'],
            'memberikan': ['memberi', 'menyediakan', 'menghadirkan', 'melahirkan', 'menciptakan'],
            'dampak': ['pengaruh', 'akibat', 'efek', 'konsekuensi', 'implikasi'],
            'positif': ['baik', 'menguntungkan', 'bermanfaat', 'konstruktif', 'afirmatif'],
            'negatif': ['buruk', 'merugikan', 'tidak baik', 'destruktif', 'merugikan'],
            'penting': ['signifikan', 'berarti', 'krusial', 'esensial', 'vital'],
            'masalah': ['isu', 'persoalan', 'tantangan', 'hambatan', 'kendala'],
            'solusi': ['pemecahan', 'penyelesaian', 'jawaban', 'resolusi', 'cara keluar'],
            'latar belakang': ['konteks', 'dasar', 'sejarah', 'kondisi awal', 'pendahuluan'],
            'tujuan': ['maksud', 'sasaran', 'target', 'objektif', 'hasil yang diharapkan'],
            'metode penelitian': ['metodologi', 'pendekatan riset', 'teknik pengumpulan data'],
            'populasi': ['sasaran', 'subjek', 'kelompok studi', 'universe', 'target'],
            'sampel': ['contoh', 'specimen', 'representative', 'subset', 'bagian'],
            'validitas': ['keabsahan', 'kesahihan', 'kebenaran', 'kredibilitas', 'keandalan'],
            'reliabilitas': ['keandalan', 'konsistensi', 'stabilitas', 'kepercayaan'],
            'hipotesis': ['asumsi', 'dugaan awal', 'anggapan', 'proposisi', 'premis'],
            'variabel': ['peubah', 'faktor', 'unsur', 'elemen', 'parameter'],
            'independen': ['bebas', 'mandiri', 'tidak bergantung', 'asli', 'utama'],
            'dependen': ['tergantung', 'berakibat', 'konsekuensi', 'hasil', 'dampak'],
            'analisis data': ['pengolahan data', 'pemrosesan informasi', 'kajian data'],
            'kesimpulan': ['simpulan', 'konklusi', 'keputusan akhir', 'hasil akhir'],
            'rekomendasi': ['saran', 'masukan', 'usulan', 'anjuran', 'proposal'],
            'implikasi': ['konsekuensi', 'akibat', 'dampak', 'pengaruh', 'makna'],
            'perspektif': ['sudut pandang', 'wawasan', 'pandangan', 'visi', 'opini'],
            'kontribusi': ['sumbangan', 'andil', 'peran', 'partisipasi', 'input'],
            'inovasi': ['pembaruan', 'penciptaan baru', 'terobosan', 'novelty', 'ide baru'],
            'keberlanjutan': ['kelanjutan', 'persistensi', 'kesinambungan', 'durabilitas'],
            'kualitas': ['mutu', 'standar', 'keunggulan', 'tingkat', 'derajat'],
            'kuantitas': ['jumlah', 'volume', 'banyaknya', 'besaran', 'kuantum'],
        };
    }

    scanText() {
        const text = this.textInput.value.trim();
        if (!text) {
            alert('Silakan masukkan paragraf terlebih dahulu');
            return;
        }

        const words = text.split(/\s+/);
        let replaceableWords = 0;
        let htmlContent = '';

        words.forEach((word, index) => {
            const cleanWord = word.toLowerCase().replace(/[.,!?;:—\-()]/g, '');
            const isReplaceable = this.synonymDatabase. hasOwnProperty(cleanWord);

            if (isReplaceable) {
                replaceableWords++;
                htmlContent += `<span class="word replaceable" data-word="${cleanWord}" data-index="${index}">${word}</span> `;
            } else {
                htmlContent += `<span class="word">${word}</span> `;
            }
        });

        this.textDisplay.innerHTML = htmlContent;
        this. replaceableCount. textContent = replaceableWords;
        this.totalCount.textContent = words.length;
        this.outputSection.style.display = 'block';

        // Add click listeners to replaceable words
        document.querySelectorAll('.replaceable').forEach(element => {
            element.addEventListener('click', (e) => this.showSynonymModal(e));
        });
    }

    showSynonymModal(event) {
        this.currentWord = event.target.textContent;
        this.currentWordPosition = event.target;
        const cleanWord = this.currentWord.toLowerCase().replace(/[.,!?;:—\-()]/g, '');
        const synonyms = this.synonymDatabase[cleanWord] || [];

        this.selectedWordSpan. textContent = this.currentWord;
        this.synonymList.innerHTML = '';
        this.selectedSynonym = null;

        synonyms. forEach(synonym => {
            const div = document.createElement('div');
            div.className = 'synonym-item';
            div.textContent = synonym;
            div.addEventListener('click', () => this.selectSynonym(synonym, div));
            this.synonymList. appendChild(div);
        });

        this.modal.classList.add('show');
    }

    selectSynonym(synonym, element) {
        document.querySelectorAll('.synonym-item').forEach(item => {
            item.classList.remove('selected');
        });
        element.classList.add('selected');
        this.selectedSynonym = synonym;
    }

    replaceWord() {
        if (! this.selectedSynonym) {
            alert('Pilih sinonim terlebih dahulu');
            return;
        }

        this.currentWordPosition.textContent = this.selectedSynonym;
        this. closeModal();
    }

    closeModal() {
        this.modal.classList.remove('show');
        this.selectedSynonym = null;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SynonymApp();
});