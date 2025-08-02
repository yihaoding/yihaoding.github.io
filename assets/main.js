// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple visit counter using CountAPI (https://countapi.xyz)
// NOTE: This uses a third-party service. Replace `namespace` and `key` with your own if desired.
(async function() {
  const el = document.getElementById('visit-count');
  try {
    const namespace = 'yihao-ding-site';  // change to your own unique namespace if you like
    const key = 'homepage';               // key for this page
    const url = `https://api.countapi.xyz/hit/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`;
    const res = await fetch(url);
    const data = await res.json();
    if (typeof data.value !== 'undefined') {
      el.textContent = Number(data.value).toLocaleString();
    } else {
      el.textContent = 'n/a';
    }
  } catch (e) {
    el.textContent = 'n/a';
  }
})();