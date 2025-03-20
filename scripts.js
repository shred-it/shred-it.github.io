// Debug marker
console.log("📛 SCRIPTS.JS LOADED");



// Load navigation bar
document.addEventListener('DOMContentLoaded', function () {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (!navPlaceholder) {
    console.error("⚠ #nav-placeholder not found in DOM");
    return;
  }

  fetch('nav.html')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.text();
    })
    .then(data => {
      navPlaceholder.innerHTML = data;
      console.log("✅ Navigation successfully inserted.");
    })
    .catch(error => {
      console.error("❌ Failed to load navigation:", error);
      navPlaceholder.innerText = '[Navigation failed to load]';
    });
});
