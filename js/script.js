var loader = document.querySelector(".loader"),
main = document.querySelector(".main"),
cont = document.querySelectorAll(".cont"), 
pos = 0;

function hideLoader(){
    setTimeout(function(){
        cont[0].style.transform = "var(--scale)";
        setTimeout(function(){
            cont[0].style.opacity = "0"; 
            setTimeout(function(){
                loader.style.display = "none";
                main.style.opacity = "1";
            }, 500);
        }, 500);
    }, 1000);
}
window.addEventListener("load", hideLoader);