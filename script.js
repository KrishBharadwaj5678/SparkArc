import AttractionCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.26/build/cursors/attraction1.min.js";

let app = AttractionCursor(document.getElementById("canvas"), {
  particles: {
    attractionIntensity: 0.75,
    size: 1.3,
  },
});

let button = document.querySelector(".gradient-button");
button.addEventListener("click", () => {
  app.particles.light2.color.set(Math.random() * 0xffffff);
  app.particles.light1.color.set(Math.random() * 0xffffff);
});
