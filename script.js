document.addEventListener("DOMContentLoaded", function () {
  const sidebarItems = document.querySelectorAll(".sidebar ul li");
  const menuContents = document.querySelectorAll(".menu-content");

  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Get the category from the clicked item
      const category = item.getAttribute("data-category");

      // Hide all menu-content sections
      menuContents.forEach((content) => {
        content.style.display = "none";
      });

      // Show the selected menu-content section
      const activeContent = document.querySelector(
        `.menu-content[data-category="${category}"]`
      );
      if (activeContent) {
        activeContent.style.display = "grid";
      }

      // Toggle active class for color change
      sidebarItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

  const links = document.querySelectorAll(".navbar a");
  links.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Select all navigation links
  const navLinks = document.querySelectorAll(".navbar a");

  // Get the current page's full URL
  const currentUrl = window.location.href;

  navLinks.forEach((link) => {
    // Check if the current URL includes the link's href
    if (currentUrl.includes(link.href)) {
      link.classList.add("active");
    }
  });

  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationType = entry.target.getAttribute("data-animate");
          if (animationType) {
            entry.target.classList.add(animationType); // Apply specific animation from data-animate
          }
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    { threshold: 0.1 } // Trigger animation when 10% of the element is visible
  );

  elements.forEach((element) => observer.observe(element));

  document
    .getElementById("hamburger-menu")
    .addEventListener("click", function () {
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("active");
    });
});
