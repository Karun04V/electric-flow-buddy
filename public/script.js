// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            navActions.classList.toggle('show');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Live Stats Animation
    const stats = {
        activeBuses: 124,
        totalPassengers: 2847,
        averageOccupancy: 68,
        energyEfficiency: 94
    };

    function updateStats() {
        // Update active buses (±3)
        stats.activeBuses += Math.floor(Math.random() * 7) - 3;
        stats.activeBuses = Math.max(120, Math.min(130, stats.activeBuses));

        // Update total passengers (±20)
        stats.totalPassengers += Math.floor(Math.random() * 41) - 20;
        stats.totalPassengers = Math.max(2800, Math.min(2900, stats.totalPassengers));

        // Update average occupancy (±3%, keep between 45-85%)
        stats.averageOccupancy += Math.floor(Math.random() * 7) - 3;
        stats.averageOccupancy = Math.max(45, Math.min(85, stats.averageOccupancy));

        // Update energy efficiency (±2%, keep between 88-98%)
        stats.energyEfficiency += Math.floor(Math.random() * 5) - 2;
        stats.energyEfficiency = Math.max(88, Math.min(98, stats.energyEfficiency));

        // Update DOM elements
        const activeBusesEl = document.getElementById('activeBuses');
        const totalPassengersEl = document.getElementById('totalPassengers');
        const averageOccupancyEl = document.getElementById('averageOccupancy');
        const energyEfficiencyEl = document.getElementById('energyEfficiency');
        const occupancyBadgeEl = document.getElementById('occupancyBadge');

        if (activeBusesEl) {
            activeBusesEl.textContent = stats.activeBuses;
        }

        if (totalPassengersEl) {
            totalPassengersEl.textContent = stats.totalPassengers.toLocaleString();
        }

        if (averageOccupancyEl) {
            averageOccupancyEl.textContent = stats.averageOccupancy;
        }

        if (energyEfficiencyEl) {
            energyEfficiencyEl.textContent = stats.energyEfficiency;
        }

        if (occupancyBadgeEl) {
            if (stats.averageOccupancy > 70) {
                occupancyBadgeEl.textContent = 'High';
                occupancyBadgeEl.className = 'occupancy-badge high';
            } else {
                occupancyBadgeEl.textContent = 'Normal';
                occupancyBadgeEl.className = 'occupancy-badge';
            }
        }
    }

    // Update stats every 3 seconds
    setInterval(updateStats, 3000);

    // Add scroll effect to navigation
    let lastScrollTop = 0;
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .stat-card, .route-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add click handlers for buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-bg');
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
});
