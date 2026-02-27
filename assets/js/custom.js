(function () {
  function enhanceScrollButtons() {
    var buttons = document.querySelectorAll('[data-scroll-target]');
    buttons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        var selector = button.getAttribute('data-scroll-target');
        if (!selector) return;

        var target = document.querySelector(selector);
        if (!target) return;

        // Prevent default jump so smooth scroll + highlight are primary.
        event.preventDefault();

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.classList.remove('rf-highlight-target');
        window.setTimeout(function () {
          target.classList.add('rf-highlight-target');
        }, 160);

        if (!target.hasAttribute('tabindex')) {
          target.setAttribute('tabindex', '-1');
        }
        target.focus({ preventScroll: true });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceScrollButtons);
  } else {
    enhanceScrollButtons();
  }
})();
