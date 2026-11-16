/* ===========================
   TRANSLATIONS (i18n)
=========================== */
const translations = {
    id: {
        proj_omni:       "Widget desktop modular gaya Dynamic Island untuk Windows: Pomodoro, to-do, clipboard, monitor sistem, pemutar musik, dan converter file dalam satu overlay ringan.",
        proj_lab:        "Platform latihan Capture The Flag dengan tampilan terminal cyberpunk: 21 tantangan di 7 kategori, leaderboard global, dan sistem rank.",
        bio: "Pengembang Perangkat Lunak yang berfokus pada pembuatan aplikasi web interaktif serta sistem otomatisasi. Menguasai arsitektur real-time dengan JavaScript/Node.js dan automasi dengan Python. Berdedikasi untuk menciptakan kode bersih, efisien, dan berkinerja tinggi yang menggabungkan logika sistem yang rumit dengan interaksi pengguna yang dinamis.",
        skills_core:     "Teknologi Utama",
        download:        "Download",
        label_portfolio: "portfolio",
        title_projects:  "Projek Unggulan",
        label_creative:  "creative",
        title_gallery:   "Galeri Kreatif",
        gallery_intro:   "Eksplorasi visual di luar kode — sketsa tangan sebagai ruang ekspresi bebas.",
        proj_ryzu:       "Automasi bot WhatsApp serbaguna dengan performa tinggi dan fitur lengkap.",
        proj_ryzubotz:   "Bot Discord serbaguna dengan pemutar musik premium dan perintah pencarian anime/media.",
        proj_roomchat:   "Website chatting real-time berbasis room menggunakan WebSockets.",
        proj_prompt:     "Skill AI pribadi yang aktif otomatis di setiap percakapan: UI web premium, penulisan akademik yang manusiawi, OpenGL, Cisco Packet Tracer, Rust/Java/XML, Linux/Kali, AI/ML, data, cloud, DevOps, dan keamanan. Hemat token.",
        proj_sensor:     "Implementasi deteksi sensor kamera menggunakan Python.",
        proj_space:      "Game arcade sederhana dengan kontrol yang adiktif.",
        footer_rights:   "Hak cipta dilindungi.",
        nav_about:       "About",
        nav_projects:    "Projects",
        nav_gallery:     "Gallery",
        nav_contact:     "Contact",
    },
    en: {
        proj_omni:       "A modular, Dynamic Island-style desktop widget for Windows: Pomodoro, to-do, clipboard, system monitor, music player, and a file converter in one lightweight overlay.",
        proj_lab:        "A Capture The Flag training platform with a cyberpunk terminal look: 21 challenges across 7 categories, a global leaderboard, and a rank system.",
        bio: "Software Engineer specializing in building interactive web applications and automation systems. Experienced in real-time architecture using JavaScript/Node.js and automation scripting with Python. Dedicated to writing clean, efficient, and high-performance code that merges complex system logic with dynamic user experiences.",
        skills_core:     "Core Technologies",
        download:        "Download",
        label_portfolio: "portfolio",
        title_projects:  "Featured Projects",
        label_creative:  "creative",
        title_gallery:   "Creative Gallery",
        gallery_intro:   "Visual explorations beyond the code — hand-drawn sketches as a space for free expression.",
        proj_ryzu:       "A versatile, high-performance WhatsApp automation bot with a comprehensive feature set.",
        proj_ryzubotz:   "A versatile Discord bot with premium music playback and anime/media search commands.",
        proj_roomchat:   "A real-time room-based chat website built with WebSockets.",
        proj_prompt:     "An always-on personal AI skill covering premium web UI, humanized academic writing, OpenGL, Cisco Packet Tracer, Rust/Java/XML, Linux/Kali, AI/ML, data, cloud, DevOps, and security — token-lean by design.",
        proj_sensor:     "A camera sensor detection implementation using Python.",
        proj_space:      "A simple yet addictive arcade game with tight controls.",
        footer_rights:   "All rights reserved.",
        nav_about:       "About",
        nav_projects:    "Projects",
        nav_gallery:     "Gallery",
        nav_contact:     "Contact",
    },
    ja: {
        proj_omni:       "Windows向けのDynamic Island風モジュール式デスクトップウィジェット。ポモドーロ、ToDo、クリップボード、システムモニター、音楽プレーヤー、ファイル変換を軽量オーバーレイにまとめています。",
        proj_lab:        "サイバーパンク風ターミナルUIのCTF学習プラットフォーム。7カテゴリ21問の課題、グローバルランキング、ランクシステムを備えています。",
        bio: "インタラクティブなWebアプリケーションや自動化システムの開発に注力するソフトウェアエンジニア。JavaScript/Node.jsを用いたリアルタイム設計やPythonによるスクリプト開発を得意とする。複雑なシステムロジックと動的なユーザー体験を融合させた、クリーンで効率的かつ高性能なコードの作成に尽力している。",
        skills_core:     "主要技術",
        download:        "ダウンロード",
        label_portfolio: "ポートフォリオ",
        title_projects:  "主なプロジェクト",
        label_creative:  "クリエイティブ",
        title_gallery:   "クリエイティブギャラリー",
        gallery_intro:   "コードの外での視覚的な探求 — 手描きによる自由な表現の場。",
        proj_ryzu:       "高パフォーマンスで多機能なWhatsApp自動化ボット。",
        proj_ryzubotz:   "プレミアム音楽再生機能とアニメ・メディア検索コマンドを搭載した多機能Discordボット。",
        proj_roomchat:   "WebSocketsを使用したリアルタイムのルームベースチャットサービス。",
        proj_prompt:     "すべての会話で自動的に有効になる個人用AIスキル。プレミアムなWeb UI、人間らしい学術文章、OpenGL、Cisco Packet Tracer、Rust/Java/XML、Linux/Kali、AI/ML、データ、クラウド、DevOps、セキュリティをカバー。トークン消費を抑えた設計。",
        proj_sensor:     "Pythonを使ったカメラセンサー検出の実装。",
        proj_space:      "シンプルで中毒性の高いアーケードゲーム。",
        footer_rights:   "無断複製・転載を禁じます。",
        nav_about:       "About",
        nav_projects:    "Projects",
        nav_gallery:     "ギャラリー",
        nav_contact:     "連絡",
    }
};

/* ===========================
   LANGUAGE SWITCHER
=========================== */
let currentLang = 'id';

function setLang(lang) {
    currentLang = lang;

    document.documentElement.lang = lang === 'ja' ? 'ja' : lang === 'en' ? 'en' : 'id';
    document.body.classList.remove('lang-id', 'lang-en', 'lang-ja');
    document.body.classList.add('lang-' + lang);

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const map = { 'ID': 'id', 'EN': 'en', 'JP': 'ja' };
        btn.classList.toggle('active', map[btn.textContent.trim()] === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setLang('id');
});

/* ===========================
   NAVBAR — SCROLL & ACTIVE LINK
=========================== */
const navbar       = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const navLinks     = document.querySelectorAll('.nav-link');

const sections = [
    { id: 'about',    link: document.querySelector('.nav-link[href="#about"]') },
    { id: 'projects', link: document.querySelector('.nav-link[href="#projects"]') },
    { id: 'gallery',  link: document.querySelector('.nav-link[href="#gallery"]') },
];

window.addEventListener('scroll', () => {
    const y = window.scrollY;

    // Navbar glass effect
    if (y > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll-to-top button visibility
    if (y > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }

    // Active nav link highlighting
    let currentSection = '';
    sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top;
            if (top <= 90) currentSection = id;
        }
    });

    sections.forEach(({ id, link }) => {
        if (link) link.classList.toggle('active', id === currentSection);
    });
});

/* ===========================
   SMOOTH SCROLL
=========================== */
function scrollToSection(id) {
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const navH = navbar ? navbar.offsetHeight : 62;
    const top  = el.getBoundingClientRect().top + window.scrollY - navH - 10;
    window.scrollTo({ top, behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===========================
   MOBILE MENU
=========================== */
const navbarMobile  = document.getElementById('navbarMobile');
const navMenuToggle = document.getElementById('navMenuToggle');
let mobileOpen = false;

function toggleMobileMenu() {
    mobileOpen = !mobileOpen;
    navbarMobile.classList.toggle('open', mobileOpen);
    navMenuToggle.classList.toggle('open', mobileOpen);
}

function closeMobileMenu() {
    mobileOpen = false;
    navbarMobile.classList.remove('open');
    navMenuToggle.classList.remove('open');
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
    if (mobileOpen && !navbar.contains(e.target)) {
        closeMobileMenu();
    }
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