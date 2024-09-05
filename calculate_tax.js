function calculateTax() {
    // Closure with different tax rates
    function getTaxRate(income) {
        if (income <= 5000) {
            return 0.1;  // 10%
        } else if (income <= 10000) {
            return 0.12; // 12%
        } else if (income <= 100000) {
            return 0.14; // 14%
        } else {
            return 0.18; // 18%
        }
    }

    // Main function to calculate tax
    return function (income) {
        const taxRate = getTaxRate(income);
        const taxAmount = income * taxRate;
        return taxAmount;
    };
}

// Usage example
const calculateTaxForIncome = calculateTax();

// Test with various incomes
const income1 = 3000;
console.log(`Income: ${income1}, Tax to be paid: ${calculateTaxForIncome(income1)}`);

const income2 = 8000;
console.log(`Income: ${income2}, Tax to be paid: ${calculateTaxForIncome(income2)}`);

const income3 = 15000;
console.log(`Income: ${income3}, Tax to be paid: ${calculateTaxForIncome(income3)}`);

const income4 = 120000;
console.log(`Income: ${income4}, Tax to be paid: ${calculateTaxForIncome(income4)}`);
