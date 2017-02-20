var game = {
	score: 0, // player score
	remaining: 5, //remaining attempts
	guessedList: [], //guessed letters that were wrong
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
	]
	reset: function(variable){ // reset back to initial
		if( variable === 'score'){
			this.score = 0;
		} else if( variable === 'remaining'){
			this.remaining = 5;
		} else if( variable === 'guessedList'){
			this.guessedList = [];
		} else {
			console.log('Error: ' + variable + ' not available for reset, see game.reset()'); //if not available
		}
	}
};


// console out the key pressed
document.onkeyup = function(event){

	// random generate number between 0 and 16, use as index from languageList, assign it to current
	var current =  game.languageList[ Math.floor(Math.random() * 17) ];
	var playerGuess = event.key.toLowerCase();
	console.log('Pressed: ' + playerGuess);

	// if game is not over
	if( remaining > 0 ){
		if( current.word.indexOf(playerGuess) === -1 ){
			//guessed wrong
		} else if( current.word.indexOf(playerGuess) !== -1){
			//guessed correct
		}
	} else {
		//game over
	}
}


function wrong(letter){
	//if not guessed
		// add letter to guessed List array
		// update display in guessedLetters section of the website
		// reduce remaining guesses by one
}


function correct(letter){

}

