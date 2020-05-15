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
	name: "-Hillary Clinton",
	image: "hillary"
},
{
	name: "-Boris Johnson",
	image: "boris"
},
{
	name: "-Leonardo Dicaprio",
	image: "leo"
},
{
	name: "-Ryan Gosling",
	image: "ryan"
},
{
	name: "-chris hemsworth",
	image: "chris"
},
{
	name: "-Tiger King",
	image: "tiger"
},
{
	name: "-Johnny Depp",
	image: "pirate"
},
{
	name: "-Brad Pitt",
	image: "brad"
},
{
	name: "-Emilia Clarke",
	image: "emilia"
},
{
	name: "-reese witherspoon",
	image: "reese"
},
{
	name: "-Baby Yoda",
	image: "baby"
},
{
	name: "-chewbacca",
	image: "chew"
},
{
	name: "-xi jinping",
	image: "xi"
},
{
	name: "-Gollum",
	image: "gollum"
},
{
	name: "-Stephan van Calker",
	image: "stephan"
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
'" I don‘t care what you think of me. I don’t think of you at all. "', 
'" Why so serious? "', 
'" I m going to make him an offer he can‘t refuse. "', 
'" You talking to me? "', 
'" I love the smell of napalm in the morning. "', 
'" Bond. James Bond. "', 
'" You can‘t handle the truth! "', 
'" I‘ll be back. "', 
'" You had me at ‘hello‘. "', 
'" Say hello to my little friend! "', 
'" Hasta la vista, baby. "', 
'" My precious. "', 
'" I‘m king of the world! "', 
'" Show me the money! "', 
'" E.T. phone home. "', 
'" Round up the usual suspects. "', 
'" Nobody puts Baby in the corner. "', 
'" We rob banks. "', 
'“ Get up, stand up, Stand up for your rights. Get up, stand up, Don‘t give up the fight. ”', 
'“ I get by with a little help from my friends. ”', 
'“ All you need is love. ”', 
'“ Yeah, I’m gonna take my horse to the old town road, I’m gonna ride ’til I can’t no more "', 
'" They may take our lives, but they‘ll never take our freedom! "', 
'" My name is Maximus Decimus Meridius, commander of the Armies of the North "', 
'" Chewie, we’re home. "', 
'" I’m just one stomach flu away from my goal weight. "',
'" Magic Mirror on the wall, who is the fairest one of all? "',
'" That’ll do, pig. That’ll do. "', 
'" Good morning, Vietnam! "', 
'" I mean, funny like I’m a clown? I amuse you? "', 
'" You is kind. You is smart. You is important. "', 
'" Shaken, not stirred. "', 
'" Keep your friends close, but your enemies closer. "',
'" Fasten your seatbelts. It’s going to be a bumpy night. "', 
'" Leave the gun. Take the cannoli. "',
'" Carpe diem. Seize the day, boys. "', 
'" Mrs. Robinson, you’re trying to seduce me, aren’t you? "', 
'" Houston, we have a problem. "', 
'" Yippie-ki-yay, motherf—er! "', 
'" I see dead people. "',
'" I am your father. "',
'" The first rule of Fight Club is: You do not talk about Fight Club. "',
'" May the Force be with you. "',
'" I will build a great, great wall on our southern border, and I will have Mexico pay for that wall. Mark my words. "',
'" Let’s Make America Great Again "',
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

