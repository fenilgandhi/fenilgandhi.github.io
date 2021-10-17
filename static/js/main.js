/* Quotes from turnerquotes */

var quotes = [
	"Computers are useless. They can only give you answers.<br><h6>- Pablo Picasso</h6>",

	"Focus on the things you can change",

	"A developer who is not optimistic shouldn't be a developer.<h6>Harry Triguboff</h6>",

	"If debugging is the process of removing software bugs, <br>then programming must be the process of putting them in <h6>Edsger Dijkstra</h6>",
	
	'In order to understand recursion,  <br>one must first understand recursion',
	
	"Nine people can’t make a baby in a month <br> <h6>- Personal experience</h6>",

	"Just because something doesn't do, what it was planned to do,  <br>doesn't mean it's useless. <h6>Thomas Alva Edison</h6>",
	
	'Everything is a Game,  <br>game of situations, built by necessities,  <br>desire, relationships, people, priorities, ambition.',
	
	"Appreciate the ones who are there at all times,  <br>not just when it's convenient.",

	"Artificial intelligence is no match for natural stupidity.<br><h6> - Albert Einstein</h6>",
];

var generateQuote = function () {
	var random_quote = quotes[Math.floor(Math.random() * quotes.length)];
	document.getElementById('aDropOfWisdom').innerHTML = random_quote;
};

window.onload = generateQuote;
document.onclick = generateQuote;

console.clear();
console.log('I wonder why would you wander here.');
