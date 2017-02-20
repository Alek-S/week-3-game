// GLOBAL VARAIBLES//
var wordDiv = ''; //for what is shown on screen for word div

var game = {
	score: 0, // player score  - 1 point per letter, 10 points for getting word, keep tracking until out of remaining
	remaining: 5, //remaining attempts
	guessedList: [], //guessed letters that were wrong
	current: null,	
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
	reset: function(variable){ // reset back to initial ex: game.reset('score');
		if( variable === 'score'){
			this.score = 0;
		} else if( variable === 'remaining'){
			this.remaining = 5;
		} else if( variable === 'guessedList'){
			this.guessedList = [];
		} else if (variable === 'current'){
			this.current = null;		
		}else if (variable === 'all'){
			this.score = 0;
			this.remaining = 5;
			this.guessedList = [];
			this.current = null;		
		} else {
			console.log('Error: ' + variable + ' not available for reset, see game.reset()'); //if not available
		}
	},
	new: function(){
		//start a new game ex: game.new()
		this.reset('all');
	}
};


// Wait for keyboard key to be pressed
document.onkeyup = function(event){

	//if no current word
	if(game.current === null){
		// random generate number between 0 and 16, use as index from game.languageList, assign it to game.current
		game.current =  game.languageList[ Math.floor(Math.random() * 17) ];
		console.log( "Current Word: " + game.current.word);

		//show photo hint for the word
		document.getElementById('image').innerHTML = '<img src="'+ game.current.logoLocation +' ">';

		//set up fields for guessed word with a span and id=i in between
		for(i= 0; i< game.current.word.length; i++){
			wordDiv = wordDiv + '<span id="'+ i + '">'  +'_ ' + '</span>';
		}
		console.log(wordDiv);
	}

	//convert key player pressed to lower case so not case sensitive
	var playerGuess = event.key.toLowerCase();
	console.log('Pressed: ' + playerGuess);

	// if game is not over
	if( game.remaining > 0 ){
		if( game.current.word.indexOf(playerGuess) === -1 ){
			//guessed incorrect
			console.log("Player guess incorrect");
			incorrect(playerGuess);

		} else if( game.current.word.indexOf(playerGuess) !== -1){
			//guessed correct
			console.log("Player guess correct");

		}
	} else {
		//game over
	}

	//populate word Div element
	document.getElementById('word').innerHTML = wordDiv;
}


function incorrect(letter){
	//if not guessed
	if( game.guessedList.indexOf(letter) === -1 ){
		// add letter to guessed List array
		game.guessedList.push(letter);
		
		// update display in guessedLetters section of the website
		document.getElementById('guessedLetters').innerHTML = game.guessedList
		
		// reduce remaining guesses by one
		game.remaining--;

		// update display in guessesRemaining section of the website
		document.getElementById('remaining').innerHTML = game.remaining
	}
}


function correct(letter){

}

