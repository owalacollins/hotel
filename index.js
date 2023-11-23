let menu = document.querySelector('#menuicon');
let close = document.querySelector('#close');
let navbar = document.querySelector('ul');
if(menu){
menu.addEventListener('click',()=>{
   navbar.classList.add('activemenu');
})
}
if(close){
    close.addEventListener('click',()=>{
       navbar.classList.remove('activemenu');
    })

}
window.addEventListener('scroll',reveal);
function reveal(){
   var reveals = document.querySelectorAll('section');
   for(var i = 0; i < reveals.length ; i++){
      var windowheight = window.innerHeight;
      var revealtop =reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if(revealtop < windowheight - revealpoint){
         reveals[i].classList.add('activetab');
     }else{
         reveals[i].classList.remove('activetab');
     }
   }
}
