var loader=document.querySelector("#loader");
var menu=document.getElementById("menu");
setTimeout(function(){
    loader.style.top="-100%";
},3800)


function menuslider(){
    // menu.style.transform = "translateY(1%)";
    menu.classList.toggle("toggler");
    menu.classList.toggle("up");
}

function toportfolio(){
    window.open("https://lakshya-klr.github.io/My-Portfolio-responsive/");
}
function mailme(){
    window.location.href="mailto:lakshyakalra1403@gmail.com"
}