(function () {
  // Highlights the link for the section you are reading.
  function spy(targets, links) {
    if (!('IntersectionObserver' in window) || !targets.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          if (a.hash === '#' + entry.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    targets.forEach(function (t) { io.observe(t); });
  }

  // Case study pages: build "On this page" from the section headings.
  var tocList = document.querySelector('.toc-list');
  var prose = document.querySelector('.case-body .prose');
  if (tocList && prose) {
    var heads = Array.prototype.slice.call(prose.querySelectorAll('h2'));
    if (!heads.length) {
      tocList.closest('.toc').hidden = true;
    } else {
      heads.forEach(function (h, i) {
        if (!h.id) h.id = 'section-' + (i + 1);
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        tocList.appendChild(li);
      });
      spy(heads, Array.prototype.slice.call(tocList.querySelectorAll('a')));
    }
  }

  // Home page: highlight Work, About or Contact in the top menu.
  var sections = ['work', 'about', 'contact']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav nav a'));
  spy(sections, navLinks);
})();
