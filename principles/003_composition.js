// 3º Principle: First Class Functions
// Functions are considered first class elements, and as such, can be attributed to variables,
// be passed as arguments and returned from other functions.

// 4º Principle: High Order Functions
// Classification of functions that receive other functions as arguments.

// 5º Principle: Function Composition
// Combination of simpler functions to create more complex functions.

const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const math = {
	subtract,
	multiply
}

console.log(math.multiply(10, 10)); // 100 

const composicao = (funcao1, funcao2) => (x,y) => funcao1(x, funcao2(x, y));
const calculaDesconto = composicao(subtract, multiply);

console.log(calculaDesconto(100, 0.1)); // 90 
