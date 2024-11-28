document.addEventListener('DOMContentLoaded', function() {
    // 菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle?.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // 数字增长动画
    const counters = document.querySelectorAll('.counter');
    
    const startCounting = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-target'));
                const duration = 2000; // 动画持续2秒
                const steps = 60; // 每秒60帧
                const stepValue = target / (duration / (1000 / steps));
                let current = 0;

                const updateCounter = () => {
                    current += stepValue;
                    if (current <= target) {
                        counter.textContent = current.toFixed(1);
                        if (target >= 1) {
                            counter.textContent = Math.floor(current);
                        }
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    };

    const observer = new IntersectionObserver(startCounting, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });

    // 添加背景装饰
    const body = document.querySelector('body');
    const decoration = document.createElement('div');
    decoration.className = 'background-decoration';
    body.appendChild(decoration);
}); 