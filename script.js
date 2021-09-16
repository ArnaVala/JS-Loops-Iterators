// JavaScript Introduction
// - Loops & Iterators

// Array of People with properties
const people = [
  {
    "id": 1,
    "name": "Danice Ferenczi",
    "birthdate": "3/7/1994",
    "children": 3,
    "country": "Poland",
    "can_program": false
  },
  {
    "id": 2,
    "name": "Cammy Waylett",
    "birthdate": "10/22/1984",
    "children": 2,
    "country": "Brazil",
    "can_program": false
  },
  {
    "id": 3,
    "name": "Reina Gladdor",
    "birthdate": "2/19/1975",
    "children": 1,
    "country": "China",
    "can_program": true
  },
  {
    "id": 4,
    "name": "Lindie Jeannesson",
    "birthdate": "3/4/1956",
    "children": 3,
    "country": "Ukraine",
    "can_program": true
  },
  {
    "id": 5,
    "name": "Lianna Downey",
    "birthdate": "10/31/1994",
    "children": 5,
    "country": "Serbia",
    "can_program": true
  },
  {
    "id": 6,
    "name": "Henrieta Kettridge",
    "birthdate": "7/9/1960",
    "children": 0,
    "country": "Mongolia",
    "can_program": false
  },
  {
    "id": 7,
    "name": "Katharine Devereux",
    "birthdate": "8/19/1951",
    "children": 2,
    "country": "Brazil",
    "can_program": false
  },
  {
    "id": 8,
    "name": "Jenna Tarbatt",
    "birthdate": "2/24/1988",
    "children": 2,
    "country": "Indonesia",
    "can_program": false
  },
  {
    "id": 9,
    "name": "Elroy Eicke",
    "birthdate": "4/11/1994",
    "children": 3,
    "country": "Paraguay",
    "can_program": true
  },
  {
    "id": 10,
    "name": "Ferguson Cussen",
    "birthdate": "11/26/1957",
    "children": 5,
    "country": "Belarus",
    "can_program": true
  }
]


// ----------- TASK 1 -----------
console.log(`----------- TASK 1 -----------`)

// Output how many children all people have  and how many they have in total.
//(Ex.: Bia has 2 kids, Paul has 3, so the total 5)

// Using: For...of loop method
/* 
  for (variable of object) {
  statement
} 
*/
let howManyChildren = 0;

for (const person of people) {
  // find a persons name
  const personsName = person.name
  // find how many children a person has have
  const personsChildren = person.children;
  // iterating
  howManyChildren += personsChildren;

  // Outputs how many children every person in people array has
  console.log(`${personsName} has ${personsChildren} children.`)
}
// Outputs how many children all the people have in total
console.log(`The total of children is ${howManyChildren}`)


// ----------- TASK 2 -----------
console.log(`----------- TASK 2 -----------`)
// Outputs one string per person formatted as such:
// Format: < Name >: <Age>

let age = '';
for (let index = 0; index < people.length; index++) {
  // persons name
  const personsName = people[index].name;
  // get date of birth
  const dob = new Date(people[index].birthdate);
  // calculate month diff from current date in time
  const monthDiff = Date.now() - dob.getTime();
  // convert difference in date format
  const age = new Date(monthDiff);
  // extract year from date
  const year = age.getUTCFullYear();
  // calculate age
  const personsAge = Math.abs(year - 1970);

  // Output person name and age
  console.log(`${personsName}: ${personsAge}`)
}


// ----------- TASK 3 -----------
console.log(`----------- TASK 3 -----------`)
// Output all properties of all people using for...in
/* Name: Freddy McCready
Birth Date: 7 / 1 / 1987
Children: 3
Country: Australia
Can program: Yes 
*/

// people.forEach calls every object(person) in the array
people.forEach(function (person) {
  // for every property in that person
  for (const prop in person) {
    // console outputs= property: value (of the prop in that person)
    console.log(`${prop}: ${person[prop]}`)
  }
})

// using hasOwnProperty() method to avoid iterating over properties that don't belong to the object (e.g. prototype)
/* people.forEach(function (person) {
  for (const prop in person) {
    if (person.hasOwnProperty(prop)) {
      console.log(`${prop}: ${person[prop]}`)
    }
  }
}) */
