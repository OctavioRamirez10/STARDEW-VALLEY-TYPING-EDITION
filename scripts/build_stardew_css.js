// Generator for Stardew Valley CSS Styling (css/style.css & css/keyboard.css)
const fs = require('fs');
const path = require('path');

const styleCss = `/* ============================================================
   STARDEW VALLEY // TYPING EDITION - COZY PIXEL FARM STYLING
   ============================================================ */

:root,
[data-theme="stardew"] {
  /* MASTER THEME: STARDEW VALLEY / PELICAN TOWN */
  --bg-primary: #121c3b;
  --bg-secondary: #1a2752;
  --stardew-wood-dark: #3e1d08;
  --stardew-wood-mid: #7a401b;
  --stardew-wood-light: #b86f34;
  --stardew-wood-amber: #e69543;
  --stardew-parchment: #fcf4de;
  --stardew-parchment-border: #8f4b1e;
  --stardew-gold: #ffd700;
  --stardew-iridium: #9c27b0;
  --stardew-leaf-green: #73b32a;
  --stardew-grass: #4e8a20;
  --cyan-neon: #29b6f6;
  --green-neon: #66bb6a;
  --red-neon: #e53935;
  --text-main: #3e1d08;
  --text-light: #fefefe;
  --text-muted: #6d4c41;
  
  --font-display: 'VT323', 'Rajdhani', sans-serif;
  --font-ui: 'Rajdhani', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-body: 'Inter', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: linear-gradient(180deg, #101a38 0%, #1c2c5c 40%, #2b457c 75%, #3d5e99 100%);
  color: var(--text-light);
  font-family: var(--font-ui);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

/* Starry Night Sky Background with Sparkling Stars */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: 
    radial-gradient(1.5px 1.5px at 40px 60px, #ffffff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 150px 120px, #ffd700, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 300px 80px, #ffffff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 450px 200px, #ffd700, rgba(0,0,0,0)),
    radial-gradient(1.5px 1.5px at 600px 50px, #ffffff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 750px 180px, #9be036, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 900px 100px, #ffffff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 1100px 140px, #ffd700, rgba(0,0,0,0)),
    radial-gradient(1.5px 1.5px at 1300px 70px, #ffffff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 1500px 220px, #ffffff, rgba(0,0,0,0));
  background-repeat: repeat;
  background-size: 550px 350px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.65;
}

/* Canvas Particle Layer (Fireflies & Pollen) */
#particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

/* Main Application Container */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1260px;
  margin: 0 auto;
  padding: 16px 20px;
  position: relative;
  z-index: 10;
}

/* ============================================================
   STARDEW WOODEN TOP NAVBAR
   ============================================================ */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: linear-gradient(180deg, #b86f34 0%, #8f4b1e 50%, #5c2c0e 100%);
  border: 4px solid #3e1d08;
  border-radius: 14px;
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.6),
    inset 0 2px 0 rgba(255, 255, 255, 0.3),
    inset 0 -3px 0 rgba(0, 0, 0, 0.4);
  margin-bottom: 22px;
  flex-wrap: wrap;
  gap: 12px;
  position: relative;
}

/* Brass Rivet Screws on Wooden Corners */
.navbar::before,
.navbar::after {
  content: '★';
  position: absolute;
  font-size: 0.8rem;
  color: var(--stardew-gold);
  text-shadow: 0 1px 2px #3e1d08;
}
.navbar::before { top: 6px; left: 8px; }
.navbar::after { top: 6px; right: 8px; }

.brand-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s ease;
  user-select: none;
}

.brand-wrapper:hover {
  transform: scale(1.02);
}

.brand-mascot {
  font-size: 2.2rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
  animation: chickenPeck 3s infinite ease-in-out;
}

@keyframes chickenPeck {
  0%, 80%, 100% { transform: translateY(0); }
  85% { transform: translateY(-4px) rotate(-6deg); }
  90% { transform: translateY(2px) rotate(4deg); }
  95% { transform: translateY(-2px); }
}

.brand-title {
  font-family: var(--font-display);
  font-size: 1.85rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 
    2px 2px 0px #3e1d08,
    -1px -1px 0px #3e1d08,
    1px -1px 0px #3e1d08,
    -1px 1px 0px #3e1d08,
    0 3px 6px rgba(0, 0, 0, 0.6);
  line-height: 1;
}

.brand-yellow {
  color: var(--stardew-gold) !important;
  text-shadow: 
    2px 2px 0px #3e1d08,
    0 0 12px rgba(255, 215, 0, 0.6) !important;
}

.brand-tag {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: #fcf4de;
  text-shadow: 1px 1px 0px #3e1d08;
  display: block;
  letter-spacing: 1px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

/* Season / Weather Pill */
.farm-season-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(62, 29, 8, 0.85);
  border: 2px solid var(--stardew-gold);
  padding: 6px 14px;
  border-radius: 10px;
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--stardew-gold);
  text-shadow: 1px 1px 0px #000;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);
}

.weather-icon {
  font-size: 1.2rem;
  animation: sunSpin 12s infinite linear;
}

@keyframes sunSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Stardew Wooden Selects & Dropdowns */
.select-stardew {
  appearance: none;
  -webkit-appearance: none;
  background: linear-gradient(180deg, #fbf1d8 0%, #f4e0b0 100%);
  border: 3px solid #7a401b;
  color: #3e1d08;
  font-family: var(--font-ui);
  font-size: 0.95rem;
  font-weight: 800;
  padding: 7px 32px 7px 12px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 #fff;
  transition: all 0.2s ease;
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237a401b' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
}

.select-stardew:hover,
.select-stardew:focus {
  border-color: #3e1d08;
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.5);
}

.select-stardew option {
  background-color: #fbf1d8 !important;
  color: #3e1d08 !important;
  padding: 8px 12px !important;
  font-family: var(--font-ui) !important;
  font-weight: 700 !important;
}

/* Control Pills */
.stardew-control-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(180deg, #fcf4de 0%, #edd9a6 100%);
  border: 2px solid #7a401b;
  padding: 7px 12px;
  border-radius: 10px;
  font-family: var(--font-ui);
  font-size: 0.92rem;
  font-weight: 800;
  color: #3e1d08;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
  transition: all 0.2s ease;
}

.stardew-control-pill:hover {
  background: #ffffff;
  transform: translateY(-2px);
  border-color: #3e1d08;
}

.stardew-control-pill.active {
  background: linear-gradient(180deg, #ffd700 0%, #ffb300 100%);
  border-color: #3e1d08;
  box-shadow: 0 0 12px rgba(255, 215, 0, 0.5);
}

.farmer-level-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 10px;
  background: #3e1d08;
  border: 2px solid var(--stardew-gold);
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5px;
}

/* ============================================================
   VIEWS AND SECTIONS
   ============================================================ */
.view-panel {
  display: none;
  width: 100%;
  animation: viewFadeIn 0.3s ease-out;
}

.view-panel.active {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@keyframes viewFadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Stardew Hero Banner */
.stardew-hero-banner {
  text-align: center;
  margin-bottom: 8px;
}

.stardew-banner-sign {
  background: linear-gradient(180deg, #b86f34 0%, #8f4b1e 60%, #5c2c0e 100%);
  border: 5px solid #3e1d08;
  border-radius: 18px;
  padding: 28px 24px 22px 24px;
  box-shadow: 
    0 12px 30px rgba(0, 0, 0, 0.7),
    inset 0 3px 0 rgba(255, 255, 255, 0.3),
    inset 0 -4px 0 rgba(0, 0, 0, 0.5);
  position: relative;
}

.stardew-badge-label {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 900;
  color: #3e1d08;
  background: var(--stardew-gold);
  padding: 4px 16px;
  border: 2px solid #3e1d08;
  border-radius: 8px;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.4);
}

.hero-title {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 3px;
  color: #fff;
  text-shadow: 
    3px 3px 0px #3e1d08,
    -2px -2px 0px #3e1d08,
    2px -2px 0px #3e1d08,
    -2px 2px 0px #3e1d08,
    0 4px 10px rgba(0, 0, 0, 0.8);
  margin-bottom: 8px;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: #fcf4de;
  text-shadow: 1px 1px 2px #3e1d08;
  max-width: 760px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ============================================================
   MODE CARDS (PARCHMENT & WOOD TILES)
   ============================================================ */
.modes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.mode-card {
  background: linear-gradient(180deg, #fdf8eb 0%, #f7ecd2 100%);
  border: 4px solid #7a401b;
  border-radius: 16px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  position: relative;
  box-shadow: 
    0 8px 18px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 #fff;
  transition: all 0.22s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.mode-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: var(--card-accent, #73b32a);
  border-radius: 12px 12px 0 0;
}

.mode-card:hover {
  transform: translateY(-6px);
  border-color: #3e1d08;
  box-shadow: 
    0 16px 30px rgba(0, 0, 0, 0.6),
    0 0 18px rgba(255, 215, 0, 0.4);
}

.mode-corner-decor {
  position: absolute;
  top: 10px;
  right: 14px;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 800;
  color: var(--card-accent, #73b32a);
  letter-spacing: 1px;
}

.mode-icon {
  font-size: 2.8rem;
  margin-bottom: 10px;
  transition: transform 0.22s ease;
}

.mode-card:hover .mode-icon {
  transform: scale(1.15) rotate(5deg);
}

.mode-name {
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 900;
  color: #3e1d08;
  margin-bottom: 6px;
  letter-spacing: 0.5px;
}

.mode-desc {
  font-size: 0.95rem;
  color: #5c3821;
  line-height: 1.5;
}

.mode-cta {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.2s ease;
}

.mode-card:hover .mode-cta {
  gap: 14px;
}

/* ============================================================
   STARDEW BUTTONS
   ============================================================ */
.stardew-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 1px;
  padding: 10px 20px;
  cursor: pointer;
  border: 3px solid #3e1d08;
  border-radius: 12px;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: all 0.2s ease;
  user-select: none;
}

.stardew-btn-primary {
  background: linear-gradient(180deg, #ffd700 0%, #ffb300 100%);
  color: #3e1d08;
}

.stardew-btn-primary:hover {
  background: linear-gradient(180deg, #fff07c 0%, #ffd700 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.5), 0 0 12px rgba(255, 215, 0, 0.6);
}

.stardew-btn-secondary {
  background: linear-gradient(180deg, #fcf4de 0%, #edd9a6 100%);
  color: #3e1d08;
}

.stardew-btn-secondary:hover {
  background: #ffffff;
  transform: translateY(-2px);
}

.stardew-btn-danger {
  background: linear-gradient(180deg, #ef5350 0%, #d32f2f 100%);
  color: #ffffff;
}

.stardew-btn-danger:hover {
  background: #ff6659;
  transform: translateY(-2px);
}

.stardew-btn-ghost {
  background: transparent;
  color: #3e1d08;
  border-color: #7a401b;
}

.stardew-btn-ghost:hover {
  background: rgba(255, 255, 255, 0.3);
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(180deg, #fcf4de 0%, #edd9a6 100%);
  border: 2px solid #7a401b;
  border-radius: 10px;
  padding: 6px 14px;
  font-family: var(--font-ui);
  font-size: 0.95rem;
  font-weight: 800;
  color: #3e1d08;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

.back-btn:hover {
  transform: translateY(-2px);
  border-color: #3e1d08;
}

/* ============================================================
   CAMPAIGN VIEW (100 LEVELS)
   ============================================================ */
.campaign-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 22px;
  background: linear-gradient(180deg, #b86f34 0%, #8f4b1e 100%);
  border: 4px solid #3e1d08;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
  flex-wrap: wrap;
  gap: 12px;
}

.freeplay-badge-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: #3e1d08;
  border: 2px solid var(--stardew-gold);
  border-radius: 10px;
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--stardew-gold);
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0,0,0,0.4);
  transition: all 0.2s ease;
}

.freeplay-badge-btn.active {
  background: var(--stardew-gold);
  color: #3e1d08;
  font-weight: 900;
}

.stars-summary-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: #3e1d08;
  border: 2px solid var(--stardew-gold);
  border-radius: 10px;
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--stardew-gold);
  box-shadow: 0 3px 6px rgba(0,0,0,0.4);
}

.campaign-filters-row {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 4px;
}

.level-search-input {
  flex: 1;
  min-width: 260px;
  background: #fcf4de;
  border: 3px solid #7a401b;
  border-radius: 10px;
  padding: 9px 16px;
  font-family: var(--font-ui);
  font-size: 1rem;
  font-weight: 700;
  color: #3e1d08;
  outline: none;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
}

.level-search-input:focus {
  border-color: #3e1d08;
}

.filter-pills-group {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.filter-pill {
  background: #fcf4de;
  border: 2px solid #7a401b;
  border-radius: 8px;
  padding: 6px 12px;
  font-family: var(--font-ui);
  font-size: 0.88rem;
  font-weight: 800;
  color: #3e1d08;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-pill.active {
  background: #3e1d08;
  color: var(--stardew-gold);
  border-color: var(--stardew-gold);
}

.sector-tabs-bar {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;
  scrollbar-width: thin;
}

.sector-chip {
  padding: 8px 14px;
  background: linear-gradient(180deg, #fcf4de 0%, #edd9a6 100%);
  border: 2px solid #7a401b;
  border-radius: 10px;
  font-family: var(--font-ui);
  font-size: 0.95rem;
  font-weight: 800;
  color: #3e1d08;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  transition: all 0.2s ease;
}

.sector-chip:hover {
  transform: translateY(-2px);
  border-color: #3e1d08;
}

.sector-chip.active {
  background: #3e1d08;
  color: var(--stardew-gold);
  border-color: var(--stardew-gold);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
}

.sector-header-divider {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 18px;
  background: linear-gradient(90deg, #b86f34 0%, #8f4b1e 70%, rgba(62, 29, 8, 0.4) 100%);
  border: 3px solid #3e1d08;
  border-left: 8px solid var(--sector-color, var(--stardew-gold));
  border-radius: 12px;
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 900;
  color: #fff;
  text-shadow: 2px 2px 0px #3e1d08;
  margin-top: 10px;
}

.levels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.level-card {
  background: linear-gradient(180deg, #fdf8eb 0%, #f6ebd0 100%);
  border: 3.5px solid #7a401b;
  border-left: 6px solid var(--sector-accent, #73b32a);
  border-radius: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  position: relative;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.level-card:hover {
  transform: translateY(-4px) scale(1.01);
  border-color: #3e1d08;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5), 0 0 14px rgba(255, 215, 0, 0.35);
}

.level-card.locked {
  opacity: 0.65;
  filter: grayscale(40%);
}

.level-card.mastered {
  border-color: var(--stardew-iridium);
  box-shadow: 0 6px 16px rgba(156, 39, 176, 0.35);
}

.level-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.level-number {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.star-rating {
  display: flex;
  gap: 2px;
  color: #c9b794;
  font-size: 1.15rem;
}

.star.filled {
  color: var(--stardew-gold);
  text-shadow: 0 1px 2px #3e1d08;
}

.level-name {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 900;
  color: #3e1d08;
  line-height: 1.2;
}

.level-keys-preview {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.key-tag {
  background: rgba(122, 64, 27, 0.12);
  border: 1px solid #7a401b;
  border-radius: 6px;
  padding: 2px 7px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  color: #3e1d08;
}

.level-lock-badge {
  position: absolute;
  top: 10px;
  right: 12px;
  background: #3e1d08;
  color: #ffcc80;
  font-family: var(--font-ui);
  font-size: 0.75rem;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 6px;
}

/* ============================================================
   TYPING ARENA (STREAM BOX & WOOD PARCHMENT)
   ============================================================ */
.arena-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: linear-gradient(180deg, #b86f34 0%, #8f4b1e 100%);
  border: 4px solid #3e1d08;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  flex-wrap: wrap;
  gap: 10px;
}

.level-meta-badge {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sector-tag {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 900;
  color: #3e1d08;
  background: var(--stardew-gold);
  border: 2px solid #3e1d08;
  padding: 3px 10px;
  border-radius: 6px;
  letter-spacing: 1px;
}

.level-title {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 900;
  color: #fff;
  text-shadow: 2px 2px 0px #3e1d08;
}

.ghost-hud-box {
  cursor: pointer;
}

.ghost-hud-badge {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #3e1d08;
  border: 2px solid var(--stardew-gold);
  color: var(--stardew-gold);
}

.target-stats-hud {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
  text-shadow: 1px 1px 0px #3e1d08;
  display: flex;
  align-items: center;
  gap: 8px;
}

.restart-pill-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #fcf4de;
  border: 2px solid #7a401b;
  border-radius: 8px;
  padding: 5px 12px;
  font-family: var(--font-ui);
  font-size: 0.9rem;
  font-weight: 800;
  color: #3e1d08;
  cursor: pointer;
  transition: all 0.2s ease;
}

.restart-pill-btn:hover {
  background: #ffffff;
  border-color: #3e1d08;
}

/* Weak Keys Bar */
.weak-keys-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: #fcf4de;
  border: 3px solid #7a401b;
  border-radius: 12px;
  flex-wrap: wrap;
}

.weak-key-pill {
  background: #3e1d08;
  border: 1.5px solid #e53935;
  border-radius: 6px;
  padding: 3px 8px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 800;
  color: #fff;
}

.weak-key-pill .err-rate {
  color: var(--stardew-gold);
}

/* Ghost Typist Track */
.ghost-track-container {
  width: 100%;
  padding: 10px 16px;
  background: linear-gradient(180deg, #fdf8eb 0%, #f6ebd0 100%);
  border: 3px solid #7a401b;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
}

.ghost-track-line {
  position: relative;
  width: 100%;
  height: 14px;
  background: #4e8a20;
  border: 2px solid #3e1d08;
  border-radius: 7px;
}

.ghost-marker {
  position: absolute;
  top: -10px;
  transform: translateX(-50%);
  font-size: 1.3rem;
  transition: left 0.2s linear;
  z-index: 2;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
}

.player-marker {
  position: absolute;
  top: -10px;
  transform: translateX(-50%);
  font-size: 1.3rem;
  transition: left 0.1s ease;
  z-index: 3;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
}

/* Live Stats Bar */
.live-stats-bar {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.stat-pill {
  flex: 1;
  min-width: 110px;
  background: linear-gradient(180deg, #fdf8eb 0%, #f6ebd0 100%);
  border: 3px solid #7a401b;
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.stat-label {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 800;
  color: #7a401b;
}

.stat-value {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 900;
  color: #3e1d08;
}

/* Stream Box (Parchment Dialogue Display) */
.stream-container {
  width: 100%;
  min-height: 130px;
  background: #fdf6e2;
  border: 4px solid #7a401b;
  border-radius: 14px;
  padding: 24px 28px;
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.5),
    inset 0 2px 6px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  position: relative;
}

.stream-text {
  font-family: var(--font-mono);
  font-size: 1.65rem;
  line-height: 1.8;
  letter-spacing: 1.5px;
  color: #8d6e63;
  width: 100%;
  word-break: break-word;
  user-select: none;
}

.char {
  position: relative;
  transition: color 0.05s ease;
}

.char-correct {
  color: #2e7d32 !important;
  font-weight: 700;
}

.char-error {
  color: #c62828 !important;
  background: rgba(229, 57, 53, 0.25);
  border-bottom: 3px solid #c62828;
  border-radius: 2px;
}

.char-current {
  color: #000 !important;
  background: var(--stardew-gold);
  border-bottom: 3px solid #7a401b;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
  animation: stardewCursorPulse 0.8s infinite alternate;
}

@keyframes stardewCursorPulse {
  0% { transform: scale(1); }
  100% { transform: scale(1.08); }
}

.finger-hint-banner {
  text-align: center;
  margin: 4px 0 8px 0;
}

.finger-badge {
  display: inline-block;
  background: #3e1d08;
  border: 2px solid var(--stardew-gold);
  border-radius: 20px;
  padding: 6px 20px;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--stardew-gold);
  letter-spacing: 1px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

/* ============================================================
   SKULL CAVERN VIEW (TIME RUSH / SURVIVAL)
   ============================================================ */
.survival-container {
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
}

.survival-dashboard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px 24px;
  background: linear-gradient(180deg, #fdf8eb 0%, #f6ebd0 100%);
  border: 4px solid #e53935;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.survival-clock-digital {
  font-family: var(--font-display);
  font-size: 3.2rem;
  font-weight: 900;
  color: #e53935;
  text-shadow: 2px 2px 0px #3e1d08;
}

.survival-multiplier-badge {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 900;
  color: #3e1d08;
  background: var(--stardew-gold);
  border: 2px solid #3e1d08;
  padding: 6px 16px;
  border-radius: 10px;
}

.survival-stream-box {
  width: 100%;
  min-height: 130px;
  background: #2b1d14;
  border: 4px solid #e53935;
  border-radius: 14px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

.survival-current-word {
  font-family: var(--font-mono);
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  display: flex;
  gap: 2px;
}

.survival-char-done {
  color: var(--green-neon);
}

.survival-char-current {
  color: #fff;
  background: #e53935;
  border-bottom: 3px solid var(--stardew-gold);
}

.survival-char-remaining {
  color: #a1887f;
}

/* ============================================================
   JOURNEY OF THE PRAIRIE KING (ARCADE DEFENSE)
   ============================================================ */
.arcade-hud-row {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.arcade-shield-bar-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fcf4de;
  border: 2px solid #7a401b;
  border-radius: 8px;
  padding: 4px 10px;
}

.arcade-shield-bar {
  width: 110px;
  height: 12px;
  background: #3e1d08;
  border-radius: 6px;
  overflow: hidden;
}

.arcade-shield-fill {
  height: 100%;
  width: 100%;
  background: #4caf50;
  transition: width 0.3s ease;
}

.arcade-score-badge {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 900;
  color: #fff;
  background: #3e1d08;
  border: 2px solid var(--stardew-gold);
  border-radius: 8px;
  padding: 4px 12px;
}

.arcade-viewport {
  width: 100%;
  height: 340px;
  background: linear-gradient(180deg, #101c38 0%, #1e335f 60%, #4a3425 100%);
  border: 4px solid #7a401b;
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 30px rgba(0,0,0,0.6);
}

.arcade-city-base {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 24px;
  background: #5c3821;
  border-top: 3px solid #8d6e63;
}

.falling-word {
  position: absolute;
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 900;
  color: #fcf4de;
  background: rgba(62, 29, 8, 0.85);
  border: 2px solid #ffd700;
  border-radius: 8px;
  padding: 4px 12px;
  white-space: nowrap;
  letter-spacing: 1px;
}

.falling-word.is-targeted {
  border-color: #ff3d00;
  box-shadow: 0 0 12px #ff3d00;
  color: #fff;
}

/* ============================================================
   BOSS BATTLE // MORRIS & JOJA CORP
   ============================================================ */
.boss-arena-card {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  background: linear-gradient(180deg, #fdf8eb 0%, #f6ebd0 100%);
  border: 4px solid #ab47bc;
  border-radius: 16px;
  padding: 22px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.boss-top-hud {
  display: flex;
  align-items: center;
  gap: 18px;
}

.morris-portrait {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  border: 3px solid #ab47bc;
  background: #3e1d08;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
}

.boss-hp-bar {
  height: 18px;
  background: #3e1d08;
  border: 2px solid #ab47bc;
  border-radius: 9px;
  overflow: hidden;
}

.boss-hp-fill {
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, #ab47bc 0%, #e53935 100%);
  transition: width 0.3s ease;
}

.boss-dialogue-box {
  background: #3e1d08;
  border-left: 5px solid #ab47bc;
  border-radius: 8px;
  padding: 12px 18px;
  font-family: var(--font-ui);
  font-size: 1.05rem;
  color: #fcf4de;
  line-height: 1.5;
  font-weight: 700;
}

.boss-timer-badge {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 900;
  color: #fff;
  background: #3e1d08;
  border: 2px solid #e53935;
  border-radius: 8px;
  padding: 4px 12px;
}

/* ============================================================
   CUSTOM NOTEBOOK (CABAÑA)
   ============================================================ */
.custom-card {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  background: #fdf8eb;
  border: 4px solid #7a401b;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.custom-textarea {
  width: 100%;
  background: #fff;
  border: 2px solid #7a401b;
  border-radius: 10px;
  padding: 14px;
  font-family: var(--font-mono);
  font-size: 1.05rem;
  color: #3e1d08;
  outline: none;
  resize: vertical;
}

.custom-actions-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  flex-wrap: wrap;
  gap: 10px;
}

/* ============================================================
   MODALS (STARDEW PARCHMENT DIALOGUE BOXES)
   ============================================================ */
.modal-backdrop {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 16, 32, 0.75);
  backdrop-filter: blur(6px);
  z-index: 1000;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-backdrop.active {
  display: flex;
}

.stardew-modal-card {
  width: 100%;
  max-width: 580px;
  background: linear-gradient(180deg, #fdf8eb 0%, #f6ebd0 100%);
  border: 5px solid #3e1d08;
  border-radius: 18px;
  padding: 28px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: modalPop 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.stardew-modal-card.modal-wide {
  max-width: 860px;
  max-height: 85vh;
  overflow-y: auto;
}

@keyframes modalPop {
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.modal-stardew-header {
  text-align: center;
}

.modal-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.junimo-celebration-icon {
  font-size: 3.2rem;
  animation: junimoBounce 1s infinite alternate;
}

@keyframes junimoBounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(-8px); }
}

.modal-title {
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 900;
  color: #3e1d08;
  letter-spacing: 1px;
}

.modal-sub {
  font-size: 1rem;
  color: #7a401b;
  margin-top: 4px;
}

/* Stardew Quality Tier Badge (Iridium, Gold, Silver, Normal) */
.stardew-rank-wrapper {
  text-align: center;
  margin: 6px 0;
}

.stardew-quality-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 900;
  width: 80px;
  height: 80px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  margin: 0 auto;
}

.rank-sss {
  background: radial-gradient(circle, #ce93d8 0%, #ab47bc 50%, #6a1b9a 100%);
  color: #fff;
  box-shadow: 0 0 25px rgba(156, 39, 176, 0.6);
  animation: iridiumShimmer 1.2s infinite alternate;
}

@keyframes iridiumShimmer {
  0% { transform: scale(1); filter: drop-shadow(0 0 8px #ab47bc); }
  100% { transform: scale(1.08); filter: drop-shadow(0 0 20px #ffd700); }
}

.rank-ss {
  background: linear-gradient(135deg, #ffd700 0%, #ffb300 100%);
  color: #3e1d08;
  box-shadow: 0 0 16px rgba(255, 215, 0, 0.5);
}

.rank-s {
  background: linear-gradient(135deg, #cfd8dc 0%, #90a4ae 100%);
  color: #3e1d08;
}

.rank-a {
  background: linear-gradient(135deg, #81c784 0%, #4caf50 100%);
  color: #fff;
}

.rank-b, .rank-c, .rank-d {
  background: #b0bec5;
  color: #3e1d08;
}

.modal-stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.modal-stat-box {
  background: #fff;
  border: 2px solid #7a401b;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.m-stat-label {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 800;
  color: #7a401b;
}

.m-stat-val {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 900;
}

.modal-actions-row {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 6px;
}

/* Achievements Grid */
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 12px;
}

.achievement-badge {
  background: #fff;
  border: 2px solid #7a401b;
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.achievement-badge.unlocked {
  border-color: var(--stardew-gold);
  background: #fffdf5;
  box-shadow: 0 0 12px rgba(255, 215, 0, 0.3);
}

.achievement-badge.locked {
  opacity: 0.5;
  filter: grayscale(80%);
}

.badge-icon { font-size: 2rem; }

.badge-name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 900;
  color: #3e1d08;
}

.badge-desc {
  font-size: 0.85rem;
  color: #5c3821;
  line-height: 1.4;
}

.badge-status {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 800;
  margin-top: auto;
}

.achievement-badge.unlocked .badge-status {
  color: #2e7d32;
}

/* Profile Stats Grid */
.profile-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.profile-stat-item {
  background: #fff;
  border: 2px solid #7a401b;
  border-radius: 12px;
  padding: 14px;
  text-align: center;
}

.profile-stat-label {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 800;
  color: #7a401b;
}

.profile-stat-val {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 900;
  color: #3e1d08;
}

/* Floating Achievement Toast */
.achievement-toast {
  position: fixed;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  background: #3e1d08;
  border: 3px solid var(--stardew-gold);
  border-radius: 14px;
  padding: 12px 22px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8);
  z-index: 1000;
  pointer-events: none;
  transition: top 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.achievement-toast.visible {
  top: 24px;
}

.toast-icon { font-size: 2.2rem; }

.toast-tag {
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--stardew-gold);
}

.toast-title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: #fff;
}

.toast-desc {
  font-size: 0.85rem;
  color: #fcf4de;
}
`;

const keyboardCss = `/* ============================================================
   STARDEW VALLEY // SOLID OAK CRAFTED KEYBOARD & KEYCAPS
   ============================================================ */

/* Chassis Board (Carved Wood Plank) */
.keyboard-container {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px 20px;
  background: linear-gradient(180deg, #8f4b1e 0%, #5c2c0e 50%, #3e1d08 100%);
  border: 5px solid #3e1d08;
  border-radius: 18px;
  box-shadow: 
    0 16px 40px rgba(0, 0, 0, 0.8),
    inset 0 2px 0 rgba(255, 255, 255, 0.25),
    inset 0 -3px 0 rgba(0, 0, 0, 0.6);
  user-select: none;
  position: relative;
}

/* Brass Rivets on Wooden Frame */
.keyboard-container::before,
.keyboard-container::after {
  content: '★';
  position: absolute;
  color: var(--stardew-gold, #ffd700);
  font-size: 0.85rem;
  text-shadow: 0 1px 2px #000;
}
.keyboard-container::before { top: 6px; left: 8px; }
.keyboard-container::after { top: 6px; right: 8px; }

.keyboard-row {
  display: flex;
  justify-content: center;
  gap: 6px;
  width: 100%;
}

/* Wooden Carved Keycaps */
.key-cap {
  position: relative;
  height: 52px;
  flex: 1;
  background: linear-gradient(180deg, #fdf8ec 0%, #f4e2b8 75%, #dec288 100%);
  border: 2px solid #7a401b;
  border-bottom: 5px solid #3e1d08;
  border-radius: 8px;
  color: #3e1d08;
  font-family: 'JetBrains Mono', 'VT323', monospace;
  font-size: 1rem;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 #fff;
  cursor: default;
  transition: transform 0.05s ease, background 0.15s ease, border-color 0.15s ease;
}

/* Key Labels */
.key-cap .shift-label,
.key-cap .key-label-sub {
  font-size: 0.68rem;
  font-weight: 700;
  color: #8d6e63;
  margin-bottom: -2px;
}

.key-cap .primary-label,
.key-cap .key-label-main {
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: 0.5px;
}

/* Tactile Homing Bumps (F and J Golden Star Seeds) */
.key-cap .tactile-bump {
  position: absolute;
  bottom: 6px;
  width: 14px;
  height: 3px;
  background: var(--stardew-gold, #ffd700);
  border-radius: 2px;
  box-shadow: 0 0 6px var(--stardew-gold, #ffd700);
}

/* Key Underglow Bar with Finger Zone Color */
.key-cap::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 6px;
  right: 6px;
  height: 3.5px;
  border-radius: 3px;
  background-color: var(--finger-color, transparent);
  opacity: 0.9;
}

/* Key Width Proportions */
.key-cap[data-width="1.3"] { flex: 1.3; }
.key-cap[data-width="1.4"] { flex: 1.4; }
.key-cap[data-width="1.5"] { flex: 1.5; }
.key-cap[data-width="1.8"] { flex: 1.8; }
.key-cap[data-width="2.1"] { flex: 2.1; }
.key-cap[data-width="2.2"] { flex: 2.2; }
.key-cap[data-width="2.8"] { flex: 2.8; }
.key-cap[data-width="7"] { 
  flex: 7; 
  max-width: 480px; 
}

/* Target Key (Golden Sun Aura) */
.key-cap.is-target {
  background: linear-gradient(180deg, #fff7b2 0%, #ffd700 70%, #ffb300 100%) !important;
  border-color: #3e1d08 !important;
  color: #3e1d08 !important;
  transform: translateY(-4px) scale(1.05);
  box-shadow: 
    0 0 20px var(--stardew-gold, #ffd700),
    0 0 40px rgba(255, 215, 0, 0.6),
    inset 0 1px 1px #fff !important;
  animation: stardewTargetPulse 0.9s infinite alternate;
}

@keyframes stardewTargetPulse {
  0% { transform: translateY(-4px) scale(1.04); }
  100% { transform: translateY(-6px) scale(1.09); box-shadow: 0 0 28px #ffd700; }
}

/* Shift Target Key */
.key-cap.is-shift-target {
  background: linear-gradient(180deg, #e1bee7 0%, #ba68c8 100%) !important;
  color: #fff !important;
  border-color: #4a148c !important;
  box-shadow: 0 0 18px rgba(186, 104, 200, 0.7) !important;
}

/* Key Pressed Visual State */
.key-cap.is-pressed {
  transform: translateY(3px) !important;
  border-bottom-width: 2px !important;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.4) !important;
}

/* Key Error State */
.key-cap.is-error {
  background: #ffcdd2 !important;
  border-color: #c62828 !important;
  animation: keyWiggle 0.15s 2;
}

@keyframes keyWiggle {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  75% { transform: translateX(3px); }
}

/* Ergonomic Hand Guide */
.hands-guide-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 10px;
}

.hand-box {
  display: flex;
  gap: 6px;
  background: #fdf8eb;
  border: 2px solid #7a401b;
  border-radius: 12px;
  padding: 6px 12px;
}

.finger-pill {
  padding: 4px 10px;
  border-radius: 6px;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 800;
  color: #3e1d08;
  background: rgba(122, 64, 27, 0.1);
  transition: all 0.15s ease;
}

.finger-pill.active {
  background: var(--finger-color, var(--stardew-gold));
  color: #3e1d08;
  box-shadow: 0 0 10px var(--finger-color, var(--stardew-gold));
  transform: translateY(-2px);
}
`;

fs.writeFileSync(path.resolve(__dirname, '../css/style.css'), styleCss, 'utf8');
fs.writeFileSync(path.resolve(__dirname, '../css/keyboard.css'), keyboardCss, 'utf8');
console.log("✅ Wrote Stardew Valley styles to css/style.css and css/keyboard.css!");
