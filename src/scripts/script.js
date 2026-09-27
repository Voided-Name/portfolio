window.addEventListener("load", () => {
  const savedZoom = localStorage.getItem("userZoom") || "100%";
  document.body.style.zoom = savedZoom;
});
