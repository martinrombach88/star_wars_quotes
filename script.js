document.getElementById('mainContainer').classList.add('loadingBackground');
document.getElementById('mainContainer').classList.remove('lightSideBackground');


let getQuote = function() { 
    fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
    .then(data => {
        return data.json();
        })
    .then(content => {
        console.log(content);
        createQuoteContainer(content);
        setContainerColor(content.faction);
    })
}

const createQuoteContainer = function(quoteContent) {
    let quoteInit = quoteContent['content'];
    let quotePost = document.createTextNode(quoteInit);
    let div = document.createElement('div');
    let p = document.createElement('p');
    let btnDiv = document.createElement('div');
    let btn = document.createElement('button');
    let btnText = document.createTextNode("New Quote");
    let twitterText = document.createTextNode("Post to Twitter");
    let twitterBtn = document.createElement('button');

    document.getElementById('mainContainer').appendChild(div);
    document.getElementById('mainContainer')
    div.classList.add('quoteContainer');
    btn.classList.add('button');
    twitterBtn.classList.add('button');
    btnDiv.classList.add('btnDiv');

    //Here we need to set quoteContainer as both a class and an id.
    div.setAttribute('id', 'quoteContainer');
    btnDiv.setAttribute('id', 'btnDiv');
    div.appendChild(p);
    div.appendChild(btnDiv);
    btnDiv.appendChild(btn);
    btnDiv.appendChild(twitterBtn);
    btn.appendChild(btnText);
    twitterBtn.appendChild(twitterText);
    p.appendChild(quotePost);
    
}

const setContainerColor = function(faction) {
    document.getElementById('mainContainer').classList.add('loadingBackground');
    console.log(faction);
    let div = document.getElementById('quoteContainer');
    let btnDiv = document.getElementById('btnDiv');
        if (faction == 0) {
            document.getElementById('mainContainer').classList.add('lightSideBackground');
            // document.getElementById('mainContainer').classList.remove('neutralBackground');
            // document.getElementById('mainContainer').classList.remove('darkSideBackground');    
            div.classList.add('lightQuoteContainer');   
            btnDiv.classList.add('lightBtn');

        } else if (faction == 1) {
            document.getElementById('mainContainer').classList.add('darkSideBackground');
            // document.getElementById('mainContainer').classList.remove('lightSideBackground');
            // document.getElementById('mainContainer').classList.remove('neutralBackground');         
            div.classList.add('darkQuoteContainer');
            btnDiv.classList.add('darkBtn');
        }
        else {
            document.getElementById('mainContainer').classList.add('neutralBackground');
            // document.getElementById('mainContainer').classList.remove('lightSideBackground');
            // document.getElementById('mainContainer').classList.remove('darkSideBackground'); 
            div.classList.add('neutralQuoteContainer');
            btnDiv.classList.add('neutralBtn');
        }
}


getQuote();


//Notes from Mentor:
// Mistake! - Don't use single = for comparison.

//Don't set styles by id. Use classes instead. Only use ids in rare occasions.

//Make your code more DRY, think more top down and functionally.
//Each function has to do one thing, and should do it generically.
//Don't embed ids in code.

//Completely separate the styles from HTML structure. 
//Use classes for CSS only. Make sure functions serve a single purpose.
//Order:
//Build the structure of the HTML/Javascript functions.
//Set the CSS through classes.

//Key Note: Structure into lots of small functions that serve single purposes.

//When adding buttons + loading
//1. Build the HTML/DOM structure first. DO NOT USE CSS!
//2. Add the on click event in a separate function.
//3. Loading - one from an onclick event. 
// One from the page load event. - This is more complicated. 
// You would need to build extra code to add an animation while this is loading.
// This is a complicated process and should be avoided. (Maybe just style the body instead.)
//4. 