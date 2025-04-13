const coding = ["js","java","c++","python","ruby"]

// coding.forEach(function(item){
//     console.log(item);
    
// })

// coding.forEach((value)=>{
// console.log(value);

// })

const myCodig = [
    {
        languageNmae : "javaScript",
        languageFileNmae : "js"
    },
    {
        languageNmae : "python",
        languageFileNmae : "py"
    },
    {
        languageNmae : "java",
        languageFileNmae : "java"
    },
]

// myCodig.forEach((item) => {
//     console.log(item.languageFileNmae);
//     console.log(item.languageFileNmae);
    
// })

// const programming = myCodig.forEach((item) => {
//    console.log(item)
   
    
// })
// console.log(programming);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const neNums=myNums.filter((numbers) => numbers > 4)
// console.log(neNums);

const number= myNums.filter((num) => {
    return  num >4

})
// console.log(number);

const myArray = []

myNums.forEach((items) => {
    if(items>4){
        myArray.push(items)
    }
})

// console.log(myArray);

const person = {
    name: "Amit",
    age: 28,
    city: "Pune"
  };

//   console.log(person);

// 👉 Task:
// Loop through the object and log all the keys.

  const student = {
    name: "Amit",
    age: 21,
    grade: "A"
  };

  for (const key in student) {
    // console.log(key);
    
  }

// 👉 Task:
// Print each key with its value from the object.

const laptop = {
    brand: "HP",
    RAM: "16GB",
    SSD: "512GB"
  };

  for (const key in laptop) {
//    console.log(`key is ${key} and value is ${laptop[key]} `);
    
  }

// 👉 Task:
// Print each fruit from the array.
const fruits = ["apple", "banana", "mango"];

for (const item of fruits) {
    // console.log(item);
    
}

// 👉 Task:
// Print each character of the string.
const word = "Hello";

for (const items of word) {
    // console.log(items);
    
}

// 👉 Task:
// Print each number in the array.
const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((items) => {
//     console.log(items);
    
// })

numbers.forEach(function(items){
    // console.log(items);
    
})

// 👉 Task:
// Print square of each number.

const nums = [2, 3, 4,5,6];

// nums.forEach((items) => {
    
//     console.log(`square of ${items} is ${items*items}`);
    
    
// })

const books = [
  { title: "The Silent Ocean", genre: "Adventure", publish: 2001, edition: 2010 },
  { title: "Hidden Shadows", genre: "Thriller", publish: 1999, edition: 2005 },
  { title: "Code Warriors", genre: "Programming", publish: 2015, edition: 2018 },
  { title: "Journey to Mars", genre: "Sci-Fi", publish: 2020, edition: 2023 },
  { title: "Mindset Mastery", genre: "Self-help", publish: 2006, edition: 2012 },
  { title: "Art of Thinking", genre: "Philosophy", publish: 2000, edition: 2008 },
  { title: "Magic of Words", genre: "Literature", publish: 1995, edition: 2001 },
  { title: "Digital Fortress", genre: "Thriller", publish: 1998, edition: 2002 },
  { title: "A Clean Start", genre: "Self-help", publish: 2010, edition: 2014 },
  { title: "The Dark Code", genre: "Programming", publish: 2012, edition: 2016 },
  { title: "Legends of Time", genre: "Fantasy", publish: 2003, edition: 2011 },
  { title: "Sands of Egypt", genre: "History", publish: 1990, edition: 1998 },
  { title: "Deep Dive JS", genre: "Programming", publish: 2021, edition: 2024 },
  { title: "Zen Mind", genre: "Philosophy", publish: 1985, edition: 1993 },
  { title: "The Great Architect", genre: "Architecture", publish: 2009, edition: 2015 },
  { title: "Galaxy Dreams", genre: "Sci-Fi", publish: 2017, edition: 2020 },
  { title: "Python Pro", genre: "Programming", publish: 2018, edition: 2022 },
  { title: "Breaking Chains", genre: "Self-help", publish: 2004, edition: 2009 },
  { title: "The Last Empire", genre: "History", publish: 1997, edition: 2003 },
  { title: "Thought Patterns", genre: "Psychology", publish: 2002, edition: 2007 },
  { title: "War of Webs", genre: "Tech", publish: 2013, edition: 2017 },
  { title: "In Search of Light", genre: "Spiritual", publish: 1996, edition: 2000 },
  { title: "Ruby Revival", genre: "Programming", publish: 2011, edition: 2015 },
  { title: "The Storm Within", genre: "Drama", publish: 2007, edition: 2013 },
  { title: "Life in Pixels", genre: "Tech", publish: 2019, edition: 2022 },
  { title: "The Bold Path", genre: "Motivation", publish: 2016, edition: 2019 },
  { title: "Fictional Truths", genre: "Fiction", publish: 1993, edition: 1999 },
  { title: "Eloquent JavaScript", genre: "Programming", publish: 2010, edition: 2020 },
  { title: "Nature’s Call", genre: "Environment", publish: 2005, edition: 2011 },
  { title: "Silent Nights", genre: "Mystery", publish: 1994, edition: 2001 },
  { title: "Road to Success", genre: "Self-help", publish: 2008, edition: 2013 },
  { title: "The Future Is Now", genre: "Tech", publish: 2020, edition: 2023 },
  { title: "Invisible Worlds", genre: "Fantasy", publish: 2001, edition: 2009 },
  { title: "Smart Thinking", genre: "Psychology", publish: 2003, edition: 2008 },
  { title: "Secrets of the Mind", genre: "Philosophy", publish: 1992, edition: 1997 },
  { title: "C++ Primer", genre: "Programming", publish: 2005, edition: 2011 },
  { title: "The Healing Way", genre: "Health", publish: 1999, edition: 2004 },
  { title: "Brave World", genre: "Sci-Fi", publish: 2012, edition: 2017 },
  { title: "Ancient Civilizations", genre: "History", publish: 1989, edition: 1996 },
  { title: "The Java Handbook", genre: "Programming", publish: 2013, edition: 2021 },
  { title: "Mind Over Matter", genre: "Self-help", publish: 2007, edition: 2012 },
  { title: "Star Voyage", genre: "Sci-Fi", publish: 2015, edition: 2019 },
  { title: "Tales of Tomorrow", genre: "Fiction", publish: 2010, edition: 2016 },
  { title: "The Art of Calm", genre: "Spiritual", publish: 2002, edition: 2008 },
  { title: "Linux Unleashed", genre: "Tech", publish: 2016, edition: 2021 },
  { title: "Shadow Games", genre: "Thriller", publish: 2004, edition: 2009 },
  { title: "Echoes of War", genre: "History", publish: 2001, edition: 2006 },
  { title: "The Logic Machine", genre: "Programming", publish: 2022, edition: 2024 },
  { title: "Virtual Vibes", genre: "Tech", publish: 2023, edition: 2025 },
  { title: "Between the Lines", genre: "Drama", publish: 1998, edition: 2003 }
];


const userBooks = books.filter( (eachBook) => eachBook.genre ==="History" )

// console.log(`We access ${userBooks.length} books you are looku]ing for`);
// console.log(userBooks);

const publishedBooks = books.filter( (items) => items.publish > 1995 && items.genre === "History")
console.log(publishedBooks.length);

console.log(publishedBooks);



