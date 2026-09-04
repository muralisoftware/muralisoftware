import React, { useEffect, useRef } from 'react';

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
    
    let width, height;
    let nodes = [];
    let pulses = [];
    let rotationX = 0, rotationY = 0;
    let targetRotationX = 0, targetRotationY = 0;
    let isDragging = false;
    let lastMouseX = 0, lastMouseY = 0;
    let autoRotate = true;
    const autoRotationSpeed = 0.002;

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initializeNodes();
    };

    class Node {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.connections = [];
        this.energy = 0;
      }

      project() {
        const scale = 500 / (500 + this.z);
        return {
          x: this.x * scale + width / 2,
          y: this.y * scale + height / 2,
          scale: Math.max(0, scale)
        };
      }
    }

    class Pulse {
      constructor(start, end) {
        this.start = start;
        this.end = end;
        this.progress = 0;
        this.speed = 0.02;
      }

      update() {
        this.progress += this.speed;
        return this.progress >= 1;
      }

      draw() {
        const pos = {
          x: this.start.rx + (this.end.rx - this.start.rx) * this.progress,
          y: this.start.ry + (this.end.ry - this.start.ry) * this.progress,
          z: this.start.rz + (this.end.rz - this.start.rz) * this.progress
        };

        const scale = 500 / (500 + pos.z);
        const px = pos.x * scale + width / 2;
        const py = pos.y * scale + height / 2;
        const pScale = Math.max(0, scale);

        if (pScale > 0) {
          ctx.beginPath();
          ctx.arc(px, py, 5 * pScale, 0, Math.PI * 2);
          
          const gradient = ctx.createRadialGradient(px, py, 0, px, py, 5 * pScale);
          gradient.addColorStop(0, `rgba(15, 44, 89, ${1 - this.progress})`);
          gradient.addColorStop(1, `rgba(15, 44, 89, ${(1 - this.progress) * 0.3})`);
          ctx.fillStyle = gradient;
          
          ctx.shadowBlur = 15;
          ctx.shadowColor = 'rgba(15, 44, 89, 0.4)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    const initializeNodes = () => {
      nodes = [];
      const gridSize = 7;
      const spacing = 120;

      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          for (let z = 0; z < gridSize; z++) {
            const node = new Node(
              (x - gridSize / 2) * spacing,
              (y - gridSize / 2) * spacing,
              (z - gridSize / 2) * spacing
            );
            nodes.push(node);
          }
        }
      }

      nodes.forEach((node, i) => {
        nodes.forEach((other, j) => {
          if (i !== j) {
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const dz = node.z - other.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (dist < spacing * 1.5) {
              node.connections.push(other);
            }
          }
        });
      });
    };

    const rotatePoint = (x, y, z, rx, ry) => {
      let cos = Math.cos(rx), sin = Math.sin(rx);
      let y1 = y * cos - z * sin;
      let z1 = y * sin + z * cos;
      
      cos = Math.cos(ry);
      sin = Math.sin(ry);
      let x1 = x * cos - z1 * sin;
      let z2 = x * sin + z1 * cos;
      
      return { x: x1, y: y1, z: z2 };
    };

    let animationFrameId;
    let isVisible = true;

    // Pause canvas loop when scrolled down the page to keep scrolling 60fps smooth
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(canvas);

    const animate = () => {
      if (isVisible && !isPausedRef.current) {
        ctx.fillStyle = 'rgba(243, 248, 249, 0.15)';
        ctx.fillRect(0, 0, width, height);

        if (autoRotate && !isDragging) {
          targetRotationY += autoRotationSpeed;
          targetRotationX = Math.sin(Date.now() * 0.0003) * 0.15;
        }

        rotationX += (targetRotationX - rotationX) * 0.1;
        rotationY += (targetRotationY - rotationY) * 0.1;

        nodes.forEach(node => {
          const rotated = rotatePoint(node.x, node.y, node.z, rotationX, rotationY);
          node.rx = rotated.x;
          node.ry = rotated.y;
          node.rz = rotated.z;
        });

        nodes.sort((a, b) => b.rz - a.rz);

        nodes.forEach(node => {
          node.connections.forEach(other => {
            const scaleStart = 500 / (500 + node.rz);
            const sx = node.rx * scaleStart + width / 2;
            const sy = node.ry * scaleStart + height / 2;

            const scaleEnd = 500 / (500 + other.rz);
            const ex = other.rx * scaleEnd + width / 2;
            const ey = other.ry * scaleEnd + height / 2;

            if (scaleStart > 0 && scaleEnd > 0) {
              ctx.beginPath();
              ctx.moveTo(sx, sy);
              ctx.lineTo(ex, ey);
              ctx.strokeStyle = `rgba(15, 44, 89, ${0.12 * scaleStart})`;
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          });
        });

        pulses = pulses.filter(pulse => !pulse.update());
        pulses.forEach(pulse => pulse.draw());

        nodes.forEach(node => {
          const scale = 500 / (500 + node.rz);
          const px = node.rx * scale + width / 2;
          const py = node.ry * scale + height / 2;

          if (scale > 0) {
            ctx.beginPath();
            ctx.arc(px, py, 2.5 * scale, 0, Math.PI * 2);
            
            const gradient = ctx.createRadialGradient(px, py, 0, px, py, 2.5 * scale);
            gradient.addColorStop(0, `rgba(15, 44, 89, ${scale})`);
            gradient.addColorStop(1, `rgba(15, 44, 89, ${scale * 0.6})`);
            ctx.fillStyle = gradient;
            ctx.fill();
            
            ctx.shadowBlur = 6;
            ctx.shadowColor = 'rgba(15, 44, 89, 0.3)';
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      autoRotate = false;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        targetRotationY += (e.clientX - lastMouseX) * 0.01;
        targetRotationX += (e.clientY - lastMouseY) * 0.01;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleTouchStart = (e) => {
      isDragging = true;
      autoRotate = false;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (isDragging) {
        targetRotationY += (e.touches[0].clientX - lastMouseX) * 0.01;
        targetRotationX += (e.touches[0].clientY - lastMouseY) * 0.01;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const handleClick = () => {
      if (!isDragging && nodes.length > 0) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        randomNode.connections.slice(0, 3).forEach(conn => {
          pulses.push(new Pulse(randomNode, conn));
        });
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} id="neuralCanvas" />;
};

export default NeuralCanvas;
