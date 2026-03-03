/* ============================================
   SLIDESHOW JS — Project Carousel
   ============================================
   Controls the project slide transitions,
   progress bar, counter, and keyboard navigation.
   Requires GSAP to be loaded first.
   Used on: index.html
   ============================================ */

(() => {
    // Wait for DOM to be ready
    const init = () => {
        let currentSlide = 0;
        let isAnimating = false;
        const slides = document.querySelectorAll('.slide-container');
        const counter = document.getElementById('slide-counter');
        const progressBar = document.getElementById('slide-progress');

        if (!slides.length) return;

        const padNum = (n) => String(n).padStart(2, '0');

        const updateProgress = () => {
            if (progressBar) {
                progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
            }
        };

        window.changeSlide = (direction) => {
            if (isAnimating) return;
            isAnimating = true;

            const xOut = direction > 0 ? -30 : 30;
            const xIn = direction > 0 ? 30 : -30;

            // Fade out current slide
            gsap.to(slides[currentSlide], {
                opacity: 0, x: xOut, duration: 0.4, ease: "power2.in", onComplete: () => {
                    slides[currentSlide].classList.remove('active');

                    // Update index
                    currentSlide = (currentSlide + direction + slides.length) % slides.length;

                    // Prep next slide
                    const nextSlide = slides[currentSlide];
                    nextSlide.classList.add('active');
                    counter.innerText = `${padNum(currentSlide + 1)} / ${padNum(slides.length)}`;
                    updateProgress();

                    // Fade in next slide
                    gsap.fromTo(nextSlide, { opacity: 0, x: xIn }, {
                        opacity: 1, x: 0, duration: 0.6, ease: "power2.out", onComplete: () => {
                            isAnimating = false;
                        }
                    });
                }
            });
        };

        // Keyboard Navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') changeSlide(-1);
            if (e.key === 'ArrowRight') changeSlide(1);
        });
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
