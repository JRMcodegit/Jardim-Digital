/* ═══════════════════════════════════════════════════════════
   JARDIM DIGITAL — script.js
   11 flores para 11 meses.
═══════════════════════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────────────────────
   FLOWERS DATA
   Mensagem curta + cores para cada flor
────────────────────────────────────────────────────────── */
const FLOWERS = [
  {
    name:    'Flor do\nCarinho',
    message: 'Confesso que não comprei os presentes só porque queria te deixar feliz... Comprei também pra que tu sempre carregue uma parte simbólica de mim contigo, pra te lembrar que não ta sozinha. Assim posso estar contigo em todos os lugares.',
    p: '#d63384', d: '#7a0034', l: '#f9a8c9'
  },
  {
    name:    'Flor do\nCalma',
    message: 'Às vezes eu não entendo por que tu se cobra tanto... sendo que do teu jeito, tu sempre emcontra um caminho e faz dar certo, com ou sem esforço máximo. Tenta pegar mais leve contigo mesma e se permitir respirar um pouco.',
    p: '#9333ea', d: '#4c0094', l: '#d8b4fe'
  },
  {
    name:    'Flor\nda Paz',
    message: 'Quando as coisas pesarem e tu não estiver bem, não precisa se fechar nem se afastar do mundo. Me chama, me deixa estar aí com contigo. Às vezes dividir esse momento difícil comigo pode te deixar um pouco mais leve. Estar do teu lado, mesmo que só em uma ligação, já me faz sentir uma conexão mais forte. Saber que tu está bem é o que me traz paz.',
    p: '#ec4899', d: '#9d174d', l: '#fbcfe8'
  },
  {
    name:    'Flor da\nSegurança',
    message: 'Me faz um favor que eu vou carregar pra sempre? Quando algo te fizer duvidar do teu valor, lembra de mim… lembra que a tua presença é o que me dá chão firme. É ela que me deixa seguro, que me traz mais coragem e que me enche de confiança pra seguir na minha jornada. Principalmente agora com tantas obrigações e responsabilidades chegando na minha vida.',
    p: '#b91c1c', d: '#6b0000', l: '#fca5a5'
  },
  {
    name:    'Flor\ndo Apoio',
    message: 'Não precisa carregar tudo sozinha e não precisa guardar teus problemas só pra ti. Eu tô aqui contigo, mesmo que de longe. Não me importo em virar a noite só pra te ouvir, pra ler cada palavra tua, pra estar presente quando tu precisar. Mesmo quando o sono chega eu fico mais um tempo acordado, porque talvez tu precise de alguém naquele momento. Pode contar comigo pra te escutar, te acolher e te apoiar em tudo, sem julgamento. (só uns esporros de vez em quando)',
    p: '#be185d', d: '#6f0035', l: '#fbcfe8'
  },
  {
    name:    'Flor\nda Força',
    message: 'Quando eu falo da tua força, não é só sobre o teu corpo, é sobre tudo que tu sustenta diariamente. A tua forma de enfrentar a vida, de continuar mesmo no caos, me inspira de verdade. Tu é um exemplo vivo de resiliência pra mim.',
    p: '#7e22ce', d: '#3b0764', l: '#e9d5ff'
  },
  {
    name:    'Flor\nda Leveza',
    message: 'Você torna tudo mais leve quando aparece. Sem esforço.',
    p: '#e11d48', d: '#9f1239', l: '#fda4af'
  },
  {
    name:    'Flor\ndo Tempo',
    message: 'Cada chamada, cada jogatina, ficou guardada aqui.',
    p: '#dc2626', d: '#7f1d1d', l: '#fca5a5'
  },
  {
    name:    'Flor da\nAdmiração',
    message: 'Seus olhos guardam coisas que nem você percebe.',
    p: '#a21caf', d: '#4a044e', l: '#e879f9'
  },
  {
    name:    'Flor\nda Bomba',
    message: 'e o dólar em... lá vem bomba 💣',
    p: '#1e1b4b', d: '#0d0b2a', l: '#818cf8',
    special: true
  },
  {
    name:    'Flor\ndos 11',
    message: '11 meses. Cada um deles valeu.',
    p: '#c026d3', d: '#701a75', l: '#f0abfc'
  }
];

const FINAL_MESSAGE =
  'Fiz esse site porque tu tava mal esses dias, ' +
  'e hoje me disse que ficou triste. ' +
  'Espero que esse presentinho resolva 🌹';

/* ──────────────────────────────────────────────────────────
   DOM REFERENCES
────────────────────────────────────────────────────────── */
const screenIntro   = document.getElementById('screen-intro');
const screenGarden  = document.getElementById('screen-garden');
const btnEnter      = document.getElementById('btn-enter');
const starsCanvas   = document.getElementById('stars-canvas');
const flowersGrid   = document.getElementById('flowers-grid');
const finalWrap     = document.getElementById('final-wrap');
const finalText     = document.getElementById('final-text');
const flowerCounter = document.getElementById('flower-counter');
const modal         = document.getElementById('modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose    = document.getElementById('modal-close');
const modalRoseWrap = document.getElementById('modal-rose-wrap');
const modalName     = document.getElementById('modal-name');
const modalMessage  = document.getElementById('modal-message');
const bgAudio       = document.getElementById('bg-audio');

/* ──────────────────────────────────────────────────────────
   STATE
────────────────────────────────────────────────────────── */
let openedCount = 0;

/* ──────────────────────────────────────────────────────────
   STARS (canvas-based for performance)
────────────────────────────────────────────────────────── */
function initStars() {
  const ctx   = starsCanvas.getContext('2d');
  const W     = starsCanvas.width  = window.innerWidth;
  const H     = starsCanvas.height = window.innerHeight;
  const stars = [];
  const COUNT = 90;

  for (let i = 0; i < COUNT; i++) {
    stars.push({
      x:    Math.random() * W,
      y:    Math.random() * H,
      r:    Math.random() * 1.4 + 0.3,
      base: Math.random() * 0.5 + 0.1,
      max:  Math.random() * 0.55 + 0.35,
      spd:  Math.random() * 0.008 + 0.003,
      t:    Math.random() * Math.PI * 2
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.t += s.spd;
      const alpha = s.base + (s.max - s.base) * (Math.sin(s.t) * 0.5 + 0.5);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,245,250,${alpha.toFixed(3)})`;
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();
}

/* ──────────────────────────────────────────────────────────
   ROSE SVG GENERATOR
   Top-down layered rose — 4 petal rings + center
────────────────────────────────────────────────────────── */
function makeRoseSVG(p, d, l, uid) {
  // Outer petals: 8, spaced 45°
  const outer = Array.from({ length: 8 }, (_, i) =>
    `<ellipse cx="0" cy="-21" rx="10.5" ry="23" fill="${p}" opacity=".52" transform="rotate(${i * 45})"/>`
  ).join('');

  // Mid petals: 7, offset by ~13°
  const mid = Array.from({ length: 7 }, (_, i) =>
    `<ellipse cx="0" cy="-15" rx="8.5" ry="18" fill="${p}" opacity=".70" transform="rotate(${Math.round(i * 51.4 + 13)})"/>`
  ).join('');

  // Inner petals: 5
  const inner = Array.from({ length: 5 }, (_, i) =>
    `<ellipse cx="0" cy="-9"  rx="6.5" ry="12" fill="${d}" opacity=".88" transform="rotate(${i * 72 + 7})"/>`
  ).join('');

  // Core petals: 4
  const core = Array.from({ length: 4 }, (_, i) =>
    `<ellipse cx="0" cy="-4.5" rx="4.5" ry="7.5" fill="${d}" opacity=".96" transform="rotate(${i * 90 + 23})"/>`
  ).join('');

  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="rg${uid}" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   stop-color="${l}" stop-opacity=".28"/>
      <stop offset="100%" stop-color="${l}" stop-opacity="0"/>
    </radialGradient>
    <filter id="rf${uid}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="1" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <circle cx="50" cy="50" r="47" fill="url(#rg${uid})"/>
  <g transform="translate(50 50)" filter="url(#rf${uid})">
    ${outer}${mid}${inner}${core}
    <circle r="8"   fill="${d}"/>
    <circle r="4.5" fill="${l}" opacity=".62"/>
    <circle r="1.8" fill="${d}" opacity=".85"/>
  </g>
</svg>`;
}

/* ──────────────────────────────────────────────────────────
   BUILD FLOWERS
────────────────────────────────────────────────────────── */
function buildFlowers() {
  const frag = document.createDocumentFragment();

  FLOWERS.forEach((f, idx) => {
    // Card
    const card = document.createElement('div');
    card.className = 'flower-card';
    card.dataset.idx = String(idx);
    card.setAttribute('role', 'listitem');
    card.setAttribute('aria-label', f.name.replace('\n', ' '));

    // Bloom
    const bloom = document.createElement('div');
    bloom.className = 'flower-bloom';
    const uid = `f${idx}`;
    bloom.innerHTML = makeRoseSVG(f.p, f.d, f.l, uid);
    if (f.special) {
      // Dark/mysterious look for the bomb flower
      bloom.style.filter = 'saturate(0.6) brightness(0.85)';
    }

    // Label (two lines if \n present)
    const label = document.createElement('div');
    label.className = 'flower-label';
    label.innerHTML = f.name.replace('\n', '<br>');

    card.appendChild(bloom);
    card.appendChild(label);
    card.addEventListener('click', () => openModal(idx));
    frag.appendChild(card);
  });

  flowersGrid.appendChild(frag);
}

/* ──────────────────────────────────────────────────────────
   REVEAL FLOWERS (staggered)
────────────────────────────────────────────────────────── */
function revealFlowers() {
  const cards = flowersGrid.querySelectorAll('.flower-card');

  cards.forEach((card, idx) => {
    const delay = 500 + idx * 420; // ms: 0.5s base + 420ms stagger

    setTimeout(() => {
      card.style.opacity = '1';
      const bloom = card.querySelector('.flower-bloom');
      const dur = 2.4 + (idx % 3) * 0.15; // slight duration variety
      bloom.style.setProperty('--dur', dur + 's');
      bloom.classList.add('spinning');

      bloom.addEventListener('animationend', () => {
        bloom.classList.remove('spinning');
        bloom.style.opacity = '1';
        card.classList.add('idle');
      }, { once: true });
    }, delay);
  });
}

/* ──────────────────────────────────────────────────────────
   MODAL
────────────────────────────────────────────────────────── */
function openModal(idx) {
  const f = FLOWERS[idx];

  // Rebuild SVG fresh (resets its spin animation)
  modalRoseWrap.innerHTML = makeRoseSVG(f.p, f.d, f.l, 'modal');
  modalName.textContent    = f.name.replace('\n', ' ');
  modalMessage.textContent = f.message;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');

  // Mark card as opened
  const card = flowersGrid.querySelector(`[data-idx="${idx}"]`);
  if (!card.classList.contains('opened')) {
    card.classList.add('opened');
    openedCount++;
    flowerCounter.textContent = `${openedCount} / ${FLOWERS.length}`;

    if (openedCount === FLOWERS.length) {
      setTimeout(showFinalMessage, 900);
    }
  }

  // Focus trap
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

/* ──────────────────────────────────────────────────────────
   FINAL MESSAGE
────────────────────────────────────────────────────────── */
function showFinalMessage() {
  finalText.textContent = FINAL_MESSAGE;
  finalWrap.classList.add('visible');

  // Scroll to final message smoothly
  setTimeout(() => {
    finalWrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 350);
}

/* ──────────────────────────────────────────────────────────
   SCREEN TRANSITION
────────────────────────────────────────────────────────── */
function enterGarden() {
  // Disable button immediately
  btnEnter.disabled = true;

  // Start music (user just clicked = gesture = allowed)
  bgAudio.volume = 0;
  bgAudio.play().catch(() => { /* graceful fail if browser blocks */ });

  // Fade audio in slowly (matches the mood of Solitude)
  let vol = 0;
  const fadeAudio = () => {
    vol = Math.min(vol + 0.015, 0.55);
    bgAudio.volume = vol;
    if (vol < 0.55) requestAnimationFrame(fadeAudio);
  };
  requestAnimationFrame(fadeAudio);

  // Fade intro out
  screenIntro.classList.remove('active');

  // Show garden after a beat
  setTimeout(() => {
    screenGarden.classList.add('active');
    setTimeout(revealFlowers, 700);
  }, 900);
}

/* ──────────────────────────────────────────────────────────
   INIT
────────────────────────────────────────────────────────── */
function init() {
  initStars();
  buildFlowers();

  // Event listeners
  btnEnter.addEventListener('click', enterGarden);

  modalBackdrop.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}

document.addEventListener('DOMContentLoaded', init);
