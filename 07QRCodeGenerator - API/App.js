const img = document.querySelector("#img");

document.getElementById("submit").addEventListener("click", () => {
  let input = document.getElementById("input");

  fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}&charset-source=UTF-8`
  )
    .then((res) => res.blob())
    .then((obj) => {
      const objectURL = URL.createObjectURL(obj);
      img.src = objectURL;
      img.style.display = "block";
    });
});
