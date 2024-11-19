//retrieve the dialog from DOM
let dialogBox = document.querySelector("dialog");
// retrieve the cancel button
let cancelButton = document.querySelector(".cancelEntry");
//retrieve the new journal entry button
let newJournalEntryButton = document.querySelector("#newJournalEntry");

//close the dialog
cancelButton.addEventListener("click", () => {
	dialogBox.close();
});

//open dialog to add journal entry
newJournalEntryButton.addEventListener("click", () => {
	dialogBox.showModal();
});
