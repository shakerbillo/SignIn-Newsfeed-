var database = [
{
	username: "agyei",
	password: "dontmention"
}

];


var newsFeed = [

	{
		username: "Shaker",
		timeline: "Java is Great!"
	},

	{
		username: "Emmanuel",
		timeline: "JavaScript is so cool"
	},

	{
		username: "Nana",
		timeline: "CR7 is the best!"
	},

	{
		username: "EmmanuelG",
		timeline: "Lebron James is a cheatcode!"
	},
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(username, password) {
	if(username === database[0].username && 
		password === database[0].password){
		console.log(newsFeed);
	}else{
		alert("Sorry, wrong username and password!");
	}
	}
signIn(userNamePrompt, passwordPrompt);