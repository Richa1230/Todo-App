let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    // addeing delet button near taxt
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    // console.log(inp.value);     //enput value ko print karane ke liye 
     inp.value ="";       //input value reset karne k liye
// deleting for element
     let delbtns = document.querySelectorAll(".delete");
     for(delbtn of delbtns){
        delbtn.addEventListener("click", function(){
            let par = this.parentElement;
            console.log(par);
            par.remove();

        });
     }



});
