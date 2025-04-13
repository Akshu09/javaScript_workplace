let a=300

if(true){
    let a = 3
    const b = 5
    console.log("Inner:", a);
    
}
console.log(a);

console.log( addOne(7));
function addOne(num) {
    return num+1
}


// console.log(addTwo(4));
const addTwo = function (num) {
    return num+1
}

// if(true){
//     const a =10
//     if(a===10){
//         let b =
//     }
// }

const user = {
    userName:"gauri",
    userId:302
}

console.log(user(this.userName));


