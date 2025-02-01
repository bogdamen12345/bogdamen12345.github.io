let canvas=document.querySelector('.canvas1');
let pen = canvas.getContext('2d');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let car=document.querySelector('.car');
let x=80;
let y=230;
function draw(){
   pen.fillStyle="gray";
   pen.fillRect(80,40,1440,400);
   requestAnimationFrame(draw);
}
draw();
function uniformmotion(){
   anime({
      targets: '.car',
      translateX: ['0', '1000'],
      easing: 'linear',
      direction: 'alternate',
      duration: 3000,
      loop: false
  });
}
button1.addEventListener('click',uniformmotion);
function speededupmotion(){
   anime({
      targets: '.car',
      translateX: ['0', '1000'],
      easing: 'easeOutQuint',
      direction: 'alternate',
      duration: 2000,
      loop: false
  });
}
button2.addEventListener('click',speededupmotion);
function slowedupmotion(){
   anime({
      targets: '.car',
      translateX: ['0', '1000'],
      easing: 'easeInCubic',
      direction: 'alternate',
      duration: 5000,
      loop: false
  });
}
button3.addEventListener('click',slowedupmotion);

let metr = document.querySelector('.metr');
let secunda =document.querySelector('.secunda');
let resultat = document.querySelector('.resultat');
let button = document.querySelector('.button');
function raschetskorosti(){
   resultat.value = metr.value / secunda.value;
}
button.addEventListener('click', raschetskorosti);