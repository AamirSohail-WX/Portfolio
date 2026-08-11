const initMenu = () => {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (!menuBtn || !navLinks) return;

  const updateMenuState = () => {
    const isOpen = navLinks.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  };

  menuBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    navLinks.classList.toggle("active");
    updateMenuState();
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      updateMenuState();
    });
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
      navLinks.classList.remove("active");
      updateMenuState();
    }
  });

  updateMenuState();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMenu);
} else {
  initMenu();
}