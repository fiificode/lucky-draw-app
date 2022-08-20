let btn = document.querySelector('button');
let output = document.querySelector('h1');

// Generation of Random number 
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

// Creation of Array of Numbers 
function createArrayOfNumbers(start,end){
    let myArray = [];
    for(let i = start; i<= end; i++){
        myArray.push(i);
    }
    return myArray;
}

let numbersArray = createArrayOfNumbers(1,10);

const showSpinner = () =>{
    document.getElementById('spinner').style.display = 'block';
}
const showLogo = () =>{
    document.getElementById('logo').style.display = 'block';
}
const hideSpinner = () =>{
    document.getElementById('spinner').style.display = 'none';
}
const hideLogo = () =>{
    document.getElementById('logo').style.display = 'none';
}
const clearWinner = () =>{
    output.innerHTML = '';
}

btn.addEventListener('click', () => {
    if(numbersArray.length == 0){
        output.innerText = "Draw Ended!!"
        return; 
    }

  
    let randomIndex = getRandomNumber(0,numbersArray.length-1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1);
    showSpinner();
    clearWinner();
    hideLogo();
    setTimeout(() =>{
        hideSpinner();
        output.innerHTML = "Winner is number " + randomNumber + '<br>Congratulations You Won!🎉🎉🌟';
        showLogo();
        startit();
        btn.innerText = 'Next Winner';
        stopit();
    },5000);
});


const startit = () => {
    setTimeout(function () {
      confetti.start();
    }, 1000);
  };
  // Stops
  const stopit = () => {
    setTimeout(function () {
      confetti.stop();
    },10000);
  };
//   // playing start
//   startit();
//   // stoping it
//   stopit();
