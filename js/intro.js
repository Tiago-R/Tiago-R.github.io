const envelopeScene = document.getElementById("envelopeScene");
const introOverlay = document.getElementById("introOverlay");
const introText = document.getElementById("introText");
const hintText = document.getElementById("hintText");

let opened = false;

function openEnvelope() {
  if (opened) return;

  opened = true;
  envelopeScene.classList.add("open");
  introText.classList.add("fade-away");
  hintText.classList.add("fade-away");

  setTimeout(() => {
    introOverlay.classList.add("hidden");
    document.body.style.overflow = "auto";
  }, 1800);
}

window.addEventListener("load", () => {
  document.body.style.overflow = "hidden";
});

envelopeScene.addEventListener("click", openEnvelope);

envelopeScene.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openEnvelope();
  }
});