const model = { userInput: '' }

const view = {
    consoleLogMode: false, //For switching on and off debugging

    selectRock: document.getElementById('rock-control'),
    selectPaper: document.getElementById('paper-control'),
    selectScissors: document.getElementById('scissors-control'),
    
    //QUESTION FOR GRAHAM: Why can't I use this.selectRock below???
    /*userSelection: document.getElementById('rock-control').addEventListener('click', () => { 
       console.log('view rock select')}),*/
       
    render: (userInput) => {
        
    }
    }

const controller = {
    getComputerChoice: () => {
        let choice = Math.floor(Math.random()*3);
        const rockpaperscissors = ['rock', 'paper', 'scissors'];
        return rockpaperscissors[choice]},
    determineWinner: (userChoice, computerChoice) => {
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
      },
    playGame: (userInput) => {
        const userChoice = userInput;
        const computerChoice = controller.getComputerChoice();
        console.log(`You chose ${userChoice}`)
        console.log(`The computer chose ${computerChoice}`)
        controller.determineWinner(userChoice, computerChoice)
      },
    
}

//QUESTION FOR GRAHAM: Event listeners should be in View right? I've been struggling to add them

  //event listener
view.selectRock.onclick = e => {
    model.userInput = 'rock'
    controller.playGame(model.userInput);
}

view.selectPaper.onclick = e => {
    model.userInput = 'paper'
    controller.playGame(model.userInput);
}

view.selectScissors.onclick = e => {
    model.userInput = 'scissors'
    controller.playGame(model.userInput);
}
