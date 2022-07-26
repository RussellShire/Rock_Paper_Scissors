const userInputBox = document.getElementById('user-input');
const button = document.getElementById('button');
let userInput = '';
const consoleLogMode = false;

//QUESTION FOR GRAHAM: I've used userInput a lot as an arguement etc throughout different functions etc, is that bad practice?

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        consoleLogMode? console.log(`userInput within getUserChoice(): ${userInput}`) : '';
        return userInput 
    } else {
      console.log('Please enter, rock, paper or scissors')
    }
  }
  
  const getComputerChoice = () => {
    let choice = Math.floor(Math.random()*3);
    const rockpaperscissors = ['rock', 'paper', 'scissors'];
    return rockpaperscissors[choice]
    
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      console.log('Draw!')
    } else { 
    if (userChoice === 'scissors'){
      computerChoice === 'rock'? console.log('Computer wins') : console.log('You win!');
    } if (userChoice === 'paper'){
      computerChoice === 'scissors'? console.log('Computer wins') : console.log('You win!');
    } if (userChoice === 'rock'){
      computerChoice === 'paper'? console.log('Computer wins') : console.log('You win!');
      }
    }
  }
  
  const playGame = (userInput) => {
    const userChoice = getUserChoice(userInput);
    const computerChoice = getComputerChoice();
    console.log(`You chose ${userChoice}`)
    console.log(`The computer chose ${computerChoice}`)
    determineWinner(userChoice, computerChoice)
  }

  //event listener
button.onclick = e => {
    userInput = userInputBox.value
    userInputBox.value = '';
    playGame(userInput);
}
