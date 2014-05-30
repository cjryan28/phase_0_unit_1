// I paired with: Clayton Jordan on this challenge.





// Pseudocode
// 1. Declare secret number as a number
// 2. Define secret number as 7
// 3. Declare a string password
// 4. Define password as "just open the door"
// 5. Declare a boolean allowedIn
// 6. Define allowedIn to false
// 7. Declare an array members
// 8. Put John in the first position of members array
// 9. Put Mary in the third position of members array



// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door"
var allowedIn = false;
var members = []
members[0] = "John"
members[3] = "Mary"






// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// We would need to refactor if solved the problem by each method. We chose to 
// to try to solve as many methods as possible with each line of code we wrote.



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// We had difficulty understanding what was expected of us at the beginning of the session.
// The releases weren't worded in a way that told us, make sure each time a method is called it 
// evaluates to true. I suppose we're still a bit unsure if we completed the challenge correctly.
// As a team, our process worked well. Clayton suggested we run the code method by method, which is 
// something I wouldn't have done without him. After each run through, we talked about how we should correct
// the code. It was a good experience, because our process ensured we understood our codes effect on each method. 
// It seemed like we used Ruby as a frame of reference often, which helped our productivity.

// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

