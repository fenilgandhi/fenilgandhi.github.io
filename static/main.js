/* Quotes from turnerquotes */

var quotes = [
	"It's not what you do; <br>it's how you're perceived",
	'Focus on the things you can change',
	"On the inside, I'm like a baby without candy",
	"At the end of every piece of code, <br>there's a human being",
	"A developer who is not optimistic shouldn't be a developer.<h6>Harry Triguboff</h6>",
	'If debugging is the process of removing software bugs, <br>then programming must be the process of putting them in <h6>Edsger Dijkstra</h6>',
	'In order to understand recursion,  <br>one must first understand recursion',
	'Nine people can’t make a baby in a month',
	"We're losing track of the vastness of potential for computer science. <br>We really have to revive the beautiful intellectual joy of it, as opposed to the business potential. <h6>Jaron Lanier</h6>",
	"Just because something doesn't do, what it was planned to do,  <br>doesn't mean it's useless. <h6>Thomas Alva Edison</h6>",
	'Everything is a Game,  <br>game of situations, built by necessities,  <br>desire, relationships, people, priorities, ambition.',
	"Appreciate the ones who are there at all times,  <br>not just when it's convenient.",
];

var generateQuote = function () {
	var random_quote = quotes[Math.floor(Math.random() * quotes.length)];
	document.getElementById('aDropOfWisdom').innerHTML = random_quote;
};

window.onload = generateQuote;
document.onclick = generateQuote;

console.clear();
console.log('I wonder why would you wander here.');
