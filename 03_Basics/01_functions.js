function loginUser(userName){
    if(userName===undefined){
        return `Please enter user name`
    }
    return `${userName} is logged in`
}

// let checkUserLogin=loginUser()
// console.log(loginUser());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,3000));

const myObje = {
    userName:"ak",
    userId:201
}
function myUser(myObje){
    console.log( `my name is ${myObje.userName}  and my id is ${myObje.userId}`);
   
}

myUser({
    userName:"gauri",
    userId:302
})

const newArray=[200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray));



