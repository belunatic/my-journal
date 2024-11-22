//get the profile dialog form the DOM
let profileDialog = document.querySelector("#profile");
//get the cancel button
let cancelProfileButton = document.querySelector(".cancelProfile");

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
		profileDialog.close();
	}
}

//submit the profile data
document
	.querySelector(".submitProfile")
	.addEventListener("click", submitProfile);

document.querySelector(".cancelProfile").addEventListener("click", () => {
	profileDialog.close();
});
