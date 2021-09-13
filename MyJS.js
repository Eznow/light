let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let audio1 = document.querySelector('#audio1');
let audio2 = document.querySelector('#audio2');

btn.onclick = function(){
     body.classList.toggle('on');
     haha.classList.toggle("opacity");
     audio1.play();
}
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const anh = $('.image');
const text = $('li a');
const haha = $('section');
function mainFunction(){
 setTimeout(function myFunction(){
     anh.classList.add("appear");
     text.classList.add("disappear");
     audio2.play();
     
 },5000);
}