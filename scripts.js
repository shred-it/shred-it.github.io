// cursor trail
document.addEventListener('mousemove', function(e) {
  const dot = document.createElement('div');
  dot.classList.add('trail-dot');
  dot.style.left = e.pageX + 'px';
  dot.style.top = e.pageY + 'px';
  document.body.appendChild(dot);
  setTimeout(() => {
    dot.style.opacity = 0;
    setTimeout(() => dot.remove(), 300);
  }, 100);
});

// Load navigation bar
window.addEventListener('DOMContentLoaded', () => {
  fetch('nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;
    });
});
// future scripts can go here
