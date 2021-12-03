document.getElementById('mainContainer').classList.add('loadingBackground');


let quoteContainer = false;
let getQuote = function() {
    let intro = document.getElementById('intro')
    let num = randomNumber(0, 30);
    fetch('json/starwars.json')
    //Original API Code - Cannot guarantee a response
    //fetch('https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote') 
    
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data.starwars[num]);
        // console.log(data.starwars[num].content);
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

    //Event listeners
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
    window.open(twitterUrl, '_blank') 
}

getQuote();
