//singleton-

//object literals
//object.user-singletopn 
const mySym = Symbol("key");
const user = {
    name: "akshayata",
    "Full name":"akshyata khandate",
    [mySym]:"hello",
    email: "ak@gmail.com",
    contact: 860083846,
    isLoggedIn: false,
    lastLoginDay : ["Monday", "Tuesday"]
}

//how to acces values in objects? we can access it by two ways
//1
// console.log(user.contact);
// console.log(user.Full name);// we cant use .user in this scenario so for this below is another way to access values

//2
// console.log(user["Full name"]);
// console.log(user[mySym]);
// console.log(user["lastLoginDay"]);

//3 remember about Symobol, whenever ask about how to add symbol as a key? so just declare variable assign symbol and value to it and use as key in object and then print

//4 how to changes value in object

user.email="akshayatakhandate09@gmail.com"
// console.log(user);
// Object.freeze(user); //makes an object immutable, meaning you cannot modify, add, or delete properties of the object.
user.name="gauri"
// console.log(user);


//functions

user.greeting = function(){
    console.log("hi");
    
}
user.greeting_2 = function(){
    console.log(`Hi my name is ${this.name}`);
    
}
console.log(user.greeting());
console.log(user.greeting_2());

Object.seal(user); //you want to allow modifications to existing properties but prevent new properties from being added or deleted. 
console.log(user);
user.contact=9909890987
console.log(user);
user.myfunction=function(){
    console.log("akshu");
    
}
console.log(user.myfunction());



