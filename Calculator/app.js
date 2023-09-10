let btns = document.querySelectorAll(".btn");
let inp = document.querySelector("input");
let string = "";

for(let btn of btns){
    btn.addEventListener("click", function(event){
        console.log("button clciked");
        if(this.innerText == "="){
            string = eval(string);
        }
        else if(event.target.innerText == "AC"){
            string = ""
        }
        else if(event.target.innerText == "DEL"){
            string = string.substring(0, string.length-1);
        }
        else{
            string = string + this.innerText;
        }
        inp.value = string
    })
}
