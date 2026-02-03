/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

    let output = [];
    let categoryMap = {};

    transactions.forEach(transaction => {
        const { category, price } = transaction;
        if (categoryMap[category]) {
            categoryMap[category] += price;
        } else {
            categoryMap[category] = price;
        }
    });



    for (const [category, totalSpent] of Object.entries(categoryMap)) {
        output.push({ category, totalSpent});
    }

    return output;
}

console.log(calculateTotalSpentByCategory([
    { itemName: "item1", category: "food", price: 20, timestamp: "2023-10-01" },
    { itemName: "item2", category: "electronics", price: 100, timestamp: "2023-10-02" },
    { itemName: "item3", category: "food", price: 30, timestamp: "2023-10-03" }
]));

module.exports = calculateTotalSpentByCategory;