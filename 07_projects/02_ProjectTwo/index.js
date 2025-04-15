//we have form in our document and thts why we are selecting form here
const form = document.querySelector('form')

//here we are adding submit event on form not onclick because we submit the form
form.addEventListener('submit', function(e){
    
    //when we submit form there two methods get and post ahe using below line we are just stopin methods for now that we can not see anything in url
    e.preventDefault()

    //we have two inputs, and we are slecting them with values

    const height =parseFloat( document.querySelector("#height").value)
    console.log(height);
    
    const weight =parseFloat( document.querySelector("#weight").value)
    console.log(weight);
    const results = document.querySelector("#results")
    console.log(results);

    //here we are checking with valid inputs

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
         results.innerHTML = `Please enter a valid weight ${weight}`
    }else{

        //below we are converting input heinght which is in cm in meters and then BMI calculating formula
        
        const heightInMeters = height / 100;
        const bmi = parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(2))

        //here we are setting one variable to store bmi category and cheking with conditions
        let category = ""
        if(bmi < 18.6){
            category = "Underweight";
        }else if(bmi >= 18.6 && bmi <= 24.9){
            category = "Normal Range";
        }else{
            category = "Overweight";
        }

        //here we are showing rsult
        results.innerHTML = `<span>${bmi} and you are ${category}</span>`
    
       

        
        
    }
})


