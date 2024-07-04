document.addEventListener("DOMContentLoaded", () =>{
  // Выпадающее меню
  document.querySelector(".frame-download__select").addEventListener('click', () => {
    document.querySelector(".frame-download__list").classList.toggle('open');
  });
  document.querySelector(".frame-download__button").addEventListener('click', () => {
    document.querySelector(".frame-download__list").classList.remove('open');
  });

  // Вращение загрузки
  document.querySelector(".frame__limit .button").addEventListener('click', () => {
    document.querySelector(".frame-limit__load").classList.add('loading');
    setTimeout(() => {
      document.querySelector(".frame-limit__load").classList.remove('loading');
    }, 2500);
  });
});