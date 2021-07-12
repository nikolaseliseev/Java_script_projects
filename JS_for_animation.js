let train = document.getElementById("train");

train.onclick = function() {
    // запомнить время начала
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      train.style.left = timePassed / 5 + 'px';
      if (timePassed > 2000) clearInterval(timer);

    }, 20);
}

//********** */

// как options передаем {timing, draw, duration}
// duration - Продолжительность анимации.
// timing(timeFraction) - Функция расчёта времени, которая будет вычислять прогресс анимации
// draw(progress) - Функция отрисовки, которая получает аргументом значение прогресса анимации и отрисовывает его. 
  
function animate(options) {

    // время старта анимации 
    var start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction от 0 до 1
      var timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // текущее состояние анимации
      var progress = options.timing(timeFraction)
      
      options.draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
}

brick.onclick = function() {
    animate({
      duration: 3000,
      // линейное изменение
      timing: power,
      // сдвигаем влево
      draw: function(progress) {
        brick.style.left = progress * 500 + 'px';
      }
    });
  };

function linear(timeFraction) {
    return timeFraction;
}  

// y = x

function power(timeFraction) {
    return Math.pow(timeFraction, 5)
}
// y = x^5

//************** */

let textExample = document.getElementById("textExample");
document.getElementById("animateText").onclick = function () {
    let textExample = document.getElementById("textExample");
    animateText(textExample);
}

function animateText(textArea) {
    let text = textArea.value;
    let to = text.length;
    let from = 0;

    animate({
      duration: 5000,
      timing: bounce,
      draw: function(progress) {
        let result = (to - from) * progress + from;
        textArea.value = text.substr(0, Math.ceil(result))
      }
    });
}

function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
}