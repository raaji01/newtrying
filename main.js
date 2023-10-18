const dragElement = document.getElementById('drag');
const dropElement = document.getElementById('drop');
var btn= document.getElementById("btn");
var light= document.getElementById("light");
var logo=document.getElementById("logo");
let popup= document.getElementById("popup")
function ball1left() {
  // Function to move Tom to the left
  document.getElementById('ball1').style.left = 0;
  //document.getElementById('ball1').style.imageOrientation = "https://img.cartoongoodies.com/wp-content/uploads/2019/10/16155814/tom-running-fast.png";

}

function ball1right() {
  // Function to move Tom to the right
  document.getElementById('ball1').style.left = "80vw";
  /* document.getElementById('ball1').style.backgroundColor="forestgreen";*/
}
function ball2left() {
  // Function to move Jerry to the left
  document.getElementById('ball2').style.left = 0;
  /* document.getElementById('ball2').style.backgroundColor = "blue";*/

}
function ball2right() {
  // Function to move Jerry to the right
  document.getElementById('ball2').style.left = "82vw";
  /* document.getElementById('ball2').style.backgroundColor ="pink" ;*/
}

function toggleBtn(){
    btn.classList.toggle("active");
    light.classList.toggle("on");
    //logo.classList.toggle("on");
  }
  function openPopup(){
    popup.classList.add("open-popup");
  }
  function closePopup(){
    popup.classList.remove("open-popup");
  }
 
dragElement.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'profile');
});

dropElement.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropElement.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    dropElement.textContent = `Thanks for visiting Raaji ${data}`;
});
