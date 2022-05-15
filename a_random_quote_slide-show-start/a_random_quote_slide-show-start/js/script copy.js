/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
function creatQuoteObject(qt,sr,ct,yr){

    let quoteObj = {
        quote: `${qt}`,
        source: `${sr}`,
        citation:`${ct}`,
        year: `${yr}`
    };

    return quoteObj;
}

//making object array
function addQuotes(){

    let quotes = [];

    let quote1 = ["The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time", "Tom Cargill", "The New Stack", "1985"];
    let quote2 = ["Good code is its own best documentation. As you’re about to add a comment, ask yourself, “How can I improve the code so that this comment isn’t needed?” Improve the code and then document it to make it even clearer.", "Steve McConnell", "2013"];
    let quote3 = ["One of the best programming skills you can have is knowing when to walk away for a while.", "Oscar Godson", "Twitter", "2017"];
    let quote4 = ["One of my most productive days was throwing away 1000 lines of code.", "Ken Thompson", "Twitter", "2019"];
    let quote5 = ["It’s hard enough to find an error in your code when you’re looking for it; it’s even harder when you’ve assumed your code is error-free.", "Steve McConnell", "Twitter", "2021"];

    let quoteResult1 = creatQuoteObject(quote1[0],quote1[1],quote1[2], quote1[3]);
    let quoteResult2 = creatQuoteObject(quote2[0],quote2[1],quote2[2], quote2[3]);
    let quoteResult3 = creatQuoteObject(quote3[0],quote3[1],quote3[2], quote3[3]);
    let quoteResult4 = creatQuoteObject(quote4[0],quote4[1],quote4[2], quote4[3]);
    let quoteResult5 = creatQuoteObject(quote5[0],quote5[1],quote5[2], quote5[3]);
    quotes.push(quoteResult1);
    quotes.push(quoteResult2);
    quotes.push(quoteResult3);
    quotes.push(quoteResult4);
    quotes.push(quoteResult5);

    return quotes;
}

let addAllQuotes = addQuotes();
//console.log(addAllQuotes);


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
        // if(previous === number){
        //     flag = true;
        // } else{
        //     if(number < 0 || number > 4){
        //         flag = true;
        //         console.log("again");
        //         } else{
                    
        //             previous = number;
        //             flag = false;
                    
        //             console.log("get value");
        //         }
        // }

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
const printQuote = function(addAllQuotes){

    let randomQuote = getRandomQuote(addAllQuotes);
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
    
    // document.getElementsByClassName("quote").innerHTML = addAllQuotes[0];
    // document.getElementsByClassName("source").innerHTML = addAllQuotes[1];
    // document.getElementsByClassName("citation").innerHTML = addAllQuotes[2];
    // document.getElementsByClassName("year").innerHTML = addAllQuotes[3];
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener('click', () => {printQuote(addAllQuotes)}); //call-back function