const mobileMenu = document.querySelector("#hamburger-menu");
const navBar = document.querySelector(".nav-bar");

// function to toggle visibility
function updateVisibility(element, show) {
  if (show) {
    element.classList.toggle("active");
  }
}

// show nav bar on click
mobileMenu.addEventListener("click", () => {
  updateVisibility(navBar, true);
});
