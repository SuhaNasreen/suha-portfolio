
/* =========================
   EXPERIENCE CARD FLIPPING
========================= */

const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isFlipped = card.classList.toggle("is-flipped");

    card.setAttribute("aria-pressed", String(isFlipped));
  });
});

/* =========================
   CURSOR-FOLLOWING GLOW
========================= */

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("pointermove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}
