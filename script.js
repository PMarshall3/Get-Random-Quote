/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
/***
 * `quotes` array
***/
//Version 3
var quotes = [{
	quote: 'I think, there for Iam.',
	source: ' René Descartes',
	citation: ' Princicples of phlosophy, Part 1, article 7, ',
	year: '1644'
}, {
	quote: 'The supreme art of war is to subdue the enemy without fighting.',
	source: ' Sun Tzu',
	citation: ' The art of War',
	year: '500 BC'
}, {
	quote: " Price doesn't make deals, and salary doesn't control your career",
	source: ' Chris Voss',
	citation: ' Never Split the difference, ',
	year: 'May 17,2016'
}, {
	quote: " I say luck is when an opportunity comes along and you're prepared for it.",
	source: 'Denzel Washington',
	citation: 'Speech, ',
	year: ' 2010-2020'
}, {
	quote: " The 40% rule is simple: When your mind is telling you that you're done, that you're exhausted, that you cannot possibly go any further, you're only actually 40% done.",
	source: 'David Goggins',
	citation: 'Cant Hurt Me, ',
	year: 'Oct 6,2017'
}];


/***
 * `getRandomQuote` function
return a random object from the quotes array
 ***/

function getRandomQuote() {
	let wisdom;
	let whoSaidIt;
	let whereSaid;
	let whenSaid;
	let storeData;

	var randomNum = Math.floor(Math.random() * (quotes.length));
  /*
	wisdom = quotes[randomNum].quote;
	whoSaidIt = quotes[randomNum].source;
	whereSaid = quotes[randomNum].citation;
	whenSaid = quotes[randomNum].year;
	storeData.push(wisdom);
	storeData.push(whoSaidIt);
	storeData.push(whereSaid);
	storeData.push(whenSaid);
	return storeData;
  */
  storeData = quotes[randomNum];
  return storeData;
}
/***
 * `printQuote` function
 ***/

function printQuote() {
	let msg;
	let whoSaidit;
	let whereSaidit;
	let whenSaidit;
	let data = getRandomQuote();

	msg = document.getElementsByClassName('quote');
	msg[0].innerHTML = `${data.quote}`;

	whoSaidit = document.getElementsByClassName('source');
	whoSaidit[0].textContent = `${data.source}`;

	whereSaidit = document.createElement('span');
	whereSaidit.setAttribute('class', 'citation');
	whereSaidit.textContent = `${data.citation}`;

	whoSaidit[0].appendChild(whereSaidit);
	whenSaidit = document.createElement('span');
	whenSaidit.setAttribute('class', 'source')
	whenSaidit.textContent = `${data.citation}`;
	whoSaidit[0].appendChild(whenSaidit);

}
printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
//document.getElementById('load-quote').addEventListener("click", printQuote, false);
