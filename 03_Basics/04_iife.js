//Immediately Invoked Function Expression(IIFE)

//

(function chai(){
    console.log("db connected");
    
})(); //when things should not be polluted from global place so use IIFE

//why we use IIFE- we use it to remove global pollution,means whatever we used in global space like any kind of variable so this will give
//imidiate execution
(()=>{ //arrow function
    console.log("db connected");
    
})();
((name)=>{ //arrow function
    console.log(`hey hell ${name}`);
    
})('hitesh');
