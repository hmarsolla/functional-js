// 2º Principle: Pure Functions
// A function, given the same input, should return the same result.
// There should be not a single colateral effect. (ex: external variable changes, unwanted I/O operations, etc.)

// Função Impura
const getPriceWithDiscount1 = (price) => {
    const percentual = parseFloat(process.env.PERCENTUAL);
    return price - (price * percentual);
};

// Saída
process.env.PERCENTUAL = '0.1'; // 10% desconto
console.log(getPriceWithDiscount1(100)); // Output: 90
process.env.PERCENTUAL = '0.2'; // 20% desconto
console.log(getPriceWithDiscount1(100)); // Output: 80


// Função Pura
const getPriceWithDiscount2 = (price, percentual) => {
    return price - (price * percentual);
};

// Saída
const percentual = parseFloat(process.env.PERCENTUAL);
console.log(getPriceWithDiscount2(100, percentual));