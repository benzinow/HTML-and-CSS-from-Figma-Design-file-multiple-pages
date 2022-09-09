let button = document.querySelector("#hamburger");
let dropMenuActions = document.querySelector("#dropMenu");

button.addEventListener("click", () => {
  if (dropMenuActions.classList.contains("drop-menu")) {
    dropMenu.classList.add("drop-menu-active");
    dropMenu.classList.remove("drop-menu");
  } else {
    dropMenu.classList.add("drop-menu");
    dropMenu.classList.remove("drop-menu-active");
  }
});
