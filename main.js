const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
      return userInput 
    } else {
      console.log('Please enter, rock, paper or scissors')
    }
  }
  
  const getComputerChoice = () => {
    choice = Math.floor(Math.random()*3)
    rockpaperscissors = ['rock', 'paper', 'scissors']
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
  
  const playGame = () => {
    userChoice = getUserChoice('rock');
    computerChoice = getComputerChoice();
    console.log(`You chose ${userChoice}`)
    console.log(`The computer chose ${computerChoice}`)
    determineWinner(userChoice, computerChoice)
  }
  playGame();