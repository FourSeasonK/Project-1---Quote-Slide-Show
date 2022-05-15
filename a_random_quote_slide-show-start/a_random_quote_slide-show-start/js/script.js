/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
//making object array
let quotes = [
    {
        quote: "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time",
        source: "Tom Cargill",
        citation:"The New Stack",
        year: "1985"
    },
    {
        quote: "Good code is its own best documentation. As you’re about to add a comment, ask yourself, “How can I improve the code so that this comment isn’t needed?” Improve the code and then document it to make it even clearer.",
        source: "Steve McConnell",
        year: "2013"
    },
    {
        quote: "One of the best programming skills you can have is knowing when to walk away for a while.",
        source: "Oscar Godson",
        citation: "Twitter"
    },
    {
        quote: "One of my most productive days was throwing away 1000 lines of code.",
        source: "Ken Thompson"
    },
    {
        quote: "It’s hard enough to find an error in your code when you’re looking for it; it’s even harder when you’ve assumed your code is error-free.",
        source: "Steve McConnell",
        year: "2021"
    },
    {
        quote: "The only way to learn a new programming language is by writing programs in it.",
        source: "Dennis Ritchie",
        citation:"Dev",
        year: "2019"
    },
    {
        quote: "Testing leads to failure, and failure leads to understanding.",
        source: "Burt Rutan"
    }
];

console.log(quotes);

/***
 * `getRandomQuote` function
***/
let previous = -1;

function getRandomQuote(arrayQut){

    let flag = true;
    let number = 0;
   
    while(flag){

        let randomNum = (Math.random() * 10);
        console.log(randomNum);
        number = Math.floor(randomNum);
        console.log("current" + number);
        console.log("previous" + previous);

        if((number >=0 && number <= 4) && previous !== number){
                    previous = number;
                    flag = false;
                    
                    console.log("get value");
        }
    }
    return arrayQut[number];
}

/***
 * `printQuote` function
***/
const printQuote = function(allQuotes){

    let randomQuote = getRandomQuote(allQuotes);
    console.log(randomQuote);
    
    let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</P>" + "<p class='source'>" + randomQuote.source;
    
    if(randomQuote.hasOwnProperty('citation')){
        PtoHTML1 = PtoHTML1 + "<span class='citation'>" + randomQuote.citation + "</span>";
    }
    
    if(randomQuote.hasOwnProperty('year')){
        PtoHTML1 = PtoHTML1 + "<span class='year'>" + randomQuote.year + "</span>";
    }
    
    PtoHTML1 = PtoHTML1 + "</p>";
    
    document.getElementById('quote-box').innerHTML = PtoHTML1;
    //console.log(PtoHTML1);
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById('load-quote').addEventListener('click', () => {printQuote(quotes)}); //call-back function