(function () {
    var toggle = document.querySelector('.nav-toggle');
    var drawer = document.getElementById('nav-drawer');
    var overlay = document.querySelector('.nav-overlay');
    if (!toggle || !drawer || !overlay) return;

    function open() {
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close menu');
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
        overlay.classList.add('is-open');
        document.body.classList.add('nav-open');
        var firstLink = drawer.querySelector('a');
        if (firstLink) firstLink.focus();
    }

    function close() {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        overlay.classList.remove('is-open');
        document.body.classList.remove('nav-open');
        toggle.focus();
    }

    toggle.addEventListener('click', function () {
        if (toggle.getAttribute('aria-expanded') === 'true') close();
        else open();
    });

    overlay.addEventListener('click', close);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') close();
    });

    drawer.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') close();
    });
})();
