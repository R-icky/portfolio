// src/app/components/NebulaBackground.tsx
'use client'
import React, { useEffect, useRef } from 'react';
import './NebulaBackground.scss';

const NebulaBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
  
      let width: number, height: number;
      let nebulaClouds: NebulaCloud[] = [];
      let stars: Star[] = [];
  
      class Star {
        x: number;
        y: number;
        size: number;
        speed: number;
        brightness: number;
  
        constructor() {
          this.reset();
        }
  
        reset() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.size = Math.random() * 2 + 0.5;
          this.speed = Math.random() * 0.05 + 0.01;
          this.brightness = Math.random();
        }
  
        update() {
          this.y -= this.speed;
          if (this.y < 0) {
            this.reset();
            this.y = height;
          }
          this.brightness = Math.sin(Date.now() * this.speed * 0.01) * 0.5 + 0.5;
        }
  
        draw() {
          if (!ctx) return;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
          ctx.fill();
        }
      }
  
      class NebulaCloud {
        x: number;
        y: number;
        radius: number;
        color: string;
        points: { x: number; y: number }[];
        angle: number;
        rotationSpeed: number;
  
        constructor() {
          this.reset();
        }
  
        reset() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.radius = Math.random() * 300 + 150;
          this.color = this.getRandomColor();
          this.points = this.generatePoints();
          this.angle = 0;
          this.rotationSpeed = (Math.random() - 0.5) * 0.001;
        }
  
        getRandomColor() {
          const colors = [
            "rgba(65, 105, 225, 0.1)", // Royal Blue
            "rgba(138, 43, 226, 0.1)", // Blue Violet
            "rgba(255, 20, 147, 0.1)", // Deep Pink
            "rgba(75, 0, 130, 0.1)", // Indigo
            "rgba(147, 112, 219, 0.1)", // Medium Purple
            "rgba(218, 112, 214, 0.1)" // Orchid
          ];
          return colors[Math.floor(Math.random() * colors.length)];
        }
  
        generatePoints() {
          const numberOfPoints = 12;
          const angleStep = (Math.PI * 2) / numberOfPoints;
          const points = [];
  
          for (let i = 0; i <= numberOfPoints; i++) {
            const angle = i * angleStep;
            const distortion = Math.random() * 0.5 + 0.5;
            const x = Math.cos(angle) * this.radius * distortion;
            const y = Math.sin(angle) * this.radius * distortion;
            points.push({ x, y });
          }
  
          return points;
        }
  
        update() {
          this.angle += this.rotationSpeed;
        }
  
        draw() {
          if (!ctx) return;
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.angle);
  
          ctx.beginPath();
          ctx.moveTo(this.points[0].x, this.points[0].y);
          for (let i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
          }
          ctx.closePath();
  
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius);
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(1, "transparent");
  
          ctx.fillStyle = gradient;
          ctx.globalCompositeOperation = "screen";
          ctx.fill();
  
          ctx.restore();
        }
      }
  
      function createStars() {
        stars = [];
        for (let i = 0; i < 300; i++) {
          stars.push(new Star());
        }
      }
  
      function createNebulaClouds() {
        nebulaClouds = [];
        for (let i = 0; i < 8; i++) {
          nebulaClouds.push(new NebulaCloud());
        }
      }
  
      function drawBackground() {
        if (!ctx) return;
        const gradient = ctx.createRadialGradient(
          width / 2,
          height / 2,
          0,
          width / 2,
          height / 2,
          Math.max(width, height) / 2
        );
        gradient.addColorStop(0, "#0c0d1d");
        gradient.addColorStop(1, "#000000");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }
  
      function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
  
        drawBackground();
  
        nebulaClouds.forEach((cloud) => {
          cloud.update();
          cloud.draw();
        });
  
        stars.forEach((star) => {
          star.update();
          star.draw();
        });
  
        requestAnimationFrame(animate);
      }
  
      function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        createStars();
        createNebulaClouds();
      }
  
      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();
      animate();
  
      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }, []);
  
    return <canvas ref={canvasRef} className="nebula-background" />;
  };
  
  export default NebulaBackground;