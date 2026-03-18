const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".header-list");

// فتح / قفل المنيو
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation(); 
  menu.classList.toggle("active");

  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});

// تقفل لما تدوس على أي لينك
const links = document.querySelectorAll(".header-list a");

links.forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// تقفل لما تعمل scroll
window.addEventListener("scroll", () => {
  closeMenu();
});

// تقفل لما تدوس في أي مكان برا الناف
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
    closeMenu();
  }
});

// function تقفل المنيو
function closeMenu() {
  menu.classList.remove("active");
  menuIcon.classList.remove("fa-xmark");
  menuIcon.classList.add("fa-bars");
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".header-list a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

});