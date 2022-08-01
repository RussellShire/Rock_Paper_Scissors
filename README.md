# Rock_Paper_Scissors
Another classic JavaScript portfolio piece. Some twists planned for down the line.

I wanted to experiment with MVC architecture so took a simple Rock, Paper, Scissors project and converted it.

The model is a little thin in this example as some of the functionality from the controller needs pulling into the model. Similarly there are event listeners outside of the View. This is because I should have built the view as a class rather than an object.

The view takes all the Dom elements and renders inputs to the appropriate area. I've leaned heavily on icons from Fontawesome to quickly intergrate graphics for both the user inputs and the representation of the current match.

How a game works:
The user selects one of the icons. Event listeners assign the user's choice to the model and fire the playGame function in the controller.
playGame is the engine that communicates between the model and the view.
First it gets the user's choice from the model. 
Then it invokes getComputerChoice, which randomly selects Rock, Paper or Scissors - this is also assigned to the model within this function.
You'll also see a consoleLogMode ternary here, this is a slightly idiosyncratic debugging method I was experimenting with.

The controller then passes the user choice and computer choice to determineWinner where if statements and turnery operators to select the winner and send that back to the model.
Scoring then updates the model based on the most recent winner.

playGame then passes all this information directly from the model to the view as arguments in a render function. This is a lot of functions, refactoring this an object would be cleaner.

Within the view render() assigns the correct icons to the correct location in the window using innerHTML to overwrite elements. I convert from the model's strings to icons using Switches. I resisted the urge to combine these switches as it would have made the code less readable.

render() also updates the scores that appear in the window.

There is a reset button that uses a method in the model to set everything back to default and then invokes render() to wipe the screen. This is slightly crude bu works and is easy to read.

