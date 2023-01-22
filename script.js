 console.log("..Running");

window.addEventListener('scroll',function(){

    let navbar= document.getElementById('navbar');
    if(window.pageYOffset >= 96){

        navbar.classList.add('sticky');
     
    }    else{
        navbar.classList.remove('sticky');
    }
   
  


});




const scrollup = document.querySelector('.scrollup');
window.addEventListener ('scroll',  () => {
if (window.pageYOffset > 200){
    scrollup.classList.add('active');
}
    else{
        scrollup.classList.remove('active');
    }
} ) 

let currentScrollPosition = 0;
let scrollAmount = 320;

const sCont = document.querySelector(".all");
const hScroll = document.querySelector(".arrow");

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val){
    currentScrollPosition += (val * scrollAmount);
    if(currentScrollPosition > 0){
        currentScrollPosition = 0
    }
    if (
        currentScrollPosition < maxScroll){
            currentScrollPosition = maxScroll
        }
    
   
    

    sCont.style.left = currentScrollPosition + "px";
}

document.getElementById("cross").addEventListener('click', opensidebar)
document.getElementById("menu").addEventListener('click', closesidebar) 
document.querySelector(".menu").addEventListener('click', closesidebar)


function opensidebar() {
    document.body.classList.add("open");
}
function closesidebar() {
    document.body.classList.remove("open");
}
 