// const chai = function(){
//     let user = "ak"
//     console.log(this.user);
    
// }
const chai =()=>{  //arrow function
    let user = "ak"
    console.log(this);
    
}
// chai();

// const addTwo=(num1,num2) => {
//     return num1+num2
// }

// ---------------------implicit return--------------------//
// const addTwo=(num1,num2) => num1+num2


//  addTwo(1,9)

// const addTwo=(num1,num2) => (num1 + num2)

//---------when you want to return object------------//
const addTwo=(num1,num2) => ({userName:"hitesh"})

console.log(addTwo(7,7));





