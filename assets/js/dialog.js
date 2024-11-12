//retrieve the dialog from DOM
let dialogBox = document.querySelector("dialog");
// retrieve the cancel button
let cancelButton = document.querySelector(".cancelEntry");

//close the dialog
cancelButton.addEventListener("click", () => {
	dialogBox.close();
});
