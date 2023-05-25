/* 3. Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees. */

let store = [
  {
    items: "biskit",
    price: 20,
  },
  {
    items: "chocolate",
    price: 10,
  },
  {
    items: "chips",
    price: 1,
  },
  {
    items: "shirts",
    price: 200,
  },
]  ;

function changeToRupee(){
    store.map(element => {
        element.price *= 80 ;  
    });
}

changeToRupee() ;
console.log(store) ;
/* [
  { items: 'biskit', price: 1600 },
  { items: 'cholete', price: 800 },
  { items: 'chipes', price: 80 },
  { items: 'shirts', price: 16000 }
] */