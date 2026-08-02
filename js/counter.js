// js/counter.js
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let hasAnimated = false;

    const runCounter = () => {
        counters.forEach(counter => {
            counter.innerText = '0';
            
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;
                const isFloat = counter.getAttribute('data-target').includes('.');
                const prefix = counter.getAttribute('data-prefix') || '';
                const suffix = counter.getAttribute('data-suffix') || '';
                
                // Determine increment step
                let increment = target / 200;
                if(isFloat) increment = target / 100; // slightly faster for floats

                if (c < target) {
                    if (isFloat) {
                        counter.innerText = (c + increment).toFixed(1);
                    } else {
                        counter.innerText = Math.ceil(c + increment);
                    }
                    setTimeout(updateCounter, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    };

    // Intersection Observer to trigger when visible
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting && !hasAnimated) {
            runCounter();
            hasAnimated = true;
        }
    }, { threshold: 0.5 });

    const statsSection = document.getElementById('stats');
    if(statsSection) {
        observer.observe(statsSection);
    }
});
