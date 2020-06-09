let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'KRStoddard.github.io/images/paris-art.jpg') {
      myImage.setAttribute ('src','KRStoddard.github.io/images/who.jpg');
    } else {
      myImage.setAttribute ('src','KRStoddard.github.io/images/paris-art.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to the Vast ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to the Vast, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Welcome to the Vast, ' + myName;
    }
  }
