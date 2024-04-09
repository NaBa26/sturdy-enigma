const quote = document.querySelector('.quote')
const author = document.querySelector('.author');
const button = document.getElementById('button');
function fetchQuote(){
fetch('https://api.quotable.io/random')
.then(Response=>Response.json())
.then(data=>{const newQuote = `${data.content}`;
const newAuthor = `${data.author}`;
quote.innerHTML = newQuote;
author.innerHTML = newAuthor;
}).catch(error => console.log(error))
}

fetchQuote();

button.addEventListener('click', fetchQuote);
