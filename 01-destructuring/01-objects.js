console.clear();

let person = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Metal",
};

let name = person.name;
let age = person.age;
let favoriteMusic = person.favoriteMusic;

console.log(`Hello, ${person.name}.`);
console.log(`You are ${age} years old.`);
console.log(`Your favorite music is ${favoriteMusic}.`);

// we have a shorthand for this methods

const user = {
  surname: "Doe",
  firstname: "John",
  hobbies: ["reading", "gaming", "hiking"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};

const {
  surname: username /*Changing the name of the variable*/,
  firstname,
  hobbies,
  address: {city, street, country}, /*Destructure also inner object, now address is not available, only the inner properties are converted into variables*/
  ditto = "default ditto" /*I'm changing the default value*/,
} = user;

// const { city, street, country } = user.address;

console.log(`User: ${username}`);
console.log("Hobbies", hobbies);
// console.log("Address:", address);
console.log(ditto);

// const { city } = address;

/* 
const keys = Object.keys(user)

console.log(keys);

const { surname, firstname, hobbies, address }
*/

console.log(city);
