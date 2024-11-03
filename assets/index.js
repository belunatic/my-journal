//global variable
let data = null;

//Check to see if our localstorage has been initiated
if (!localStorage.getItem("journalData")) {
	//initilize the localstorage
	localStorage.setItem("journalData", data);
} else {
	//return the data in a JSON format
	data = JSON.parse(localStorage.getItem("journalData"));
}
