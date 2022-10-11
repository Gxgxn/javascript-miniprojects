const input = document.querySelector("#binary");
const pOut = document.querySelector(".result");
const form = document.querySelector(".container");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value == null) {
    alert("Please enter a value to proceed");
  } else {
    binaryConvert(input.value, pOut);
  }
});

function binaryConvert(inputStr, output) {
  if (inputStr.length === inputStr.match(/[1,0]/g).length) {
    output.innerText = `Decimal Number : ${parseInt(inputStr, 2)}`;
  } else {
    alert("please enter a valid binary value");
  }
}
