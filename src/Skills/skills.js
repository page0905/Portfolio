window.setupSkills = function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".skill-item").forEach((item) => {
    observer.observe(item);
  });
};

window.addEventListener("load", () => {
  setupSkills();
});
