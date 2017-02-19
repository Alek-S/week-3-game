// Global Variables //

var score = 0; // player score
var remaining = 5; //remaining attempts
var guessedList = []; //guessed letters that were wrong

//language list, and logo image locations - these should not be modified
var languageList =  [
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
];


// console out the key pressed
document.onkeyup = function(event){

	// random generate number between 0 and 16, use as index from languageList, assign it to current
	var current =  languageList[ Math.floor(Math.random() * 17) ];
	var playerGuess = event.key;
	console.log('Pressed: ' + playerGuess);

	if( current.word.indexOf(playerGuess) === -1 ){
		//guessed wrong
	} else if( current.word.indexOf(playerGuess) !== -1){
		//guessed right
	}
}



//reset global variables back to initial value
function reset(variable){
	if( variable === 'score'){
		score = 0;
	} else if( variable === 'remaining'){
		remaining = 5;
	} else if( variable === 'guessedList'){
		guessedList = [];
	} else {
		console.log('Error: ' + variable + ' not available for reset, see the reset function'); //if not available
	}
}