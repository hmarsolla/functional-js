// Mocking a database call that returns an array of sales objects
function getSalesData() {
  return [
    { id: 1, amount: 100, currency: 'USD', success: true },
    { id: 2, amount: 200, currency: 'USD', success: false },
    { id: 3, amount: 150, currency: 'USD', success: true },
    { id: 4, amount: 250, currency: 'USD', success: true },
    { id: 5, amount: 300, currency: 'USD', success: false }
  ];
}

// Step 1: Get sales data from the "database"
const salesData = getSalesData();

// Step 2: Filter only successful sales
const successfulSales = salesData.filter(sale => sale.success);

// Step 3: Transform the data - convert all amounts to EUR (assuming 1 USD = 0.85 EUR)
const exchangeRate = 0.85;
const salesInEUR = successfulSales.map(sale => ({
  ...sale,
  amountEUR: sale.amount * exchangeRate
}));

// Step 4: Reduce to get the total revenue in EUR
const totalRevenueEUR = salesInEUR.reduce((total, sale) => total + sale.amountEUR, 0);

// Output the results
console.log('Successful Sales:', successfulSales);
console.log('Sales in EUR:', salesInEUR);
console.log('Total Revenue in EUR:', totalRevenueEUR.toFixed(2));