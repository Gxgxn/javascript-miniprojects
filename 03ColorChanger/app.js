function randompickerbtn() {
  let random = "ABCDEF0123456789";
  let outHex = [];
  for (let i = 0; i < 6; i++) {
    outHex.push(random.charAt(Math.floor(Math.random() * random.length)));
  }
  document.getElementById("canvas").style.backgroundColor = `#${outHex.join(
    ""
  )}`;
}

let btn = document.querySelector("#button");
btn.addEventListener("click", randompickerbtn);
