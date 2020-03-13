const ghost = document.getElementById("ghost");
const buttonContainer = document.querySelector(".button-container");
buttonContainer.style.flexDirection = "row";

ghost.addEventListener("mouseover", e => {
  const direction = buttonContainer.style.flexDirection;
  if (direction === "row") {
    buttonContainer.style.flexDirection = "row-reverse";
  } else {
    buttonContainer.style.flexDirection = "row";
  }
});
