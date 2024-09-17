const hamburger = document.getElementsByClassName("hamburger")[0];
const close = document.getElementsByClassName("close")[0];
const menu = document.getElementsByClassName("menu")[0];
// checking for window resize
window.addEventListener("resize", windowSize);
function windowSize() {
  const { width } = document
    .getElementsByTagName("html")[0]
    .getClientRects()[0];
  if (width > 768) {
    menu.style.display = "none";
    close.style.display = "none";
    hamburger.style.display = "none";
  } else if (close.style.display === "none") {
    hamburger.style.display = "inline";
  }
}

function hamburgerClick() {
  if (hamburger.style.display === "none") {
    hamburger.style.display = "inline-block";
    close.style.display = "none";
    menu.style.display = "none";
  } else {
    hamburger.style.display = "none";
    close.style.display = "inline-block";
    menu.style.display = "grid";
  }
}
