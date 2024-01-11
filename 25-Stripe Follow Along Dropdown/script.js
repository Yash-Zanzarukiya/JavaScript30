let nav = document.querySelector(".top");
let triggers = document.querySelectorAll(".nav-links");
let background = document.querySelector(".background");

function mouseEnter() {
  this.classList.add("active");

  setTimeout(() => this.classList.contains("active") && this.classList.add("active-after"), 150);

  background.classList.add("open");

  let dropdown = this.querySelector(".dropdown");
  let position = dropdown.getBoundingClientRect();
  let coords = {
    top: position.top - nav.offsetTop,
    left: position.left - nav.offsetLeft,
    width: position.width,
    height: position.height,
  };

  background.style.height = `${coords.height}px`;
  background.style.width = `${coords.width}px`;
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function mouseOut() {
  this.classList.remove("active", "active-after");
  background.classList.remove("open");
}

triggers.forEach((item) => item.addEventListener("mouseenter", mouseEnter));
triggers.forEach((item) => item.addEventListener("mouseleave", mouseOut));
