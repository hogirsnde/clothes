//navbar
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu');
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon');
    })
 }
 showMenu('nav-toggle','nav-menu');
//------------------------------------------------------------//
 //drop down menu
    let drop =document.querySelectorAll(".dropdown__item");
    let menu=document.querySelectorAll(".dropdown__menu");
    let arrow=document.querySelectorAll(".dropdown__arrow");
    drop.forEach((i,index)=>{
        i.addEventListener("click",function(){
             menu[index].classList.toggle("show");
             arrow[index].classList.toggle("show");
        });
    });

 

 
 
// ------------------------------------------------------------------------------------