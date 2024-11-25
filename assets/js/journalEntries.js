//global variable
let data = [];

//Check to see if our localstorage has been initiated
//and setting the default message LocalStorage is empty
if (!localStorage.getItem("journalData")) {
	//initialize the localstorage
	localStorage.setItem("journalData", data);
	//set a default message for empty localStorage
	document.querySelector(
		"#journalEntry"
	).innerHTML = `<h3 class="text-2xl py-3"> Welcome, ready to start your journaling journey 😊! </h3>`;
} else {
	//return the data in a JSON format
	data = JSON.parse(localStorage.getItem("journalData"));
	console.log(data);
	//display the Journal Entries these far
	displayJournalEntries();
}

//set the new journal entry data
function submittedJournalData() {
	let dataSubmittedText = document.querySelector("#message").value.trim();
	// check to see if only whitespace exist in textarea and return false
	if (!dataSubmittedText.length) {
		return false;
	} else {
		//initiate the object
		let dataSubmitted = {};
		//id
		dataSubmitted.id = Date.now();
		//date
		dataSubmitted.submittedDate = new Date().toLocaleString();
		//text
		dataSubmitted.text = dataSubmittedText;
		//if ever updated mark the date
		dataSubmitted.dateUpdated = null;

		return dataSubmitted;
	}
}

//submit the journal
document.querySelector(".submitEntry").addEventListener("click", submitJournal);

function submitJournal() {
	//a variable to hold the submitted journal object
	let journalObject = submittedJournalData();
	// check the result of submitted journal entry
	//if false is returned, alert a message
	//else submit the journal entry to localstorage
	if (!journalObject) {
		document.querySelector(".error").classList.remove("hidden");
	} else {
		document.querySelector(".error").classList.add("hidden");
		//push the new journal data to the front of the data array
		data.unshift(journalObject);
		//add data tot he localstorage
		localStorage.setItem("journalData", JSON.stringify(data));
		//reset the textarea
		document.querySelector("#message").value = "";
		//close the dialog after submitting
		document.querySelector("dialog").close();
		//display the Journal Entries these far
		displayJournalEntries();
	}
}

//display Journals Entries function
function displayJournalEntries() {
	let journalEntryContainer = document.querySelector("#journalEntry");
	//clear the container if anything is in it else do nothing.
	journalEntryContainer.innerHTML ? (journalEntryContainer.innerHTML = "") : "";
	//map thru the data to map it on the page
	data.map((journal, i) => {
		// create p tag for date and text
		let divContainer = document.createElement("div");
		let pDate = document.createElement("p");
		let pText = document.createElement("p");
		//add the text to the new p tags
		pDate.textContent = journal.submittedDate;
		pText.textContent = journal.text;
		//append the element to show in front-end
		divContainer.appendChild(pText).classList.add("pb-[10px]", "pt-[5px]");
		divContainer
			.appendChild(pDate)
			.classList.add(
				"border-b-2",
				"pb-[10px]",
				"border-orange-500",
				"text-orange-500",
				"text-end"
			);

		journalEntryContainer.appendChild(divContainer).classList.add("my-[30px]");
	});
}
