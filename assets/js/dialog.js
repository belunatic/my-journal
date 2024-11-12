let dialogBox = document.querySelector("dialog");
let cancelButton = document.querySelector("cancelEntry");

//close the dialog
cancelButton.addEventListener("click", () => {
	dialogBox.close();
});
