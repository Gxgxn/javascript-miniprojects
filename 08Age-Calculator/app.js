// const container;
// const error;

function getAge() {
  const input = document.querySelector("#dob");
  let dateNow = new Date();
  console.log(input.value);
  input.addEventListener("input", () => {
    let dob = new Date(input.value);
    if (dateNow < dob) {
      alert("enter a valid date of birth ");
      input.value = "";
      return;
    }

    calcAge(dateNow, dob);
  });
}

function calcAge(cDate, bDate) {
  let age = new Date(cDate - bDate);
  const month = age.getMonth();
  const day = age.getDate() - 1;
  const year = age.getFullYear() - 1970;
  displayAge(year, month, day);
}

function displayAge(year, month, day) {
  document.getElementById("years").innerHTML = year;
  document.getElementById("months").textContent = month;
  document.getElementById("days").textContent = day;
}

window.onload(getAge());
