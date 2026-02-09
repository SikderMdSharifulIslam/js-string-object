const person = {
    name: "Sikder",
    age: 18, 
    profession: 'developer',
    salary: 2500,
    married: true,
    'fav places': ['Dhaka', 'Coxs Bazar', 'Rangamati']
}

console.log(person);

// access
// dot notation
console.log(person.name);
console.log(person.age);
console.log(person.profession);
const salary = person.salary;
console.log(salary);
console.log(person.married);

// bracket notation
console.log(person['name']);
console.log(person['age']);
console.log(person['profession']);
const income = person['salary'];
console.log(income);
console.log(person['married']);
console.log(person['fav places']);


// set
person.name = 'Sikder Md. Shariful Islam';

console.log(person);

// access & set using key
const fullName = 'name';
console.log(person[fullName]);
person[fullName] = 'Sikder Md';
console.log(person[fullName]);
console.log(person);
