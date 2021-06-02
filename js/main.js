let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let num = document.getElementById('number');
let count = document.getElementById('count');
let btns = document.querySelectorAll(".btn");

function red(){
  if(parseInt(count.innerHTML) < 0){
    count.style.color = "red"
  }
  else{
    count.style.color = "black"
  }
}
function add(){
  count.innerHTML = (parseInt(count.innerHTML) + parseInt(num.value));
  red();
}

function subtract(){
  count.innerHTML = (parseInt(count.innerHTML) - parseInt(num.value));
  red();
}

function hoverOn(){
  this.style.backgroundColor = "grey";
  this.style.color = "white";
}

function hoverOff(){
  this.style.backgroundColor = "white";
  this.style.color = "grey";
}
plus.onclick = add;
minus.onclick = subtract;

btns.forEach(function(btn){
  btn.addEventListener("mouseenter",hoverOn);
  btn.addEventListener("mouseleave",hoverOff);
})
