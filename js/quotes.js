const quotes = [
    {
        quote: "With great power comes great responsibility.",
        author: "Spiderman",
    },

    {
        quote: "Sometimes your whole life boils down to one insane move.",
        author: "Avatar - Jake",
    },

    {
        quote: "Like somebody’s whispering in your ear, ‘Everything’s gonna be okay.",
        author: "Toy Story -  BUZZ",
    },

    {
        quote: "We accept the realilty of the world with which we’re presented.",
        author: "The Truman Show - Christof",
    },

    {
        quote: "If you keep on believing the dream that you wish will come true.",
        author: "Cinderella",
    },

    {
        quote: "You control your destiny. You don’t need magic to do it.",
        author: "Merida",
    },

    {
        quote: "You are my greatest adventure.",
        author: "Mr. Incredible",
    },

    {
        quote: "Today’s special moments are tomorrow’s memories.",
        author: "Aladdin",
    },

    {
        quote: "To make each day count",
        author: "Titanic - Jack",
    },

    {
        quote: "If yout've fallen, you can learn how to climb up",
        author: "Now You See Me"
    }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author; 