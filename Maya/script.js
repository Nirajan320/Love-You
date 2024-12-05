const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");

noButton.addEventListener("mouseover", () => {
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener("click", () => {
  // Navigate to the "I Love You Maya" page
  window.location.href = "love.html";
});
