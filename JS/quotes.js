const quotes = [
    {
        quote:"Be the change you wish to see in the world." ,
        author: " -Mahatma Gandhi",
    },
    {
        quote: "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.'",
        author: " -Martin Luther King Jr",
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: " -Ralph Waldo Emerson",
    },
    {
        quote: "The only way to do great work is to love what you do." ,
        author: " -Steve Jobs",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on." ,
        author: " -Robert Frost",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: " -Winston Churchill",
    },
    {
        quote: "The best way to predict your future is to create it.",
        author: " -Abraham Lincoln",
    },
    {
        quote: "If you want to go fast, go alone. If you want to go far, go together.",
        author: " -African proverb",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: " -Nelson Mandela",
    },
    {
        quote: "Not all those who wander are lost.",
        author: " -J.R.R. Tolkien",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author; 