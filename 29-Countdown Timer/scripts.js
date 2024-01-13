let buttons = document.querySelectorAll(".timer__button");
let form = document.querySelector("form");
let input = document.querySelector("input");
let left_time = document.querySelector(".display__time-left");
let end_time = document.querySelector(".display__end-time");

let comeback_time,timer;

function setTimer(add_time) {
  comeback_time = new Date(Date.now() + add_time * 1000);
  end_time.innerHTML = `${comeback_time.getHours() % 12}:${comeback_time.getMinutes()}:${comeback_time.getSeconds()}`;
  clearInterval(timer);
  displayTime();
}

function displayTime() {
  timer = setInterval(() => {
    let diff = comeback_time - Date.now();
    if(diff<=0){
      clearInterval(clearInterval(timer))
      return;
    }
    let seconds = Math.floor(diff / 1000) % 60;
    let minutes = Math.floor(diff / 1000 / 60) % 60;
    left_time.innerText = `${minutes<10 ? '0':''}${minutes}:${seconds<10 ? '0':''}${seconds}`;
  },500);
}

buttons.forEach((button) => button.addEventListener("click", setTimer.bind(null,button.dataset.time)));
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let mins = input.value;
  input.value = "";
  if (mins>0)
    setTimer(mins * 60);
  else
    left_time.innerText = `ENTER VALID INPUT`;
});