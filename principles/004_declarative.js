// 6 - Código Declarativo
// Escrita de código que foca no QUE é para ser feito, ao invés do COMO fazer.

// Código Imperativo
const numbersI = [1, 2, 3, 4, 5, 6];
const evenNumbersDoubledI = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbersDoubledI.push(numbers[i] * 2);
    }
}

console.log(evenNumbersDoubledI); // Output: [4, 8, 12]


// Código Declarativo
const numbersD = [1, 2, 3, 4, 5, 6];

const evenNumbersDoubledD = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * 2);

console.log(evenNumbersDoubledD); // Output: [4, 8, 12]

