document.getElementById('mainContainer').classList.add('loadingBackground');


let quoteContainer = false;
let getQuote = function() {
    let intro = document.getElementById('intro')
    let num = randomNumber(0, 2);
    fetch('api/starwars.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.starwars[num]);
        console.log(data.starwars[num].content);
        if(!quoteContainer) {
            document.getElementById('mainContainer').removeChild(intro);
            createQuoteContainer(data.starwars[num]);
            setContainerColor(data.starwars[num].faction);
            quoteContainer = true;
        } else {
            replaceQuoteContainer(data.starwars[num]);
        }

    })
}

const randomNumber = function(min, max) {
    let nb = min + (max-min+1)*Math.random();
    return Math.floor(nb);
}

const createQuoteContainer = function(quoteContent) {
    //Quote Init
    let quoteInit = quoteContent['content'];
    let quotePost = document.createTextNode(quoteInit);
    //Create element
    let div = document.createElement('div');
    let p = document.createElement('p');
    let btnDiv = document.createElement('div');
    let btn = document.createElement('button');
    let twitterBtn = document.createElement('button');
    //Create Text Node
    
    let btnText = document.createTextNode("New Quote");
    let twitterText = document.createTextNode("Post to Twitter");

    //Append Child
    document.getElementById('mainContainer').appendChild(div);
    div.appendChild(p);
    div.appendChild(btnDiv);
    btnDiv.appendChild(btn);
    btnDiv.appendChild(twitterBtn);
    btn.appendChild(btnText);
    twitterBtn.appendChild(twitterText);

    //Classlist Add
    div.classList.add('quoteContainer');
    btn.classList.add('button');
    twitterBtn.classList.add('button');
    btnDiv.classList.add('btnDiv');

    //Set attributes
    div.setAttribute('id', 'quoteContainer');
    btnDiv.setAttribute('id', 'btnDiv');
    p.setAttribute('id', 'quoteP')
    p.appendChild(quotePost);


    btn.addEventListener("click", function() {
        getQuote();
        })

    twitterBtn.addEventListener("click", function() {
        console.log(quotePost);
        tweetQuote(quotePost);
        })
}

const replaceQuoteContainer = function(quoteContent){
    let quoteInit = quoteContent['content'];
    let quotePost = document.createTextNode(quoteInit);
    let p = document.getElementById('quoteP');
    p.textContent = quotePost.textContent;
    setContainerColor(quoteContent.faction);


}

const setContainerColor = function(faction) {
    document.getElementById('mainContainer').classList.add('loadingBackground');
    let div = document.getElementById('quoteContainer');
    let btnDiv = document.getElementById('btnDiv');
    document.getElementById('mainContainer').classList.remove('mainContainerInitial','lightSideBackground','darkSideBackground','neutralBackground');
    div.classList.remove('lightQuoteContainer','darkQuoteContainer','neutralQuoteContainer');
    btnDiv.classList.remove('lightBtn', 'darkBtn', 'neutralBtn');
        if (faction == 0) {
            document.getElementById('mainContainer').classList.add('lightSideBackground');
            div.classList.add('lightQuoteContainer');   
            btnDiv.classList.add('lightBtn');

        } else if (faction == 1) {
            document.getElementById('mainContainer').classList.add('darkSideBackground');
            div.classList.add('darkQuoteContainer');
            btnDiv.classList.add('darkBtn');
        }
        else {
            document.getElementById('mainContainer').classList.add('neutralBackground');
            div.classList.add('neutralQuoteContainer');
            btnDiv.classList.add('neutralBtn');
        }

}

const tweetQuote = function(quotePost) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotePost.textContent}`; 
    //Using a template string allows turning a variable into a string for reference
    window.open(twitterUrl, '_blank') //Opens a twitter window in a new tab
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
//4

//Marie Tip 
//When making a transition, deal with the opacity.