// Cursor trail effect
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

// Load shared navigation into #nav-placeholder
document.addEventListener('DOMContentLoaded', function () {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (!navPlaceholder) {
    console.error("⚠ #nav-placeholder not found in DOM");
    return;
  }

  fetch('nav.html')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      navPlaceholder.innerHTML = data;
      console.log("✅ Navigation successfully loaded.");
    })
    .catch(error => {
      console.error("❌ Failed to load navigation:", error);
      navPlaceholder.innerText = '[Navigation failed to load]';
    });
});
