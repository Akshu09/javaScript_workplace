// const numbers = [1,2]

// numbers.forEach( (items) => {
//     const newNmber = items +10
//     console.log(newNmber);
    
//     numbers.push(newNmber)
// })

// console.log(numbers);   remember this you was failed here

// trying another one instead of foreach loop we can use map which automatically return value

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const myNewNumberArray = myNumbers.map( (nums) => nums + 10)
// console.log(myNewNumberArray);

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const myNewNumberArray = myNumbers.forEach( (nums) => { 
// return nums+10})
// console.log(myNewNumberArray); // undefined  

const newNumber = myNumbers
.map( (nums) =>nums +10 )
.map( (nums) =>nums + 1 )
.filter( (nums) => {
    if(nums % 2 === 0){
        console.log(`${nums} is even`);
        return true
        
    }else{
        console.log(`${nums} is odd`);
        return false
    }
} )
console.log(newNumber);


