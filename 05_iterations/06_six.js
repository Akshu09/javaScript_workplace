//reduce

const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc, currval) => {
    // console.log(`acc : ${acc} and current :  ${currval}`);
    return acc + currval
},0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "python course",
        price: 999
    },
    {
        itemName : "mobile dev course",
        price: 5999
    },
    {
        itemName : "data science course",
        price: 12999
    },
]

const priceTopasy = shoppingCart.reduce( (acc, item) => {
    
    return acc + item.price
},0)
// console.log(priceTopasy);

// 1. Double each number
const numbers = [1, 2, 3, 4, 5];
// TODO: Use .map() to create a new array with each number doubled

const newArray = numbers.map( (item) =>{
  return item + item
})
// console.log(newArray)

// 2. Convert strings to uppercase
const words = ["apple", "banana", "mango"];
// TODO: Use .map() to return a new array with all words in uppercase

const allLetters = words.map( (item) => {
  return item.toUpperCase()
})
// console.log(allLetters)


// 3. Get only book titles
const books = [
    { title: "Book A", pages: 100 },
    { title: "Book B", pages: 200 }
  ];
  // TODO: Use .map() to return an array of just the book titles
  const allTitles = books.map( (item) => {
    return item.title
  })
//   console.log(allTitles)

// 4. Convert INR to USD
const pricesInRupees = [100, 250, 500];
// TODO: Use .map() to convert these to dollars (1 USD = 83 INR)
const usd = pricesInRupees.map( (inr) => {
//   console.log(`inr : ${inr}`)
  return (inr / 83).toFixed(2);
})
// console.log(usd)


// 5. Filter even numbers
const nums = [1, 2, 3, 4, 5, 6];
// TODO: Use .filter() to return only even numbers

const allEvenNumbers = nums.filter( (item) => item % 2 === 0)
// console.log(allEvenNumbers)

// 6. Filter long words
const wordList = ["pen", "pencil", "notebook", "bag"];
// TODO: Use .filter() to keep only words longer than 5 characters
const longWords = wordList.filter( (item) => item.length > 5 )
// console.log(longWords);

// 7. Filter adults
const users = [
    { name: "John", age: 17 },
    { name: "Jane", age: 21 }
  ];
  // TODO: Use .filter() to return users aged 18 or more

  const adults = users.filter( (adultAge) =>adultAge.age >= 18)
//   console.log(adults);


// 8. In-stock products
const products = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false }
  ];
  // TODO: Use .filter() to return only products that are in stock

  const productsInStock = products.filter( (items) => items.inStock === true )
//   console.log(productsInStock);

// 9. Sum of numbers using reduce
const numArray = [1, 2, 3, 4];
// TODO: Use .reduce() to find the sum of the numbers
const sumOfNumbers = numArray.reduce((acc,cuuVal) =>{
    // console.log(`acc: ${acc} and currval : ${cuuVal}`)
return acc + cuuVal
} ,0)

// console.log(sumOfNumbers);



// 10. Product of numbers using reduce
const values = [2, 3, 4];
// TODO: Use .reduce() to find the product (2 * 3 * 4)
 
const product =  values.reduce( (acc, curval) => {
    // console.log(`acc: ${acc} and currval : ${curval}`)
    return acc*curval

},1)
// console.log(product);



// 11. Word frequency using reduce
const fruits = ["apple", "banana", "apple", "orange", "banana"];
// TODO: Use .reduce() to return an object with frequency of each word
// Expected Output: { apple: 2, banana: 2, orange: 1 }
const frequency = fruits.reduce( (acc,curItem) => {
    acc[curItem] =(acc[curItem] || 0) + 1

    return acc
},{})
// console.log(frequency);



// 12. Total cart value using reduce
const cart = [
  { item: "Book", price: 120 },
  { item: "Pen", price: 20 }
];
// TODO: Use .reduce() to return total cart value
const total = cart.reduce( (acc, curitem) =>{
    return acc.price+curitem.price
    
} )
// console.log("total cart value is:", total);



// 13. Double → Filter evens → Sum
const baseNumbers = [1, 2, 3, 4, 5];
// TODO: First double all, then keep only evens, then find their sum
const newArray_two = baseNumbers.reduce( (acc, curVal) => )
                                
                               
console.log(newArray_two);




// 14. Long books only
const moreBooks = [
  { title: "Big Book", pages: 500 },
  { title: "Short Story", pages: 120 }
];
// TODO: Use .filter() and .map() to return titles of books with more than 300 pages


// 15. Average score per student
const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [70, 60, 90] }
];
// TODO: Use .map() and .reduce() to return an array of objects with name and average score

  
  


  

