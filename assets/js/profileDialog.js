//get the profile dialog form the DOM
let profileDialog = document.querySelector("#profile");
//get the cancel button
let cancelProfileButton = document.querySelector(".cancelProfile");
//get the edit button
let editProfileButton = document.querySelector("#editProfileButton");
//get the input in the profile dialog
let profileTextInput = document.querySelector("input#name");

//check to see if profile has any value
//if not display the pop-up
if (!localStorage.getItem("profileData")) {
	//hide the cancel button if profile data is empty
	cancelProfileButton.classList.add("hidden");
	//hide the edit Profile button
	document.querySelector("#editProfileButton").classList.add("hidden");
	profileDialog.showModal();
} else {
	// attach the profile name to the class 'profileName'
	document.querySelector(".profileName").innerText =
		localStorage.getItem("profileData");
}

//submit event listener function
function submitProfile() {
	let profileName = document.querySelector("#name").value.trim();
	if (!profileName.length) {
		document.querySelector(".error-name").classList.remove("hidden");
	} else {
		document.querySelector(".error-name").classList.add("hidden");
		localStorage.setItem("profileData", profileName);
		//update the name site wise
		document.querySelector(".profileName").innerText = profileName;
		//show the edit profile button
		document.querySelector("#editProfileButton").classList.remove("hidden");
		profileDialog.close();
	}
}

//edit Profile Button
editProfileButton.addEventListener("click", () => {
	//add value to the input
	//this will work because "Edit Button" only shows when localStorage has data
	profileTextInput.value = localStorage.getItem("profileData");
	// open the profile dialog
	profileDialog.showModal();
});

//submit the profile data
document
	.querySelector(".submitProfile")
	.addEventListener("click", submitProfile);

document.querySelector(".cancelProfile").addEventListener("click", () => {
	profileDialog.close();
});
