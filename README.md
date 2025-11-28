# 🔄 Sinonim Kata Indonesia

Aplikasi web untuk meningkatkan kualitas penulisan formal dengan menyediakan alternatif sinonim kata-kata yang dapat diganti otomatis.

## 📋 Fitur Utama

- **Database Sinonim Besar**: Ribuan kata dengan sinonim formal yang sesuai untuk jurnal, artikel, skripsi, dan laporan
- **Pemindaian Otomatis**: Sistem otomatis mendeteksi kata-kata yang memiliki sinonim
- **Highlight Visual**: Kata yang dapat diganti ditandai dengan warna kuning
- **Modal Interaktif**: Pilih sinonim favorit dari daftar yang tersedia
- **Real-time Preview**: Lihat perubahan secara langsung
- **Responsive Design**: Kompatibel dengan berbagai ukuran layar

## 🚀 Cara Menggunakan

1. **Input Teks**
   - Ketik atau paste paragraf Anda di area input

2. **Pindai**
   - Klik tombol "Pindai Kata"
   - Sistem akan menandai kata-kata yang memiliki sinonim

3. **Pilih Sinonim**
   - Hover dan klik pada kata yang ingin diganti
   - Modal akan menampilkan daftar sinonim
   - Pilih sinonim yang Anda inginkan
   - Klik "Ganti" untuk mengganti kata

4. **Export**
   - Copy teks yang sudah dimodifikasi

## 📦 Instalasi

### Prerequisites
- Node.js (untuk frontend)
- Python 3. 8+ (untuk backend)

### Setup

```bash
# Clone repository
git clone https://github.com/yourusername/synonym-web. git
cd synonym-web

# Backend setup
cd backend
pip install -r requirements. txt
python server.py

# Frontend (di tab terminal baru)
cd frontend
# Buka index.html di browser
```

## 📊 Database Sinonim

Database sinonim mencakup lebih dari 500+ kata dengan kategori:
- **Kata Kerja**: dilakukan, menunjukkan, memberikan, dll
- **Kata Benda**: penelitian, metode, hasil, dll
- **Kata Sifat**: signifikan, positif, negatif, dll
- **Kata Keterangan**: melalui, untuk, dengan, dll
- **Frasa Umum**: latar belakang, metode penelitian, dll

## 🛠️ Struktur Database

```json
{
  "penelitian": [
    "kajian",
    "studi",
    "penyelidikan",
    "pengkajian"
  ],
  "dilakukan": [
    "dikerjakan",
    "dijalankan",
    "diimplementasikan"
  ]
}
```

## 🎨 Teknologi yang Digunakan

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Python Flask, Flask-CORS
- **Database**: JSON (dapat diperluas dengan MongoDB/PostgreSQL)

## 📱 Responsive Design

- Desktop (>1024px)
- Tablet (768px - 1024px)
- Mobile (<768px)

## 🔒 Keamanan

- Input validation pada semua endpoint
- CORS configuration untuk production
- Sanitasi teks input

## 📈 Roadmap

- [ ] Export ke PDF
- [ ] Export ke Word
- [ ] User account & history
- [ ] Custom synonym dictionary
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] Integration dengan editor online

## 🤝 Kontribusi

Kami menerima kontribusi untuk menambah database sinonim dan fitur baru! 

## 📄 Lisensi

MIT License

## 👨‍💻 Author

Dibuat untuk membantu penulisan akademik berkualitas tinggi

## 📞 Support

Untuk pertanyaan atau saran, silakan buka issue di repository ini. 

---

**Catatan Penting**: Aplikasi ini dirancang khusus untuk membantu penulisan formal dalam bahasa Indonesia. Pastikan selalu review kembali hasil penggantian sinonim untuk memastikan konteks yang tepat.