const hamburger = document.querySelector(".hamburger");
const openMenu = document.querySelector("#inside-menu");
const closeMenu = document.querySelector(".closebutton");
hamburger.addEventListener("click", () =>{
    openMenu.style.right = "0";
} );
closeMenu.addEventListener("click", () =>{
    openMenu.style.right="-100%";
} );


const myform=document.getElementById("Client_form");
if (myform){
    myform.addEventListener("submit",(event)=>{
    event.preventDefault();
        

const myname=document.querySelector("#Name");
const mylocation=document.querySelector("#Location");
const number=document.querySelector("#phonenumber");
const order=document.querySelector("#myOrder");
        const obj={
            name:myname.value,
            location:mylocation.value,
            number:number.value,
            order:order.value

        }
    localStorage.setItem("obj",JSON.stringify(obj));
 
    })
    
    
}