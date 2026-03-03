/* ============================================
   MAIN JS — Cursor & Reveal Animations
   ============================================
   Requires GSAP + ScrollTrigger to be loaded first.
   Used on: index.html
   ============================================ */

window.onload = () => {
    gsap.registerPlugin(ScrollTrigger);

    // --- Custom Cursor ---
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
            gsap.to(follower, { x: e.clientX - 17, y: e.clientY - 17, duration: 0.1 });
        });
    }

    // --- Scroll Reveal Animations ---
    gsap.utils.toArray(".reveal").forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out"
        });
    });
};
