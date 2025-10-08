document.addEventListener("DOMContentLoaded", () => {
  // === Анимация появления блоков при скролле ===
  const sections = document.querySelectorAll("section");
  const showOnScroll = () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", showOnScroll);
  showOnScroll();

  // === Обработка формы регистрации ===
  const form = document.getElementById("registerForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const password = form.password.value.trim();
      const checkin = form.checkin.value;
      const checkout = form.checkout.value;
      const guests = form.guests.value;

      if (!name || !email || !password || !checkin || !checkout || !guests) {
        alert("Пожалуйста, заполните все поля!");
        return;
      }

      if (new Date(checkin) >= new Date(checkout)) {
        alert("Дата выезда должна быть позже даты заезда!");
        return;
      }

      alert(`Спасибо, ${name}! Ваша заявка на ${guests} гостей принята.`);
      form.reset();
    });
  }

  // === Эффект клика на кнопки "Забронировать" ===
  document.querySelectorAll(".room-card button").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Перейдите на страницу регистрации, чтобы завершить бронь.");
      window.location.href = "register.html";
    });
  });
});