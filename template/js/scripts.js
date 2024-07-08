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

  // Убираем выпадашку, если кликнули мимо
  document.addEventListener("mouseup", function (e) {
    var div = document.querySelector(".frame-download__list"); // тут указываем ID элемента
    if (!div.isEqualNode(e.target) // если клик был не по нашему блоку
        && div.contains(e.target) == false) { // и не по его дочерним элементам
        if(!document.querySelector('.frame-download__select').isEqualNode(e.target)) // Исключение для кнопки открытия
          div.classList.remove("open")
    }
  });
});