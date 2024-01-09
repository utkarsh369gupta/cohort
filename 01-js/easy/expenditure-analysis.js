/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const totalspend = {};
  transactions.forEach(transation => {
    const { category, price } = transation;
    if (!totalspend[category]) {
      totalspend[category] = price;
    }
    else {
      totalspend[category] += price;
    }
  })
  const result = [];
  for(let categ in totalspend){
    const newcategory = {
      'category':categ,
      'price':totalspend[categ]
    }
    result.push(newcategory);
  }
  return result;
}

Transaction = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 20,
    category: 'Food',
    itemName: 'Pizza',
  }];

console.log(calculateTotalSpentByCategory(Transaction));


module.exports = calculateTotalSpentByCategory;
