//destructuring of object

const course = {
    courseName : "js by hitesh",
    price : 999,
    tinstructor: "hitesh"
}
// console.log(course.tinstructor);
// console.log(course.price);

const {tinstructor:hi} = course //destructuring of object
// console.log(hi);


//api


const student ={
  name: "Ak",
  age: 22,
  grades: {
    maths: 99,
    science: 78,
    english: 40
  },
  getAverage(){
    let value=Object.values(this.grades) 
    let sum= value.reduce((val ,startingNmuber)=>val+startingNmuber,0)
    return `average of all grades is ${sum / value.length}.`
    

}
}
// console.log(student.getAverage());

//2
const bankAccount ={
accountHolder:"Akshayta Khandate",
balance:10,
deposit(amount){
    // bankAccount.amount=5000
    this.balance+=amount
    return `new balance is ${this.balance}`
},
withdraw(amount){
    if(this.balance>=amount){
        this.balance-=amount
        return `Withdrawal successful! Available balance is ${this.balance}`
    }else{
        return `Insufficient funds! Available balance is ${this.balance}`
    }

    
} 
// (a method that subtracts money from the balance but only if sufficient funds are available)
}
// console.log(bankAccount.deposit(2000));
// console.log(bankAccount.withdraw(10));

//3
const library  ={
books:[
    {
        title:"To good to be true", 
        author:"Prajkta Koli",
        isAvailable:true
    } ,
],
addBook(title, author){
    this.books.push({
        title:title,
        author:author,
        isAvailable:true
    })
    return this.books
},
borrowBook(title){
    const book = this.books.find(book=> book.title===title) //find the books in book array

    if(book){
        if(book.isAvailable){
            book.isAvailable=false
            return `${title} has been borrowed`
        }else{
            return `${title} is alredy borrowed`
        }
    }
    else{
        return `Book is not found in library`
    }
}



// borrowBook(title) (a method that sets isAvailable to false if the book is available)

// returnBook(title) (a method that sets isAvailable to true)
}

// console.log(library.addBook("Harry Potter", "J.K. Rowling"));
// console.log(library.borrowBook("Harry Potter")); // Harry Potter has been borrowed.
// console.log(library.borrowBook("Harry Potter")); // Harry Potter is already borrowed.
// console.log(library.borrowBook("Some Unknown Book")); // Book not found in the library.
// console.log(library.books); // Check updated book list


//4

const shoppingCart= {
    items : [
        {
            name:"jeans", 
            price:999,  
            quantity:2
        }
    ],
    addItem(name, price, quantity) {
        let existingItem=this.items.find(item=>this.name===name);
        if(existingItem){
            existingItem.quantity+=quantity
            return `${name} quantity increased to ${existingItem.quantity}`
        }else{
            this.items.push({name, price, quantity})
            return `${name} added to cart`
        }
    
    },
    removeItem(name){
        this.items= this.items.filter(item => item.name!==name)
        return `${name} has been removed from cart succesfully.`
    },
    calculateTotal() {
        let total= this.items.reduce((total, item) => total+item.price*item.quantity,0);
        return `You need to pay total amout of Rs.${total}`
        
        // (a method that calculates and returns the total cost of all items in the cart)
    }
}
// console.log(shoppingCart.addItem());
// console.log(shoppingCart.addItem("top",899,3));
console.log(shoppingCart.addItem("jeans",899,3));
console.log(shoppingCart.addItem("kurta",899,3));
// // console.log(shoppingCart["items"]);
// console.log(shoppingCart.removeItem("kurta"));
console.log(shoppingCart.calculateTotal());

// console.log(shoppingCart["items"]);




// (a method that adds a new item to the cart or increases the quantity if the item already exists)




