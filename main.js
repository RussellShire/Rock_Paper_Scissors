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
    userScore: document.getElementById('user-score'),
    computerScore: document.getElementById('computer-score'),

    rockIcon: '<i class="fa-solid fa-hand-back-fist big-icon"></i>',
    paperIcon: '<i class="fa-solid fa-hand big-icon"></i>',
    scissorsIcon: '<i class="fa-solid fa-hand-scissors fa-rotate-90 big-icon"></i>',
       
    //QUESTION FOR GRAHAM: Why can't I use this.selectRock below???
    /*userSelection: document.getElementById('rock-control').addEventListener('click', () => { 
       console.log('view rock select')}),*/
    
    //Renders result and icons to the Window
    render: (userInput, computerChoice, currentWinner, userScore, computerScore) => {
        output.innerText = currentWinner;
        view.computerIcon(computerChoice)
        view.userIcon(userInput)
        view.userScore.innerText = userScore
        view.computerScore.innerText = computerScore
    },

    //Changes the icon according to the computer's selection
    computerIcon: function(selection,selector = this.computerSelection){
        this.consoleLogMode? console.log('computerIcon fired') : '';
        switch (selection) {
            case 'rock':
                selector.innerHTML = this.rockIcon;
                break;
            case 'paper':
                selector.innerHTML = this.paperIcon;
                break;
            case 'scissors':
                selector.innerHTML = this.scissorsIcon;
                break;
        }
    },
    //Changes the icon according to t8 user's selection
    userIcon: function(selection,selector = this.userSelection){
        this.consoleLogMode? console.log('computerIcon fired') : '';
        switch (selection) {
            case 'rock':
                selector.innerHTML = this.rockIcon;
                break;
            case 'paper':
                selector.innerHTML = this.paperIcon;
                break;
            case 'scissors':
                selector.innerHTML = this.scissorsIcon;
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

    scoring: (currentWinner) => {
        switch (currentWinner) {
            case 'You win!':
                model.userWins ++;
                view.consoleLogMode? console.log(model.userWins) : '';
                break;
            case 'Computer wins':
                model.computerWins ++;
                view.consoleLogMode? console.log(model.computerWins) : '';
                break;
            case 'Draw!':
                model.draws ++;
                view.consoleLogMode? console.log(model.draws) : '';
                break;
        }
    },

    playGame: () => {
        const userChoice = model.userInput;
        const computerChoice = controller.getComputerChoice();
        view.consoleLogMode? console.log(`You chose ${userChoice}`) : '';
        view.consoleLogMode? console.log(`The computer chose ${computerChoice}`) : '';
        controller.determineWinner(userChoice, computerChoice)
        controller.scoring(model.currentWinner)
        view.render(model.userInput, model.computerChoice, model.currentWinner, model.userWins, model.computerWins)
        
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
