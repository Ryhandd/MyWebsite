/* ===========================
   TRANSLATIONS (i18n)
=========================== */
const translations = {
    id: {
        bio: "Pengembang perangkat lunak dengan fokus pada JavaScript dan Python, berorientasi pada pengembangan solusi otomatisasi, bot, dan sistem jaringan. Terbiasa membangun aplikasi efisien, termasuk layanan real-time dan tools untuk optimalisasi perangkat. Berfokus pada efisiensi, skalabilitas, serta solusi yang praktis dan berdampak.",
        download:        "Download",
        label_portfolio: "portfolio",
        title_projects:  "Projek Unggulan",
        label_creative:  "creative",
        gallery_intro:   "Eksplorasi visual di luar kode — gambar tangan dan digital art sebagai ruang ekspresi bebas.",
        proj_ryzu:       "Automasi bot WhatsApp serbaguna dengan performa tinggi dan fitur lengkap.",
        proj_roomchat:   "Website chatting real-time berbasis room menggunakan WebSockets.",
        proj_battery:    "Modul Magisk/KernelSU/KSUN ringan untuk membatasi persentase pengisian daya baterai secara otomatis.",
        proj_rsniffer:   "Network tool berbasis Linux untuk monitoring dan pembatasan bandwidth pada perangkat jaringan, dikembangkan sebagai modifikasi dari Evil Limiter oleh bitbrute.",
        proj_sensor:     "Implementasi deteksi sensor kamera menggunakan Python.",
        proj_space:      "Game arcade sederhana dengan kontrol yang adiktif.",
        proj_dam:        "Game Dam online berbasis web dengan sistem multiplayer real-time menggunakan Socket.io, dilengkapi fitur room, mode penonton.",
        footer_rights:   "Hak cipta dilindungi.",
    },
    en: {
        bio: "Software developer focused on JavaScript and Python, oriented toward building automation solutions, bots, and network systems. Experienced in crafting efficient applications including real-time services and device optimization tools. Committed to efficiency, scalability, and practical solutions with real impact.",
        download:        "Download",
        label_portfolio: "portfolio",
        title_projects:  "Featured Projects",
        label_creative:  "creative",
        gallery_intro:   "Visual explorations outside of code — hand-drawn art and digital illustrations as a space for free expression.",
        proj_ryzu:       "A versatile, high-performance WhatsApp automation bot with a comprehensive feature set.",
        proj_roomchat:   "A real-time room-based chat website built with WebSockets.",
        proj_battery:    "A lightweight Magisk/KernelSU/KSUN module to automatically cap battery charging percentage.",
        proj_rsniffer:   "A Linux-based network tool for monitoring and limiting bandwidth on networked devices, built as a fork of Evil Limiter by bitbrute.",
        proj_sensor:     "A camera sensor detection implementation using Python.",
        proj_space:      "A simple yet addictive arcade game with tight controls.",
        proj_dam:        "A web-based online Dam (checkers) game with real-time multiplayer via Socket.io, featuring room management and spectator mode.",
        footer_rights:   "All rights reserved.",
    },
    ja: {
        bio: "JavaScriptとPythonを中心としたソフトウェア開発者。自動化ソリューション、ボット、ネットワークシステムの開発に注力。リアルタイムサービスやデバイス最適化ツールを含む効率的なアプリケーション構築を得意とする。効率性・スケーラビリティ・実用的なインパクトを重視。",
        download:        "ダウンロード",
        label_portfolio: "ポートフォリオ",
        title_projects:  "主なプロジェクト",
        label_creative:  "クリエイティブ",
        gallery_intro:   "コードの外での視覚的な探求 — 手描きとデジタルアートによる自由な表現の場。",
        proj_ryzu:       "高パフォーマンスで多機能なWhatsApp自動化ボット。",
        proj_roomchat:   "WebSocketsを使用したリアルタイムのルームベースチャットサービス。",
        proj_battery:    "バッテリー充電上限を自動制御する軽量なMagisk/KernelSU/KSUNモジュール。",
        proj_rsniffer:   "Linuxベースのネットワークツール。ネットワーク上のデバイスの帯域幅を監視・制限する。Evil Limiterを改変して開発。",
        proj_sensor:     "Pythonを使ったカメラセンサー検出の実装。",
        proj_space:      "シンプルで中毒性の高いアーケードゲーム。",
        proj_dam:        "Socket.ioによるリアルタイムマルチプレイヤー対応のWebベースダムゲーム。ルーム機能・観戦モードを搭載。",
        footer_rights:   "無断複製・転載を禁じます。",
    }
};

/* ===========================
   LANGUAGE SWITCHER
=========================== */
let currentLang = 'id';

function setLang(lang) {
    currentLang = lang;

    // Update html lang attribute
    document.documentElement.lang = lang === 'ja' ? 'ja' : lang === 'en' ? 'en' : 'id';

    // Update body class for font overrides
    document.body.classList.remove('lang-id', 'lang-en', 'lang-ja');
    document.body.classList.add('lang-' + lang);

    // Apply translations to all data-i18n elements
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === lang ||
            (lang === 'ja' && btn.textContent.trim() === 'JP'));
    });

    // Re-check active state more precisely
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const map = { 'ID': 'id', 'EN': 'en', 'JP': 'ja' };
        btn.classList.toggle('active', map[btn.textContent.trim()] === lang);
    });
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
    setLang('id');
});

/* ===========================
   MUSIC PLAYER
=========================== */
const audio         = document.getElementById('audioPlayer');
const playIcon      = document.getElementById('playIcon');
const disc          = document.getElementById('disc');
const progressFill  = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl    = document.getElementById('duration');
const progressBar   = document.getElementById('progressBar');
const waveBars      = document.querySelectorAll('.wave-bar');

let isPlaying = false;

function formatTime(s) {
    const m   = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
}

function togglePlay() {
    if (isPlaying) { audio.pause(); } else { audio.play(); }
}

function seekBackward() {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
}

function seekForward() {
    audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10);
}

function setVolume(v) {
    audio.volume = v;
}

audio.addEventListener('play', () => {
    isPlaying = true;
    playIcon.className = 'fa-solid fa-pause';
    disc.classList.add('playing');
    waveBars.forEach(b => b.classList.add('active'));
});

audio.addEventListener('pause', () => {
    isPlaying = false;
    playIcon.className = 'fa-solid fa-play';
    disc.classList.remove('playing');
    waveBars.forEach(b => b.classList.remove('active'));
});

audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    progressFill.style.width = (audio.currentTime / audio.duration * 100) + '%';
    currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener('click', (e) => {
    if (!audio.duration) return;
    const rect = progressBar.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
});

/* ===========================
   LIGHTBOX / GALLERY
=========================== */
const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

function openLightbox(el) {
    const img     = el.querySelector('img');
    const caption = el.querySelector('.gallery-caption');

    lightboxImg.src             = img.src;
    lightboxImg.alt             = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : '';

    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
    if (e && e.target !== lightbox && !e.target.closest('.lightbox-close')) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }
});