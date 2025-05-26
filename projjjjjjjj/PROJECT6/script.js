document.addEventListener("DOMContentLoaded", () => {
  //?fires as soon as html is loaded
  //!SELECT THE ELEMENTS-
  const calculateBtn = document.getElementById("calculateBtn");
  const amountInput = document.getElementById("amount");
  const interestInput = document.getElementById("interest");
  const yearsInput = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly");
  const totalPayment = document.getElementById("total");
  const totalInterestPayment = document.getElementById("totalInterest");

  function calculateLoan() {
    const principal = parseFloat(amountInput.value);
    const interest = parseFloat(interestInput.value) / 100 / 12;
    const payments = parseFloat(yearsInput.value) * 12;

    if (isNaN(principal) || isNaN(interest) || isNaN(payments)) {
      alert("bk number daal");
      return;
    }

    //? Calculate monthly payment
    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);

    if (isFinite(monthly)) {
      //true if number is finite number
      //? Calculate total payment and interest
      const total = monthly * payments;
      const totalInterest = total - principal;

      //? Display results with animation
      animateValue(monthlyPayment, 0, monthly, 1000);
      animateValue(totalPayment, 0, total, 1000);
      animateValue(totalInterestPayment, 0, totalInterest, 1000);
    } else {
      alert("Please check your numbers");
    }
  }
  Z;
  function animateValue(element, start, end, duration) {
    const startTime = performance.now(); //returns time stamp in milliseconds

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const current = start + (end - start) * progress;
      element.textContent = current.toFixed(2);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  calculateBtn.addEventListener("click", calculateLoan); //👽👽
});
