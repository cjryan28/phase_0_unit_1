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
	age: 18
}

var mom = {
	name: "Mom",
	age: 40,
	location: [0,4]
}

var dean = {
	name: "Dean",
	age: 46
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



setInterval(function(){alert('Hello')},3000);"

this.moveXY();
this.stop();
this.crouch();
this.stand();
this.moveXY();


// Refactored Code






// Reflection
// 
// 
// 
// 
// 
// 
// 
// 