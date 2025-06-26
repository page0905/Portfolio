document.addEventListener("DOMContentLoaded", () => {
  const waitForNavbar = () => {
    const toggleBtn = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");

    if (!toggleBtn || !navLinks) {
      setTimeout(waitForNavbar, 100);
      return;
    }

    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      toggleBtn.classList.toggle("open");
    });

    document.querySelectorAll(".topmenu").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        toggleBtn.classList.remove("open");
      });
    });
  };

  waitForNavbar();
});
