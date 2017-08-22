var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/sheep.jpg'){
    myImage.setAttribute('src', 'images/real-sheep.jpg');
  } else {
    myImage.setAttribute('src', 'images/sheep.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Look at this sheep, ' + myName;
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Look at this sheep, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}