//for of

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "HelloWord!"

for (const index of greetings) {
    // console.log(index);
    
}  

const map =new Map()
map.set('IN',"India")
map.set('USA',"Un ited nations of india")
map.set('fr',"france")
for (const key in map) {
  console.log(map[key]);
  
}
// console.log(map);
// for (const [key,value] of map) {
//     // console.log(key,':-',value);
    
// }

// const myObject = {
//     'gane1' : "NFS",
//     'game2' : "spiderman"
// }


// for (const key in myObject) {
   
// }

// const myObject = {
//     js: "javascript",
//     cpp: "c++",
//     rb:"ruby",
//     swift:"swift by apple"
// }

// for (const key in myObject) {
//  console.log(`${key} is shortcut for ${myObject[key]}`);
   
// }

const programming = ["js","java","cpp","ruby","python"]
for (const key in programming) {
    // console.log(programming[key]);
    
}