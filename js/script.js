/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//Created an Array Object to store the Quotes
  var quotes = [
    {
      msg:'I think, there for Iam.',
      creator:' René Descartes',
      citing:' Princicples of phlosophy, Part 1, article 7 ',
      year: '1644'
    },
    {
      msg:'The supreme art of war is to subdue the enemy without fighting.',
      creator:' Sun Tzu',
      citing:'The art of War',
      year: '500 BC'
    },
    {
      msg:" Price doesn't make deals, and salary doesn't control your career",
      creator:'Chris Voss',
      citing:'Never Split the difference',
      year:'May 17,2016'
    },
    {
      msg:" I say luck is when an opportunity comes along and you're prepared for it.",
      creator:'Denzel Washington ',
      citing:'Speech ',
      year:' 2010-2020'
    },
    {
      msg:" The 40% rule is simple: When your mind is telling you that you're done, that you're exhausted, that you cannot possibly go any further, you're only actually 40% done." ,
      creator:'David Goggins' ,
      citing:'Cant Hurt Me',
      year:'Oct 6,2017'
    }
  ];

  /***
   * `getRandomQuote` function
  ***/
  function getRandomQuote(){
//create variables to store Data
    let wisdom;
    let whoSaidIt;
    let whereSaid;
    let whenSaid;
    let storeData = [];
    var randomNum = Math.floor(Math.random() * (quotes.length));
// Assign each part value to a variable
         wisdom = quotes[randomNum].msg;
      whoSaidIt = quotes[randomNum].creator;
      whereSaid = quotes[randomNum].citing;
       whenSaid = quotes[randomNum].year;
//Push each variable into an array
        storeData.push(wisdom);
        storeData.push(whoSaidIt);
        storeData.push(whereSaid);
        storeData.push(whenSaid);

        return storeData;
  }

  /***
   * `printQuote` function
  ***/
    function printQuote(){
/*
Called these variables again, to avoid making them Global variables
for some reason as global variables, it will delete 2 class attributes
 within the HTML file
*/
      let msg;
      let whoSaidit;
      let whereSaidit;
      let whenSaidit;
      let data = getRandomQuote();
// connect msg to Class tag 'quote'
      msg = document.getElementsByClassName('quote');
// display the message value at class = 'quote'
      msg[0].innerHTML = `${data[0]}`;

      whoSaidit = document.getElementsByClassName('source');
      whoSaidit[0].textContent = `${data[1]}`

//needed to create a new span tag, due to it being delete when "show quote was being selected"
      whereSaidit = document.createElement('span');
//whereSaidit is set to change class value to citation class
      whereSaidit.setAttribute('class','citation');

//display the persons name to page
      whereSaidit.textContent = `${data[2]}`;
      whoSaidit[0].appendChild(whereSaidit);

      whenSaidit = document.createElement('span');
      whenSaidit.setAttribute('class','source')
      whenSaidit.textContent = `${data[3]}`;
      whoSaidit[0].appendChild(whenSaidit);


    }


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
