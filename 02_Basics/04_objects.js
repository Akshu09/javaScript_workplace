// const tinderUser = {}// non-singleton object
const tinderUser = new Object() // singleton boject

tinderUser.name="akshayata"
tinderUser.mail="ak@gmail.com"
tinderUser.id="Be14"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        // userFullName:{
        //     firstName:"akshayata",
        //     lastName:"khandate"
        // }
    }

}
// console.log(regularUser.fullName.userFullName?.lastName);


//2
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const newObject={...obj1, ...obj2}// spread method for combining objects
// console.log(newObject);


const obj3 = Object.assign({},obj1,obj2)//assign method for combining objects
const obj4 = Object.assign(obj1,obj2)
// console.log(obj3);
// console.log(obj4);

const newUser = [
    {
        id:1,
        email:"ak@gmail.com"
    },
    {
        id:1,
        email:"ak@gmail.com"
    },
    {
        id:1,
        email:"ak@gmail.com"
    },
    {
        id:1,
        email:"ak@gmail.com"
    },
]
newUser[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //gives all the keys of objects
// console.log(Object.values(tinderUser)); //gives all the keys of objects
// console.log(Object.entries(tinderUser)); //arrays inside arrya

// console.log(tinderUser.hasOwnProperty('mail')); // returns boolean values

//1

const movieCollection  = {
    movies:[{
        title:"Baghi",
        director:"shradhha kapoor",
        year:2014,
        isWatched:false
    }],
    addMovie(title, director, year){
        const movieExists = this.movies.some(presentMovie => presentMovie.title===title)
        if(movieExists){
            return `${title} is already exist`
        }else{
            this.movies.push({title, director, year,isWatched: true})
            return `${title} added to the movie collection`  
        }
       
    },
    markAsWatched(title){
        let watchedMovie = this.movies.find(watchedMovie =>watchedMovie.title===title)
        if(watchedMovie){
            watchedMovie.isWatched=true
            return `${title} is now marked as watched.`;
        }else {
            return `Movie not found in the collection.`;
          }
    },
    getUnwatchedMovies(){
        return this.movies.filter(movie => movie.isWatched===false)
        // (a method that returns an array of movies that haven't been watched yet)
    },
    removeMovie(title){
       let index= this.movies.filter(removefilem => removefilem.title!==title)
       if(index!==-1){
        this.movies.splice(index,1)
         return `${title} has beeen removed from movie collection`
       }
      
    }
}
// console.log(movieCollection.addMovie("KKKG","Karan Johar",1996));
// console.log(movieCollection["movies"]);
// console.log(movieCollection.markAsWatched("KKKG"));
// console.log(movieCollection.getUnwatchedMovies());
// console.log(movieCollection.removeMovie("Baghi"));
// console.log(movieCollection["movies"]);
// onsole.log(movieCollection.addMovie("KKKG","Karan Johar",1996));

// Object.freeze(movieCollection)


//2
// const library  = {
//     books: [
//         { title: "The Alchemist", author: "Paulo Coelho", isBorrowed: false },
//         { title: "1984", author: "George Orwell", isBorrowed: false }
//     ],
//     addBook(title, author) {
//         // 🔹 Add a new book if it's not already in the collection
//         let bookExist= this.books.find(book => book.title===title)
//         if(bookExist){
//             return `${title} is already in collection`
//         }else{
//             this.books.push({title,author,isBorrowed:false})
//             return `${title} is added to collection`
//         }

//     },
//     removeBook(title) {
//         const removeExistingBook = this.books.findIndex(book => book.title===title)
//         // 🔹 Remove a book from the collection
//         if(removeExistingBook!==1){
//             this.books.splice(removeExistingBook,1)
//             return `${title} is removed from collecton`

//         }else{
//             return `${title} is not found in collecton`
//         }
//     },
//     borrowBook(title) {
//         let findBorrowedBook= this.books.find(book => book.title===title)
//         if(!findBorrowedBook){
//             return `${title} not found ins a collection`
//         }
//         if(findBorrowedBook.isBorrowed){
//             return `${title} is already borrowed`
//         }else{
//             findBorrowedBook.isBorrowed=true
//             return `${title} has been borrowed`
//         }
        
        
//     },

// }
// console.log(library.addBook("Too good to be true","Paulo Coelho",false));
// // console.log(library.removeBook("The Alchemist"));
// console.log(library.borrowBook("chhava"));

// console.log(library.books);

//4
const library  = {
    books:[
        {
            title:"chhava",
            author:"shivaji sawant",
            isAvailabel:true
    
        },
        {
            title:"shyam chi aai",
            author:"sane guruji",
            isAvailabel:true
    
        },
        {
            title:"Harry potter",
            author:"joe dent",
            isAvailabel:false
    
        }
    ],
  
    addBook(title, author){
        const checkBook= this.books.find(book => book.title===title)
        if(checkBook){
            return `${title} alreay present in library`
        }else{
            this.books.push({title, author,isAvailabel:true})
            return `${title} added to library`
        }
        
    },
    borrowBook(title){
        const borrowbook=this.books.find(book => book.title===title)
        if(!borrowbook){
            return `${title} not found.`
        }
        if(!borrowbook.isAvailabel){
            return `Sorry, ${title} is already borrowed.`
        }else{
            borrowbook.isAvailabel=false
            return `You borrowed ${title}."`
        }
        
        
    },
    returnBook(title){
        const bookAvaibility = this.books.find(book => book.title===title)
        if(!bookAvaibility){
            return `Book not found.`
        }
        if(bookAvaibility.isAvailabel!==true){
            bookAvaibility.isAvailabel=true
            return `You returned ${title}.`
        }else{
            return `This book was not borrowed.`
        }
    },
    listAvailableBooks(){
        return this.books.filter(book => book.isAvailabel)
    }
}

console.log(library.addBook("abc","myhome"));
console.log(library.addBook("chhava", "shivaji sawant"));
console.log(library.borrowBook("Kbc"));

console.log(library.books);

console.log(library.returnBook("Harry potter"));
console.log(library.returnBook("mera nam"));
console.log(library.books);
console.log(library.listAvailableBooks());


// importatant methods
findIndex()
filter()
find()
some()









