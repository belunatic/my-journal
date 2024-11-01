console.log("Hello World");

let data = [
	{
		date: "Swiss Cheese Plant",
		text: "Monstera",
		last_updated_date: "Araceae",
		
];

localStorage.setItem("journalData", JSON.stringify(data));
localStorage.setItem("journalData2", data);
console.log(JSON.parse(localStorage.getItem("journalData")));
console.log(localStorage.getItem("journalData2"));
