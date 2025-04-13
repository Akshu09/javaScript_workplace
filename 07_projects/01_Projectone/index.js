const btns =  document.querySelectorAll(".button")

const body = document.querySelector("body")
// const span = document.querySelector("span")

btns.forEach( (item) => {
  // console.log(item)
  item.addEventListener('click', function(e){
    console.log(e.target)
    if(e.target.id === "yellow"){
      body.style.backgroundColor = "orange"
    }
    if(e.target.id === "grey"){
      body.style.backgroundColor = "green"
    }
    if(e.target.id === "white"){
      body.style.backgroundColor = "pink"
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor = "wheat"
    }
  })
})