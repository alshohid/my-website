 


 
var sideNav= document.querySelector(".side-nav");
var menuBtn=document.getElementById("menu-btn");


sideNav.style.right="-250px";

menuBtn.onclick = function(){
    if(sideNav.style.right== "-250px")
    {
        sideNav.style.right="0px";
    }
    else{
        sideNav.style.right="-250px";
    }
}