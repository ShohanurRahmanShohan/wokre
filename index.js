var x = document.getElementById("myAudio"); 
var y = document.getElementById("click"); 
var timmer = window.prompt("reminder time (minutes)  : ");
ano= parseInt(timmer)* 60 * 1000
function Start (){
    var x = document.getElementById("myAudio"); 
ano= parseInt(timmer)* 60 * 1000
 
for (let i = 0; i <1; i++) {
    y.play();
    setTimeout(function playAudio() { 
        x.play();
    } ,ano );
  }
}
function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 
let add = document.querySelector("#add");

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;

  output.innerText = result;
});