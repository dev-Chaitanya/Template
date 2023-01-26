var container1=document.querySelector('.container1');

var downArrow=document.querySelector('.downBtn');

const cards=document.querySelectorAll('.card')
var timer;
var count=0;

function currentBg(){
    container1.classList.remove("container1bg3");
    container1.classList.add('container1bg1');
    let num=0;
    let timmer;
 timmer=setInterval(()=>{
num++;
// console.log('this is num: ',num)
if(num===5){
    num=0;
    bgChanging();
    clearInterval(timmer)
}
    },1000)

}

function bgChanging(){
timer=setInterval(()=>{
count++;
// console.log(count);
if(count===5){
    container1.classList.remove()
container1.classList.add('container1bg2');
}
if(count===10){
    container1.classList.remove('container1bg2')
container1.classList.add('container1bg3');
}
else if(count===15){
    count=0;
currentBg();
clearInterval(timer);
}
},1000)
}

currentBg();
let container6=document.querySelector('.container6')
let container3box1=document.querySelector('.contaienr3box1')
let container5box1=document.querySelector('.container5box1')
let container5box2=document.querySelector('.container5box2');
let lis=document.querySelectorAll('.texts ul li');
var opa;
$(document).ready(()=>{
$(window).scroll(()=>{

let scrolpos=$(window).scrollTop();

let targetpos=$('#container1Box').offset().top;

console.log(scrolpos);
if(scrolpos>=0 && scrolpos<30){
    $('#container1Box').css({
        opacity:1
    })
}
else if(scrolpos>=30 && scrolpos <=90){
    $('#container1Box').css({
        opacity:0.9
    },1)
}
else if(scrolpos>=90 && scrolpos <=135){
    $('#container1Box').css({
        opacity:0.8,
        transistionDuration:'1s'
    },1)
}
else if(scrolpos>135 && scrolpos <=165){
    $('#container1Box').css({
        opacity:0.4,
        transistionDuration:'1s'
    },1)
}
else if(scrolpos>165 && scrolpos){
    $('#container1Box').css({
        opacity:0,
        transistionDuration:'1s'
    },1)
}

if(scrolpos>0&&scrolpos<=483){
    cards[0].classList.remove('cardleft');
    cards[1].classList.remove('cardmid');
    cards[2].classList.remove('cardright');

}
else if(scrolpos>483){
   
cards[0].classList.add('cardleft')
cards[1].classList.add('cardmid')
cards[2].classList.add('cardright')
}
 if(scrolpos>=1773){
    cards[0].classList.remove('cardleft');
    cards[1].classList.remove('cardmid');
    cards[2].classList.remove('cardright');
}
if(scrolpos<1913){
    lis[0].classList.remove('lianimation');
    lis[1].classList.remove('lianimation');
    lis[2].classList.remove('lianimation');
    lis[3].classList.remove('lianimation');
    container5box2.classList.remove('cardanimation')
}
else if(scrolpos>=1913){
    lis[0].classList.add('lianimation')
    lis[1].classList.add('lianimation')
    lis[2].classList.add('lianimation')
    lis[3].classList.add('lianimation')
    container5box2.classList.add('cardanimation')
}
if(scrolpos<1784){
container5box1.classList.remove('cardleft')   
}
else if(scrolpos>=1784){
container5box1.classList.add('cardleft')
}




})

})
