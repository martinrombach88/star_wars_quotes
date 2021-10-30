// const apiURL = 
// Calling this site gives a random quote. You don't have
// a list or control of the quotes. 'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote'
// faction:0 = light side. faction:1 = dark side.

//Website found: https://wolfgang-ziegler.com/blog/starwars-quotes-web-api

//Changes to make in DOM
//light side and dark side styling, based on the faction set by the API.
//Personalise HTML/CSS from scratch, keep to basic structure

// const apiURL = ("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
// let apiQuote = [];


//https://reqbin.com/req/nfilsyk5/get-request-example 


let currentQuote;
var url = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote";

fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
.then(data => {
return data.json();
})
.then(content => {
console.log(content);
currentQuote = content;
console.log(currentQuote.content);
console.log(currentQuote.id);
console.log(currentQuote.faction);
});

//Properties: 
//id: The quote number. (Can you choose?)
//content: The quote, and character.
//faction: The side of the character. (0 light side, 1 dark side, 2 ??)
//Console logs can't be made outside the fetch request.
//Quote takes a while to load and should be considered in programming.
//Update to quote container should be made within the fetch request function.




