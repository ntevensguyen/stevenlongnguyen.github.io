document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      alert("You can link this card to a live demo or GitHub repo later!");
    });
  });
});
