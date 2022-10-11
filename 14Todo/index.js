let addInput = document.querySelector(".input");
let addButton = document.querySelector(".addButton");

addButton.addEventListener("click", () => {
  if (addInput.value === "") {
    alert("Enter a valid value");
    return;
  } else {
    createList();
  }
});
function createList() {
  let list = document.createElement("div");
  list.classList = "item";
  let itemInput = document.createElement("input");
  itemInput.type = "text";
  itemInput.classList.add("item_input");
  itemInput.setAttribute("readonly", "readonly");
  itemInput.value = addInput.value;
  let editBtn = document.createElement("button");
  editBtn.classList.add("editButton");
  editBtn.innerText = "EDIT";
  let delBtn = document.createElement("button");
  delBtn.classList.add("deleteButton");
  delBtn.innerText = "DELETE";
  list.appendChild(itemInput);
  list.appendChild(editBtn);
  list.appendChild(delBtn);
  document.querySelector(".container").appendChild(list);

  // edit btn
  editBtn.addEventListener("click", () => {
    if (editBtn.innerText == "EDIT") {
      let ogValue = itemInput.value;
      itemInput.removeAttribute("readonly");
      editBtn.innerText = "SAVE";
      itemInput.focus();
      itemInput.style.color = "#e84118";
      document.addEventListener("click", function clicked(e) {
        if (e.target !== editBtn) {
          itemInput.setAttribute("readonly", "readonly");
          editBtn.innerText = "EDIT";
          itemInput.value = ogValue;
          itemInput.style.color = "white";
        }
        document.removeEventListener("click", clicked);
      });
    } else {
      itemInput.setAttribute("readonly", "readonly");
      editBtn.innerText = "EDIT";
      itemInput.style.color = "white";
    }
  });

  //delete button
  delBtn.addEventListener("click", () => {
    let userChoice = confirm("Are You Want To delete");
    if (userChoice) {
      document.querySelector(".container").removeChild(list);
    }
  });
  addInput.value = "";
}
