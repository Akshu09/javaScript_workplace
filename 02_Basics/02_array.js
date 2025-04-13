const array_one = [1,2,3,4]
const array_two =[11,12,13]

// array_one.push(array_two)
// console.log(array_one[4][1]);

const arr = array_one.concat(array_two);
// console.log(arr);

const allNumbers= [...array_one, ...array_two]
// console.log(allNumbers);

const myArray = [1,2,3,[4,5,6],7,8,9,[4,5]]

const myNewArray =myArray.flat(Infinity)
// console.log(myNewArray);


console.log( Array.isArray("akshayata"));
console.log( Array.from("akshayata"));
console.log( Array.from({name:"akshayata", email:"ak@gmail.com",contact:8600083846 })); //intresting
console.log( Array.isArray(myArray));

let score =100
let score_2 =200
let score_3 =300

console.log(Array.of(score,score_2,score_3)); //gives arrya as [100,200,300]




