// Toggle icon navbar pada mode mobile
        let menuIcon = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');

        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

        // Tutup menu saat link di klik (mobile)
        let navLinks = document.querySelectorAll('header nav a');
        navLinks.forEach(link => {
            link.onclick = () => {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            }
        });

        // Highlight menu aktif sesuai scroll
        let sections = document.querySelectorAll('section');
        
        window.onscroll = () => {
            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if(top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                    });
                };
            });
        };

        /* --- SCROLL REVEAL ANIMATION --- */
        if (typeof ScrollReveal !== 'undefined') {
            ScrollReveal({ 
                distance: '80px',
                duration: 2000,
                delay: 200
            });

            ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
            ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form', { origin: 'bottom' });
            ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
            ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
        }

        /* --- 3D TILT EFFECT (Vanilla Tilt) --- */
        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(document.querySelectorAll(".portofolio-box, .home-img img, .about-img img"), {
                max: 15,
                speed: 400,
                glare: true,
                "max-glare": 0.2
            });
        } else {
            console.warn("VanillaTilt tidak ditemukan. Efek 3D dinonaktifkan sementara.");
        }

        /* --- TYPING ANIMATION --- */
        if (typeof Typed !== 'undefined') {
            const typed = new Typed('.multiple-text', {
                strings: ['Java Developer', 'Data Enthusiast', 'Problem Solver'],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 1000,
                loop: true
            });
        }