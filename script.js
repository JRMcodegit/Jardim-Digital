/* ═══════════════════════════════════════════════════════════
   JARDIM DIGITAL — style.css
   Aesthetic: luxury dark / soft botanical / night sky
═══════════════════════════════════════════════════════════ */

/* ── RESET & BASE ───────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}

:root {
  --rose-pink:    #e8789a;
  --rose-light:   #f5c6d8;
  --rose-deep:    #b5234e;
  --night-base:   #060e1f;
  --night-mid:    #0c1e3d;
  --night-high:   #112952;
  --text-primary: rgba(245, 225, 234, 0.92);
  --text-muted:   rgba(230, 190, 210, 0.45);
  --glass-bg:     rgba(255, 255, 255, 0.04);
  --glass-border: rgba(232, 120, 154, 0.22);
  --font-serif:   'Cormorant Garamond', Georgia, serif;
  --font-sans:    'DM Sans', sans-serif;
}

html {
  height: 100%;
  overscroll-behavior: none;
}

body {
  min-height: 100%;
  background: var(--night-base);
  color: var(--text-primary);
  font-family: var(--font-serif);
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ── SCREENS ────────────────────────────────────────────── */
.screen {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 1s ease;
  will-change: opacity;
}

.screen.active {
  opacity: 1;
  pointer-events: all;
}

/* ── STARS CANVAS ───────────────────────────────────────── */
#stars-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* ═══════════════════════════════════════════════════════════
   INTRO SCREEN
═══════════════════════════════════════════════════════════ */
#screen-intro {
  justify-content: center;
  background:
    radial-gradient(ellipse 80% 60% at 30% 25%, rgba(18, 42, 100, 0.7) 0%, transparent 70%),
    radial-gradient(ellipse 60% 50% at 75% 70%, rgba(90, 20, 50, 0.4) 0%, transparent 70%),
    linear-gradient(160deg, #0a1836 0%, #060e1f 50%, #030810 100%);
}

.intro-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 0 40px;
  text-align: center;
}

.intro-rose {
  font-size: 4.2rem;
  line-height: 1;
  margin-bottom: 6px;
  filter: drop-shadow(0 0 28px rgba(232, 80, 120, 0.45));
  animation: roseFloat 4.5s ease-in-out infinite;
  transform-origin: center bottom;
}

@keyframes roseFloat {
  0%, 100% { transform: translateY(0) rotate(-4deg); }
  50%       { transform: translateY(-14px) rotate(4deg); }
}

.intro-heading {
  font-size: clamp(2.4rem, 8vw, 3rem);
  font-weight: 300;
  font-style: italic;
  letter-spacing: 8px;
  color: var(--rose-light);
  text-shadow: 0 0 40px rgba(232, 120, 154, 0.3);
}

.intro-sub {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 300;
  letter-spacing: 4.5px;
  text-transform: lowercase;
  color: var(--text-muted);
  margin-top: 2px;
}

.btn-enter {
  margin-top: 30px;
  padding: 14px 42px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 60px;
  color: rgba(245, 198, 216, 0.88);
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: lowercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: background 0.35s ease, border-color 0.35s ease,
              box-shadow 0.35s ease, transform 0.15s ease;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.btn-enter:hover,
.btn-enter:focus-visible {
  background: rgba(232, 120, 154, 0.1);
  border-color: rgba(232, 120, 154, 0.55);
  box-shadow: 0 0 30px rgba(232, 80, 120, 0.2),
              inset 0 0 12px rgba(232, 120, 154, 0.06);
  outline: none;
}

.btn-enter:active {
  transform: scale(0.96);
}

.btn-glyph {
  font-size: 0.55rem;
  opacity: 0.5;
  animation: glyphPulse 2.5s ease-in-out infinite;
}

@keyframes glyphPulse {
  0%, 100% { opacity: 0.3; }
  50%       { opacity: 0.8; }
}

/* ═══════════════════════════════════════════════════════════
   GARDEN SCREEN
═══════════════════════════════════════════════════════════ */
#screen-garden {
  background:
    radial-gradient(ellipse 100% 40% at 50% 0%, rgba(12, 30, 60, 0.9) 0%, transparent 60%),
    radial-gradient(ellipse 80% 60% at 80% 100%, rgba(80, 10, 40, 0.3) 0%, transparent 60%),
    linear-gradient(180deg, #080f22 0%, #0b1a36 40%, #0d1430 70%, #100a24 100%);
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  padding-bottom: 80px;
}

#screen-garden::-webkit-scrollbar { width: 0; }

.garden-hint {
  width: 100%;
  text-align: center;
  padding: 26px 0 6px;
  font-family: var(--font-sans);
  font-size: 0.62rem;
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: lowercase;
  color: var(--text-muted);
  flex-shrink: 0;
}

/* ── FLOWERS GRID ───────────────────────────────────────── */
.flowers-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 6px;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 10px 12px 4px;
}

.flower-card {
  width: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  padding: 10px 8px 13px;
  border-radius: 20px;
  border: 1px solid transparent;
  cursor: pointer;
  opacity: 0;
  position: relative;
  transition: border-color 0.4s ease, background 0.4s ease, transform 0.15s ease;
  -webkit-user-select: none;
  user-select: none;
}

.flower-card:active {
  transform: scale(0.93);
}

.flower-card.opened {
  border-color: rgba(232, 120, 154, 0.18);
  background: rgba(232, 120, 154, 0.04);
}

.flower-card.opened::after {
  content: '✦';
  position: absolute;
  top: 7px;
  right: 9px;
  font-size: 0.45rem;
  color: rgba(232, 180, 200, 0.45);
}

/* ── ROSE BLOOM ─────────────────────────────────────────── */
.flower-bloom {
  width: 76px;
  height: 76px;
  flex-shrink: 0;
  opacity: 0;
  transform-origin: center center;
}

.flower-bloom svg {
  width: 100%;
  height: 100%;
}

.flower-bloom.spinning {
  animation: spinReveal var(--dur, 2.6s) cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
}

@keyframes spinReveal {
  0%   { opacity: 0;   transform: rotate(-300deg) scale(0.15); }
  40%  { opacity: 1;   transform: rotate(20deg)   scale(1.1);  }
  62%  { transform: rotate(-10deg) scale(0.96); }
  78%  { transform: rotate(5deg)   scale(1.02); }
  90%  { transform: rotate(-2deg)  scale(0.99); }
  100% { opacity: 1;   transform: rotate(0deg)    scale(1);    }
}

/* Idle sway after reveal */
.flower-card.idle .flower-bloom {
  animation: idleSway 6s ease-in-out infinite;
}

@keyframes idleSway {
  0%, 100% { transform: rotate(-2.5deg) scale(1);    }
  50%       { transform: rotate(2.5deg)  scale(1.02); }
}

/* ── FLOWER LABEL ───────────────────────────────────────── */
.flower-label {
  font-family: var(--font-sans);
  font-size: 0.56rem;
  font-weight: 300;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(230, 185, 205, 0.45);
  line-height: 1.5;
  transition: color 0.4s ease;
}

.flower-card.opened .flower-label {
  color: rgba(230, 185, 205, 0.75);
}

/* ── FLOWER COUNTER ─────────────────────────────────────── */
.flower-counter {
  position: fixed;
  bottom: 18px;
  right: 18px;
  z-index: 50;
  font-family: var(--font-sans);
  font-size: 0.55rem;
  letter-spacing: 2.5px;
  color: rgba(232, 180, 200, 0.25);
  pointer-events: none;
  transition: color 0.4s ease;
}

/* ═══════════════════════════════════════════════════════════
   FINAL MESSAGE
═══════════════════════════════════════════════════════════ */
.final-wrap {
  width: 100%;
  max-width: 335px;
  margin: 28px auto 0;
  padding: 0 16px;
  display: none;
}

.final-wrap.visible {
  display: block;
  animation: fadeRise 1.1s ease forwards;
}

@keyframes fadeRise {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0);    }
}

.final-card {
  background: var(--glass-bg);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 28px 22px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3),
              0 0 60px rgba(180, 50, 90, 0.06);
}

.final-rose-icon {
  font-size: 1.7rem;
  animation: roseFloat 4.5s ease-in-out infinite;
  filter: drop-shadow(0 0 12px rgba(232, 80, 120, 0.35));
}

#final-text {
  font-size: 1rem;
  line-height: 1.9;
  color: rgba(250, 225, 236, 0.88);
  font-style: italic;
  font-weight: 300;
}

/* ═══════════════════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════════════════ */
.modal {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.modal.open {
  opacity: 1;
  pointer-events: all;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(2, 6, 16, 0.78);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.modal-card {
  position: relative;
  z-index: 1;
  background: linear-gradient(148deg,
    rgba(14, 6, 28, 0.97) 0%,
    rgba(8, 16, 38, 0.97) 100%
  );
  border: 1px solid rgba(232, 120, 154, 0.28);
  border-radius: 28px;
  padding: 40px 28px 36px;
  text-align: center;
  max-width: 300px;
  width: 100%;
  transform: scale(0.84) translateY(20px);
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.55),
    0 0 50px rgba(180, 50, 100, 0.1),
    inset 0 1px 0 rgba(255, 200, 220, 0.06);
}

.modal.open .modal-card {
  transform: scale(1) translateY(0);
}

.modal-close {
  position: absolute;
  top: 14px;
  right: 16px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.22);
  font-size: 0.9rem;
  cursor: pointer;
  padding: 6px 8px;
  transition: color 0.2s ease;
  font-family: var(--font-sans);
  font-weight: 300;
  line-height: 1;
}

.modal-close:hover,
.modal-close:focus-visible {
  color: rgba(255, 255, 255, 0.6);
  outline: none;
}

.modal-rose-wrap {
  width: 88px;
  height: 88px;
  margin: 0 auto 18px;
}

.modal-rose-wrap svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 14px rgba(200, 60, 100, 0.35));
  animation: modalRoseSpin 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
}

@keyframes modalRoseSpin {
  from { transform: rotate(-180deg) scale(0.5); opacity: 0; }
  to   { transform: rotate(0deg)    scale(1);   opacity: 1; }
}

.modal-name {
  font-family: var(--font-sans);
  font-size: 0.6rem;
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(232, 180, 200, 0.45);
  margin-bottom: 14px;
}

.modal-message {
  font-size: 1.15rem;
  line-height: 1.8;
  color: rgba(252, 232, 243, 0.92);
  font-style: italic;
  font-weight: 300;
}

/* ═══════════════════════════════════════════════════════════
   RESPONSIVE ADJUSTMENTS
═══════════════════════════════════════════════════════════ */
@media (max-width: 360px) {
  .flower-card { width: 100px; }
  .flower-bloom { width: 68px; height: 68px; }
  .flowers-grid { max-width: 340px; }
}

@media (min-width: 420px) {
  .flower-card { width: 116px; }
  .flower-bloom { width: 82px; height: 82px; }
}
