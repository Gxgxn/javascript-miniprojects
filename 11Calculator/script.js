function insert(num) {
  let textView = document.querySelector(".textview");
  if (typeof num == "number") {
    textView.value += num;
  } else {
    let str = document.querySelector(".textview").value;
    if (isNaN(str[str.length - 1])) {
      return;
    } else {
      textView.value += num;
    }
  }
}

function equals() {
  let outText = document.querySelector(".textview");
  if (outText.value) {
    outText.value = eval(outText.value);
  } else {
    alert("enter a valid number");
  }
}

function clean() {
  document.querySelector(".textview").value = "";
}

function back() {
  let outText = document.querySelector(".textview").value.split("");
  outText.pop();
  document.querySelector(".textview").value = outText.join("");
}
// const add = function (num1, num2) {
//   return num1 + num2;
// };

// const subtract = function (num1, num2) {
//   return num1 - num2;
// };

// const sum = function (sumAll) {
//   const initialValue = 0;
//   const sumWithInitial = sumAll.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
//   );
//   return +sumWithInitial;
// };

// const multiply = function (multiplyall) {
//   // const initialValue = 1;
//   const mulWithInitial = multiplyall.reduce(
//     (previousValue, currentValue) => previousValue * currentValue
//   );
//   return mulWithInitial;
// };

// const power = function (num1, num2) {
//   return Math.pow(num1, num2);
// };

// const factorial = function (num) {
//   var rval = 1;
//   for (var i = 2; i <= num; i++) {
//     rval = rval * i;
//   }
//   return rval;
// };
