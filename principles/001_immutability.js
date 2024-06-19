// 1º Principle: Immutability
// Data is never altered. Instead, copies and new data are created.

// Example 1: Concept
const array = [1, 2, 3, 4, 5];
const newArray = [...array, 6, 7, 8];

console.log(array); // [1, 2, 3, 4, 5]
console.log(newArray); // [1, 2, 3, 4, 5, 6, 7, 8]

// Example 2 - Scope

function getExponencialLet() {
	let numberLet = 2;
	numberLet = 3;
	return numberLet * numberLet;
}

function getExponencialVar() {
	numberVar = 3;
	return numberVar * numberVar;
}

var numberVar = 2;
getExponencialVar();
console.log(numberVar); // 3;

// Example 3: Objects

const person = {
	name: 'John',
	age: 20
}

// Spread Operator
const clone1 = { ...person };
clone1.name = 'Jim';

console.log(clone1.name); // 'Jim'
console.log(person.name); // 'John'

// Object.assign()
const clone2 = Object.assign({}, person)
clone2.name = 'Charlie';

console.log(clone2.name); // 'Charlie'
console.log(person.name); // 'John'

// JSON.parse()
const clone3 = JSON.parse(JSON.stringify(person))
clone3.nome = 'Paul'

console.log(clone3.nome); // 'Paul'
console.log(person.name); // 'John'

// Possible BUG: Object Reference
const reference = person;
reference.name = 'George'

console.log(reference.name); // 'George'
console.log(person.name); // 'George'