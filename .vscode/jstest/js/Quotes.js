const quotes = [
    {
        quote:'톰보이',
        author:'혁오'
    },
    {
        quote:'그모습 그대로',
        author:'장범준'
    },
    {
        quote:'겨울을 걷는다',
        author:'윤딴딴'
    },
    {
        quote:'서랍',
        author:'10cm'
    },
    {
        quote:'벤쿠버',
        author:'서동현'
    }
];


const quote = document.querySelector("#quoto span:first-child")
const author = document.querySelector("#quoto span:last-child")


quote.innerText = quote[Math.floor(Math.random() *quote.length)];
author.innerText = author[Math.floor(Math.random() *quote.length)];