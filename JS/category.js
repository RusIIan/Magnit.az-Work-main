const menus = document.querySelectorAll(".menu");

menus.forEach((menu) => {
  const dropdown = menu.nextElementSibling;

  menu.addEventListener("click", (event) => {
    event.preventDefault();

    dropdown.classList.toggle("disable");
  });
});
