"use strict";

const div = document.querySelector("#cookie");
div.style.top = "50vh";
div.style.left = "-20vw";

document.addEventListener("DOMContentLoaded", function () {
    
     window.setTimeout(slowAlert, 500);
        
      function slowAlert() {
        div.style.transform = `translate(60vw, 0vh)`;
      }
});
 function acceptCookies(){
    div.style.transform = `translate(120vw, 0vh)`;
     
 }

// const divs = document.querySelectorAll("#app div");
// divs.forEach(function(div){
//     //div.style.transform = `translate(50vw, 50vh)`;
// div.addEventListener("mouseenter", function(){
//     div.style.transform = `translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
//     div.style.backgroundColor = `hsl(${Math.random()*1360}, ${Math.random()*100}%, 50%)`;
// })
// })