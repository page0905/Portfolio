document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-up").forEach((el, index) => {
      el.style.animationDelay = `${index * 0.3}s`;
      observer.observe(el);
    });
  }, 100);
});
