// for

// for (let i = 1; i <= 10; i++) {
//     const element = i
//     if(element == 5){
//         console.log(`${element} is best number`);
        
//     }
//     console.log(element);
    
    
// }

for (let i = 1; i <=10; i++) {
//   console.log(`outer loop ${i}`);
  for (let j = 1; j <=10; j++) {
    // console.log(`${i} * ${j} = ${i*j}`);
    
  }
    
}

const myArray = ["flash","batman","superHero"]
// console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

//break and continue

// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log(`detecte ${index}`);
//         break;
        
//     }
//     console.log(`value of ${index}`);
    
    
    
// }
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`detecte ${index}`);
        continue;
        
    }
    console.log(`value of index ${index}`);
    
    
    
}

