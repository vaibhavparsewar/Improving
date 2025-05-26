

//?USE EXCHANGE RATE API   WEBSITE TO GET THE API

// Step 1: Initialize Feather icons for any elements that need icons
// Use feather.replace() to replace placeholders with actual icons
// Step 2: Initialize the application by selecting necessary DOM elements
// Select elements for amount input, currency dropdowns, convert button, result
display, base currency, get rates button, exchange rates display, mode toggles, and
mode sections
// Step 3: Define the API key for accessing the Exchange Rate-API
// Set the apikey variable to your ExchangeRate-API key
// Step 4: Set up event listeners for toggling between conversion and exchange modes
// Step 4a: Add click event listeners to toggle buttons to switch between modes
// - Step 4b: Update the UI to reflect the selected mode (conversion or exchange)
// Step 5: Implement the currency conversion functionality
// - Step 5a: Add a click event listener to the convert button
// - Step 5b: Get the amount, from-currency, and to-currency values from the user
// - Step 5c: Fetch the conversion rate from the API using the selected currencies
56/31:40// - Step 5d: Calculate the converted amount and update the result display with – Šachy


feather.replace();

const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const baseCurrency = document.getElementById("base-currency");
const getRatesBtn = document.getElementById("get-rates-btn");
const exchangeRates = document.getElementById("exchange-rates");
const convertMode = document.getElementById("convert-mode");
const exchangeMode = document.getElementById("exchange-mode");
const toggleBtns = document.querySelectorAll(".toggle-btn");

// Use a free API key from ExchangeRate-API
const apiKey = "b46f38793af093192c0faf54";


toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active"); //?adding active class to btn once clicked

    const mode = btn.getAttribute("data-mode");
    if (mode === "convert") {
      convertMode.style.display = "flex";
      exchangeMode.style.display = "none"; //?not to show exchange part
      //!basically we are toggeling between this 
    } else {
      convertMode.style.display = "none";
      exchangeMode.style.display = "flex";
    }
  });
});

convertBtn.addEventListener("click", () => {
  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`)
    .then((response) => response.json())  //?else readableStream format 
    .then((data) => {
      const rate = data.conversion_rates[to];
      const convertedAmount = (amount * rate).toFixed(2);
      result.innerHTML = `<span class="currency-icon">${getCurrencySymbol(
        to
      )}</span>${convertedAmount} ${to}`;
    })
    .catch((error) => {
      console.error("Error:", error);
      result.textContent = "An error occurred. Please try again.";
    });
});


getRatesBtn.addEventListener("click", () => {
  const base = baseCurrency.value;

  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`)
    .then((response) => response.json())
    .then((data) => {
      let ratesHtml = "<h3>Exchange Rates</h3><ul>";
      for (const [currency, rate] of Object.entries(data.conversion_rates)) {//?objet.entries gives array 
        if (currency !== base) {
          ratesHtml += `<li><span class="currency-icon">${getCurrencySymbol(
            currency
          )}</span>${currency}: ${rate.toFixed(4)}</li>`;
        }
      }
      ratesHtml += "</ul>";
      exchangeRates.innerHTML = ratesHtml;
    })
    .catch((error) => {
      console.error("Error:", error);
      exchangeRates.textContent = "An error occurred. Please try again.";
    });
});

function getCurrencySymbol(currency) {
  const symbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
  };
  return symbols[currency] || currency;
}
