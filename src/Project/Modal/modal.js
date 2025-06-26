function setupModals() {
  document.querySelectorAll(".open-modal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-modal");
      const modal = document.getElementById(targetId);
      if (modal) modal.classList.remove("hidden");
    });
  });

  document.querySelectorAll(".close-modal").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").classList.add("hidden");
    });
  });

  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal").forEach((modal) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  });
}
window.setupModals = setupModals;
