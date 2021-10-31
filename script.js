// const apiURL = 
// Calling this site gives a random quote. You don't have
// a list or control of the quotes. 'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote'
// faction:0 = light side. faction:1 = dark side.

//Website found: https://wolfgang-ziegler.com/blog/starwars-quotes-web-api

//Changes to make in DOM
//light side and dark side styling, based on the faction set by the API.
//Personalise HTML/CSS from scratch, keep to basic structure


//https://reqbin.com/req/nfilsyk5/get-request-example 

let lightQuote = document.getElementById('lightQuoteText')
let getQuote = function() {

    fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
    .then(data => {
    return data.json();
    })
    .then(content => {
    // return content;
    //If you call your function here, using content as a parameter, it should work.
    console.log(content);
    let quote = document.createTextNode(content.content)
    lightQuote.appendChild(quote);
    // displayQuote(content);
    })
}

const displayQuote = function(quoteContent) {
    let quoteInit = quoteContent['content'];
    console.log(quoteInit);
    let quotePost = document.createTextNode(quoteInit);
    // if (quoteContent.faction = 0) {
        let lightDiv = document.createElement('div');
        let lightP = document.createElement('p');
        document.getElementById('mainContainer').classList.add('lightSideBackground');
        document.getElementById('mainContainer').appendChild(lightDiv);
        lightDiv.setAttribute('id', 'lightQuoteContainer');
        lightDiv.appendChild(lightP);
        document.getElementById('lightP').appendChild(quotePost);

    // } else if (quoteContent.faction = 1) {
    //     let lightDiv = document.createElement('div');
    //     let lightP = document.createElement('p');
    //     document.getElementById('mainContainer').classList.add('lightSideBackground');
    //     document.getElementById('mainContainer').appendChild(lightDiv);
    //     lightDiv.setAttribute('id', 'lightQuoteContainer');
    //     lightDiv.appendChild(lightP);
    //     document.getElementById('lightP').appendChild(quotePost);
    // }

    // else {
    //     let lightDiv = document.createElement('div');
    //     let lightP = document.createElement('p');
    //     document.getElementById('mainContainer').classList.add('lightSideBackground');
    //     document.getElementById('mainContainer').appendChild(lightDiv);
    //     lightDiv.setAttribute('id', 'lightQuoteContainer');
    //     lightDiv.appendChild(lightP);
    //     document.getElementById('lightP').appendChild(quotePost);
    // }
}

getQuote();



// document.getElementById('mainContainer').addClassList('lightSideBackground');
// // 

// 
// console.log(currentQuote.content);
// console.log(currentQuote.id);
// console.log(currentQuote.faction);

// //<div id="lightQuoteContainer">
// <p id="lightQuoteText"></p>
// </div>


//Properties: 
//id: The quote number. (Can you choose?)
//content: The quote, and character.
//faction: The side of the character. 
//Console logs can't be made outside the fetch request. (Is that true?)
//Quote takes a while to load and should be considered in programming.
//Update to quote container should be made within the fetch request function.

//(0 light side, 1 dark side, 2 ?? - up to 4)
//2 civilians?
//2 characters: Schmi (anakin's mum)
//4 Ryo Chuchi (some clone wars politician)
//2, 3, 4

//LOGIC
//get quote

// Main container gets a class of the background
//



