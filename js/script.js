let timesClickedNumEl = document.querySelector(".times-clicked-number");
let clickedBtn = document.querySelector(".clicked-btn");
let resetBtn = document.querySelector(".reset-btn");

timesClickedNumEl.textContent = "0";

function incrementByOne() {
  let num = Number(timesClickedNumEl.textContent) + 1;
  timesClickedNumEl.textContent = num;

  if (num === 3) {
    setTimeout(function () {
      alert("Congrats on 3 clicks!\nContinue to 1000!");
    }, 100);
  }

  if (num === 1000) {
    setTimeout(function () {
      alert("Congrats!");
    }, 100);
  }
}

function resetCounter() {
  timesClickedNumEl.textContent = "0";
}

clickedBtn.addEventListener("click", incrementByOne);
resetBtn.addEventListener("click", resetCounter);
