let username=document.getElementById("Name");
let mail1=document.getElementById('mail');
let phone=document.getElementById('Num');
let eqn=document.getElementById("Name2");
let btn=document.getElementById('b1');
let b2=document.getElementById('b2');
btn.addEventListener("click",function()
{
    if (username.value ==="" || mail1.value ==="" || phone.value ==="" || eqn.value ==="") {
        alert("enter all details properly");
    }
})

