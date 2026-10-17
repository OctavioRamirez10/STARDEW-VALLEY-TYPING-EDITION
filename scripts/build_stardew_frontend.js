// Complete Builder for Stardew Valley // Typing Edition (index.html)
const fs = require('fs');
const path = require('path');

const htmlContent = `<!DOCTYPE html>
<html lang="es" data-theme="stardew">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>STARDEW VALLEY // TYPING EDITION - Escuela de Mecanografía del Valle</title>
  <meta name="description" content="Aprende mecanografía táctil al ritmo del campo en Stardew Valley. Cuida la huerta del abuelo, desciende a la Caverna Calavera y salva el Centro Cívico con 100 niveles.">
  
  <!-- Google Fonts: VT323 (Retro Pixel), Rajdhani, JetBrains Mono, Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600;700;800&family=Rajdhani:wght@600;700;800&family=VT323&display=swap" rel="stylesheet">
  
  <!-- Custom Stylesheets -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/keyboard.css">
</head>
<body>

  <!-- Floating Canvas Particles (Fireflies, Pollen & Autumn Leaves) -->
  <canvas id="particle-canvas"></canvas>

  <div class="app-container">
    
    <!-- TOP NAVIGATION BAR: STARDEW VALLEY WOODEN BANNER -->
    <header class="navbar">
      <div class="brand-wrapper" id="nav-brand-home" title="Volver a la Granja">
        <span class="brand-mascot">🐔</span>
        <div class="brand-text-block">
          <span class="brand-title">STARDEW <small class="brand-yellow">VALLEY</small></span>
          <span class="brand-tag">🌾 TYPING EDITION</span>
        </div>
      </div>

      <div class="nav-actions">
        <!-- Farm Season & Weather HUD Telemetry -->
        <div class="farm-season-pill" title="Calendario y Clima de Pelican Town">
          <span class="weather-icon">☀️</span>
          <span class="season-title">PRIMAVERA • AÑO 1</span>
        </div>

        <!-- Hidden Theme Select for app.js compatibility -->
        <select id="theme-select" style="display: none;">
          <option value="stardew" selected>Stardew Valley</option>
        </select>

        <!-- Learning Language Switcher -->
        <select id="lang-select" class="select-stardew select-stardew-lang" title="Idioma de los Pedidos">
          <option value="es">🇪🇸 Español</option>
          <option value="en">🇬🇧 English</option>
          <option value="pt">🇧🇷 Português</option>
          <option value="fr">🇫🇷 Français</option>
        </select>

        <!-- Keyboard Layout Switcher -->
        <select id="layout-select" class="select-stardew select-stardew-layout" title="Distribución de Teclado">
          <option value="es">⌨️ Teclado ES (ISO / Ñ)</option>
          <option value="en">⌨️ Keyboard US (ANSI / EN)</option>
        </select>

        <!-- Game Difficulty Modifier Selector -->
        <select id="difficulty-select" class="select-stardew select-stardew-diff" title="Modificador de Dificultad de la Jornada">
          <option value="normal">🌱 Dificultad: Normal (90% min)</option>
          <option value="hardcore">⏱️ Dificultad: Jornada Hardcore (95% + Tiempo)</option>
          <option value="suddendeath">🥚 Dificultad: Muerte Súbita (100% Sin Fallos)</option>
          <option value="blind">🕶️ Dificultad: Modo Ciego (Tacto Puro)</option>
          <option value="glitch">🌫️ Dificultad: Niebla en el Pantano (Caos + 96%)</option>
          <option value="godmode">🕯️ Dificultad: Bendición del Abuelo (98% & 80+ WPM)</option>
        </select>

        <!-- Sound Profile Synthesizer (Stardew Valley Soundscape) -->
        <select id="switch-sound-select" class="select-stardew select-stardew-sound" title="Sonidos Táctiles del Valle">
          <option value="thock">🪵 Sonido: Madera de Roble (Wooden Thock)</option>
          <option value="junimo">🔔 Sonido: Campana de Junimo (Crystal Bell)</option>
          <option value="pickaxe">⛏️ Sonido: Pico en la Mina (Mining Strike)</option>
          <option value="water">💧 Sonido: Regadera & Burbuja (Water Splash)</option>
          <option value="coin">💰 Sonido: Caja de Pierre (Gold Coin)</option>
          <option value="typewriter">📜 Sonido: Máquina de Elliott (Typewriter)</option>
        </select>

        <!-- SFX Toggle -->
        <button id="toggle-sfx-btn" class="stardew-control-pill active" title="Activar/Desactivar Efectos de Audio">
          <span id="sfx-icon">🔊</span> <span id="sfx-text">Sonidos</span>
        </button>

        <!-- Pastoral Music Drone Toggle -->
        <button id="toggle-music-btn" class="stardew-control-pill" title="Activar/Desactivar Melodía Acústica">
          <span id="music-icon">🎵</span> <span id="music-text">Pastoral</span>
        </button>

        <!-- Achievements Button -->
        <button id="btn-open-achievements" class="stardew-control-pill" title="Ver Trofeos y Logros de la Granja">
          <span>🏆</span> <span>Logros</span> (<span id="achievements-nav-count">0/30</span>)
        </button>

        <!-- Farmer Level & Gold $g Badge -->
        <div class="farmer-level-badge" id="btn-open-profile" style="cursor: pointer;" title="Ver Perfil del Granjero y Monedero">
          <span>GRANJERO <span id="player-level-val">1</span></span>
          <span style="opacity: 0.5;">•</span>
          <span style="color: var(--stardew-gold); font-weight: 800;"><span id="player-xp-val">0</span> $g</span>
        </div>
      </div>
    </header>

    <!-- VIEW 1: MAIN MENU (SELECCIÓN DE MODOS DE JUEGO) -->
    <main id="view-menu" class="view-panel active">
      <section class="stardew-hero-banner">
        <div class="stardew-banner-sign">
          <div class="stardew-badge-label">🌾 BIENVENIDO A PELICAN TOWN // VALLE DE STARDEW 🌾</div>
          <h1 class="hero-title" id="ui-hero-title">STARDEW VALLEY // TYPING EDITION</h1>
          <p class="hero-subtitle" id="ui-hero-subtitle">
            Domina cada dedo sin mirar el teclado físico. Cuida la huerta del abuelo, ayuda a los aldeanos de Pelican Town, desciende a la Caverna Calavera y expulsa a JojaMart con 100 niveles progresivos.
          </p>
        </div>
      </section>

      <!-- Game Modes Grid -->
      <section class="modes-grid">
        <!-- Mode 1: Farm Tasks (100 Levels) -->
        <div class="mode-card sd-card-green" id="btn-start-campaign" style="--card-accent: #73b32a;">
          <div class="mode-corner-decor">01 // LA HUERTA</div>
          <div>
            <div class="mode-icon">🌱</div>
            <h2 class="mode-name" id="mode-name-campaign">TAREAS DE LA GRANJA (100 NIVELES)</h2>
            <p class="mode-desc" id="mode-desc-campaign">
              Aprende la posición anatómica de cada dedo paso a paso desde cero. 10 sectores desde la parcela del abuelo hasta la cumbre de la perfección con 5 estrellas por nivel.
            </p>
          </div>
          <div class="mode-cta">
            <span style="color: #73b32a;">TRABAJAR LA HUERTA</span> <span>➔</span>
          </div>
        </div>

        <!-- Mode 2: Skull Cavern Time Rush -->
        <div class="mode-card sd-card-red" id="btn-start-survival" style="--card-accent: #e53935;">
          <div class="mode-corner-decor">02 // LA MINA</div>
          <div>
            <div class="mode-icon">💀</div>
            <h2 class="mode-name" id="mode-name-survival" style="color: #e53935;">CAVERNA CALAVERA (TIME RUSH)</h2>
            <p class="mode-desc" id="mode-desc-survival">
              Contrarreloj infinito de reflejos: Empiezas con 30s de antorcha. Cada palabra picada suma +3s y multiplica tus gemas y oro $g. ¡Rompe rocas sin detenerte!
            </p>
          </div>
          <div class="mode-cta">
            <span style="color: #e53935;">BAJAR A LA CAVERNA</span> <span>➔</span>
          </div>
        </div>

        <!-- Mode 3: Prairie King Arcade -->
        <div class="mode-card sd-card-orange" id="btn-start-arcade" style="--card-accent: #fb8c00;">
          <div class="mode-corner-decor">03 // LA TABERNA</div>
          <div>
            <div class="mode-icon">🤠</div>
            <h2 class="mode-name" id="mode-name-arcade">EL VIAJE DEL REY DE LA PRADERA</h2>
            <p class="mode-desc" id="mode-desc-arcade">
              El mítico minijuego arcade del Salón Fruta Estelar de Gus: dispara a las oleadas de forajidos y monstruos antes de que alcancen tu valla de madera.
            </p>
          </div>
          <div class="mode-cta">
            <span style="color: #fb8c00;">JUGAR AL ARCADE</span> <span>➔</span>
          </div>
        </div>

        <!-- Mode 4: Boss Battle: Morris & Joja Corp -->
        <div class="mode-card sd-card-purple" id="btn-start-boss" style="--card-accent: #ab47bc;">
          <div class="mode-corner-decor">04 // CENTRO CÍVICO</div>
          <div>
            <div class="mode-icon">🏛️</div>
            <h2 class="mode-name" id="mode-name-boss">JEFE: MORRIS & JOJA CORP</h2>
            <p class="mode-desc" id="mode-desc-boss">
              Morris quiere demoler el Centro Cívico con 1000 HP. Escribe conjuros botánicos junto a los Junimos para expulsar a JojaMart para siempre del valle.
            </p>
          </div>
          <div class="mode-cta">
            <span style="color: #ab47bc;">SALVAR EL VALLE</span> <span>➔</span>
          </div>
        </div>

        <!-- Mode 5: Speed Benchmark -->
        <div class="mode-card sd-card-blue" id="btn-start-speedtest" style="--card-accent: #29b6f6;">
          <div class="mode-corner-decor">05 // EL FESTIVAL</div>
          <div>
            <div class="mode-icon">🐎</div>
            <h2 class="mode-name" id="mode-name-speedtest">CARRERA Y FESTIVAL DEL VALLE</h2>
            <p class="mode-desc" id="mode-desc-speedtest">
              Pon a prueba tu velocidad pura y precisión campestre en una carrera de 60 segundos con relatos de las cuatro estaciones de Stardew Valley.
            </p>
          </div>
          <div class="mode-cta">
            <span style="color: #29b6f6;">INICIAR CARRERA</span> <span>➔</span>
          </div>
        </div>

        <!-- Mode 6: Farmer Journal (Custom Practice) -->
        <div class="mode-card sd-card-yellow" id="btn-start-custom" style="--card-accent: #fbc02d;">
          <div class="mode-corner-decor">06 // LA CABAÑA</div>
          <div>
            <div class="mode-icon">📖</div>
            <h2 class="mode-name" id="mode-name-custom">EL CUADERNO DEL GRANJERO</h2>
            <p class="mode-desc" id="mode-desc-custom">
              Escribe o pega cualquier carta, receta de cocina o texto propio para practicar libremente a tu propio ritmo junto a la chimenea.
            </p>
          </div>
          <div class="mode-cta">
            <span style="color: #fbc02d;">ABRIR CUADERNO</span> <span>➔</span>
          </div>
        </div>
      </section>
    </main>

    <!-- VIEW 2: CAMPAIGN LEVEL SELECTOR (100 NIVELES EN 10 SECTORES) -->
    <main id="view-campaign-select" class="view-panel">
      <div class="campaign-header">
        <button class="back-btn" id="btn-back-from-levels">
          <span>⬅</span> <span>Volver a la Granja</span>
        </button>

        <div class="campaign-title-block">
          <h2 style="font-family: var(--font-display); font-size: 1.8rem; color: var(--stardew-gold);">
            TAREAS DEL VALLE: 100 NIVELES
          </h2>
          <span style="font-size: 0.95rem; color: #fff;">
            Progresa desde la limpieza de parcelas hasta la maestría de 120 PPM en la cumbre.
          </span>
        </div>

        <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
          <!-- Free Play Mode Toggle -->
          <button id="btn-toggle-freeplay" class="freeplay-badge-btn" title="Alternar entre modo progresivo con candados o desbloqueo total libre">
            <span id="freeplay-icon">🔒</span> <span id="freeplay-text">Modo Progresivo</span>
          </button>

          <!-- Total Stars Badge -->
          <div class="stars-summary-badge" title="Estrellas de Calidad Acumuladas">
            <span>⭐</span> <span id="total-stars-val">0</span> / <span id="total-stars-max">500</span>
          </div>
        </div>
      </div>

      <!-- Search & Status Filter Bar -->
      <div class="campaign-filters-row">
        <input 
          type="text" 
          id="level-search-input" 
          class="level-search-input" 
          placeholder="🔍 Buscar nivel por nombre, hortaliza o tecla (ej: pastinaca, fresa, F, J)..."
        />

        <div class="filter-pills-group" id="status-filters-container">
          <button class="filter-pill active" data-status-filter="all">Todas las Tareas</button>
          <button class="filter-pill" data-status-filter="pending">Por Hacer</button>
          <button class="filter-pill" data-status-filter="completed">Completadas</button>
          <button class="filter-pill" data-status-filter="mastered">Calidad Iridio (5★)</button>
        </div>
      </div>

      <!-- Sector Tabs Scrollable Bar -->
      <div class="sector-tabs-bar" id="sector-tabs-container">
        <!-- Rendered dynamically via JavaScript -->
      </div>

      <!-- Level Cards Grid (100 Levels) -->
      <div class="levels-grid" id="levels-container">
        <!-- Rendered dynamically via JavaScript -->
      </div>
    </main>

    <!-- VIEW 3: TYPING ARENA (PRACTICE INTERFACE) -->
    <main id="view-arena" class="view-panel">
      <!-- Arena Top Bar -->
      <div class="arena-header">
        <button class="back-btn" id="btn-back-from-arena">
          <span>⬅</span> <span>Lista de Tareas</span>
        </button>

        <div class="level-meta-badge">
          <span id="hud-diff-pill" class="sector-tag">NORMAL</span>
          <h2 id="arena-level-title" class="level-title">NIVEL 1: SEMILLAS DE CHIRIVÍA</h2>
        </div>

        <!-- Ghost Typist (Pace Car) Telemetry Box -->
        <div id="hud-ghost-box" class="ghost-hud-box" title="Haz clic para activar/desactivar el ritmo del Junimo Fantasma">
          <span id="hud-ghost-badge" class="ghost-hud-badge ahead">👻 JUNIMO AL PASO</span>
        </div>

        <button class="restart-pill-btn" id="btn-restart-level" title="Reiniciar tarea actual (o pulsa Tab + Enter)">
          <span>🔄</span> <span>Reiniciar</span>
        </button>
      </div>

      <!-- Weak Keys Recalibration Bar (Appears when user has errors) -->
      <div id="weak-keys-container" class="weak-keys-bar" style="display: none;">
        <span style="font-size: 0.85rem; font-weight: 700; color: #3e1d08; display: flex; align-items: center; gap: 6px;">
          <span>⛏️</span> <span>HERRAMIENTAS DESAFILADAS:</span>
        </span>
        <div id="weak-keys-list" style="display: flex; gap: 8px; flex-wrap: wrap;"></div>
        <button id="btn-launch-weak-drill" class="stardew-btn stardew-btn-secondary" style="font-size: 0.75rem; padding: 5px 12px; margin-left: auto;">
          <span>🌾</span> <span>Afilar en la Huerta (Práctica Rápida)</span>
        </button>
      </div>

      <!-- Ghost Typist Track (Pace Car Indicator) -->
      <div class="ghost-track-container" id="ghost-pace-container">
        <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-family: var(--font-mono); color: #7a401b; margin-bottom: 4px;">
          <span>🌱 Inicio</span>
          <span>🌿 Ritmo del Junimo Fantasma</span>
          <span>🏁 Cosecha Final</span>
        </div>
        <div class="ghost-track-line">
          <div id="ghost-car-indicator" class="ghost-marker" title="Ritmo ideal para superar la meta">👻</div>
          <div id="player-car-indicator" class="player-marker" title="Tu posición actual">🚜</div>
        </div>
      </div>

      <!-- Live Stats Ticker -->
      <div class="live-stats-bar">
        <div class="stat-pill">
          <span class="stat-label">Velocidad</span>
          <span class="stat-value" id="hud-wpm-val">0 <small style="font-size: 0.85rem;">WPM</small></span>
          <div style="width: 100%; height: 4px; background: rgba(0,0,0,0.1); border-radius: 2px; margin-top: 4px;">
            <div id="hud-wpm-meter" style="width: 0%; height: 100%; background: var(--stardew-gold); border-radius: 2px;"></div>
          </div>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Precisión</span>
          <span class="stat-value" id="hud-acc-val">100%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Combo</span>
          <span class="stat-value" style="color: var(--stardew-gold);" id="hud-combo-val">x0</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Errores</span>
          <span class="stat-value" style="color: #e53935;" id="hud-errors-val">0</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label" id="hud-timer-label">Progreso</span>
          <span class="stat-value" style="color: var(--cyan-neon);" id="hud-progress-val">0%</span>
          <div style="width: 100%; height: 4px; background: rgba(0,0,0,0.1); border-radius: 2px; margin-top: 4px;">
            <div id="arena-progress-fill" style="width: 0%; height: 100%; background: var(--green-neon); border-radius: 2px;"></div>
          </div>
        </div>
      </div>

      <!-- Stream Box (Parchment Display) -->
      <div class="stream-container" id="stream-container">
        <div class="stream-text" id="text-stream-display">
          <!-- Characters dynamically injected via app.js -->
        </div>
      </div>

      <!-- Central Finger Guidance Hint -->
      <div class="finger-hint-banner">
        <span class="finger-badge" id="active-finger-badge">Espacio — Pulgares</span>
        <div id="terminal-finger-hint" style="display: none;"></div>
      </div>

      <!-- Interactive Wooden Virtual Keyboard -->
      <div class="keyboard-container" id="keyboard-container">
        <!-- Rendered dynamically based on Layout ES / EN -->
      </div>
    </main>

    <!-- VIEW 4: SKULL CAVERN (TIME RUSH / SURVIVAL) -->
    <main id="view-survival" class="view-panel">
      <div class="arena-header">
        <button class="back-btn" id="btn-back-from-survival">
          <span>⬅</span> <span>Volver a la Granja</span>
        </button>
        <div class="level-meta-badge">
          <span class="sector-tag" style="border-color: #e53935; color: #e53935;">CAVERNA CALAVERA</span>
          <h2 class="level-title">Descenso en la Mina del Desierto</h2>
        </div>
        <button class="restart-pill-btn" id="btn-restart-survival">
          <span>🔄</span> <span>Reiniciar Descenso</span>
        </button>
      </div>

      <div class="survival-container">
        <div class="survival-dashboard">
          <div>
            <span style="font-size: 0.8rem; font-family: var(--font-display); color: #7a401b; letter-spacing: 1px;">
              TIEMPO DE ANTORCHA
            </span>
            <div class="survival-clock-digital" id="survival-timer-val">30.0s</div>
          </div>

          <div style="text-align: center;">
            <span style="font-size: 0.8rem; font-family: var(--font-display); color: #3e1d08;">ROCAS PICADAS</span>
            <div style="font-size: 2.2rem; font-weight: 900; color: #3e1d08;" id="survival-words-val">0</div>
          </div>

          <div>
            <span style="font-size: 0.8rem; font-family: var(--font-display); color: #7a401b;">BONUS DE ORO</span>
            <div class="survival-multiplier-badge" id="survival-mult-val">1.0x $g</div>
            <div id="survival-record-val" style="display: none;">0</div>
          </div>
        </div>

        <div class="survival-stream-box" id="survival-stream-box">
          <div style="font-size: 0.85rem; font-family: var(--font-display); color: #e53935; margin-bottom: 8px;">
            ¡PICA EL MINERAL ANTES DE QUE SE APAGUE LA LUZ! (+3s POR ACIERTO)
          </div>
          <div class="survival-current-word" id="survival-word-display">
            <!-- Injected via JavaScript -->
          </div>
        </div>

        <div class="keyboard-container" id="survival-keyboard-container"></div>
      </div>
    </main>

    <!-- VIEW 5: JOURNEY OF THE PRAIRIE KING (ARCADE DEFENSE) -->
    <main id="view-arcade" class="view-panel">
      <div class="arena-header">
        <button class="back-btn" id="btn-back-from-arcade">
          <span>⬅</span> <span>Volver a la Granja</span>
        </button>

        <div class="level-meta-badge">
          <span class="sector-tag" style="border-color: #fb8c00; color: #fb8c00;">TABERNA DE GUS</span>
          <h2 class="level-title">El Viaje del Rey de la Pradera</h2>
        </div>

        <div class="arcade-hud-row">
          <!-- Arcade Difficulty Modifier -->
          <select id="arcade-diff-select" class="select-stardew select-stardew-arcade" title="Velocidad de los enemigos">
            <option value="recruit">🤠 Modo Forastero (x1.0 Vel)</option>
            <option value="veteran">🌵 Modo Sheriff (x1.6 Vel)</option>
            <option value="nightmare">🔥 Modo Bandido (x2.3 Vel)</option>
            <option value="apocalypse">💀 Modo Fuera de la Ley (x3.0 Vel)</option>
          </select>

          <div class="arcade-shield-bar-wrapper">
            <span style="font-size: 0.75rem; color: #3e1d08; font-weight: 800;">VALLA:</span>
            <div class="arcade-shield-bar">
              <div id="arcade-shield-fill" class="arcade-shield-fill"></div>
            </div>
            <span id="arcade-shield-val" style="font-size: 0.85rem; font-weight: 800; color: var(--green-neon);">100%</span>
          </div>

          <div class="arcade-score-badge">
            <span>PUNTOS:</span> <strong id="arcade-score-val" style="color: var(--stardew-gold);">0</strong>
          </div>
        </div>
      </div>

      <!-- Arcade Falling Words Viewport -->
      <div class="arcade-viewport" id="arcade-viewport">
        <div class="arcade-city-base"></div>
      </div>

      <!-- Dedicated Virtual Keyboard for Arcade -->
      <div class="keyboard-container" id="arcade-keyboard-container"></div>
    </main>

    <!-- VIEW 6: BOSS BATTLE (MORRIS & JOJA CORP) -->
    <main id="view-boss" class="view-panel">
      <div class="arena-header">
        <button class="back-btn" id="btn-back-from-boss">
          <span>⬅</span> <span>Volver a la Granja</span>
        </button>

        <div class="level-meta-badge">
          <span class="sector-tag" style="border-color: #ab47bc; color: #ab47bc;">CENTRO CÍVICO</span>
          <h2 class="level-title">Duelo: Morris // Joja Corporation</h2>
        </div>

        <div class="boss-timer-badge">
          <span>TIEMPO:</span> <strong id="boss-counter-timer" style="color: #e53935; font-size: 1.3rem;">15s</strong>
        </div>
      </div>

      <div class="boss-arena-card">
        <div class="boss-top-hud">
          <div class="morris-portrait" title="Morris, Gerente de JojaMart">💼</div>
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
              <span style="font-family: var(--font-display); font-weight: 900; font-size: 1.2rem; color: #e53935;">
                MORRIS (GERENTE DE JOJAMART)
              </span>
              <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--stardew-gold);">
                FASE <span id="boss-phase-num">1</span> / 8
              </span>
            </div>
            <div class="boss-hp-bar">
              <div id="boss-hp-fill" class="boss-hp-fill" style="width: 100%;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
              <span>PODER CORPORATIVO DE JOJA</span>
              <span id="boss-hp-text">1000 / 1000 PV</span>
            </div>
          </div>
        </div>

        <div class="boss-dialogue-box" id="boss-speech-text">
          "¡Saludos, habitante de Stardew Valley! Joja Corporation transformará el Centro Cívico en un almacén de JojaMart. ¡Ríndete ante el progreso!"
        </div>

        <div class="stream-container" style="min-height: 100px;">
          <div class="stream-text" id="boss-text-stream">
            <!-- Counter spell injected via app.js -->
          </div>
        </div>

        <div class="keyboard-container" id="boss-keyboard-container"></div>
      </div>
    </main>

    <!-- VIEW 7: FARMER JOURNAL NOTEBOOK (CUSTOM PRACTICE) -->
    <main id="view-custom" class="view-panel">
      <div class="arena-header">
        <button class="back-btn" id="btn-back-from-custom">
          <span>⬅</span> <span>Volver a la Granja</span>
        </button>
        <div class="level-meta-badge">
          <span class="sector-tag" style="border-color: #fbc02d; color: #fbc02d;">LA CABAÑA</span>
          <h2 class="level-title">El Cuaderno del Granjero</h2>
        </div>
      </div>

      <div class="custom-card">
        <p style="color: #3e1d08; font-size: 1.05rem; line-height: 1.6; margin-bottom: 12px;">
          Escribe o pega cualquier texto que desees practicar. El teclado resaltará cada dedo y medirá tus pulsaciones en un pergamino rústico.
        </p>
        <textarea id="custom-text-input" class="custom-textarea" rows="7" placeholder="Pega aquí recetas, cartas de los aldeanos o pasajes favoritos..."></textarea>
        
        <div class="custom-actions-row">
          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: #7a401b;">
            Caracteres: <span id="custom-char-count" style="font-weight: 800; color: #3e1d08;">0</span> | Palabras: <span id="custom-word-count" style="font-weight: 800; color: #3e1d08;">0</span>
          </div>
          <div style="display: flex; gap: 10px;">
            <button id="btn-clear-custom" class="stardew-btn stardew-btn-ghost">Borrar</button>
            <button id="btn-launch-custom" class="stardew-btn stardew-btn-primary"><span>🌾</span> <span>Comenzar a Escribir</span></button>
          </div>
        </div>
      </div>
    </main>

    <!-- MODAL 1: HARVEST VICTORY (COSECHA COMPLETADA) -->
    <div id="victory-modal" class="modal-backdrop">
      <div class="stardew-modal-card">
        <div class="modal-stardew-header">
          <div class="junimo-celebration-icon">🌟</div>
          <h2 class="modal-title" id="modal-victory-title">¡COSECHA COMPLETADA!</h2>
          <p class="modal-sub" id="modal-victory-sub">El abuelo y los Junimos celebran tu gran labor agrícola.</p>
        </div>

        <!-- Stardew Valley Quality Tier Badge (Iridio, Oro, Plata, Normal) -->
        <div class="stardew-rank-wrapper">
          <div id="modal-rank-badge" class="stardew-quality-badge rank-sss">SSS</div>
          <div id="modal-rank-desc" style="font-family: var(--font-display); font-size: 1.15rem; color: #7a401b; font-weight: 800; margin-top: 4px;">
            CALIDAD IRIDIO (MÁXIMA)
          </div>
        </div>

        <div class="modal-stats-grid">
          <div class="modal-stat-box">
            <span class="m-stat-label">Velocidad</span>
            <span class="m-stat-val" id="modal-stat-wpm" style="color: var(--stardew-gold);">45 PPM</span>
          </div>
          <div class="modal-stat-box">
            <span class="m-stat-label">Precisión</span>
            <span class="m-stat-val" id="modal-stat-acc" style="color: var(--green-neon);">98%</span>
          </div>
          <div class="modal-stat-box">
            <span class="m-stat-label">Racha Máx</span>
            <span class="m-stat-val" id="modal-stat-combo" style="color: var(--stardew-gold);">x54</span>
          </div>
          <div class="modal-stat-box">
            <span class="m-stat-label">Recompensa Oro</span>
            <span class="m-stat-val" id="modal-stat-xp" style="color: var(--stardew-gold);">+150 $g</span>
          </div>
        </div>

        <div id="modal-victory-stars" style="text-align: center; font-size: 1.6rem; color: var(--stardew-gold);">★★★★★</div>

        <!-- Weak Keys Review in Modal -->
        <div id="modal-error-keys-box" style="display: none; background: #fff; border: 2px solid #7a401b; border-radius: 8px; padding: 8px 12px; margin-top: 4px;">
          <span style="font-size: 0.8rem; font-weight: 800; color: #e53935;">TECLAS A MEJORAR:</span>
          <div id="modal-error-keys-list" style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 4px;"></div>
        </div>

        <div class="modal-actions-row">
          <button id="modal-btn-retry" class="stardew-btn stardew-btn-secondary">
            <span>🔄</span> <span>Repetir Jornada</span>
          </button>
          <button id="modal-btn-next" class="stardew-btn stardew-btn-primary">
            <span>Siguiente Tarea</span> <span>➔</span>
          </button>
        </div>
      </div>
    </div>

    <!-- MODAL 2: DEFEAT / OUT OF ENERGY -->
    <div id="defeat-modal" class="modal-backdrop">
      <div class="stardew-modal-card" style="border-color: #e53935;">
        <div class="modal-stardew-header">
          <div style="font-size: 3rem; margin-bottom: 8px;">🥀</div>
          <h2 class="modal-title" style="color: #e53935;" id="modal-defeat-title">TE QUEDASTE SIN ENERGÍA</h2>
          <p class="modal-sub" id="modal-defeat-sub">No lograste cumplir con el objetivo mínimo de calidad de la cosecha.</p>
        </div>

        <div class="modal-stats-grid">
          <div class="modal-stat-box">
            <span class="m-stat-label">Tu Velocidad</span>
            <span class="m-stat-val" id="modal-defeat-wpm">22 PPM</span>
          </div>
          <div class="modal-stat-box">
            <span class="m-stat-label">Precisión</span>
            <span class="m-stat-val" style="color: #e53935;" id="modal-defeat-acc">84%</span>
          </div>
          <div class="modal-stat-box">
            <span class="m-stat-label">Fallos</span>
            <span class="m-stat-val" style="color: #e53935;" id="modal-defeat-errors">8</span>
          </div>
        </div>

        <div class="modal-actions-row">
          <button id="modal-defeat-btn-menu" class="stardew-btn stardew-btn-secondary">
            <span>Volver a la Granja</span>
          </button>
          <button id="modal-defeat-btn-retry" class="stardew-btn stardew-btn-danger">
            <span>Reintentar con Cuidado</span>
          </button>
        </div>
      </div>
    </div>

    <!-- MODAL 3: ACHIEVEMENTS (30 TROFEOS DE STARDEW VALLEY) -->
    <div id="achievements-modal" class="modal-backdrop">
      <div class="stardew-modal-card modal-wide">
        <div class="modal-header-row">
          <h2 class="modal-title" style="color: var(--stardew-gold); font-size: 1.8rem; display: flex; align-items: center; gap: 12px;">
            <span>🏆</span> <span>TROFEOS Y LOGROS DEL VALLE</span>
          </h2>
          <button class="back-btn" id="btn-close-achievements">✕ Cerrar</button>
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="color: #3e1d08; font-size: 0.95rem;">
            Desbloquea los 30 hitos completando labores en la huerta, pescando con Willy, picando en las minas y alcanzando la perfección.
          </span>
          <span id="achievements-stat-text" style="font-family: var(--font-display); font-size: 1.1rem; color: #7a401b; font-weight: 800;">0 / 30</span>
        </div>

        <div style="width: 100%; height: 8px; background: #e0d0b0; border-radius: 4px; overflow: hidden; margin-bottom: 14px;">
          <div id="achievements-progress-fill" style="width: 0%; height: 100%; background: var(--stardew-gold); transition: width 0.3s ease;"></div>
        </div>

        <div class="achievements-grid" id="achievements-container">
          <!-- Injected dynamically via app.js -->
        </div>
      </div>
    </div>

    <!-- MODAL 4: FARMER PROFILE & STATISTICS -->
    <div id="profile-modal" class="modal-backdrop">
      <div class="stardew-modal-card">
        <div class="modal-header-row">
          <h2 class="modal-title" style="color: var(--stardew-gold); font-size: 1.8rem; display: flex; align-items: center; gap: 12px;">
            <span>👤</span> <span>PERFIL DEL GRANJERO</span>
          </h2>
          <button class="back-btn" id="btn-close-profile">✕ Cerrar</button>
        </div>

        <div class="profile-stats-grid">
          <div class="profile-stat-item">
            <span class="profile-stat-label">Nivel de Granjero</span>
            <span class="profile-stat-val" id="prof-level-val">1</span>
          </div>
          <div class="profile-stat-item">
            <span class="profile-stat-label">Monedero ($g)</span>
            <span class="profile-stat-val" style="color: var(--stardew-gold);" id="prof-xp-val">0 $g</span>
          </div>
          <div class="profile-stat-item">
            <span class="profile-stat-label">Récord PPM</span>
            <span class="profile-stat-val" style="color: var(--green-neon);" id="prof-best-wpm">0</span>
          </div>
          <div class="profile-stat-item">
            <span class="profile-stat-label">Estrellas de Calidad</span>
            <span class="profile-stat-val" style="color: var(--stardew-gold);" id="prof-stars-val">0</span>
          </div>
          <div class="profile-stat-item">
            <span class="profile-stat-label">Pulsaciones Totales</span>
            <span class="profile-stat-val" id="prof-keys-val">0</span>
          </div>
          <div class="profile-stat-item">
            <span class="profile-stat-label">Récord Rey Pradera</span>
            <span class="profile-stat-val" style="color: var(--cyan-neon);" id="prof-arcade-val">0</span>
          </div>
        </div>

        <div style="width: 100%; display: flex; justify-content: flex-end; margin-top: 14px;">
          <button id="btn-reset-data" class="stardew-btn stardew-btn-secondary" style="font-size: 0.85rem; color: #e53935; border-color: rgba(229, 57, 53, 0.4);">
            <span>⚠️</span> <span>Reiniciar Progreso de la Granja</span>
          </button>
        </div>
      </div>
    </div>

    <!-- FLOATING TOAST NOTIFICATION (LOGRO DESBLOQUEADO) -->
    <div id="achievement-toast" class="achievement-toast">
      <div class="toast-icon" id="toast-icon">🏆</div>
      <div class="toast-content">
        <span class="toast-tag">¡NUEVO LOGRO EN STARDEW VALLEY!</span>
        <strong class="toast-title" id="toast-title">Primer Brote de Primavera</strong>
        <p class="toast-desc" id="toast-desc">Has cosechado tu primera pastinaca en el valle.</p>
      </div>
    </div>

  </div>

  <!-- Game Scripts (ES Modules) -->
  <script type="module" src="js/game/app.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.resolve(__dirname, '../index.html'), htmlContent, 'utf8');
console.log("✅ Wrote 100% matched Stardew Valley index.html!");
