window.onload = function () {
  const savedZoom = localStorage.getItem("userZoom") || "100%";
  document.body.style.zoom = savedZoom;
};

function setZoom(level) {
  document.body.style.zoom = level;
  localStorage.setItem("userZoom", level);
}
