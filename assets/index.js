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
	//display the Journal Entries these far
	displayJournalEntries();
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
	//display the Journal Entries these far
	displayJournalEntries();
}

//display function
function displayJournalEntries() {
	let journalEntryContainer = document.querySelector("#journalEntry");
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
