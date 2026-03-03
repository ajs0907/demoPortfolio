// === Starfield Particles ===
(() => {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles;

    const resize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    };

    const createParticles = () => {
        const count = Math.floor((w * h) / 8000);
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.2 + 0.3,
                dx: (Math.random() - 0.5) * 0.15,
                dy: (Math.random() - 0.5) * 0.1,
                opacity: Math.random() * 0.4 + 0.1,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.01 + 0.002
            });
        }
    };

    const draw = () => {
        ctx.clearRect(0, 0, w, h);

        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;
            p.pulse += p.pulseSpeed;

            if (p.x < -5) p.x = w + 5;
            if (p.x > w + 5) p.x = -5;
            if (p.y < -5) p.y = h + 5;
            if (p.y > h + 5) p.y = -5;

            const flicker = 0.7 + 0.3 * Math.sin(p.pulse);
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * flicker})`;
            ctx.fill();
        });

        // Draw faint connection lines between nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${0.03 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();
    window.addEventListener('resize', () => { resize(); createParticles(); });
})();

// === Geometric Circuit Lines ===
(() => {
    const container = document.getElementById('geo-lines');
    if (!container) return;

    const lines = [
        { x: '15%', y: '8%', w: '25%' },
        { x: '60%', y: '22%', w: '20%' },
        { x: '5%', y: '45%', w: '15%' },
        { x: '75%', y: '55%', w: '18%' },
        { x: '30%', y: '72%', w: '22%' },
        { x: '85%', y: '85%', w: '10%' },
    ];

    const verticals = [
        { x: '12%', y: '5%', h: '12%' },
        { x: '88%', y: '15%', h: '18%' },
        { x: '45%', y: '60%', h: '10%' },
        { x: '70%', y: '75%', h: '15%' },
    ];

    const nodes = [
        { x: '15%', y: '8%' }, { x: '40%', y: '8%' },
        { x: '60%', y: '22%' }, { x: '80%', y: '22%' },
        { x: '12%', y: '5%' }, { x: '12%', y: '17%' },
        { x: '88%', y: '15%' }, { x: '88%', y: '33%' },
        { x: '5%', y: '45%' }, { x: '20%', y: '45%' },
        { x: '75%', y: '55%' }, { x: '93%', y: '55%' },
        { x: '45%', y: '60%' }, { x: '45%', y: '70%' },
        { x: '30%', y: '72%' }, { x: '52%', y: '72%' },
        { x: '70%', y: '75%' }, { x: '70%', y: '90%' },
        { x: '85%', y: '85%' }, { x: '95%', y: '85%' },
    ];

    lines.forEach(l => {
        const el = document.createElement('div');
        el.className = 'line';
        el.style.cssText = `left:${l.x};top:${l.y};width:${l.w};`;
        container.appendChild(el);
    });

    verticals.forEach(v => {
        const el = document.createElement('div');
        el.className = 'line-v';
        el.style.cssText = `left:${v.x};top:${v.y};height:${v.h};`;
        container.appendChild(el);
    });

    nodes.forEach(n => {
        const el = document.createElement('div');
        el.className = 'node';
        el.style.cssText = `left:${n.x};top:${n.y};`;
        container.appendChild(el);
    });
})();
