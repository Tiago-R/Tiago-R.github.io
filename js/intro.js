const envelopeScene = document.getElementById("envelopeScene");
const introOverlay = document.getElementById("introOverlay");
const introText = document.getElementById("introText");
const hintText = document.getElementById("hintText");
const flapButton = document.getElementById("flap-button");

let opened = false;

function openEnvelope() {
  if (opened || !envelopeScene || !introOverlay) return;

  opened = true;
  envelopeScene.classList.add("open");
  if (introText) introText.classList.add("fade-away");
  if (hintText) hintText.classList.add("fade-away");

  setTimeout(() => {
    introOverlay.classList.add("hidden");
    introOverlay.setAttribute("aria-hidden", "true");
  }, 650);

  setTimeout(() => {
    document.body.classList.remove("preloader-site");
    document.documentElement.classList.remove("preloader-site");
    document.body.style.overflow = "auto";
  }, 1200);
}

if (envelopeScene && introOverlay) {
  window.addEventListener("load", () => {
    document.body.classList.add("preloader-site");
    document.documentElement.classList.add("preloader-site");
    document.body.style.overflow = "hidden";
  });

  envelopeScene.addEventListener("click", openEnvelope);

  if (flapButton) {
    flapButton.addEventListener("click", (event) => {
      event.stopPropagation();
      openEnvelope();
    });
  }

  envelopeScene.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openEnvelope();
    }
  });
}
