var cont = document.querySelectorAll(".cont"), 
pos = 0;

function hideLoader(){
    setTimeout(function(){
        cont[0].style.transform = "var(--scale)";
        setTimeout(function(){
            cont[0].style.opacity = "0";    
        }, 500);
    }, 1000);
}
window.addEventListener("load", hideLoader);