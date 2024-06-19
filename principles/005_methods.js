// Map, Filter and Reduce

// Map
// Creates a new array applying a function to each element of the original array. 
// Used to transform data.

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]


// Filter 
// Creates a new array with only the elements of the original array that passed as true to a test applied by a function.
// Used to filter data.

const persons = ['José', 'Maria', 'Joaquim', 'Carlos'];
const startsWithJ = persons.filter(person => person.toLowerCase().startsWith('j'));
console.log(startsWithJ); // ['José, 'Joaquim']


// Reduce
// Applies a function to each element of the original array, storing each time its value to an accumulator variable, to reduce it to a single value.
// Used to aggregate, to calculate and to summarize data.

const lines = [
	'Hello!',
	'Today we will learn about Reduce.',
	'All the best:',
	'João'
]
const letter = lines.reduce((accumulator, current) => accumulator.trim() + '\n' + current);
console.log(letter);
// Hello!
// Today we will learn about Reduce.
// All the best:
// João

