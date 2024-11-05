console.clear();

const reptiles = ["snake", "lizard", "alligator"];
const mammals = ["puppy", "kitten", "bunny"];

const newArray = [...reptiles]; // this is creating a copy

console.log(newArray);

console.log(["cow", ...mammals, "fox", ...reptiles]);

console.log("ORIGINAL ARRAY: ", mammals);

// DESTRUCTURING PARAMETERS IN A FUNCTION

function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

getFullName({ firstName: "ana", lastName: "martinez" }); // => ana martinez

// we can destructure it like this:

/* 
function getFullName2(user) {
        const { firstName, lastName } = user
  return `${firstName} ${lastName}`;
} */

// PRO VERSION 😎
function getFullName2({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

console.log(getFullName2({ firstName: "miriam", lastName: "cazuela" }));
