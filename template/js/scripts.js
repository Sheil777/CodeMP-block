document.addEventListener("DOMContentLoaded", () =>{
  const frame = document.querySelector('.frame'); // Главный блок. Для подмены классов

  // Выпадающее меню
  // document.querySelector(".frame-download__select").addEventListener('click', () => {
  //   document.querySelector(".frame-download__submenu").classList.toggle('open');
  // });
  // document.querySelector(".frame-download__button").addEventListener('click', () => {
  //   document.querySelector(".frame-download__submenu").classList.remove('open');
  // });

  // Вращение загрузки
  document.querySelector(".frame__limit .button").addEventListener('click', () => {
    document.querySelector(".frame-limit__load").classList.add('loading');
    setTimeout(() => {
      document.querySelector(".frame-limit__load").classList.remove('loading');

      // Подтягиваем данные
      frame.classList.remove('codemp-frame__before-analys');
      frame.classList.remove('codemp-frame__server-error');
      frame.classList.add('codemp-frame__statistic');
    }, 2500);
  });

  // Убираем выпадашку, если кликнули мимо
  // document.addEventListener("mouseup", function (e) {
  //   var div = document.querySelector(".frame-download__submenu"); // тут указываем ID элемента
  //   if (!div.isEqualNode(e.target) // если клик был не по нашему блоку
  //       && div.contains(e.target) == false) { // и не по его дочерним элементам
  //       if(!document.querySelector('.frame-download__select').isEqualNode(e.target)) // Исключение для кнопки открытия
  //         div.classList.remove("open")
  //   }
  // });

  // Ввод токена
  const lengthTokenForEnter = 15;
  const inputTokens = document.querySelectorAll('.frame-token__input');
  inputTokens.forEach(inputToken => {
    inputToken.addEventListener('input', () => {
      let tokenLength = inputToken.value.length;
      
      if(tokenLength >= lengthTokenForEnter){
        frame.classList.remove('codemp-frame__start');
        frame.classList.add('codemp-frame__before-analys');
      }
    });
  });

  // Демонстрация ошибки
  if(document.querySelector('.callError')){
    document.querySelector('.callError').addEventListener('click', () => {
      frame.classList.remove('codemp-frame__start');
      frame.classList.remove('codemp-frame__before-analys');
      frame.classList.remove('codemp-frame__statistic');
      frame.classList.add('codemp-frame__server-error');
    });
  }

  // Появляющийся скролл
  (function(timer) {
    var els = document.querySelectorAll('.popup-codemp-unit__list');
    els.forEach(el => {
      el.addEventListener('scroll', function(e) {
        (function(el) {
          el.classList.add('scroll');
          clearTimeout(timer);
          timer = setTimeout(function() {
            el.classList.remove('scroll');
          }, 1000);
        })(el)
      })

      el.onmousemove = function(event) {
        var targetCoords = el.getBoundingClientRect(); // Отступ от левой части
        var xCoord = targetCoords.left;

        let posCursor = event.pageX - xCoord;

        if (posCursor > el.clientWidth - 30) {
          clearTimeout(timer);
          el.classList.add('scroll');
        }else{
          clearTimeout(timer);
          timer = setTimeout(function() {
            el.classList.remove('scroll');
          }, 500);
        }
      }

      el.onmouseleave = function(event) {
        clearTimeout(timer);
        timer = setTimeout(function() {
          el.classList.remove('scroll');
        }, 500);
      }
    });
  })();

  // Переключение выделения покупателей
  document.querySelectorAll('.codemp-select').forEach(element => {
    element.addEventListener('click', () => {
      element.classList.toggle('codemp-on');
    })
  });
});