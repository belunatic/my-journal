//global variable
let data = [];

//Check to see if our localstorage has been initiated
if (!localStorage.getItem("journalData")) {
	//initialize the localstorage
	localStorage.setItem("journalData", data);
} else {
	//return the data in a JSON format
	data = JSON.parse(localStorage.getItem("journalData"));
	console.log(data);
}

//set the journal data
function submittedJournalData() {
	//initiate the object
	let dataSubmitted = {};
	//id
	dataSubmitted.id = Date.now();
	//date
	dataSubmitted.submittedDate = new Date().toLocaleString();
	//text
	dataSubmitted.text = document.querySelector("#message").value;
	//if ever updated mark the date
	dataSubmitted.dateUpdated = null;

	return dataSubmitted;
}

//submit the journal
document.querySelector(".submit").addEventListener("click", submitJournal);

function submitJournal() {
	//push the new journal data tot he front of the data array
	data.unshift(submittedJournalData());
	//add data tot he localstorage
	localStorage.setItem("journalData", JSON.stringify(data));
	//reset the textarea
	document.querySelector("#message").value = "";
}

//display function
