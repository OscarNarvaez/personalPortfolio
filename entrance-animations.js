(function () {
    function initSectionEntranceAnimations() {
        var sections = document.querySelectorAll('.hero-full-container, .section-container');

        if (!sections.length) {
            return;
        }

        sections.forEach(function (section, index) {
            section.classList.add('section-entrance');
            section.style.setProperty('--entrance-delay', index * 90 + 'ms');
        });

        if (!('IntersectionObserver' in window)) {
            sections.forEach(function (section) {
                section.classList.add('is-visible');
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.18,
            rootMargin: '0px 0px -8% 0px'
        });

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }

    window.initSectionEntranceAnimations = initSectionEntranceAnimations;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSectionEntranceAnimations);
    } else {
        initSectionEntranceAnimations();
    }
})();
