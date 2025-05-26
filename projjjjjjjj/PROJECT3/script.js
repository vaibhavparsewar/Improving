let count = 0;

const counterEl = document.getElementById("counter");

//*INCREASE THE COUNTER
document.getElementById("increasebtn").addEventListener("click", function () {
  count++;
  //setting the value
  //!   counterEl.innerHTML = "<h1>count</h1>";
  counterEl.textContent = count;
});

//*DECREASE THE COUNTER
document.getElementById("decreasebtn").addEventListener("click", function () {
  count--;
  //setting the value
  counterEl.textContent = count;
});

//*DECREASE THE COUNTER BY 10
document.getElementById("increasebtnn").addEventListener("click", function () {
  count += 10;
  //setting the value
  counterEl.textContent = count;
});

//*RESET THE COUNTER
document.getElementById("resetbtn").addEventListener("click", function () {
  //setting the value
  count = 0;
  counterEl.textContent = 0;
});
