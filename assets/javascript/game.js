//==GLOBAL VARAIBLES==//
var wordDiv = ''; //for what is shown on screen for word div element with <span id=[number]></span> - when doing inner html
var attempts = 5; //how many attempts does player get to guess. Use inside game object. 

var game = {
	score: 0, // player score: 1 point per letter, 10 points for getting word, keep tracking until out of remaining
	remaining: attempts, //remaining attempts
	guessedWrong: [], //guessed letters that were wrong
	guessedRight: [], //guessed letters that were correct
	current: null, //current languageList object being played	
	languageList: [
		{word:'applescript', logoLocation:"assets/images/applescript.png"},
		{word:'clojure', logoLocation:"assets/images/clojure.png"},
		{word:'elixir', logoLocation:"assets/images/elixir.png"},
		{word:'erlang', logoLocation:"assets/images/erlang.png"},
		{word:'hack', logoLocation:"assets/images/hack.png"},
		{word:'haskell', logoLocation:"assets/images/haskell.png"},
		{word:'java', logoLocation:"assets/images/java.png"},
		{word:'javascript', logoLocation:"assets/images/javascript.png"},
		{word:'mathematica', logoLocation:"assets/images/mathematica.png"},
		{word:'matlab', logoLocation:"assets/images/matlab.png"},
		{word:'processing', logoLocation:"assets/images/processing.png"},
		{word:'python', logoLocation:"assets/images/python.png"},
		{word:'ruby', logoLocation:"assets/images/ruby.png"},
		{word:'rust', logoLocation:"assets/images/rust.png"},
		{word:'scala', logoLocation:"assets/images/scala.png"},
		{word:'scratch', logoLocation:"assets/images/scratch.png"},
		{word:'swift', logoLocation:"assets/images/swift.png"}
	],
	reset: function(variable){ // reset game values back to initial ex: game.reset('score');
		if( variable === 'score'){
			this.score = 0;
		} else if( variable === 'remaining'){
			this.remaining = attempts;
		} else if( variable === 'guessedWrong'){
			this.guessedWrong = [];
		}else if( variable === 'guessedRight'){
			this.guessedRight = [];
		} else if (variable === 'current'){
			this.current = null;		
		}else if (variable === 'all'){
			this.score = 0;
			this.remaining = attempts;
			this.guessedWrong = [];
			this.guessedRight = [];
			this.current = null;		
		} else {
			console.log('Error: ' + variable + ' not available for reset, see game.reset()'); //if not available
		}
	},
	newGame: function(){
		//start a new game ex: game.new()
		this.reset('all');
		document.getElementById('image').innerHTML = ''; //clear image
		document.getElementById('word').innerHTML = ''; //clear guesses
		document.getElementById('scoreNumber').innerHTML = ''; //clear score
		document.getElementById('remaining').innerHTML = ''; //clear remaining attempt number
		document.getElementById('guessedLetters').innerHTML = ''; //clear wrong guesses
	},
	newRound: function(){
		// start a new word but continue game. Resets everything except score
		this.reset('remaining');
		this.reset('guessedWrong');
		this.reset('guessedRight');
		this.reset('current');
		document.getElementById('image').innerHTML = ' '; //clear image
		document.getElementById('word').innerHTML = ''; //clear guesses
		wordDiv = ''; //clear variable holding the guesses
		document.getElementById('remaining').innerHTML = ' '; //clear remaining attempt number
		document.getElementById('guessedLetters').innerHTML = ' '; //clear wrong guesses
	}
};
//==END OF GLOBAL VARAIBLES==//



//==START OF MAIN KEY PRESS FUNCTION==//
// Wait for keyboard key to be pressed
document.onkeyup = function(event){

	//convert key player pressed to lower case so not case sensitive
	var playerGuess = event.key.toLowerCase();
	console.log('Pressed: ' + playerGuess);

	//display score
	document.getElementById('scoreNumber').innerHTML = game.score

	//if no current word
	if(game.current === null){
		// random generate number between 0 and 16, use as index from game.languageList, assign it to game.current
		game.current =  game.languageList[ Math.floor(Math.random() * 17) ];
		console.log( "Current Word: " + game.current.word);

		//show photo hint for the word
		document.getElementById('image').innerHTML = '<img src="'+ game.current.logoLocation +' ">';

		//set up fields for guessed word with a span and id=i in between
		for(var i= 0; i< game.current.word.length; i++){
			wordDiv = wordDiv + '<span id="'+ i + '">'  +'_ ' + '</span>';
		}
		console.log(wordDiv);

		//populate word Div element
		document.getElementById('word').innerHTML = wordDiv;
	}

	//display remaing number guesses on site
	document.getElementById('remaining').innerHTML = game.remaining

	// if still have remaining guesses
	if( game.remaining > 0 ){
		if( game.current.word.indexOf(playerGuess) === -1 ){
			//guessed incorrect
			console.log("Player guess incorrect");
			incorrect(playerGuess);

		} else if( game.current.word.indexOf(playerGuess) !== -1){
			//guessed correct
			console.log("Player guess correct");
			correct(playerGuess);

			//if guessed all the letters
			if(game.guessedRight.length >= game.current.word.length){
				
				//add 10 to score
				game.score = game.score +10
				
				//start a new round
				game.newRound();
			}

		}
	} else { //game over
		//prompt game over, and final score.
		var playAgain = alert('Game Over. Final score: ' + game.score);
			//reset for new game
			game.newGame();
	}
}  
//==END OF MAIN KEY PRESS FUNCTION==//



//==START OF ADDITONAL FUNCTIONS==//
//what to do when player enters incorrect letter
function incorrect(letter){
	//if not guessed already
	if( game.guessedWrong.indexOf(letter) === -1 ){
		// add letter to guessed List array
		game.guessedWrong.push(letter);
		
		// update display in guessedLetters section of the website
		document.getElementById('guessedLetters').innerHTML = game.guessedWrong
		
		// reduce remaining guesses by one
		game.remaining--;

		// update display in guessesRemaining section of the website
		document.getElementById('remaining').innerHTML = game.remaining
	}
}

//what to do when player enters correct letter
function correct(letter){

	//if not already guessed
	if(game.guessedRight.indexOf(letter) === -1){

		//loop through every index of game.current.word
		for(var i=0; i < game.current.word.length; i++){

			//if letter is equal to current index of game.current.word
			if( letter === game.current.word[i]){
				
				//update document.getElementById(i).innerHTML for those indexes with letter
				document.getElementById(i).innerHTML = letter + ' ';


				// add to guessedRight array
				game.guessedRight.push(letter);
				console.log(game.guessedRight);
				//add to score
				game.score++
			}
		}
	}	
	
	//update display score
	document.getElementById('scoreNumber').innerHTML = game.score
	
}

