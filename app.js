function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
}

// Initial state of menu (optional: set to none if you want it hidden initially)
document.getElementById("menu").style.display = "none";
