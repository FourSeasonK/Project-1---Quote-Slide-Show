/******************************************
*****************************************/
/////300341721 Sung Ah Kim/////
/*** 
 * `quotes` array 
***/
//Making object array to store quotes
//The object can have four properties or less such as quote, source, citation and year.
let quotes = [
    {
        quote: "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time",
        source: "Tom Cargill",
        citation:"The New Stack",
        year: "2017"
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
//for compare with previous random index and current random index
let previous = -1;

//get random one quote object
function getRandomQuote(arrayQut){

    //for while loop
    let flag = true;
    //create a variable to store a random number
    let number = 0;
   
    //if the random number is out of scope and the same number as the previous one, it loops again.
    while(flag){

        ///generate a random number and make it single digit
        let randomNum = (Math.random() * 10);
        console.log(randomNum);

        //Making random numbers to integers (throwing away the decimal point)
        number = Math.floor(randomNum);
        console.log("current" + number);
        console.log("previous" + previous);

        //check if the number is out of scope(quotes.length) or the same number as the previous one
        //If the number is in the scope and not the same as the previous number, it finishes the loop and gets one random number. If not, it loops again.
        if((number >=0 && number <= 6) && previous !== number){
                    previous = number;
                    flag = false;
                    console.log("get value");
        }
    }
    //store the random number as an index of the array and return one object quote array 
    return arrayQut[number];
}

/***
 * `printQuote` function
***/
//display quotes according to the result of a random number
const printQuote = function(allQuotes){

    //to get one random quote
    let randomQuote = getRandomQuote(allQuotes);
    console.log(randomQuote);
    
    //store <p> element as String.
    let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</P>" + "<p class='source'>" + randomQuote.source;
    
    //check if the object array has a specific property
    //If it has, it concatenates <span> element as String to display elements.
    //reference(hasOwnProperty): https://www.javascripttutorial.net/object/javascript-check-if-property-exists/ 
    if(randomQuote.hasOwnProperty('citation')){
        PtoHTML1 = PtoHTML1 + "<span class='citation'>" + randomQuote.citation + "</span>";
    }
    
    if(randomQuote.hasOwnProperty('year')){
        PtoHTML1 = PtoHTML1 + "<span class='year'>" + randomQuote.year + "</span>";
    }
    //concatenate the closing </p>
    PtoHTML1 = PtoHTML1 + "</p>";
    
    //set the innerHTML of the quote-box div to display HTML elements String.
    document.getElementById('quote-box').innerHTML = PtoHTML1;
    console.log(PtoHTML1);
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
***/
//add click button event listener to display a random quote
document.getElementById('load-quote').addEventListener('click', () => {printQuote(quotes)}); 