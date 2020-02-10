

let tens = hundreds = seconds = tensSeconds = 0;


const startTimer = setInterval(() => {
    updateDOM(trackClock)
  },10);



function trackClock(){
  if (tens == 9){
    tens = 0;
    if (hundreds == 9){
      hundreds = 0;
      if (seconds == 9){
        seconds = 0;
        tensSeconds++;
        setRed();
        stopClock();
      } else {
        seconds++
      }
    } else {
      hundreds++;
    }
  } else {
    tens++;
  }
};

function stopClock(){
  clearInterval(startTimer);
}

function setRed(){
  let digits = document.querySelectorAll('.digit')
  digits.forEach((item) => item.style.color = 'red')
};

function updateDOM(callback){
  callback();

  document.querySelector('#msTens').textContent = tens

  document.querySelector('#msHundreds').textContent = hundreds;

  document.querySelector('#secondOnes').textContent = seconds;

  document.querySelector('#secondTens').textContent = tensSeconds;
};


let button = document.createElement("button")
button.textContent = 'Start';
document.querySelector('body').append(button)

button.addEventListener("click", )
