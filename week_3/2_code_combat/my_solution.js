// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 //Rescue Mission
 // 1. don't move left
 // 2. move up x2
 // 2. move right x2
 // 3. move down
 // 4. attack

this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

//Grab the Mushroom
// 1. move right
// 2. move left

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
 
 
 // Drink move
 // 1. move right
 // 2. attack
 // 3. move down
 // 4. move up
 // 5. move right
 // 6. attack
 
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// Taunt the Guards
// 1. uncomment
// 2. move right
// 3. taunt guard one
// 4. shoot guard
// 5. move right
// 6. taunt other guards
// 7. run around
// 8. escape


// It's a trap
// 1. move down x2
// 2. say something
// 3. move up x2

this.moveDown();
this.moveDown();
this.say("Hey ugly");
this.moveUp();
this.moveUp();

// Taunt
// 1. say something x4

this.say("ugly");
this.say("you're the worst");
this.say("i hate you");
this.say("you're not scary");

 
 // Cowardly Taunt
 // 1. move in the open
 // 2. say something x4

this.moveXY(56, 29);
this.say("ugly, ugly");
this.moveXY(64, 9);


// Commanding Followers
// 1. Tell the followers to follow
// 2. Lead them to battle
// 3. Tell them to fight

this.say("Follow me");
this.moveXY(59, 39);
this.say("Fight");

// Mobile Artillery
// 1. Move Artillery
// 2. attack

this.moveXY(42, 36);
this.attackXY(50, 63);
this.attackXY(45, 50);
this.moveXY(48, 38);
this.attackXY(70, 54);
this.attackXY(56, 44);


// Reflection:
// Write your reflection here.