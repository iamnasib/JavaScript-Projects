console.log(`Developed by Nasib Farooq, 
username on all platforms :@iamnasib`);
const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json");

const dropdowns = document.querySelectorAll(".amount select");
const fromInput = document.querySelector("#fromInput");
const toInput = document.querySelector("#toInput");
const fromCur = document.querySelector("#fromDD");
const toCur = document.querySelector("#toDD");

for (let select of dropdowns) {
  for (curCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = curCode;
    newOption.value = curCode;
    if (select.name === "from" && curCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && curCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (event) => {
    updateFlag(event.target);
    getExcRate(event);
  });
}

const updateFlag = (el) => {
  let curCode = el.value;
  let countryCode = countryList[curCode];
  let newFlag = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let flagImg = el.parentElement.parentElement.querySelector("img"); //document.querySelector(".DD img");
  flagImg.src = newFlag;
};
const getExcRate = async (event) => {
  let amtValue = fromInput.value;
  if (amtValue < 0) {
    amtValue = 1;
    fromInput.value = 1;
  }
  const curURL = `${BASE_URL}/${fromCur.value.toLowerCase()}.json`;

  let response = await fetch(curURL);
  let json = await response.json();
  let rate = json[fromCur.value.toLowerCase()][toCur.value.toLowerCase()];

  let exchangedAmt = amtValue * rate;

  toInput.value = exchangedAmt;
};
fromInput.addEventListener("keyup", (event) => {
  getExcRate(event);
});
