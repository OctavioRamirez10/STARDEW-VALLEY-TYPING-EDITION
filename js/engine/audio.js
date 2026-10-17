// Stardew Valley // Typing Valley - Web Audio API Pastoral Soundscape Engine
// Zero external mp3 dependencies, 100% synthesized in real time, zero latency

class StardewSoundEngine {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
    this.musicEnabled = false;
    this.switchType = 'thock'; // 'thock', 'junimo', 'pickaxe', 'water', 'coin', 'typewriter'
    this.masterGain = null;
    this.ambientInterval = null;
    this.ambientGain = null;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.45, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  ensureContext() {
    if (!this.ctx) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setSoundEnabled(val) {
    this.soundEnabled = val;
  }

  setMusicEnabled(val) {
    this.musicEnabled = val;
    if (val) {
      this.startPastoralAmbient();
    } else {
      this.stopPastoralAmbient();
    }
  }

  setSwitchType(type) {
    this.switchType = type;
  }

  // Play keystroke sound based on current Stardew Valley profile
  playKey(combo = 0) {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const pitchOffset = Math.min(combo * 12, 280);

    switch (this.switchType) {
      case 'junimo':
        this.playJunimoBell(t, pitchOffset);
        break;
      case 'pickaxe':
        this.playPickaxeStrike(t, pitchOffset);
        break;
      case 'water':
        this.playWaterBubble(t, pitchOffset);
        break;
      case 'coin':
        this.playPierreCoin(t, pitchOffset);
        break;
      case 'typewriter':
        this.playElliottTypewriter(t, pitchOffset);
        break;
      case 'thock':
      default:
        this.playWoodThock(t, pitchOffset);
        break;
    }
  }

  // 1. Warm Wooden Oak Box Thock (Cosecha & Madera de Roble)
  playWoodThock(t, pitchOffset) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    const baseFreq = 220 + (Math.random() * 20 - 10) + pitchOffset * 0.35;
    osc.frequency.setValueAtTime(baseFreq, t);
    osc.frequency.exponentialRampToValueAtTime(70, t + 0.05);

    gain.gain.setValueAtTime(0.65, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.07);

    // Warm wooden tap click
    this.playTransientClick(t, 1800, 0.012, 0.2);
  }

  // 2. Junimo Magical Crystal Bell (Campanilla de los Junimos)
  playJunimoBell(t, pitchOffset) {
    const pentatonicNotes = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];
    const baseFreq = pentatonicNotes[Math.floor(Math.random() * pentatonicNotes.length)] + (pitchOffset * 0.5);

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, t);

    // Harmonic bell shimmer
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(baseFreq * 2.76, t);

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);

    gain2.gain.setValueAtTime(0.12, t);
    gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

    osc.connect(gain);
    osc2.connect(gain2);
    gain.connect(this.masterGain);
    gain2.connect(this.masterGain);

    osc.start(t);
    osc2.start(t);
    osc.stop(t + 0.18);
    osc2.stop(t + 0.18);
  }

  // 3. Mining Pickaxe Strike (Pico sobre Roca y Mineral)
  playPickaxeStrike(t, pitchOffset) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    const baseFreq = 950 + (Math.random() * 80 - 40) + pitchOffset * 0.6;
    osc.frequency.setValueAtTime(baseFreq, t);
    osc.frequency.exponentialRampToValueAtTime(260, t + 0.06);

    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.08);

    // Stone clack transient
    this.playTransientClick(t, 3400, 0.015, 0.35);
  }

  // 4. Watering Can Bubble (Gota de Agua & Regadera de Cobre)
  playWaterBubble(t, pitchOffset) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const startFreq = 280 + (Math.random() * 30) + pitchOffset * 0.4;
    osc.frequency.setValueAtTime(startFreq, t);
    osc.frequency.exponentialRampToValueAtTime(startFreq * 2.1, t + 0.05);

    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.08);
  }

  // 5. Pierre's Gold Coin Cha-ching (Monedas de Oro $g)
  playPierreCoin(t, pitchOffset) {
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc2.type = 'sine';

    const freq = 1200 + pitchOffset;
    osc.frequency.setValueAtTime(freq, t);
    osc2.frequency.setValueAtTime(freq * 1.5, t + 0.03);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

    osc.connect(gain);
    osc2.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc2.start(t + 0.02);
    osc.stop(t + 0.14);
    osc2.stop(t + 0.14);
  }

  // 6. Elliott's Beach Cabin Typewriter (Máquina de Escribir Mecánica)
  playElliottTypewriter(t, pitchOffset) {
    this.playTransientClick(t, 4200, 0.008, 0.4);

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(450 + pitchOffset * 0.3, t);
    osc.frequency.exponentialRampToValueAtTime(120, t + 0.04);

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.06);
  }

  playTransientClick(t, freq, duration, gainVal) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.3, t + duration);

    gain.gain.setValueAtTime(gainVal, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + duration);
  }

  // Soft rustic error thud (tropezón con una piedra)
  playError() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(130, t);
    osc.frequency.linearRampToValueAtTime(80, t + 0.14);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.17);
  }

  // Stardrop level victory jingle (¡Cosecha y Estrella!)
  playVictory() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Stardew Valley warm triumphant chord progression: C -> E -> G -> B -> High C (Stardrop tone)
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const noteTime = t + (idx * 0.08);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      const dur = idx === notes.length - 1 ? 0.7 : 0.25;
      gain.gain.setValueAtTime(0.3, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + dur);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(noteTime);
      osc.stop(noteTime + dur);
    });
  }

  // Rank Fanfares: Iridium (SSS), Gold (SS), Silver (S)
  playRankFanfare(rank) {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    if (rank === 'SSS') {
      // Iridium Stardrop Fanfare: Rich glittering arpeggios
      const chords = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      chords.forEach((freq, idx) => {
        const noteTime = t + (idx * 0.09);
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, noteTime);
        gain.gain.setValueAtTime(0.35, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.6);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(noteTime);
        osc.stop(noteTime + 0.65);
      });
    } else if (rank === 'SS' || rank === 'S') {
      const chords = [440.0, 554.37, 659.25, 880.0];
      chords.forEach((freq, idx) => {
        const noteTime = t + (idx * 0.1);
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);
        gain.gain.setValueAtTime(0.3, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.4);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(noteTime);
        osc.stop(noteTime + 0.45);
      });
    }
  }

  // Cavern warning clock tick (<10 seconds in Skull Cavern)
  playTimeWarningTick() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(750, t);
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.05);
  }

  // +3s Time added bonus sound in Cavern
  playTimeBonus() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(520, t);
    osc.frequency.exponentialRampToValueAtTime(940, t + 0.1);
    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.13);
  }

  // Gentle Pastoral Valley Drone (Acoustic nature resonance)
  startPastoralAmbient() {
    this.ensureContext();
    if (!this.ctx || this.ambientInterval) return;

    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.ambientGain.connect(this.masterGain);

    const valleyNotes = [220, 261.63, 329.63, 392, 440]; // A minor pentatonic / warm meadow
    let noteIdx = 0;

    const playChordTone = () => {
      if (!this.musicEnabled || !this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(valleyNotes[noteIdx], t);
      noteIdx = (noteIdx + 1) % valleyNotes.length;

      noteGain.gain.setValueAtTime(0.001, t);
      noteGain.gain.linearRampToValueAtTime(0.08, t + 1.2);
      noteGain.gain.exponentialRampToValueAtTime(0.001, t + 3.8);

      osc.connect(noteGain);
      noteGain.connect(this.ambientGain);

      osc.start(t);
      osc.stop(t + 4.0);
    };

    playChordTone();
    this.ambientInterval = setInterval(playChordTone, 3200);
  }

  stopPastoralAmbient() {
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
  }

  // Helper Aliases & Sound Effects
  playRankSound(rank) {
    this.playRankFanfare(rank);
  }

  playSuccess() {
    this.playVictory();
  }

  playCoin() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (this.ctx) this.playPierreCoin(this.ctx.currentTime, 0);
  }

  // Cheerful Farm Chicken Cluck ("Bawk bawk! 🐔")
  playCluck() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [0, 0.08].forEach((offset, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      const baseFreq = idx === 0 ? 580 : 720;
      osc.frequency.setValueAtTime(baseFreq, t + offset);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.5, t + offset + 0.06);

      gain.gain.setValueAtTime(0.25, t + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.07);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t + offset);
      osc.stop(t + offset + 0.08);
    });
  }

  // Farm Puppy Dog Bark ("Woof! 🐶")
  playBark() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, t);
    osc.frequency.exponentialRampToValueAtTime(120, t + 0.12);

    gain.gain.setValueAtTime(0.35, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.15);
  }

  // Farm Kitten Purr / Meow ("Purr/Meow! 🐱")
  playMeow() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(540, t);
    osc.frequency.linearRampToValueAtTime(780, t + 0.14);
    osc.frequency.exponentialRampToValueAtTime(620, t + 0.28);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.32);
  }

  // Soft dialogue typewriter tick
  playTypewriterTick() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.playTransientClick(t, 2200, 0.008, 0.12);
  }

  // Warning Tick in Survival & Boss timer
  playWarningTick() {
    this.playTimeWarningTick();
  }

  // Witch Swamp Mystical Fog Dissonance (Niebla del Pantano)
  playSwampFog() {
    this.playGlitch();
  }

  playGlitch() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(340, t);
    osc.frequency.linearRampToValueAtTime(140, t + 0.15);
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.2);
  }

  // Combo Milestone Chimes (10, 25, 50, 100)
  playComboChime(tier = 1) {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const pentatonic = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    const notesToPlay = pentatonic.slice(0, Math.min(5, tier + 2));
    notesToPlay.forEach((freq, idx) => {
      const noteTime = t + idx * 0.06;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, noteTime);
      gain.gain.setValueAtTime(0.25, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.35);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.4);
    });
  }

  // Prairie King Slingshot Shot
  playLaser(delay = 0, pitchOffset = 0) {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime + (delay || 0);
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(750 + (pitchOffset || 0), t);
    osc.frequency.exponentialRampToValueAtTime(180, t + 0.12);
    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.13);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.14);
  }

  // Morris & Joja Heavy Corporate Steam Impact
  playBossAttack() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.exponentialRampToValueAtTime(45, t + 0.28);
    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.32);
  }

  // Willy Fishing Reel Ratchet Click
  playReelClick() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.playTransientClick(t, 2800, 0.006, 0.15);
  }

  // Water Splash when fish struggles or is caught
  playSplash() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.playWaterBubble(t, Math.random() * 80);
  }

  // Playful Junimo Forest Squeak / Chirp ("Chirp chirp! 🍏")
  playJunimoChirp() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    [0, 0.07].forEach((offset, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      const baseFreq = idx === 0 ? 1350 : 1800;
      osc.frequency.setValueAtTime(baseFreq, t + offset);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.35, t + offset + 0.05);

      gain.gain.setValueAtTime(0.2, t + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.06);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t + offset);
      osc.stop(t + offset + 0.07);
    });
  }

  // Melodic Junimo Crystal Dance (Bundle Completed Celebration)
  playJunimoDance() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    const notes = [587.33, 659.25, 783.99, 880.00, 1046.50, 1174.66]; // D major pentatonic / celestial
    notes.forEach((freq, idx) => {
      const noteTime = t + (idx * 0.07);
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, noteTime);
      gain.gain.setValueAtTime(0.28, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.45);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.5);
    });
  }

  // Triumphant Grand Restoration of Pelican Town Community Center
  playGrandRestoration() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    const chords = [
      { notes: [523.25, 659.25, 783.99], time: 0 },
      { notes: [587.33, 739.99, 880.00], time: 0.22 },
      { notes: [659.25, 783.99, 1046.50], time: 0.44 },
      { notes: [783.99, 987.77, 1174.66, 1567.98], time: 0.70 }
    ];

    chords.forEach(chord => {
      chord.notes.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t + chord.time);
        gain.gain.setValueAtTime(0.22, t + chord.time);
        gain.gain.exponentialRampToValueAtTime(0.001, t + chord.time + 0.85);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(t + chord.time);
        osc.stop(t + chord.time + 0.9);
      });
    });
  }

  // Excavation Chisel Strike (Chipping dirt & fossils)
  playChiselStrike() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, t);
    osc.frequency.exponentialRampToValueAtTime(320, t + 0.05);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.07);
  }

  // Geode & Crystal Crack (Breaking geodes open)
  playGeodeCrack() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    [1400, 2100, 3200].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + idx * 0.04);
      gain.gain.setValueAtTime(0.2, t + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.04 + 0.18);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t + idx * 0.04);
      osc.stop(t + idx * 0.04 + 0.2);
    });
  }

  // Gunther's Museum Donation Fanfare
  playMuseumFanfare() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    const notes = [
      { freq: 440.00, time: 0 },    // A4
      { freq: 554.37, time: 0.12 }, // C#5
      { freq: 659.25, time: 0.24 }, // E5
      { freq: 880.00, time: 0.38 }, // A5
      { freq: 1108.73, time: 0.55 } // C#6
    ];

    notes.forEach(n => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(n.freq, t + n.time);
      gain.gain.setValueAtTime(0.25, t + n.time);
      gain.gain.exponentialRampToValueAtTime(0.001, t + n.time + 0.65);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t + n.time);
      osc.stop(t + n.time + 0.7);
    });
  }
}

export const audio = new StardewSoundEngine();



