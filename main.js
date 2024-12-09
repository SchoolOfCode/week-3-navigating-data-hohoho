// Print out into the console the entire SOCBook object
console.log(SOCBook);
console.log(SOCBook.data.people[0].name);

// Take a look at it in the console
// Notice the shape of the data, and all of the different information contained in it
// Try and play to print out the different parts of the data into the console

// For all the following tasks, access/select the data required through the SOCBook object

// For the Tasks 1, 2, and 3 you will look at the object and find your desired data manually. Then, simply select it from the object
// e.g. object.path[2].data.I.want

// Task 1
// Complete the function so it returns Liz Rios' favourite fruit

function lizRiosFavFruit() {
  // Your code goes here...
  // return SOCBook.data.people[10].favoriteFruit
  let people = SOCBook.data.people;
  for (let person of people) {
    if (person.name === "Liz Rios") {
      return person.favoriteFruit;
    }
  }
}

console.log("Liz Rios' favourite fruit is:", lizRiosFavFruit());

// Task 2
// Complete the function so it returns Marie David's 2nd friend's name

const people = SOCBook.data.people;

function marieDavid2ndFriend() {
  // Your code goes here...
  // return people[15].friends[1].name;
  for (let person of people) {
    if (person.name === "Marie David") {
      return person.friends[1].name;
    }
  }
}

console.log("Marie David's 2nd friend is:", marieDavid2ndFriend());

// Task 3
// Complete the function so Cooper Brady's greeting message is shown in the p tag with the id of "message"
// We've helped start breaking down the plan!

// function cooperBradyGreeting() {
//   // Your code goes here...
//   // Select Cooper Brady's greeting message from the object
//   const cbGreeting = people[18].greeting;
//   // Select the p tag with the id of message
//   const pTag = document.getElementById('message');
//   // Set the text of the p tag to be the greeting message
//   pTag.innerText = cbGreeting;
// }

function findIndex(item, details) {
  for (let person of people) {
    if (person[item] === details) {
      return person.index;
    }
  }
}

// console.log(findIndex('Cooper Brady'));

function cooperBradyGreeting() {
  // Your code goes here...
  // Select Cooper Brady's greeting message from the object
  const cbGreeting = people[findIndex("name", "Cooper Brady")].greeting;
  // Select the p tag with the id of message
  const pTag = document.getElementById("message");
  // Set the text of the p tag to be the greeting message
  pTag.innerText = cbGreeting;
}

cooperBradyGreeting();

// For Tasks 4, 5, 6, and 7 you will be getting much more programmatic with how you interact with the data, rather than manually finding and selecting

// Task 4
// Complete the following function
// In it, we want to take in an email as a parameter, and loop through search for the person who has that email
// If we find them, return the person
// If we don't, return null

function findPersonByEmail(email) {
  // Your code goes in here...
  const emailHolderIndex = findIndex("email", email);
  const emailHolder = people[emailHolderIndex].name;
  if (emailHolder) {
    return people[emailHolderIndex].name;
  } else {
    return null;
  }
}

const found = findPersonByEmail("carversalinas@comtent.com");
console.log("What I found:", found);

// Task 5
// Make a list containing only the people's names who's favourite fruit is a mango

function getMangoLovers() {
  let mangoLovers = [];
  // Your code goes here...
  for (let person of people) {
    if (person.favoriteFruit === "mango") {
      mangoLovers.push(person["name"]);
    }
  }
  return mangoLovers;
}

console.log("Who loves mango?", getMangoLovers());

// Task 6
// Complete the function. Try and return the address of the person in the position in the array we've been handed

function getAddress(positionInArray) {
  // Your code goes here...
  return people[positionInArray]["full address"];
}

console.log(getAddress(6));

// Task 7
// Show a profile for each person in the ul with id "profiles"
// A profile should include a person's name, age, and their image
// Remember, break this down and tackle it step by step!

// Create an object type taking in all aspects of the profile.
function Profile (name, age, image) {
  this.name = name;
  this.age = age;
  this.image = image;
}

// Iterate over object creating profiles for each person.
// Create 2 * p elements and one image element for each
// Add the profile info to their text/src.
//Append to document body.
for (let person of people) {
  const getProfile = new Profile(person.name, person.age, person.picture)
  const nameP = document.createElement('p');
  const  ageP = document.createElement('p');
  const image = document.createElement('img');
  nameP.innerText = `name: ${getProfile.name}`;
  ageP.innerText = `age: ${getProfile.age}`;
  image.setAttribute("src", `${person.picture}`);
  document.body.appendChild(nameP);
  document.body.appendChild(ageP);
  document.body.appendChild(image);
}
// Looks like we got some catfishers, I'm looking at you Adams Bradford! XD