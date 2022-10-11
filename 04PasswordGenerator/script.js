const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
let password = "";

clipboardEl.addEventListener("click", () => {
  navigator.clipboard.writeText(resultEl.textContent);
  if (resultEl.textContent) {
    alert(`Password: ${resultEl.textContent}  copied to clipboard`);
  }
});

generateEl.addEventListener("click", () => {
  if (lengthEl.value < 8) {
    return alert("min length is 8");
  }
  const lower = lowercaseEl.checked;
  const upper = uppercaseEl.checked;
  const number = numbersEl.checked;
  const symbol = symbolsEl.checked;
  const length = lengthEl.value;

  generatePassword(lower, upper, number, symbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  password = "";
  while (password.length < length) {
    lower ? (password = password + randomFunc.lower()) : "";
    upper ? (password = password + randomFunc.upper()) : "";
    number ? (password = password + randomFunc.number()) : "";
    symbol ? (password = password + randomFunc.symbol()) : "";
  }
  resultEl.textContent = password;
}

function getRandomLower() {
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function getRandomUpper() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function getRandomNumber() {
  return String.fromCharCode(48 + Math.floor(Math.random() * 10));
}

function getRandomSymbol() {
  return String.fromCharCode(33 + Math.floor(Math.random() * 14));
}
