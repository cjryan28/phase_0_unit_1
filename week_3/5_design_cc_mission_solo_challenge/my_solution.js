// This is a solo challenge

// Your mission description:
// Ferris Bueller's Day Off
// 
// Have a kid sneak around for a day, skipping school, without being caught.
// Ferris is the main object being manipulated. He will move around
// so that he is not seen by patrolling parties.

// Pseudocode
// 
// 1. Ferris moves out of his house without being seen by his mom who is pacing
// from the kitchen to the door. He will have to move down the stairs, stopping
// and crouching at times his mom may see him. Once at the door, he is free.
// 2. Ferris moves past the school without being seen by the dean of students who
// is pacing the halls. He will have to walk past the dean when the dean can't see out 
// of the windows from the school.
// 
//
// Home, bottom left is 0,0
// . . d M .
// s . . M . 
// s . . M .
// s . . M .
//
// s is stairs Ferris must go down, d is door he must get to, m is path mom walks
//
// School, bottom left is 0,0
// 
// d d d d d d d d
// . w . w w . w . 
// . . . . . . . .
// s s s s s s s s
//
// s is sidewalk Ferris must walk, d is path dean takes, w is where Ferris can be caught by dean.
//

// Initial Code
var ferris = {
	name: "Ferris",
	job: "student",
	age: 18,
	location: [0,0]
}

var mom = {
	name: "Mom",
	age: 40,
	location: [0,4]
}

var dean = {
	name: "Dean",
	age: 46,
	location: [0,4]
}

function moveUp() {
	this.location = [x, y+1];
}
function moveRight() {
	this.location = [x+1, y];
}
function moveLeft() {
	this.location = [x-1, y];
}
function moveDown() {
	this.location = [x, y-1];
}


this.move() //whateverdirection
this.halt();
this.crouch();
this.stand();





// Reflection
// 
// At first, I thought this challenge was going to be easy. I thought
// that code combat looked simple, had a few commands, and would be replicatable.
// I made my objects and method names easy enough. But then I realized that these objects
// need to move, which means they need to be on some sort of position or location. Then when
// they move they need to be told which way to move on that position. On top of this, some characters
// need to move constantly, but be on some sort of second delay. Eventually, these characters will run
// out of space, need to turn around and move the other way. Finally, based on the location of these
// never stopping characters and Ferris, I would need to calculate with each move of either Ferris or the 
// other characters- probably the other characters, if Ferris was seen or not.

// Now I'm realizing that what I've written above is probably more like pseudocode than what I wrote for
// the pseudocode section. Overall, at least I'm starting to understand pseudocode. This challenge was especially
// difficult with the character placement. I know what I want to do, but I don't think I know how to do it.
// I researched for a while, but ultimately settled for browsing other class mates challenges, which marked
// the end of the challenge being solo. 



