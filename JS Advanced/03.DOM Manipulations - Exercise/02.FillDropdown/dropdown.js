function addItem() {
    let menu = document.getElementById("menu");

    let text = document.getElementById("newItemText").value;
    let value = document.getElementById("newItemValue").value;

    let myOption = document.createElement("option");
    myOption.textContent = text;
    myOption.value = value;

    menu.appendChild(myOption);

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}