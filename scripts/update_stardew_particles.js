// Stardew Valley Particles & Visual Effects Engine (Fireflies, Pollen & Autumn Leaves)
const fs = require('fs');
const path = require('path');

const particlesContent = `// Stardew Valley // Typing Valley - Canvas Particle Engine
// Ambient fireflies, floating golden pollen, falling leaves and star sparkles

class StardewParticleSystem {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.ambientFireflies = [];
    this.floatingTexts = [];
    this.slingshotPellets = [];
    this.width = typeof window !== 'undefined' ? window.innerWidth : 1920;
    this.height = typeof window !== 'undefined' ? window.innerHeight : 1080;
    this.animFrame = null;
    this.shakeIntensity = 0;
  }

  init(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    this.initAmbientParticles();
    window.addEventListener('resize', () => this.resize());
    this.loop();
  }

  resize() {
    if (!this.canvas) return;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  initAmbientParticles() {
    this.ambientFireflies = [];
    const count = Math.min(45, Math.floor(this.width / 35));
    for (let i = 0; i < count; i++) {
      this.ambientFireflies.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.2 - Math.random() * 0.3,
        size: Math.random() * 2.5 + 1.2,
        baseAlpha: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.04 + 0.02,
        pulseOffset: Math.random() * Math.PI * 2,
        color: Math.random() > 0.4 ? '#ffd700' : (Math.random() > 0.5 ? '#9be036' : '#ff9800')
      });
    }
  }

  triggerShake(intensity = 6) {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
  }

  // Key burst with colorful flower petals & star sparkles
  burst(x, y, color = '#ffd700', count = 12) {
    const stardewColors = ['#ffd700', '#73b32a', '#e53935', '#ab47bc', '#ffb74d', '#29b6f6'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1.5;
      const petalColor = Math.random() > 0.6 ? color : stardewColors[Math.floor(Math.random() * stardewColors.length)];
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        size: Math.random() * 4 + 2,
        color: petalColor,
        alpha: 1,
        decay: Math.random() * 0.025 + 0.015,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.15,
        isLeaf: Math.random() > 0.5
      });
    }
  }

  // Floating text like "+10 $g", "¡COSECHA DE ORO!", "PERFECTO!"
  addFloatingText(text, x, y, color = '#ffd700', size = 18) {
    this.floatingTexts.push({
      text,
      x,
      y,
      vy: -1.4,
      alpha: 1,
      decay: 0.02,
      color,
      size
    });
  }

  // Slingshot pellet connecting player to falling Prairie King target
  addLaser(x1, y1, x2, y2, color = '#ffd700') {
    this.slingshotPellets.push({
      x1,
      y1,
      x2,
      y2,
      color,
      alpha: 1,
      decay: 0.15,
      width: 3.5
    });
    this.burst(x2, y2, color, 14);
  }

  update() {
    // Screen shaking completely disabled. Ensure body transform is clean.
    if (typeof document !== 'undefined' && document.body && document.body.style.transform && document.body.style.transform !== 'none') {
      document.body.style.transform = 'none';
    }

    // Update Ambient Fireflies & Drifting Pollen
    const time = Date.now() * 0.002;
    for (let i = 0; i < this.ambientFireflies.length; i++) {
      const f = this.ambientFireflies[i];
      f.x += f.vx + Math.sin(time + f.pulseOffset) * 0.25;
      f.y += f.vy;

      if (f.y < -10) {
        f.y = this.height + 10;
        f.x = Math.random() * this.width;
      }
      if (f.x < -10) f.x = this.width + 10;
      if (f.x > this.width + 10) f.x = -10;
    }

    // Update Burst Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08; // Gentle gravity
      p.alpha -= p.decay;
      if (p.rotation !== undefined) p.rotation += p.vRot;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
      }
    }

    // Update Floating Texts
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.y += ft.vy;
      ft.alpha -= ft.decay;
      if (ft.alpha <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }

    // Update Slingshot Pellets
    for (let i = this.slingshotPellets.length - 1; i >= 0; i--) {
      const l = this.slingshotPellets[i];
      l.alpha -= l.decay;
      if (l.alpha <= 0) {
        this.slingshotPellets.splice(i, 1);
      }
    }
  }

  draw() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw Ambient Fireflies
    const time = Date.now() * 0.002;
    for (const f of this.ambientFireflies) {
      const currentAlpha = f.baseAlpha + Math.sin(time * 3 + f.pulseOffset) * 0.25;
      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, Math.min(1, currentAlpha));
      this.ctx.fillStyle = f.color;
      this.ctx.shadowColor = f.color;
      this.ctx.shadowBlur = 8;
      this.ctx.beginPath();
      this.ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    // 2. Draw Slingshot Pellets
    for (const l of this.slingshotPellets) {
      this.ctx.save();
      this.ctx.globalAlpha = l.alpha;
      this.ctx.strokeStyle = l.color;
      this.ctx.lineWidth = l.width;
      this.ctx.shadowColor = l.color;
      this.ctx.shadowBlur = 10;
      this.ctx.beginPath();
      this.ctx.moveTo(l.x1, l.y1);
      this.ctx.lineTo(l.x2, l.y2);
      this.ctx.stroke();
      this.ctx.restore();
    }

    // 3. Draw Burst Particles (Stars, Leaves, Petals)
    for (const p of this.particles) {
      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.fillStyle = p.color;
      this.ctx.translate(p.x, p.y);
      if (p.rotation) this.ctx.rotate(p.rotation);

      if (p.isLeaf) {
        // Little leaf / petal oval
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, p.size * 1.5, p.size * 0.8, 0, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        // Sparkling four-point star
        this.ctx.shadowColor = p.color;
        this.ctx.shadowBlur = 6;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    // 4. Draw Floating Texts with Stardew Wood Drop Shadow
    for (const ft of this.floatingTexts) {
      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, ft.alpha);
      this.ctx.font = \`bold \${ft.size}px 'Rajdhani', 'VT323', sans-serif\`;
      this.ctx.textAlign = 'center';

      // Drop shadow in dark walnut wood
      this.ctx.fillStyle = 'rgba(62, 29, 8, 0.85)';
      this.ctx.fillText(ft.text, ft.x + 2, ft.y + 2);

      this.ctx.fillStyle = ft.color;
      this.ctx.shadowColor = ft.color;
      this.ctx.shadowBlur = 8;
      this.ctx.fillText(ft.text, ft.x, ft.y);
      this.ctx.restore();
    }
  }

  loop() {
    this.update();
    this.draw();
    this.animFrame = requestAnimationFrame(() => this.loop());
  }
}

export const particles = new StardewParticleSystem();
`;

fs.writeFileSync(path.resolve(__dirname, '../js/engine/particles.js'), particlesContent, 'utf8');
console.log("✅ Wrote Stardew Valley particle engine to js/engine/particles.js");
