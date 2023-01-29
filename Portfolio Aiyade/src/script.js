let image1=document.querySelector('.image1');
let formulaire= document.querySelector('form')
let decor1= document.querySelector('.decor1');
let decor2= document.querySelector('.decor2');
let decor3= document.querySelector('.decor3');
let frontend=document.querySelector('.frontend1');
let circle = document.querySelector('#circle')
let cursor = document.querySelector('.cursor');
let texteoutil= document.querySelector('.texte_outil')
let textarea= document.querySelector('textarea')
let contacter= document.querySelector('.contacter');
let email = document.querySelector('.email')




window.addEventListener("scroll", ()=>{
const {scrollTop, clientHeight}=
document.documentElement;
const topElementToTopViewport=
decor1.getBoundingClientRect().top;

if (scrollTop >(scrollTop + topElementToTopViewport).toFixed()- clientHeight*0.70) {
    decor1.classList.add("decor1anime");
    decor2.classList.add("decor1anime");
}

if (scrollTop >(scrollTop + topElementToTopViewport).toFixed()-300) {
    formulaire.classList.add("contactranslate");
   
}
if (scrollTop >(scrollTop + topElementToTopViewport+600).toFixed()) {
    circle.classList.add("circle2");
   
}

if (scrollTop >(scrollTop + topElementToTopViewport+600).toFixed()) {
    circle.classList.add("circle2");
    
   
}

})

document.addEventListener('mousemove', parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer=>{
        const speed = layer.getAttribute('data-speed');
        const x =(window.innerWidth- e.pageX*speed)/100;
        const y =(window.innerHeight- e.pageY*speed)/100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}


document.addEventListener('mousemove', e => {
cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})



texteoutil.addEventListener("mousemove", function(){
cursor.classList.add("cursor2")

})

function desactivescroll(){

document.documentElement.style.overflow = 'hidden';
setTimeout( function(){
    document.documentElement.style.overflow = 'visible';

}, 1000)
}



contacter.addEventListener('submit', function(e){

let prenom = document.querySelector('.prenom')
if (prenom.value.trim() == "" && email.value.trim() == "" && textarea.value.trim() == "" || prenom.value.trim() == ""|| email.value.trim() == "" || textarea.value.trim() == "" ) {
    let myError = document.getElementById('error');
    myError.innerHTML="Un ou plusieurs champs sont vide";
    myError.style.color = "red";
    e.preventDefault();
    

}
})
