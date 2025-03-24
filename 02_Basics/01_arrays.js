// array

const myArray = [10,11,12,13,14,15,16,17];
// console.log(myArray);

const newArray = new Array(1,2,3,4)


// Array Methods
newArray.push(8,9);//add values in array
// console.log(newArray);

newArray.pop()// removes last value in the array
// console.log(newArray);

newArray.unshift(2)
// console.log(newArray);

newArray.shift()
// console.log(newArray.includes(10)); // returns boolean type of data

const array_one = myArray.join()
// console.log(array_one); // converts array into string
// console.log(typeof array_one); // converts array into string

//slice , splice

console.log("A" ,myArray);

const checkArary_one = myArray.slice(1,3)
console.log("B" ,checkArary_one); // slice does not manipulate original array it returns selected elements from start to end -1

const checkArary_two = myArray.splice(1,3) // manupulate the original array
console.log("C" ,checkArary_two);
console.log("A" ,myArray);




