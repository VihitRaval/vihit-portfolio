// Mobile navigation toggle
(function () {
  var toggle = document.querySelector('[data-nav-toggle]');
  var links = document.querySelector('[data-nav-links]');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });
})();

// Highlight active nav link based on current path
(function () {
  var path = location.pathname.split('/').pop() || 'index.html';
  var anchors = document.querySelectorAll('nav a');
  anchors.forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href) return;
    if (href === path || (path === 'index.html' && href === '/')) {
      a.classList.add('active');
    }
  });
})();

// Simple form handler (Contact)
(function () {
  var form = document.querySelector('#contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var name = data.get('name');
    var email = data.get('email');
    var message = data.get('message');
    alert('Thanks ' + name + '! I\'ll reach out to you at ' + email + ' soon.');
    form.reset();
  });
})();


