/* ============================================
   MOBILE NAV JS — Hamburger Menu
   ============================================
   Handles the mobile navigation overlay.
   Self-initializing, no dependencies.
   Used on: all pages
   ============================================ */

(() => {
    const toggle = document.getElementById('mobile-nav-toggle');
    const overlay = document.getElementById('mobile-nav-overlay');
    if (!toggle || !overlay) return;

    const bars = toggle.querySelectorAll('.bar');
    let isOpen = false;

    const open = () => {
        isOpen = true;
        overlay.classList.add('active');
        toggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const close = () => {
        isOpen = false;
        overlay.classList.remove('active');
        toggle.classList.remove('active');
        document.body.style.overflow = '';
    };

    toggle.addEventListener('click', () => {
        isOpen ? close() : open();
    });

    // Close on nav link click
    overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', close);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) close();
    });
})();
