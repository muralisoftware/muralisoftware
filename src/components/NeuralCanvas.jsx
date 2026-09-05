import React, { useEffect, useRef } from 'react';

/**
 * Ultimate Multi-Mode 3D & 4D Neural Canvas (All 11 Unique Animations Included)
 * Cycles sequentially through ALL distinct 3D / 4D animations on each page refresh/visit:
 * 
 * 1. Mode 0: "3D Quantum Particle Audio & Frequency Waveform Terrain" (Topographical soundwave field)
 * 2. Mode 1: "3D Infinite Cyber Tunnel & Warp Speed Data Highway" (First-person warp corridor)
 * 3. Mode 2: "4D Clifford Torus & Hypersphere Wave Mesh" (Non-rolling 4D topological hyperspace cloth)
 * 4. Mode 3: "3D Cybernetic Humanoid AI & Neural Synapse Mesh" (Gaze-tracking neural face)
 * 5. Mode 4: "3D Cybernetic Hologram Core" (Gyroscopic multi-ring orbiter & laser surges)
 * 6. Mode 5: "3D Cyber Matrix DNA Helix" (Double-helix strand with base-pair rungs)
 * 7. Mode 6: "3D Quantum Constellation Sphere" (Interconnected 3D geodesic neural constellation)
 * 8. Mode 7: "4D Quantum Tesseract Hypercube" (4D rotating wireframe hypercube)
 * 9. Mode 8: "3D Cyberpunk City Matrix" (Isometric 3D server skyscraper pillars & vertical data pulses)
 * 10. Mode 9: "Gravitational Blackhole Vortex & Accretion Disk" (Relativistic spacetime funnel & event horizon)
 * 11. Mode 10: "Quantum Torus Donut Accelerator" (Dual-axis spinning energy ring with helical particles)
 */
export const NeuralCanvas = ({ isPaused }) => {
  const canvasRef = useRef(null);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Cycle across all 11 animation modes sequentially on refresh
    const totalModes = 11;
    let savedMode = localStorage.getItem('canvas_master_anim_mode');
    let mode = savedMode !== null ? (parseInt(savedMode, 10) + 1) % totalModes : 0;
    localStorage.setItem('canvas_master_anim_mode', mode.toString());

    let width, height;
    let rotationX = 0.22, rotationY = 0;
    let targetRotationX = 0.22, targetRotationY = 0;
    let mouseX = 0, mouseY = 0;
    let targetMouseX = 0, targetMouseY = 0;
    let isDragging = false;
    let lastMouseX = 0, lastMouseY = 0;
    let autoRotate = true;
    let globalTime = 0;

    const techHighlights = [
      { name: 'Python', color: '#306998', icon: '🐍' },
      { name: 'React.js', color: '#00a3a3', icon: '⚛️' },
      { name: 'Next.js', color: '#051d24', icon: '▲' },
      { name: 'Odoo ERP', color: '#875A7B', icon: '⚙️' },
      { name: 'Laravel', color: '#FF2D20', icon: '🐘' },
      { name: 'FastAPI', color: '#009688', icon: '⚡' },
      { name: 'PostgreSQL', color: '#336791', icon: '🐘' },
    ];

    const codeTokens = ['01', '10', 'AI', '{ }', '< >', '=>', 'REST', 'SQL', 'def', 'git', 'API', 'Docker', 'K8s', 'fn()'];

    // 3D Point Rotation Helper
    const rotate3D = (x, y, z, rx, ry, rz = 0) => {
      let cosZ = Math.cos(rz), sinZ = Math.sin(rz);
      let x1 = x * cosZ - y * sinZ;
      let y1 = x * sinZ + y * cosZ;
      let z1 = z;

      let cosY = Math.cos(ry), sinY = Math.sin(ry);
      let x2 = x1 * cosY + z1 * sinY;
      let z2 = -x1 * sinY + z1 * cosY;

      let cosX = Math.cos(rx), sinX = Math.sin(rx);
      let y3 = y1 * cosX - z2 * sinX;
      let z3 = y1 * sinX + z2 * cosX;

      return { x: x2, y: y3, z: z3 };
    };

    // 3D Perspective Projection Helper
    const project3D = (x, y, z, fov = 550) => {
      const scale = fov / (fov + z);
      return {
        px: x * scale + width / 2,
        py: y * scale + height / 2,
        scale,
        z
      };
    };

    // Shared Ambient Matrix Code Particles
    class CodeParticle {
      constructor() { this.reset(); }
      reset() {
        this.x = (Math.random() - 0.5) * width * 1.5;
        this.y = (Math.random() - 0.5) * height * 1.5;
        this.z = (Math.random() - 0.5) * 800;
        this.text = codeTokens[Math.floor(Math.random() * codeTokens.length)];
        this.speedY = Math.random() * 0.5 + 0.2;
        this.alpha = Math.random() * 0.35 + 0.1;
        this.color = Math.random() > 0.5 ? '#0F2C59' : '#C59B27';
      }
      update() {
        this.y += this.speedY;
        if (this.y > height * 0.7) {
          this.y = -height * 0.7;
          this.x = (Math.random() - 0.5) * width * 1.5;
        }
      }
    }
    let codeParticles = [];

    // Mode 0: Terrain
    let terrainCols = 38, terrainRows = 28, terrainSpacing = 42;

    // Mode 1: Warp Tunnel
    let warpParticles = [], tunnelRings = [], tunnelTechs = [];
    class WarpParticle {
      constructor() { this.reset(true); }
      reset(randomZ = false) {
        const a = Math.random() * Math.PI * 2, r = Math.random() * 450 + 60;
        this.x = Math.cos(a) * r;
        this.y = Math.sin(a) * r;
        this.z = randomZ ? Math.random() * 1200 : 1200;
        this.speed = Math.random() * 14 + 10;
        this.color = Math.random() > 0.4 ? '#0F2C59' : '#C59B27';
        this.size = Math.random() * 2.5 + 1.2;
      }
      update() {
        this.z -= this.speed;
        if (this.z <= 10) this.reset(false);
      }
    }

    // Mode 2: 4D Clifford Torus
    let cliffordGrid = [];
    const cliffordU = 32, cliffordV = 32;

    // Mode 3: AI Face
    let aiFaceNodes = [], aiSynapses = [], aiPulses = [];
    class SynapsePulse {
      constructor(fromNode, toNode, color) {
        this.from = fromNode; this.to = toNode; this.color = color; this.progress = 0; this.speed = 0.04 + Math.random() * 0.03;
      }
      update() { this.progress += this.speed; return this.progress >= 1; }
    }

    // Mode 4: Hologram Core
    let coreParticles = [], gyroRings = [], satellitesM4 = [], laserBeams = [];
    class CoreParticle {
      constructor(radius) {
        this.baseRadius = radius;
        this.theta = Math.random() * Math.PI * 2;
        this.phi = Math.acos(Math.random() * 2 - 1);
        this.speedTheta = (Math.random() - 0.5) * 0.015;
        this.speedPhi = (Math.random() - 0.5) * 0.015;
        this.size = Math.random() * 2 + 1.2;
        this.color = Math.random() > 0.4 ? '#0F2C59' : '#C59B27';
      }
      update() {
        this.theta += this.speedTheta; this.phi += this.speedPhi;
        this.x = this.baseRadius * Math.sin(this.phi) * Math.cos(this.theta);
        this.y = this.baseRadius * Math.sin(this.phi) * Math.sin(this.theta);
        this.z = this.baseRadius * Math.cos(this.phi);
      }
    }
    class GyroRing {
      constructor(radius, tiltX, tiltY, tiltZ, speed, color, dashPattern, nodeCount) {
        this.radius = radius; this.tiltX = tiltX; this.tiltY = tiltY; this.tiltZ = tiltZ; this.speed = speed; this.color = color; this.dashPattern = dashPattern; this.currentAngle = 0; this.nodeCount = nodeCount;
        this.nodes = [];
        for (let i = 0; i < nodeCount; i++) this.nodes.push({ angle: (i / nodeCount) * Math.PI * 2 });
      }
      update() { this.currentAngle += this.speed; }
    }
    class LaserPulse {
      constructor(satA, satB, color) {
        this.satA = satA; this.satB = satB; this.color = color; this.progress = 0; this.speed = 0.035;
      }
      update() { this.progress += this.speed; return this.progress >= 1; }
    }

    // Mode 5: DNA Helix
    let helixNodes = [], basePairs = [], helixPulses = [];
    class HelixNode {
      constructor(x, y, z, strand, index) {
        this.x = x; this.y = y; this.z = z; this.strand = strand; this.index = index; this.baseSize = 3.5; this.color = strand === 'A' ? '#0F2C59' : '#C59B27'; this.projected = { x: 0, y: 0, scale: 1 };
      }
    }
    class HelixPulse {
      constructor(startIndex, isStrandA, color) {
        this.currentIndex = startIndex; this.isStrandA = isStrandA; this.color = color; this.progress = 0; this.speed = 0.05;
      }
      update() {
        this.progress += this.speed;
        if (this.progress >= 1) { this.progress = 0; this.currentIndex++; }
        return this.currentIndex >= 55;
      }
      draw(strandNodes) {
        const node1 = strandNodes[this.currentIndex], node2 = strandNodes[this.currentIndex + 1];
        if (!node1 || !node2 || !node1.projected || !node2.projected) return;
        const curX = node1.projected.x + (node2.projected.x - node1.projected.x) * this.progress;
        const curY = node1.projected.y + (node2.projected.y - node1.projected.y) * this.progress;
        ctx.beginPath();
        ctx.arc(curX, curY, 6, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 16;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Mode 6: Constellation Sphere
    let constellationNodes = [], orbitalSatellitesM6 = [];
    class ConstellationNode {
      constructor(radius) {
        this.radius = radius; this.theta = Math.random() * Math.PI * 2; this.phi = Math.acos(Math.random() * 2 - 1);
        this.speedTheta = (Math.random() - 0.5) * 0.008; this.speedPhi = (Math.random() - 0.5) * 0.008; this.size = Math.random() * 2.5 + 1.5; this.color = Math.random() > 0.4 ? '#0F2C59' : '#C59B27';
      }
      update() {
        this.theta += this.speedTheta; this.phi += this.speedPhi;
        this.x = this.radius * Math.sin(this.phi) * Math.cos(this.theta);
        this.y = this.radius * Math.sin(this.phi) * Math.sin(this.theta);
        this.z = this.radius * Math.cos(this.phi);
      }
    }

    // Mode 7: 4D Tesseract
    let tesseractVertices = [], tesseractEdges = [], tesseractSatellites = [];

    // Mode 8: City Matrix
    let cityPillars = [], dataPulses = [];
    class CityPillar {
      constructor(gridX, gridZ, size, heightMax, color, tech = null) {
        this.gridX = gridX; this.gridZ = gridZ; this.size = size; this.baseHeight = heightMax; this.currentHeight = heightMax; this.color = color; this.tech = tech; this.phase = Math.random() * Math.PI * 2;
      }
      update(t) { this.currentHeight = this.baseHeight * (0.8 + Math.sin(t * 1.5 + this.phase) * 0.2); }
    }
    class DataPulse {
      constructor(pillar) {
        this.pillar = pillar; this.progress = 0; this.speed = 0.04 + Math.random() * 0.02; this.color = pillar.tech ? pillar.tech.color : '#C59B27';
      }
      update() { this.progress += this.speed; return this.progress >= 1; }
    }

    // Mode 9: Blackhole
    let vortexParticles = [], vortexSatellites = [];
    class VortexParticle {
      constructor(minDim) { this.minDim = minDim; this.reset(true); }
      reset(init = false) {
        this.radius = init ? (Math.random() * this.minDim * 0.38 + this.minDim * 0.06) : (this.minDim * (0.35 + Math.random() * 0.08));
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.012 + (1 / (this.radius * 0.05 + 1)) * 0.04;
        this.color = Math.random() > 0.3 ? '#0F2C59' : '#C59B27';
        this.size = Math.random() * 2.2 + 1;
        this.alpha = Math.random() * 0.7 + 0.3;
      }
      update() {
        this.angle += this.speed;
        this.radius -= 0.35;
        if (this.radius < this.minDim * 0.05) this.reset(false);
      }
    }

    // Mode 10: Torus
    let torusRings = [], torusSatellites = [];

    // ==============================================================
    // INITIALIZATION
    // ==============================================================
    const initScene = () => {
      codeParticles = [];
      for (let i = 0; i < 60; i++) codeParticles.push(new CodeParticle());
      const minDim = Math.min(width, height);

      // Mode 0: Terrain
      terrainSpacing = minDim * 0.048;

      // Mode 1: Warp Tunnel
      warpParticles = [];
      for (let i = 0; i < 180; i++) warpParticles.push(new WarpParticle());
      tunnelRings = [];
      for (let i = 0; i < 9; i++) tunnelRings.push({ z: i * 140, maxRadius: minDim * 0.42 });
      tunnelTechs = techHighlights.map((tech, idx) => ({
        ...tech, angle: (idx * Math.PI * 2) / techHighlights.length, z: (idx * 160) % 1200 + 100, orbitRadius: minDim * 0.32
      }));

      // Mode 2: 4D Clifford Torus
      cliffordGrid = [];
      for (let i = 0; i < cliffordU; i++) for (let j = 0; j < cliffordV; j++) cliffordGrid.push({ u: i, v: j });

      // Mode 3: AI Face
      aiFaceNodes = []; aiSynapses = []; aiPulses = [];
      const layers = 14, ptsPerLayer = 16;
      for (let l = 0; l < layers; l++) {
        const yNorm = (l / (layers - 1)) * 2 - 1;
        const y = yNorm * (minDim * 0.35);
        const profileR = Math.sqrt(Math.max(0, 1 - yNorm * yNorm * 0.8)) * (minDim * 0.24);
        for (let p = 0; p < ptsPerLayer; p++) {
          const angle = (p / ptsPerLayer) * Math.PI - Math.PI / 2;
          const x = Math.sin(angle) * profileR;
          const zPush = (Math.cos(angle) > 0.6 && Math.abs(yNorm) < 0.3) ? 25 : 0;
          const z = Math.cos(angle) * profileR * 1.2 + zPush;
          aiFaceNodes.push({ x, y, z, origX: x, origY: y, origZ: z, l, p });
        }
      }
      for (let i = 0; i < aiFaceNodes.length; i++) {
        for (let j = i + 1; j < aiFaceNodes.length; j++) {
          const n1 = aiFaceNodes[i], n2 = aiFaceNodes[j];
          if ((n1.l === n2.l && Math.abs(n1.p - n2.p) === 1) || (Math.abs(n1.l - n2.l) === 1 && n1.p === n2.p)) {
            aiSynapses.push([n1, n2]);
          }
        }
      }

      // Mode 4: Hologram Core
      coreParticles = []; gyroRings = []; satellitesM4 = []; laserBeams = [];
      const coreR = minDim * 0.12;
      for (let i = 0; i < 85; i++) coreParticles.push(new CoreParticle(coreR * (0.6 + Math.random() * 0.4)));
      gyroRings.push(new GyroRing(minDim * 0.20, 0.4, 0.2, 0, 0.006, 'rgba(15, 44, 89, 0.85)', [6, 4], 8));
      gyroRings.push(new GyroRing(minDim * 0.28, -0.6, 0.5, 0.3, -0.005, 'rgba(197, 155, 39, 0.85)', [12, 6], 12));
      gyroRings.push(new GyroRing(minDim * 0.36, 0.8, -0.3, -0.4, 0.004, 'rgba(0, 163, 163, 0.8)', [4, 4], 16));
      gyroRings.push(new GyroRing(minDim * 0.44, 0.2, 0.9, 0.2, -0.003, 'rgba(15, 44, 89, 0.6)', [15, 8], 20));
      satellitesM4 = techHighlights.map((tech, idx) => ({
        ...tech, speed: (idx % 2 === 0 ? 1 : -1) * (0.005 + idx * 0.001), currentAngle: (idx * Math.PI * 2) / techHighlights.length,
        radius: minDim * (0.18 + (idx % 3) * 0.1), tiltX: (idx * 0.35) % Math.PI, tiltY: (idx * 0.5) % Math.PI, projected: { x: 0, y: 0, scale: 1, z: 0 }
      }));

      // Mode 5: DNA Helix
      helixNodes = []; basePairs = []; helixPulses = [];
      const numSteps = 58, helixRadius = minDim * 0.22, helixHeight = Math.max(height * 1.1, 750), stepY = helixHeight / numSteps, turns = 3.5;
      for (let i = 0; i < numSteps; i++) {
        const t = (i / numSteps) * (Math.PI * 2 * turns), y = (i - numSteps / 2) * stepY;
        const nodeA = new HelixNode(Math.cos(t) * helixRadius, y, Math.sin(t) * helixRadius, 'A', i);
        const nodeB = new HelixNode(Math.cos(t + Math.PI) * helixRadius, y, Math.sin(t + Math.PI) * helixRadius, 'B', i);
        helixNodes.push(nodeA); helixNodes.push(nodeB); basePairs.push({ nodeA, nodeB, index: i });
      }

      // Mode 6: Constellation Sphere
      constellationNodes = [];
      const sphereR = minDim * 0.28;
      for (let i = 0; i < 90; i++) constellationNodes.push(new ConstellationNode(sphereR));
      orbitalSatellitesM6 = techHighlights.map((tech, idx) => ({
        ...tech, speed: 0.006 + idx * 0.0015, angle: (idx * Math.PI * 2) / techHighlights.length, orbitRadius: sphereR * 1.35,
        tiltX: 0.4 + (idx * 0.25), tiltY: 0.2 + (idx * 0.3), projected: { x: 0, y: 0, scale: 1, z: 0 }
      }));

      // Mode 7: 4D Tesseract
      tesseractVertices = []; tesseractEdges = [];
      for (let i = 0; i < 16; i++) {
        tesseractVertices.push({ x: (i & 1 ? 1 : -1), y: (i & 2 ? 1 : -1), z: (i & 4 ? 1 : -1), w: (i & 8 ? 1 : -1) });
      }
      for (let i = 0; i < 16; i++) {
        for (let j = i + 1; j < 16; j++) {
          let diff = 0;
          for (let b = 0; b < 4; b++) if (((i >> b) & 1) !== ((j >> b) & 1)) diff++;
          if (diff === 1) tesseractEdges.push([i, j]);
        }
      }
      tesseractSatellites = techHighlights.map((tech, idx) => ({
        ...tech, angle: (idx * Math.PI * 2) / techHighlights.length, speed: 0.008 + idx * 0.001, radius: minDim * 0.35, projected: { x: 0, y: 0, scale: 1, z: 0 }
      }));

      // Mode 8: City Matrix
      cityPillars = []; dataPulses = [];
      const gridCount = 7, spacing = minDim * 0.085, pillarSize = spacing * 0.65;
      let techIdx = 0;
      for (let ix = -Math.floor(gridCount / 2); ix <= Math.floor(gridCount / 2); ix++) {
        for (let iz = -Math.floor(gridCount / 2); iz <= Math.floor(gridCount / 2); iz++) {
          const isCenter = ix === 0 && iz === 0;
          const distFromCenter = Math.hypot(ix, iz);
          const heightMax = isCenter ? minDim * 0.32 : Math.max(30, (3.5 - distFromCenter) * (minDim * 0.08) + Math.random() * 40);
          let tech = null;
          if ((Math.abs(ix) + Math.abs(iz) === 2 || isCenter) && techIdx < techHighlights.length) tech = techHighlights[techIdx++];
          const color = tech ? tech.color : (Math.random() > 0.4 ? '#0F2C59' : '#C59B27');
          cityPillars.push(new CityPillar(ix * spacing, iz * spacing, pillarSize, heightMax, color, tech));
        }
      }

      // Mode 9: Blackhole
      vortexParticles = [];
      for (let i = 0; i < 220; i++) vortexParticles.push(new VortexParticle(minDim));
      vortexSatellites = techHighlights.map((tech, idx) => ({
        ...tech, angle: (idx * Math.PI * 2) / techHighlights.length, speed: 0.009 + idx * 0.001, orbitR: minDim * (0.24 + (idx % 3) * 0.06), projected: { x: 0, y: 0, scale: 1, z: 0 }
      }));

      // Mode 10: Torus
      torusRings = [];
      const R_major = minDim * 0.26, r_minor = minDim * 0.09;
      for (let u = 0; u < 24; u++) {
        const theta = (u / 24) * Math.PI * 2;
        for (let v = 0; v < 14; v++) {
          const phi = (v / 14) * Math.PI * 2;
          torusRings.push({
            x: (R_major + r_minor * Math.cos(phi)) * Math.cos(theta),
            y: (R_major + r_minor * Math.cos(phi)) * Math.sin(theta),
            z: r_minor * Math.sin(phi), u, v, color: (u + v) % 2 === 0 ? '#0F2C59' : '#C59B27'
          });
        }
      }
      torusSatellites = techHighlights.map((tech, idx) => ({
        ...tech, angle: (idx * Math.PI * 2) / techHighlights.length, speed: 0.008 + idx * 0.0012, orbitR: R_major * 1.35, projected: { x: 0, y: 0, scale: 1, z: 0 }
      }));
    };

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      targetMouseX = width / 2; targetMouseY = height / 2; mouseX = width / 2; mouseY = height / 2;
      initScene();
    };

    let animationFrameId;
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => { isVisible = entry.isIntersecting; }, { threshold: 0.05 });
    observer.observe(canvas);

    // ==============================================================
    // MAIN ANIMATION LOOP
    // ==============================================================
    const animate = () => {
      if (isVisible && !isPausedRef.current) {
        globalTime += 0.015;
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        ctx.fillStyle = 'rgba(243, 248, 249, 0.28)';
        ctx.fillRect(0, 0, width, height);

        const centerX = width / 2, centerY = height / 2;
        const fov = 620;

        if (autoRotate && !isDragging) {
          targetRotationY += 0.0022;
          targetRotationX = (mode === 8 || mode === 9 ? 0.65 : 0.22) + Math.sin(globalTime * 0.4) * 0.06;
        }

        rotationX += (targetRotationX - rotationX) * 0.08;
        rotationY += (targetRotationY - rotationY) * 0.08;

        const camTiltX = ((mouseY - height / 2) / height) * 0.35;
        const camTiltY = ((mouseX - width / 2) / width) * 0.45;

        // Render Background Matrix Code Tokens (All Modes)
        codeParticles.forEach(p => {
          p.update();
          const rotated = rotate3D(p.x, p.y, p.z, rotationX * 0.3, rotationY * 0.3);
          const scale = fov / (fov + rotated.z + 400);
          if (scale > 0) {
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha * scale;
            ctx.font = `${Math.max(9, Math.round(12 * scale))}px 'Fira Code', monospace`;
            ctx.fillText(p.text, rotated.x * scale + centerX, rotated.y * scale + centerY);
            ctx.globalAlpha = 1;
          }
        });

        // -------------------------------------------------------------
        // MODE 0: 3D TOPOGRAPHICAL FREQUENCY WAVEFORM TERRAIN
        // -------------------------------------------------------------
        if (mode === 0) {
          const gridPoints = [];
          const startX = -((terrainCols - 1) * terrainSpacing) / 2, startZ = -100, baseY = height * 0.18;
          for (let r = 0; r < terrainRows; r++) {
            gridPoints[r] = [];
            const zWorld = startZ + r * terrainSpacing * 1.5;
            for (let c = 0; c < terrainCols; c++) {
              const xWorld = startX + c * terrainSpacing;
              const distToCenter = Math.hypot(xWorld, zWorld - 400);
              const wave1 = Math.sin(xWorld * 0.008 + globalTime * 2.2) * 45;
              const wave2 = Math.cos(zWorld * 0.009 - globalTime * 1.8) * 35;
              const wave3 = Math.sin((xWorld + zWorld) * 0.005 + globalTime * 1.5) * 30;
              const ripple = Math.sin(distToCenter * 0.015 - globalTime * 3) * 20;
              const yWorld = baseY - (wave1 + wave2 + wave3 + ripple);

              const xRot = xWorld * Math.cos(camTiltY) - (zWorld - 400) * Math.sin(camTiltY);
              const zRot = xWorld * Math.sin(camTiltY) + (zWorld - 400) * Math.cos(camTiltY) + 400;
              const yRot = yWorld + (zRot - 400) * camTiltX;

              gridPoints[r][c] = project3D(xRot, yRot, zRot, 600);
            }
          }

          for (let r = 0; r < terrainRows; r++) {
            for (let c = 0; c < terrainCols; c++) {
              const pt = gridPoints[r][c];
              if (pt.scale <= 0) continue;
              if (c < terrainCols - 1 && gridPoints[r][c + 1].scale > 0) {
                const alpha = Math.max(0.12, Math.min(0.75, (pt.z + 100) / 900));
                ctx.beginPath(); ctx.moveTo(pt.px, pt.py); ctx.lineTo(gridPoints[r][c + 1].px, gridPoints[r][c + 1].py);
                ctx.strokeStyle = `rgba(15, 44, 89, ${alpha * 0.85})`; ctx.lineWidth = Math.max(0.8, pt.scale * 1.6); ctx.stroke();
              }
              if (r < terrainRows - 1 && gridPoints[r + 1][c].scale > 0) {
                const alpha = Math.max(0.12, Math.min(0.75, (pt.z + 100) / 900));
                ctx.beginPath(); ctx.moveTo(pt.px, pt.py); ctx.lineTo(gridPoints[r + 1][c].px, gridPoints[r + 1][c].py);
                ctx.strokeStyle = `rgba(197, 155, 39, ${alpha * 0.75})`; ctx.lineWidth = Math.max(0.8, pt.scale * 1.4); ctx.stroke();
              }
            }
          }

          const beaconIndices = [
            { r: 8, c: 6, tech: techHighlights[0] }, { r: 12, c: 14, tech: techHighlights[1] }, { r: 16, c: 22, tech: techHighlights[2] },
            { r: 10, c: 30, tech: techHighlights[3] }, { r: 20, c: 8, tech: techHighlights[4] }, { r: 22, c: 18, tech: techHighlights[5] },
            { r: 18, c: 28, tech: techHighlights[6] },
          ];
          beaconIndices.forEach(({ r, c, tech }) => {
            const pt = gridPoints[r] && gridPoints[r][c];
            if (!pt || pt.scale <= 0) return;
            const topY = pt.py - 60 * pt.scale;
            ctx.save();
            ctx.globalAlpha = Math.max(0.5, (pt.z + 100) / 800);
            ctx.beginPath(); ctx.moveTo(pt.px, pt.py); ctx.lineTo(pt.px, topY); ctx.strokeStyle = tech.color; ctx.lineWidth = 1.8 * pt.scale; ctx.stroke();
            ctx.beginPath(); ctx.arc(pt.px, pt.py, 8 * pt.scale, 0, Math.PI * 2); ctx.strokeStyle = tech.color; ctx.stroke();
            const pillW = 96 * pt.scale, pillH = 28 * pt.scale, pillX = pt.px - pillW / 2, pillY = topY - pillH / 2;
            ctx.shadowBlur = 14 * pt.scale; ctx.shadowColor = tech.color; ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.roundRect(pillX, pillY, pillW, pillH, 14 * pt.scale); ctx.fill();
            ctx.lineWidth = 1.4 * pt.scale; ctx.strokeStyle = tech.color; ctx.stroke(); ctx.shadowBlur = 0;
            ctx.fillStyle = tech.color; ctx.font = `bold ${Math.round(11 * pt.scale)}px 'Sora', sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(`${tech.icon} ${tech.name}`, pillX + pillW / 2, pillY + pillH / 2 + 0.5);
            ctx.restore();
          });
        }

        // -------------------------------------------------------------
        // MODE 1: 3D INFINITE CYBER TUNNEL & WARP SPEED DATA HIGHWAY
        // -------------------------------------------------------------
        else if (mode === 1) {
          warpParticles.forEach(p => {
            p.update();
            const projCurr = project3D(p.x + (mouseX - width / 2) * 0.4, p.y + (mouseY - height / 2) * 0.4, p.z, 550);
            const projPrev = project3D(p.x + (mouseX - width / 2) * 0.4, p.y + (mouseY - height / 2) * 0.4, p.z + p.speed * 2.5, 550);
            if (projCurr.scale > 0 && projPrev.scale > 0) {
              ctx.beginPath(); ctx.moveTo(projPrev.px, projPrev.py); ctx.lineTo(projCurr.px, projCurr.py);
              ctx.strokeStyle = p.color; ctx.globalAlpha = Math.max(0.2, Math.min(0.9, (1200 - p.z) / 1200));
              ctx.lineWidth = Math.max(1, p.size * projCurr.scale * 2); ctx.stroke(); ctx.globalAlpha = 1;
            }
          });

          tunnelRings.forEach(ring => {
            ring.z -= 4.5; if (ring.z <= 20) ring.z = 1200;
            const projCenter = project3D((mouseX - width / 2) * 0.4, (mouseY - height / 2) * 0.4, ring.z, 550);
            if (projCenter.scale > 0) {
              const rProj = ring.maxRadius * projCenter.scale, alpha = Math.max(0.1, Math.min(0.8, (1200 - ring.z) / 900));
              ctx.save(); ctx.beginPath();
              for (let s = 0; s <= 8; s++) {
                const a = (s / 8) * Math.PI * 2 + globalTime * 0.2;
                const gx = projCenter.px + Math.cos(a) * rProj, gy = projCenter.py + Math.sin(a) * rProj;
                if (s === 0) ctx.moveTo(gx, gy); else ctx.lineTo(gx, gy);
              }
              ctx.strokeStyle = `rgba(15, 44, 89, ${alpha * 0.7})`; ctx.lineWidth = Math.max(1, projCenter.scale * 2.8); ctx.stroke();
              ctx.restore();
            }
          });

          tunnelTechs.forEach(tech => {
            tech.z -= 3.8; if (tech.z <= 20) tech.z = 1200;
            const tx = Math.cos(tech.angle + globalTime * 0.3) * tech.orbitRadius + (mouseX - width / 2) * 0.4;
            const ty = Math.sin(tech.angle + globalTime * 0.3) * tech.orbitRadius + (mouseY - height / 2) * 0.4;
            const proj = project3D(tx, ty, tech.z, 550);
            if (proj.scale > 0 && tech.z > 30) {
              ctx.save(); ctx.globalAlpha = Math.max(0.2, Math.min(1, (1200 - tech.z) / 800));
              const pillW = 98 * proj.scale, pillH = 28 * proj.scale, pillX = proj.px - pillW / 2, pillY = proj.py - pillH / 2;
              ctx.shadowBlur = 14 * proj.scale; ctx.shadowColor = tech.color; ctx.fillStyle = '#ffffff';
              ctx.beginPath(); ctx.roundRect(pillX, pillY, pillW, pillH, 14 * proj.scale); ctx.fill();
              ctx.lineWidth = 1.5 * proj.scale; ctx.strokeStyle = tech.color; ctx.stroke(); ctx.shadowBlur = 0;
              ctx.fillStyle = tech.color; ctx.font = `bold ${Math.round(11 * proj.scale)}px 'Sora', sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText(`${tech.icon} ${tech.name}`, pillX + pillW / 2, pillY + pillH / 2 + 0.5);
              ctx.restore();
            }
          });
        }

        // -------------------------------------------------------------
        // MODE 2: 4D CLIFFORD TORUS & HYPERSPHERICAL WAVE MESH
        // -------------------------------------------------------------
        else if (mode === 2) {
          const t = globalTime * 0.8, minDim = Math.min(width, height), r4D = minDim * 0.32;
          const projectedGrid = [];
          for (let u = 0; u < cliffordU; u++) {
            projectedGrid[u] = [];
            const theta = (u / cliffordU) * Math.PI * 2;
            for (let v = 0; v < cliffordV; v++) {
              const phi = (v / cliffordV) * Math.PI * 2;
              const w4 = Math.sin(phi) * Math.cos(t) - Math.cos(phi) * Math.sin(t);
              const z4 = Math.sin(phi) * Math.sin(t) + Math.cos(phi) * Math.cos(t);
              const wFactor = 1 / (2.4 - w4);
              const x3 = Math.cos(theta) * wFactor * r4D, y3 = Math.sin(theta) * wFactor * r4D, z3 = z4 * wFactor * r4D;
              const xTilt = x3 * Math.cos(camTiltY) - z3 * Math.sin(camTiltY);
              const zTilt = x3 * Math.sin(camTiltY) + z3 * Math.cos(camTiltY) + 380;
              const yTilt = y3 + (zTilt - 380) * camTiltX;
              projectedGrid[u][v] = project3D(xTilt, yTilt, zTilt, 550);
            }
          }

          for (let u = 0; u < cliffordU; u++) {
            for (let v = 0; v < cliffordV; v++) {
              const p = projectedGrid[u][v];
              if (p.scale <= 0) continue;
              const nextU = projectedGrid[(u + 1) % cliffordU][v];
              if (nextU.scale > 0) {
                ctx.beginPath(); ctx.moveTo(p.px, p.py); ctx.lineTo(nextU.px, nextU.py);
                ctx.strokeStyle = `rgba(15, 44, 89, ${Math.max(0.1, Math.min(0.75, (p.z + 200) / 600))})`; ctx.lineWidth = Math.max(0.8, p.scale * 1.5); ctx.stroke();
              }
              const nextV = projectedGrid[u][(v + 1) % cliffordV];
              if (nextV.scale > 0) {
                ctx.beginPath(); ctx.moveTo(p.px, p.py); ctx.lineTo(nextV.px, nextV.py);
                ctx.strokeStyle = `rgba(197, 155, 39, ${Math.max(0.1, Math.min(0.75, (p.z + 200) / 600))})`; ctx.lineWidth = Math.max(0.8, p.scale * 1.5); ctx.stroke();
              }
            }
          }

          techHighlights.forEach((tech, idx) => {
            const pt = projectedGrid[Math.floor((idx / techHighlights.length) * cliffordU)][Math.floor(((idx * 2) % cliffordV))];
            if (!pt || pt.scale <= 0) return;
            ctx.save(); ctx.globalAlpha = Math.max(0.4, (pt.z + 200) / 600);
            const pillW = 96 * pt.scale, pillH = 28 * pt.scale, pillX = pt.px - pillW / 2, pillY = pt.py - pillH / 2;
            ctx.shadowBlur = 12 * pt.scale; ctx.shadowColor = tech.color; ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.roundRect(pillX, pillY, pillW, pillH, 14 * pt.scale); ctx.fill();
            ctx.lineWidth = 1.5 * pt.scale; ctx.strokeStyle = tech.color; ctx.stroke(); ctx.shadowBlur = 0;
            ctx.fillStyle = tech.color; ctx.font = `bold ${Math.round(11 * pt.scale)}px 'Sora', sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(`${tech.icon} ${tech.name}`, pillX + pillW / 2, pillY + pillH / 2 + 0.5);
            ctx.restore();
          });
        }

        // -------------------------------------------------------------
        // MODE 3: 3D CYBERNETIC HUMANOID AI / NEURAL SYNAPSE MESH
        // -------------------------------------------------------------
        else if (mode === 3) {
          if (Math.random() < 0.12 && aiSynapses.length > 0) {
            const [n1, n2] = aiSynapses[Math.floor(Math.random() * aiSynapses.length)];
            aiPulses.push(new SynapsePulse(n1, n2, Math.random() > 0.4 ? '#0F2C59' : '#C59B27'));
          }
          aiPulses = aiPulses.filter(pulse => !pulse.update());

          aiFaceNodes.forEach(node => {
            const xRot = node.origX * Math.cos(camTiltY * 1.5) - (node.origZ - 100) * Math.sin(camTiltY * 1.5);
            const zRot = node.origX * Math.sin(camTiltY * 1.5) + (node.origZ - 100) * Math.cos(camTiltY * 1.5) + 380;
            const yRot = node.origY + (zRot - 380) * (camTiltX * 1.5);
            node.currentProj = project3D(xRot, yRot, zRot, 550);
          });

          aiSynapses.forEach(([n1, n2]) => {
            const p1 = n1.currentProj, p2 = n2.currentProj;
            if (p1 && p2 && p1.scale > 0 && p2.scale > 0) {
              ctx.beginPath(); ctx.moveTo(p1.px, p1.py); ctx.lineTo(p2.px, p2.py);
              ctx.strokeStyle = `rgba(15, 44, 89, ${Math.max(0.12, Math.min(0.8, ((p1.z + p2.z) / 2 + 100) / 500)) * 0.75})`;
              ctx.lineWidth = Math.max(0.8, p1.scale * 1.6); ctx.stroke();
            }
          });

          aiPulses.forEach(pulse => {
            const p1 = pulse.from.currentProj, p2 = pulse.to.currentProj;
            if (p1 && p2 && p1.scale > 0 && p2.scale > 0) {
              ctx.beginPath(); ctx.arc(p1.px + (p2.px - p1.px) * pulse.progress, p1.py + (p2.py - p1.py) * pulse.progress, 4 * p1.scale, 0, Math.PI * 2);
              ctx.fillStyle = pulse.color; ctx.shadowBlur = 12 * p1.scale; ctx.shadowColor = pulse.color; ctx.fill(); ctx.shadowBlur = 0;
            }
          });

          techHighlights.forEach((tech, idx) => {
            const p = aiFaceNodes[(idx * 24 + 10) % aiFaceNodes.length]?.currentProj;
            if (!p || p.scale <= 0) return;
            ctx.save(); ctx.globalAlpha = Math.max(0.4, (p.z + 100) / 500);
            const offsetDist = (idx % 2 === 0 ? 55 : -55) * p.scale;
            ctx.beginPath(); ctx.moveTo(p.px, p.py); ctx.lineTo(p.px + offsetDist, p.py - 20 * p.scale); ctx.strokeStyle = tech.color; ctx.lineWidth = 1.2 * p.scale; ctx.stroke();
            const pillW = 95 * p.scale, pillH = 28 * p.scale, pillX = p.px + offsetDist - pillW / 2, pillY = p.py - 20 * p.scale - pillH / 2;
            ctx.shadowBlur = 12 * p.scale; ctx.shadowColor = tech.color; ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.roundRect(pillX, pillY, pillW, pillH, 14 * p.scale); ctx.fill();
            ctx.lineWidth = 1.5 * p.scale; ctx.strokeStyle = tech.color; ctx.stroke(); ctx.shadowBlur = 0;
            ctx.fillStyle = tech.color; ctx.font = `bold ${Math.round(11 * p.scale)}px 'Sora', sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(`${tech.icon} ${tech.name}`, pillX + pillW / 2, pillY + pillH / 2 + 0.5);
            ctx.restore();
          });
        }

        // -------------------------------------------------------------
        // MODE 4: CYBERNETIC HOLOGRAM CORE
        // -------------------------------------------------------------
        else if (mode === 4) {
          const coreGradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, Math.min(width, height) * 0.18);
          coreGradient.addColorStop(0, 'rgba(197, 155, 39, 0.25)'); coreGradient.addColorStop(0.5, 'rgba(15, 44, 89, 0.12)'); coreGradient.addColorStop(1, 'rgba(243, 248, 249, 0)');
          ctx.fillStyle = coreGradient; ctx.beginPath(); ctx.arc(centerX, centerY, Math.min(width, height) * 0.18, 0, Math.PI * 2); ctx.fill();

          const projectedCore = [];
          coreParticles.forEach(p => {
            p.update();
            const rot = rotate3D(p.x, p.y, p.z, rotationX, rotationY + globalTime * 0.2);
            const scale = fov / (fov + rot.z);
            if (scale > 0) projectedCore.push({ px: rot.x * scale + centerX, py: rot.y * scale + centerY, scale, z: rot.z, color: p.color, size: p.size });
          });

          for (let i = 0; i < projectedCore.length; i++) {
            for (let j = i + 1; j < projectedCore.length; j++) {
              const p1 = projectedCore[i], p2 = projectedCore[j], dist = Math.hypot(p1.px - p2.px, p1.py - p2.py);
              if (dist < 46) {
                ctx.beginPath(); ctx.moveTo(p1.px, p1.py); ctx.lineTo(p2.px, p2.py);
                ctx.strokeStyle = `rgba(15, 44, 89, ${(1 - dist / 46) * 0.35})`; ctx.lineWidth = 0.8; ctx.stroke();
              }
            }
          }
          projectedCore.forEach(p => {
            ctx.beginPath(); ctx.arc(p.px, p.py, p.size * p.scale, 0, Math.PI * 2); ctx.fillStyle = p.color; ctx.fill();
          });

          gyroRings.forEach(ring => {
            ring.update(); ctx.save(); ctx.lineWidth = 1.6; ctx.strokeStyle = ring.color; ctx.setLineDash(ring.dashPattern); ctx.beginPath();
            for (let i = 0; i <= 64; i++) {
              const angle = (i / 64) * Math.PI * 2;
              const rRot = rotate3D(Math.cos(angle) * ring.radius, Math.sin(angle) * ring.radius, 0, ring.tiltX, ring.tiltY, ring.tiltZ + ring.currentAngle);
              const vRot = rotate3D(rRot.x, rRot.y, rRot.z, rotationX, rotationY);
              const scale = fov / (fov + vRot.z);
              if (scale > 0) { if (i === 0) ctx.moveTo(vRot.x * scale + centerX, vRot.y * scale + centerY); else ctx.lineTo(vRot.x * scale + centerX, vRot.y * scale + centerY); }
            }
            ctx.stroke(); ctx.restore();
          });

          satellitesM4.forEach(sat => {
            sat.currentAngle += sat.speed;
            const sx = Math.cos(sat.currentAngle) * sat.radius, sy = Math.sin(sat.currentAngle) * sat.radius, sz = Math.sin(sat.currentAngle * 2) * (sat.radius * 0.3);
            const vRot = rotate3D(rotate3D(sx, sy, sz, sat.tiltX, sat.tiltY).x, rotate3D(sx, sy, sz, sat.tiltX, sat.tiltY).y, rotate3D(sx, sy, sz, sat.tiltX, sat.tiltY).z, rotationX, rotationY);
            const scale = fov / (fov + vRot.z);
            sat.projected = { x: vRot.x * scale + centerX, y: vRot.y * scale + centerY, scale: Math.max(0, scale), z: vRot.z };
          });

          laserBeams = laserBeams.filter(beam => !beam.update());
          if (Math.random() < 0.05 && satellitesM4.length > 1) {
            laserBeams.push(new LaserPulse(satellitesM4[Math.floor(Math.random() * satellitesM4.length)], null, '#C59B27'));
          }
          laserBeams.forEach(beam => {
            if (beam.satA?.projected?.scale > 0) {
              const pA = beam.satA.projected;
              ctx.beginPath(); ctx.moveTo(pA.x, pA.y); ctx.lineTo(centerX, centerY); ctx.strokeStyle = beam.color; ctx.globalAlpha = 0.25; ctx.stroke(); ctx.globalAlpha = 1;
            }
          });

          [...satellitesM4].sort((a, b) => a.projected.z - b.projected.z).forEach(sat => {
            const p = sat.projected; if (p.scale <= 0) return;
            ctx.save(); ctx.globalAlpha = Math.max(0.4, Math.min(1, (p.z + 300) / 600));
            ctx.beginPath(); ctx.moveTo(centerX, centerY); ctx.lineTo(p.x, p.y); ctx.strokeStyle = `rgba(15, 44, 89, 0.15)`; ctx.stroke();
            const pillW = 96 * p.scale, pillH = 28 * p.scale, pillX = p.x + 12 * p.scale, pillY = p.y - pillH / 2;
            ctx.shadowBlur = p.z > -50 ? 14 * p.scale : 4; ctx.shadowColor = sat.color; ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.roundRect(pillX, pillY, pillW, pillH, 14 * p.scale); ctx.fill();
            ctx.lineWidth = 1.4 * p.scale; ctx.strokeStyle = sat.color; ctx.stroke(); ctx.shadowBlur = 0;
            ctx.fillStyle = sat.color; ctx.font = `bold ${Math.round(11 * p.scale)}px 'Sora', sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(`${sat.icon} ${sat.name}`, pillX + pillW / 2, pillY + pillH / 2 + 0.5);
            ctx.restore();
          });
        }

        // -------------------------------------------------------------
        // MODE 5: CYBER MATRIX DNA HELIX
        // -------------------------------------------------------------
        else if (mode === 5) {
          helixNodes.forEach(node => {
            const rotated = rotate3D(node.x, node.y, node.z, rotationX, rotationY);
            node.rx = rotated.x; node.ry = rotated.y; node.rz = rotated.z;
            const scale = fov / (fov + rotated.z);
            node.projected = { x: rotated.x * scale + centerX, y: rotated.y * scale + centerY, scale: Math.max(0, scale) };
          });

          basePairs.forEach(pair => {
            const pA = pair.nodeA.projected, pB = pair.nodeB.projected;
            if (pA.scale > 0 && pB.scale > 0) {
              ctx.beginPath(); ctx.moveTo(pA.x, pA.y); ctx.lineTo(pB.x, pB.y);
              ctx.strokeStyle = `rgba(15, 44, 89, 0.3)`; ctx.lineWidth = Math.max(0.8, pA.scale * 1.5); ctx.stroke();
            }
          });

          const strandANodes = helixNodes.filter(n => n.strand === 'A'), strandBNodes = helixNodes.filter(n => n.strand === 'B');
          const drawSpine = (nodes, col) => {
            for (let i = 0; i < nodes.length - 1; i++) {
              if (nodes[i].projected.scale > 0 && nodes[i + 1].projected.scale > 0) {
                ctx.beginPath(); ctx.moveTo(nodes[i].projected.x, nodes[i].projected.y); ctx.lineTo(nodes[i + 1].projected.x, nodes[i + 1].projected.y);
                ctx.strokeStyle = col; ctx.lineWidth = Math.max(1.5, nodes[i].projected.scale * 3); ctx.stroke();
              }
            }
          };
          drawSpine(strandANodes, 'rgba(15, 44, 89, 0.6)'); drawSpine(strandBNodes, 'rgba(197, 155, 39, 0.6)');
          helixPulses = helixPulses.filter(pulse => !pulse.update());
          helixPulses.forEach(pulse => pulse.draw(pulse.isStrandA ? strandANodes : strandBNodes));

          helixNodes.forEach(node => {
            if (node.projected.scale > 0) {
              ctx.beginPath(); ctx.arc(node.projected.x, node.projected.y, node.baseSize * node.projected.scale, 0, Math.PI * 2);
              ctx.fillStyle = node.strand === 'A' ? '#0F2C59' : '#C59B27'; ctx.fill();
            }
          });

          const stepIndices = [4, 12, 20, 28, 36, 44, 52];
          techHighlights.map((t, idx) => ({
            ...t, node: (idx % 2 === 0 ? strandANodes : strandBNodes)[stepIndices[idx]], isStrandA: idx % 2 === 0
          })).filter(t => t.node?.projected?.scale > 0).sort((a, b) => a.node.rz - b.node.rz).forEach(item => {
            const p = item.node.projected, pillW = 95 * p.scale, pillH = 28 * p.scale, offsetSide = item.isStrandA ? 45 * p.scale : -45 * p.scale;
            ctx.save(); ctx.globalAlpha = Math.max(0.4, Math.min(1, (item.node.rz + 250) / 500));
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + offsetSide, p.y); ctx.strokeStyle = item.color; ctx.stroke();
            ctx.shadowBlur = 12 * p.scale; ctx.shadowColor = item.color; ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.roundRect(p.x + offsetSide - pillW / 2, p.y - pillH / 2, pillW, pillH, 14 * p.scale); ctx.fill();
            ctx.lineWidth = 1.5 * p.scale; ctx.strokeStyle = item.color; ctx.stroke(); ctx.shadowBlur = 0;
            ctx.fillStyle = item.color; ctx.font = `bold ${Math.round(11 * p.scale)}px 'Sora', sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(`${item.icon} ${item.name}`, p.x + offsetSide, p.y + 0.5); ctx.restore();
          });
        }

        // -------------------------------------------------------------
        // MODE 6: QUANTUM CONSTELLATION SPHERE
        // -------------------------------------------------------------
        else if (mode === 6) {
          const projectedSphere = [];
          constellationNodes.forEach(node => {
            node.update();
            const rot = rotate3D(node.x, node.y, node.z, rotationX, rotationY);
            const scale = fov / (fov + rot.z);
            if (scale > 0) projectedSphere.push({ px: rot.x * scale + centerX, py: rot.y * scale + centerY, scale, z: rot.z, color: node.color, size: node.size });
          });
          for (let i = 0; i < projectedSphere.length; i++) {
            for (let j = i + 1; j < projectedSphere.length; j++) {
              const p1 = projectedSphere[i], p2 = projectedSphere[j], dist = Math.hypot(p1.px - p2.px, p1.py - p2.py);
              if (dist < 65) {
                ctx.beginPath(); ctx.moveTo(p1.px, p1.py); ctx.lineTo(p2.px, p2.py);
                ctx.strokeStyle = `rgba(15, 44, 89, ${(1 - dist / 65) * 0.4})`; ctx.lineWidth = 0.9; ctx.stroke();
              }
            }
          }
          projectedSphere.forEach(p => {
            ctx.beginPath(); ctx.arc(p.px, p.py, p.size * p.scale, 0, Math.PI * 2); ctx.fillStyle = p.color; ctx.fill();
          });

          orbitalSatellitesM6.forEach(sat => {
            sat.angle += sat.speed;
            const ox = Math.cos(sat.angle) * sat.orbitRadius, oy = Math.sin(sat.angle) * (sat.orbitRadius * 0.4), oz = Math.sin(sat.angle) * sat.orbitRadius;
            const viewRot = rotate3D(rotate3D(ox, oy, oz, sat.tiltX, sat.tiltY).x, rotate3D(ox, oy, oz, sat.tiltX, sat.tiltY).y, rotate3D(ox, oy, oz, sat.tiltX, sat.tiltY).z, rotationX, rotationY);
            const scale = fov / (fov + viewRot.z);
            sat.projected = { x: viewRot.x * scale + centerX, y: viewRot.y * scale + centerY, scale: Math.max(0, scale), z: viewRot.z };
          });

          [...orbitalSatellitesM6].sort((a, b) => a.projected.z - b.projected.z).forEach(sat => {
            const p = sat.projected; if (p.scale <= 0) return;
            ctx.save(); ctx.globalAlpha = Math.max(0.4, Math.min(1, (p.z + 300) / 600));
            const pillW = 96 * p.scale, pillH = 28 * p.scale;
            ctx.shadowBlur = 14 * p.scale; ctx.shadowColor = sat.color; ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.roundRect(p.x - pillW / 2, p.y - pillH / 2, pillW, pillH, 14 * p.scale); ctx.fill();
            ctx.lineWidth = 1.4 * p.scale; ctx.strokeStyle = sat.color; ctx.stroke(); ctx.shadowBlur = 0;
            ctx.fillStyle = sat.color; ctx.font = `bold ${Math.round(11 * p.scale)}px 'Sora', sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(`${sat.icon} ${sat.name}`, p.x, p.y + 0.5); ctx.restore();
          });
        }

        // -------------------------------------------------------------
        // MODE 7: 4D QUANTUM TESSERACT HYPERCUBE
        // -------------------------------------------------------------
        else if (mode === 7) {
          const t4 = globalTime * 0.8, cubeScale = Math.min(width, height) * 0.22;
          const cos4 = Math.cos(t4), sin4 = Math.sin(t4);
          const projectedTesseract = tesseractVertices.map(v => {
            const x4 = v.x * cos4 - v.w * sin4, w4 = v.x * sin4 + v.w * cos4, wFactor = 1 / (2.5 - w4);
            const viewRot = rotate3D(x4 * wFactor * cubeScale, v.y * wFactor * cubeScale, v.z * wFactor * cubeScale, rotationX, rotationY);
            const scale = fov / (fov + viewRot.z);
            return { px: viewRot.x * scale + centerX, py: viewRot.y * scale + centerY, scale, z: viewRot.z, w: w4 };
          });

          tesseractEdges.forEach(([i, j]) => {
            const p1 = projectedTesseract[i], p2 = projectedTesseract[j];
            if (p1.scale > 0 && p2.scale > 0) {
              ctx.beginPath(); ctx.moveTo(p1.px, p1.py); ctx.lineTo(p2.px, p2.py);
              ctx.strokeStyle = `rgba(15, 44, 89, ${Math.max(0.15, Math.min(0.8, ((p1.z + p2.z) / 2 + 300) / 600))})`; ctx.lineWidth = Math.max(1, p1.scale * 2.2); ctx.stroke();
            }
          });

          projectedTesseract.forEach(p => {
            if (p.scale > 0) {
              ctx.beginPath(); ctx.arc(p.px, p.py, 3.5 * p.scale, 0, Math.PI * 2);
              ctx.fillStyle = p.w > 0 ? '#C59B27' : '#0F2C59'; ctx.fill();
            }
          });

          tesseractSatellites.forEach(sat => {
            sat.angle += sat.speed;
            const ox = Math.cos(sat.angle) * sat.radius, oy = Math.sin(sat.angle * 1.5) * (sat.radius * 0.4), oz = Math.sin(sat.angle) * sat.radius;
            const viewRot = rotate3D(ox, oy, oz, rotationX, rotationY);
            const scale = fov / (fov + viewRot.z);
            sat.projected = { x: viewRot.x * scale + centerX, y: viewRot.y * scale + centerY, scale: Math.max(0, scale), z: viewRot.z };
          });

          [...tesseractSatellites].sort((a, b) => a.projected.z - b.projected.z).forEach(sat => {
            const p = sat.projected; if (p.scale <= 0) return;
            ctx.save(); ctx.globalAlpha = Math.max(0.4, Math.min(1, (p.z + 300) / 600));
            const pillW = 96 * p.scale, pillH = 28 * p.scale;
            ctx.shadowBlur = 14 * p.scale; ctx.shadowColor = sat.color; ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.roundRect(p.x - pillW / 2, p.y - pillH / 2, pillW, pillH, 14 * p.scale); ctx.fill();
            ctx.lineWidth = 1.4 * p.scale; ctx.strokeStyle = sat.color; ctx.stroke(); ctx.shadowBlur = 0;
            ctx.fillStyle = sat.color; ctx.font = `bold ${Math.round(11 * p.scale)}px 'Sora', sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(`${sat.icon} ${sat.name}`, p.x, p.y + 0.5); ctx.restore();
          });
        }

        // -------------------------------------------------------------
        // MODE 8: CYBERPUNK CITY MATRIX
        // -------------------------------------------------------------
        else if (mode === 8) {
          if (Math.random() < 0.08 && cityPillars.length > 0) dataPulses.push(new DataPulse(cityPillars[Math.floor(Math.random() * cityPillars.length)]));
          dataPulses = dataPulses.filter(p => !p.update());

          cityPillars.map(p => {
            p.update(globalTime);
            return { pillar: p, z: rotate3D(p.gridX, 80, p.gridZ, rotationX, rotationY).z };
          }).sort((a, b) => a.z - b.z).forEach(({ pillar }) => {
            const halfS = pillar.size / 2, baseY = 80, topY = baseY - pillar.currentHeight;
            const corners = [
              { x: pillar.gridX - halfS, y: baseY, z: pillar.gridZ - halfS }, { x: pillar.gridX + halfS, y: baseY, z: pillar.gridZ - halfS },
              { x: pillar.gridX + halfS, y: baseY, z: pillar.gridZ + halfS }, { x: pillar.gridX - halfS, y: baseY, z: pillar.gridZ + halfS },
              { x: pillar.gridX - halfS, y: topY, z: pillar.gridZ - halfS }, { x: pillar.gridX + halfS, y: topY, z: pillar.gridZ - halfS },
              { x: pillar.gridX + halfS, y: topY, z: pillar.gridZ + halfS }, { x: pillar.gridX - halfS, y: topY, z: pillar.gridZ + halfS },
            ];
            const proj = corners.map(c => {
              const rot = rotate3D(c.x, c.y, c.z, rotationX, rotationY);
              const scale = fov / (fov + rot.z);
              return { px: rot.x * scale + centerX, py: rot.y * scale + centerY, scale, z: rot.z };
            });

            if (proj.every(p => p.scale > 0)) {
              const alpha = Math.max(0.2, Math.min(0.85, (proj[0].z + 350) / 700));
              ctx.fillStyle = `rgba(15, 44, 89, ${alpha * 0.18})`; ctx.strokeStyle = `rgba(15, 44, 89, ${alpha * 0.6})`; ctx.lineWidth = 1;
              ctx.beginPath(); ctx.moveTo(proj[3].px, proj[3].py); ctx.lineTo(proj[2].px, proj[2].py); ctx.lineTo(proj[6].px, proj[6].py); ctx.lineTo(proj[7].px, proj[7].py); ctx.closePath(); ctx.fill(); ctx.stroke();
              ctx.beginPath(); ctx.moveTo(proj[2].px, proj[2].py); ctx.lineTo(proj[1].px, proj[1].py); ctx.lineTo(proj[5].px, proj[5].py); ctx.lineTo(proj[6].px, proj[6].py); ctx.closePath(); ctx.fill(); ctx.stroke();
              ctx.beginPath(); ctx.moveTo(proj[4].px, proj[4].py); ctx.lineTo(proj[5].px, proj[5].py); ctx.lineTo(proj[6].px, proj[6].py); ctx.lineTo(proj[7].px, proj[7].py); ctx.closePath();
              ctx.fillStyle = pillar.tech ? pillar.tech.color : `rgba(197, 155, 39, ${alpha})`; ctx.fill();

              if (pillar.tech) {
                const topMidX = (proj[4].px + proj[6].px) / 2, topMidY = (proj[4].py + proj[6].py) / 2 - 30 * proj[4].scale;
                const pillW = 92 * proj[4].scale, pillH = 26 * proj[4].scale;
                ctx.save(); ctx.globalAlpha = Math.max(0.5, alpha);
                ctx.shadowBlur = 12 * proj[4].scale; ctx.shadowColor = pillar.tech.color; ctx.fillStyle = '#ffffff';
                ctx.beginPath(); ctx.roundRect(topMidX - pillW / 2, topMidY - pillH / 2, pillW, pillH, 13 * proj[4].scale); ctx.fill();
                ctx.lineWidth = 1.4 * proj[4].scale; ctx.strokeStyle = pillar.tech.color; ctx.stroke(); ctx.shadowBlur = 0;
                ctx.fillStyle = pillar.tech.color; ctx.font = `bold ${Math.round(10.5 * proj[4].scale)}px 'Sora', sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText(`${pillar.tech.icon} ${pillar.tech.name}`, topMidX, topMidY + 0.5); ctx.restore();
              }
            }
          });
        }

        // -------------------------------------------------------------
        // MODE 9: GRAVITATIONAL BLACKHOLE VORTEX
        // -------------------------------------------------------------
        else if (mode === 9) {
          const minDim = Math.min(width, height);
          const bhGlow = ctx.createRadialGradient(centerX, centerY, minDim * 0.025, centerX, centerY, minDim * 0.16);
          bhGlow.addColorStop(0, '#0F2C59'); bhGlow.addColorStop(0.3, 'rgba(197, 155, 39, 0.4)'); bhGlow.addColorStop(1, 'rgba(243, 248, 249, 0)');
          ctx.fillStyle = bhGlow; ctx.beginPath(); ctx.arc(centerX, centerY, minDim * 0.16, 0, Math.PI * 2); ctx.fill();

          vortexParticles.forEach(p => {
            p.update();
            const viewRot = rotate3D(Math.cos(p.angle) * p.radius, Math.pow((minDim * 0.35 - p.radius) / (minDim * 0.35), 2) * 55, Math.sin(p.angle) * p.radius, rotationX, rotationY);
            const scale = fov / (fov + viewRot.z);
            if (scale > 0) {
              ctx.beginPath(); ctx.arc(viewRot.x * scale + centerX, viewRot.y * scale + centerY, p.size * scale, 0, Math.PI * 2);
              ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha * scale; ctx.fill(); ctx.globalAlpha = 1;
            }
          });

          vortexSatellites.forEach(sat => {
            sat.angle += sat.speed;
            const viewRot = rotate3D(Math.cos(sat.angle) * sat.orbitR, Math.sin(sat.angle * 2) * 20, Math.sin(sat.angle) * sat.orbitR, rotationX, rotationY);
            const scale = fov / (fov + viewRot.z);
            sat.projected = { x: viewRot.x * scale + centerX, y: viewRot.y * scale + centerY, scale: Math.max(0, scale), z: viewRot.z };
          });

          [...vortexSatellites].sort((a, b) => a.projected.z - b.projected.z).forEach(sat => {
            const p = sat.projected; if (p.scale <= 0) return;
            ctx.save(); ctx.globalAlpha = Math.max(0.4, Math.min(1, (p.z + 300) / 600));
            const pillW = 96 * p.scale, pillH = 28 * p.scale;
            ctx.shadowBlur = 14 * p.scale; ctx.shadowColor = sat.color; ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.roundRect(p.x - pillW / 2, p.y - pillH / 2, pillW, pillH, 14 * p.scale); ctx.fill();
            ctx.lineWidth = 1.4 * p.scale; ctx.strokeStyle = sat.color; ctx.stroke(); ctx.shadowBlur = 0;
            ctx.fillStyle = sat.color; ctx.font = `bold ${Math.round(11 * p.scale)}px 'Sora', sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(`${sat.icon} ${sat.name}`, p.x, p.y + 0.5); ctx.restore();
          });
        }

        // -------------------------------------------------------------
        // MODE 10: QUANTUM TORUS DONUT ACCELERATOR
        // -------------------------------------------------------------
        else if (mode === 10) {
          const spinAngle = globalTime * 0.5;
          const projectedTorus = torusRings.map(pt => {
            const rotPt = rotate3D(pt.x, pt.y, pt.z, spinAngle * 0.4, spinAngle * 0.8, 0);
            const viewRot = rotate3D(rotPt.x, rotPt.y, rotPt.z, rotationX, rotationY);
            const scale = fov / (fov + viewRot.z);
            return { px: viewRot.x * scale + centerX, py: viewRot.y * scale + centerY, scale, z: viewRot.z, u: pt.u, color: pt.color };
          });

          for (let i = 0; i < projectedTorus.length; i++) {
            const p1 = projectedTorus[i], p2 = projectedTorus[(i + 1) % projectedTorus.length];
            if (p1.scale > 0 && p2.scale > 0 && p1.u === p2.u) {
              ctx.beginPath(); ctx.moveTo(p1.px, p1.py); ctx.lineTo(p2.px, p2.py);
              ctx.strokeStyle = `rgba(15, 44, 89, ${Math.max(0.1, Math.min(0.6, ((p1.z + p2.z) / 2 + 300) / 600))})`; ctx.lineWidth = 0.9; ctx.stroke();
            }
          }
          projectedTorus.forEach(p => {
            if (p.scale > 0) { ctx.beginPath(); ctx.arc(p.px, p.py, 2 * p.scale, 0, Math.PI * 2); ctx.fillStyle = p.color; ctx.fill(); }
          });

          torusSatellites.forEach(sat => {
            sat.angle += sat.speed;
            const rotPt = rotate3D(Math.cos(sat.angle) * sat.orbitR, Math.sin(sat.angle) * sat.orbitR, Math.sin(sat.angle * 2) * (sat.orbitR * 0.35), spinAngle * 0.4, spinAngle * 0.8, 0);
            const viewRot = rotate3D(rotPt.x, rotPt.y, rotPt.z, rotationX, rotationY);
            const scale = fov / (fov + viewRot.z);
            sat.projected = { x: viewRot.x * scale + centerX, y: viewRot.y * scale + centerY, scale: Math.max(0, scale), z: viewRot.z };
          });

          [...torusSatellites].sort((a, b) => a.projected.z - b.projected.z).forEach(sat => {
            const p = sat.projected; if (p.scale <= 0) return;
            ctx.save(); ctx.globalAlpha = Math.max(0.4, Math.min(1, (p.z + 300) / 600));
            const pillW = 96 * p.scale, pillH = 28 * p.scale;
            ctx.shadowBlur = 14 * p.scale; ctx.shadowColor = sat.color; ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.roundRect(p.x - pillW / 2, p.y - pillH / 2, pillW, pillH, 14 * p.scale); ctx.fill();
            ctx.lineWidth = 1.4 * p.scale; ctx.strokeStyle = sat.color; ctx.stroke(); ctx.shadowBlur = 0;
            ctx.fillStyle = sat.color; ctx.font = `bold ${Math.round(11 * p.scale)}px 'Sora', sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(`${sat.icon} ${sat.name}`, p.x, p.y + 0.5); ctx.restore();
          });
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // --- Interactive Mouse & Touch Drag & Move Controls ---
    const handleMouseDown = (e) => {
      isDragging = true; autoRotate = false; lastMouseX = e.clientX; lastMouseY = e.clientY;
    };
    const handleMouseMove = (e) => {
      targetMouseX = e.clientX; targetMouseY = e.clientY;
      if (isDragging) {
        targetRotationY += (e.clientX - lastMouseX) * 0.007; targetRotationX += (e.clientY - lastMouseY) * 0.007;
        lastMouseX = e.clientX; lastMouseY = e.clientY;
      }
    };
    const handleMouseUp = () => { isDragging = false; };
    const handleTouchStart = (e) => {
      isDragging = true; autoRotate = false; lastMouseX = e.touches[0].clientX; lastMouseY = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      targetMouseX = e.touches[0].clientX; targetMouseY = e.touches[0].clientY;
      if (isDragging) {
        targetRotationY += (e.touches[0].clientX - lastMouseX) * 0.007; targetRotationX += (e.touches[0].clientY - lastMouseY) * 0.007;
        lastMouseX = e.touches[0].clientX; lastMouseY = e.touches[0].clientY;
      }
    };
    const handleTouchEnd = () => { isDragging = false; };

    const handleClick = () => {
      if (mode === 3) {
        for (let i = 0; i < 8; i++) aiPulses.push(new SynapsePulse(aiSynapses[Math.floor(Math.random() * aiSynapses.length)][0], aiSynapses[Math.floor(Math.random() * aiSynapses.length)][1], '#C59B27'));
      } else if (mode === 4) {
        satellitesM4.forEach(sat => laserBeams.push(new LaserPulse(sat, null, sat.color)));
      } else if (mode === 5) {
        helixPulses.push(new HelixPulse(0, true, '#0F2C59')); helixPulses.push(new HelixPulse(0, false, '#C59B27'));
      } else if (mode === 8) {
        cityPillars.forEach(p => dataPulses.push(new DataPulse(p)));
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} id="neuralCanvas" />;
};

export default NeuralCanvas;
