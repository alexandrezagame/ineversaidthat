const person = [
{
	name: "-Barack Obama",
	image: "obama"
},
{
	name: "-Donald Trump",
	image: "trump"
},
{
	name: "-Winston Churchill",
	image: "winston"
},
{
	name: "-Queen Elizabeth",
	image: "queen"
},
{
	name: "-Steve Jobs",
	image: "jobs"
},
{
	name: "-Harry Potter",
	image: "potter"
},
{
	name: "-Dwayne Johnson - The Rock",
	image: "rock"
},
{
	name: "-Mark Zuckerberg",
	image: "mark"
},
{
	name: "-Paris Hilton",
	image: "paris"
},
{
	name: "-Batman",
	image: "batman"
},
{
	name: "-Albert Einstein",
	image: "einstein"
},
{
	name: "-Vladimir Putin",
	image: "putin"
},
{
	name: "-John F. Kennedy",
	image: "kennedy"
},
{
	name: "-Elvis Presley",
	image: "elvis"
},
{
	name: "-ron weasley",
	image: "ron"
},
{
	name: "-Kim Kardashian",
	image: "kard"
},
{
	name: "-Michael Jordan",
	image: "jordan"
},
{
	name: "-Kim Jung Un",
	image: "kim"
},
{
	name: "-Beyoncé",
	image: "beyonce"
},
{
	name: "-Prince Harry",
	image: "prince"
},
{
	name: "-Ed Sheeran",
	image: "red"
},
{
	name: "-Macaulay Culkin",
	image: "home"
},
{
	name: "-Angela Merkel",
	image: "merkel"
}
];

const quotes = ['" I have no special talent. I am only passionately curious. "', 
'" If you judge people, you have no time to love them. "', 
'" Stay hungry, stay foolish. "', 
'" Be kind whenever possible. It is always possible. "', 
'" Turn your wounds into wisdom. "', 
'" Covfefe "', 
'" I came, I saw, I conquered. "', 
'" Float like a butterfly, sting like a bee. "', 
'" Good artists copy, great artists steal. "', 
'" Keep calm and carry on. "', 
'" No. "', 
'" I don’t care what you think of me. I don’t think of you at all. "', 
'" Why so serious? "', 
'" I m going to make him an offer he can t refuse. "', 
'" You talking to me? "', 
'" I love the smell of napalm in the morning. "', 
'" Bond. James Bond. "', 
'" You can t handle the truth! "', 
'" I ll be back. "',
'" You had me at ‘hello. "',
'" Say hello to my little friend! "',
'" Hasta la vista, baby. "',
'" My precious. "',
'" I m king of the world! "',
'" Nobody puts Baby in a corner. "'
];


const quoteBtn = document.querySelector("#quoteBtn");
const text = document.querySelector("#text");
const author = document.querySelector("#author");
const quoteImage = document.querySelector("#quoteImage");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote(){
	let number = Math.floor(Math.random() * person.length);
	author.innerHTML = person[number].name;
	text.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
	// text.innerHTML = quotes[number];
	quoteImage.setAttribute("class", person[number].image);
}

