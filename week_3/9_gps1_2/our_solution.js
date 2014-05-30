// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.David Bragdon
//  2.Casey Ryan


// 0. "YOU SIGNED... WHO?!"
var cateBlanchett = { name: 'Cate Blanchett', age: 45, quote: "Does it look like I'd go out with him?" };
var matthewMcConaughey = { name: 'Matthew McConaughey', age: 44, quote: "Alright, Alright, Alright" };




// 1. "Here they Come!"
var adamSandler = { name: 'Adam Sandler', age: 47, quote: "That's your home! Are you too good for your home?!" };




// 2. "TIME IS MONEY!"
function Client(name, age, quote)
{
  this.name=name;
  this.age=age;
  this.quote=quote;
  actors.push(this);
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
var kristenBell = new Client("Kristen Bell", 33, "Do you want to build a snowman?"); 
var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance?", showQuote(this));

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 3. "SHOW 'EM OFF!"

actors =  new Array()

for (var i = 0; i < actors.length; i++) {
  console.log("This actor's name is " + actors[i].name + ". They are " + actors[i].age + " years old. They are known to have said " + actors[i].quote + ".");
};



// 4. "But wait, there's more!"
var showQuote = function(actor)
{
  console.log(actor.quote);
};

showQuote(jimCarrey)


// 5.  ** BONUS **


//  6.  Your Reflection:
console.log("Pairing with for this challenge was productive. We checked in for
	about 10 minutes at the beginning of the session, which gave us a good baseline
	for understanding each other's motivation. I am particularly preoccupied this week so I 
	made sure to make that clear. I think it was not the best choice for me to do a GPS on a Tuesday
	of a week I know I'm busy, but it happened. Thankfully my pair made the best of it and was sure
	to make me feel comfortable asking questions and asking for resources. I think it's difficult for me to pair with others who like to check that we're always on the same page.
	I have a tendency to go for things, and see if they work, and then try to explain them. 
	Another thing that was difficult was the issues with directions of Release 4 after our instructor left. I wish we would have gone through
	them more clearly with him before he had to go to his next pairing session. It seems like I can learn from
	this mistake, though, because GPS releases tend to increase with difficulty as they continue. I'll make sure to keep
	this in mind for the next pairing session. While we left the pairing session more confident in
	understanding JavaScript, I feel like I can understand it a lot better moving forward. I'll add it to my list of things to come back to 
	and make sure I understand completely before Phase 1 begins.");

