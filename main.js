let counter = document.querySelector("span")
let reset = document.querySelector(".reset")
let add = document.querySelector(".add")
let sub = document.querySelector(".substract")
let count = 0

reset.onclick = function(){
    count = 0
    counter.innerHTML = count
    
}
add.onclick = () =>{
    count++
    counter.innerHTML = count
}

sub.onclick = () => {
    count--
    if(count<0){
        alert("Not accepting negative integers")
    }
    else{
        counter.innerHTML = count
    }
}

