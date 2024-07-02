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
document.getElementById('frontcard').addEventListener('mouseover', function() {
    document.getElementById('lastcard').style.transform = 'rotate(0deg)';
    document.getElementById('lastcard').style.scale = '0.9';
    document.getElementById('frontcard').style.color="white";
    document.getElementById('frontcard').style.backgroundColor="#1e1e1e";
    document.getElementById('middlecard').style.transform = 'rotate(0deg)';
    document.getElementById('middlecard').style.scale = '0.9';
    document.getElementById('middlecard').style.transform = 'translateX(0)';
});

document.getElementById('frontcard').addEventListener('mouseout', function() {
    document.getElementById('lastcard').style.transform = 'rotate(0deg)';
    document.getElementById('lastcard').style.transform = 'translateX(-116.5%)';
    document.getElementById('lastcard').style.scale = '1';
    document.getElementById('frontcard').style.backgroundColor="#1e1e1e";
    document.getElementById('frontcard').style.backdropFilter="blur(50px)";
    document.getElementById('frontcard').style.color="white";
    document.getElementById('middlecard').style.transform = 'rotate(0deg)';
    document.getElementById('middlecard').style.scale = '1';
    document.getElementById('middlecard').style.transform = 'translateX(116.5%)';
});



document.getElementById('frontcard').addEventListener('click', function() {
    document.getElementById('middlecard').style.scale = '1';
    document.getElementById('lastcard').style.scale = '1';
    // document.getElementById('lastcard').style.transform = 'translateX(-116.5%);';

});
