const model = { 
    userInput: '',
    computerChoice: '',
    userWins: 0,
    computerWins: 0,
    draws: 0,
    currentWinner: '',
 }

const view = {
    consoleLogMode: false, //For switching on and off debugging

    //Selecting DOM elements
    selectRock: document.getElementById('rock-control'),
    selectPaper: document.getElementById('paper-control'),
    selectScissors: document.getElementById('scissors-control'),
    output: document.getElementById('output'),
    
    userSelection: document.getElementById('user-selection'),
    computerSelection: document.getElementById('computer-selection'),
    
       
    //QUESTION FOR GRAHAM: Why can't I use this.selectRock below???
    /*userSelection: document.getElementById('rock-control').addEventListener('click', () => { 
       console.log('view rock select')}),*/
    
    //Renders result and icons to the Window
    render: (userInput, computerChoice, currentWinner) => {
        output.innerText = currentWinner;
        view.computerIcon(computerChoice)
        view.userIcon(userInput)
    },

    //Changes the icon according to the computer's selection
    computerIcon: function(selection,selector = this.computerSelection){
        this.consoleLogMode? console.log('computerIcon fired') : '';
        switch (selection) {
            case 'rock':
                selector.innerHTML = '<i class="fa-solid fa-hand-back-fist fa-10x"></i>';
                break;
            case 'paper':
                selector.innerHTML = '<i class="fa-solid fa-hand fa-10x"></i>';
                break;
            case 'scissors':
                selector.innerHTML = '<i class="fa-solid fa-hand-scissors fa-rotate-90 fa-10x"></i>';
                break;
        }
    },
    //Changes the icon according to the user's selection
    userIcon: function(selection,selector = this.userSelection){
        this.consoleLogMode? console.log('computerIcon fired') : '';
        switch (selection) {
            case 'rock':
                selector.innerHTML = '<i class="fa-solid fa-hand-back-fist fa-10x"></i>';
                break;
            case 'paper':
                selector.innerHTML = '<i class="fa-solid fa-hand fa-10x"></i>';
                break;
            case 'scissors':
                selector.innerHTML = '<i class="fa-solid fa-hand-scissors fa-rotate-90 fa-10x"></i>';
                break;
        }
    },
}

const controller = {
    // Randomly selects rock, paper or scissors and sends to the model, also returns it
    getComputerChoice: () => {
        let choice = Math.floor(Math.random()*3);
        const rockpaperscissors = ['rock', 'paper', 'scissors'];
        model.computerChoice = rockpaperscissors[choice]
        return model.computerChoice;
    },
    
    // Takes both choices, if they're the same declares draw, then uses if and ternary to compare the users choice to the computers choice if it's not a draw
    determineWinner: (userChoice, computerChoice) => {
        if (userChoice === computerChoice){
            model.currentWinner = 'Draw!'
        } else { 
        if (userChoice === 'scissors'){
          computerChoice === 'rock'? model.currentWinner = 'Computer wins' : model.currentWinner = 'You win!';
        } if (userChoice === 'paper'){
          computerChoice === 'scissors'? model.currentWinner = 'Computer wins' : model.currentWinner = 'You win!';
        } if (userChoice === 'rock'){
          computerChoice === 'paper'? model.currentWinner = 'Computer wins' : model.currentWinner = 'You win!';
        }
        }
    },

    playGame: () => {
        const userChoice = model.userInput;
        const computerChoice = controller.getComputerChoice();
        view.consoleLogMode? console.log(`You chose ${userChoice}`) : '';
        view.consoleLogMode? console.log(`The computer chose ${computerChoice}`) : '';
        controller.determineWinner(userChoice, computerChoice)
        view.render(model.userInput, model.computerChoice, model.currentWinner)
        
    },
}

//QUESTION FOR GRAHAM: Event listeners should be in View right? I've been struggling to add them

  //event listener
view.selectRock.onclick = e => {
    model.userInput = 'rock'
    controller.playGame();
}

view.selectPaper.onclick = e => {
    model.userInput = 'paper'
    controller.playGame();
}

view.selectScissors.onclick = e => {
    model.userInput = 'scissors'
    controller.playGame();
}
