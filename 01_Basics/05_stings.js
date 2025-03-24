// const myName = "akshayata"
// const count = 50

// console.log(myName+count+"khandatr");

// console.log(`my name is ${myName} and my conut is ${count}`);

const myVar = new String("Ak-shaya-ta")
// console.log(myVar);
// console.log(myVar[4]); //gives a value on particular index
// console.log(myVar.__proto__); //gives object {}
// console.log(myVar.length);
// console.log(myVar.toUpperCase());
// console.log(myVar.substring(1,5));
console.log(myVar.replace("t","a"));//replace value in string (searchValue ,newvalue)
console.log(myVar.trim());

const newVar = myVar.substring(0,4);

const myName = "          aksh   "
console.log(myName);

const newString = myName.trim()// we use trim method for avoiding unnecessary spaces by user known as white sapces, trim work with start and end also and only work with white spaces,white lines.
console.log(newString);

const myEmail = "https://akshayata20%Khandate@gmail.com";

const newMail = myEmail.replace("20%", "-")//we use replace method to avoid unnecessary kywords
console.log(newMail);

console.log(myEmail.includes('gauri')); // includes check wheather the value is present in string or not and gives true/false a/c to string value

console.log(myVar.split('-'));








