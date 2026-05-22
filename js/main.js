(function () {
    function setupThemeToggle() {
        var themeToggle = document.querySelector('#theme-toggle');
        var html = document.documentElement;
        var storageKey = 'theme-preference';

        function getSystemTheme() {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        function updateIcon(theme) {
            var icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            }
        }

        function setTheme(theme) {
            if (theme === 'dark') {
                html.setAttribute('data-theme', 'dark');
                localStorage.setItem(storageKey, 'dark');
            } else {
                html.removeAttribute('data-theme');
                localStorage.setItem(storageKey, 'light');
            }
            updateIcon(theme);
        }

        var savedTheme = localStorage.getItem(storageKey);
        var currentTheme = savedTheme || getSystemTheme();

        setTheme(currentTheme);

        if (themeToggle) {
            themeToggle.addEventListener('click', function () {
                var theme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                setTheme(theme);
            });
        }

        var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', function (e) {
                if (!localStorage.getItem(storageKey)) {
                    setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    function anoAtual() {
        var ano = new Date().getFullYear();
        var el = document.querySelector('.anoAtual');
        if (el) {
            el.textContent = '(c) ' + ano + ' - Daniel Rodrigues Alves. Todos os direitos reservados.';
        }
    }

    function idade() {
        var d = new Date();
        var anoAtual = d.getFullYear();
        var mesAtual = d.getMonth() + 1;
        var diaAtual = d.getDate();

        var anoNasc = 2001;
        var mesNasc = 3;
        var diaNasc = 27;

        var anos = anoAtual - anoNasc;
        if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
            anos--;
        }

        var idadeEl = document.querySelector('.idade');
        if (idadeEl) {
            idadeEl.textContent = String(Math.max(anos, 0));
        }
    }

    function tempoTrabalhoAtual() {
        var inicio = new Date(2023, 10, 1);
        var hoje = new Date();

        var meses = (hoje.getFullYear() - inicio.getFullYear()) * 12 + (hoje.getMonth() - inicio.getMonth());
        var anos = Math.floor(meses / 12);
        var mesesRestantes = meses % 12;

        var label = ' - Atual';
        if (meses > 0) {
            label += ' (';
            if (anos > 0) {
                label += anos + (anos === 1 ? ' ano' : ' anos');
                if (mesesRestantes > 0) {
                    label += ' e ';
                }
            }
            if (mesesRestantes > 0) {
                label += mesesRestantes + (mesesRestantes === 1 ? ' mes' : ' meses');
            }
            label += ')';
        }

        var el = document.querySelector('#trabalhoAtual');
        if (el) {
            el.textContent = label;
        }
    }

    function setupMenuMobile() {
        var toggle = document.querySelector('#menu-toggle');
        var nav = document.querySelector('#main-nav');

        if (!toggle || !nav) {
            return;
        }

        toggle.addEventListener('click', function () {
            var isOpen = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });

        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    function setupReveal() {
        var itens = document.querySelectorAll('.reveal, .reveal-delay');

        if (!('IntersectionObserver' in window) || itens.length === 0) {
            itens.forEach(function (item) {
                item.classList.add('show');
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.14 });

        itens.forEach(function (item) {
            observer.observe(item);
        });
    }

    function setupVerMais() {
        var btnMais = document.querySelector('.btn-vermais');
        var btnMenos = document.querySelector('.btn-vermenos');
        var hiddenCards = document.querySelectorAll('.vm-card');
        var scrollPos = 0;

        if (!btnMais || !btnMenos || hiddenCards.length === 0) {
            return;
        }

        btnMais.addEventListener('click', function () {
            scrollPos = window.scrollY;
            hiddenCards.forEach(function (card) {
                card.style.display = 'block';
            });
            btnMais.style.display = 'none';
            btnMenos.style.display = 'inline-block';
        });

        btnMenos.addEventListener('click', function () {
            hiddenCards.forEach(function (card) {
                card.style.display = 'none';
            });
            btnMenos.style.display = 'none';
            btnMais.style.display = 'inline-block';
            window.scrollTo({ top: scrollPos, behavior: 'smooth' });
        });
    }

    function setupToTop() {
        var toTop = document.querySelector('.to-top');
        var offsetToShow = 260;

        if (!toTop) {
            return;
        }

        function syncToTopVisibility() {
            var shouldShow = window.scrollY > offsetToShow;
            toTop.classList.toggle('is-visible', shouldShow);
            toTop.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
        }

        toTop.addEventListener('click', function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', syncToTopVisibility, { passive: true });
        syncToTopVisibility();
    }

    document.addEventListener('DOMContentLoaded', function () {
        setupThemeToggle();
        anoAtual();
        idade();
        tempoTrabalhoAtual();
        setupMenuMobile();
        setupReveal();
        setupVerMais();
        setupToTop();
    });
})();
