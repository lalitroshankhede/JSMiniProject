const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let list = document.createElement("li");
    let chkBox = document.createElement("input");
    chkBox.type = "checkbox";
    chkBox.checked = false;

    list.innerHTML = inputBox.value;
    
    let spanEle = document.createElement("span"); 

    list.appendChild(chkBox);
    listContainer.appendChild(list);

    spanEle.innerHTML = "\u00d7";
    list.appendChild(spanEle);

    chkBox.addEventListener("click", function (e) {
      if (e.target.checked === true) {
        list.style.textDecoration = "line-through";
      }
      if (e.target.checked === false) {
        list.style.textDecoration = "none";
      }
    });

    spanEle.addEventListener("click", (e) => {
      if (e.target.tagName.toString() === "SPAN") {
        e.target.parentElement.remove();
      }
    });
  }

  inputBox.value = "";
}
