/* ===========================
   MUSIC PLAYER
=========================== */
const audio        = document.getElementById('audioPlayer');
const playIcon     = document.getElementById('playIcon');
const disc         = document.getElementById('disc');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl   = document.getElementById('duration');
const progressBar  = document.getElementById('progressBar');
const waveBars     = document.querySelectorAll('.wave-bar');

let isPlaying = false;

function formatTime(s) {
    const m   = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
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

    lightboxImg.src         = img.src;
    lightboxImg.alt         = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : '';

    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
    if (e && e.target !== lightbox && e.target !== lightbox.querySelector('.lightbox-close')) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }
});