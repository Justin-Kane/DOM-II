// Your code goes here
//mouseover
const logoImg = document.querySelector('.logo-heading');

logoImg.addEventListener("mouseover", (e) =>             
logoImg.style.transform = "scale(1.5)");

logoImg.addEventListener("mouseover", (e) =>             
logoImg.style.backgroundColor = "black");

logoImg.addEventListener("mouseover", (e) =>             
logoImg.style.color = "white");

//keydown
const body = document.querySelector("body")

body.addEventListener("keydown", (e) =>
body.style.backgroundColor = "black");

body.addEventListener("keydown", (e) =>
body.style.color = "white");

//wheel
body.addEventListener('wheel', function alertMeOnce(){
    alert("press ok to use the scroll wheel");
    body.removeEventListener('wheel', alertMeOnce);
});

//drag
const funBusBanner = document.querySelector(".intro > img" );
funBusBanner.addEventListener('drag', (e) => funBusBanner.style.transform = 'scale(1.1)');


//load
window.addEventListener("load", function(event) {
    alert("This is an Alert!");
});

//enter
const scaleUp = document.querySelectorAll('.img-content');
scaleUp.forEach(item => {
  item.addEventListener('mouseenter', e => { 
    item.style.transform = 'scale(1.1)';
    item.style.transition = 'transform 0.5s';
  })
})

//leave
const scaleDown = document.querySelectorAll('.img-content');
scaleDown.forEach(item => {
  item.addEventListener('mouseleave', e => {
    item.style.transform = 'scale(1)';
    item.style.transition = 'transform 0.5s';
  })
})

//click
const destinations = document.querySelectorAll(".destination")
destinations.forEach(item => {
    item.addEventListener('click', (e) => {
        item.style.border = '2px dotted black';
        console.log('clicked destination');
        
    })
})

const signUpButtons = document.querySelectorAll(".btn")
signUpButtons.forEach(item => {
    item.addEventListener('click', (e) => {
        item.style.backgroundColor = 'pink';
        console.log('clicked');
        e.stopPropagation();
    })
})

//resize
window.addEventListener('resize', () => alert("press ok to resize"))

//dblclick
const nav = document.querySelector(".nav");
nav.addEventListener("dblclick", (e) => {
    nav.style.backgroundColor = 'pink';
});

//prevent default on links
nav.addEventListener('click', (e) => {e.preventDefault();
    console.log("clicked on navlink");}
);
