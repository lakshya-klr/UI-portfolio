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
function opengit(){
    window.open("https://github.com/lakshya-klr");
}
function openlinkedin(){
    window.open("https://www.linkedin.com/in/lakshya-kalra-397332236?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3ByqRzvfDYTLqAnZNBqVX80w%3D%3D");
}
function openig(){
    window.open("https://www.instagram.com/_.laksh._13?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==");
}

function mailme(){
    window.location.href="mailto:lakshyakalra1403@gmail.com"
}
function menuup(){
    menu.classList.toggle("up");
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
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
            else{
                // entry.target.classList.remove('show');
            }
    });
});
const hiddenelements = document.querySelectorAll('.hidden');
hiddenelements.forEach((el)=>observer.observe(el));