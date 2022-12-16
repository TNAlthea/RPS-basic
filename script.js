function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function rock(){
	document.getElementById("handType").innerHTML = "ROCK!";
	var RNG = getRandomInt(3);
	if (RNG == 0){
		document.getElementById("computerHandType").innerHTML = "ROCK!";
		document.getElementById("result").innerHTML = "TIE!";
	} else if (RNG == 1){
		document.getElementById("computerHandType").innerHTML = "PAPER!";
		document.getElementById("result").innerHTML = "YOU LOSE!";
	} else if (RNG == 2){
		document.getElementById("computerHandType").innerHTML = "SCISSORS!";
		document.getElementById("result").innerHTML = "YOU WIN!";
	}
}

function paper(){
	document.getElementById("handType").innerHTML = "PAPER!";
	var RNG = getRandomInt(3);
	if (RNG == 0){
		document.getElementById("computerHandType").innerHTML = "ROCK!";
		document.getElementById("result").innerHTML = "YOU WIN!";
	} else if (RNG == 1){
		document.getElementById("computerHandType").innerHTML = "PAPER!";
		document.getElementById("result").innerHTML = "TIE!";
	} else if (RNG == 2){
		document.getElementById("computerHandType").innerHTML = "SCISSORS!";
		document.getElementById("result").innerHTML = "YOU LOSE!";
	}
}

function scissors(){
	document.getElementById("handType").innerHTML = "SCISSORS!";
	var RNG = getRandomInt(3);
	if (RNG == 0){
		document.getElementById("computerHandType").innerHTML = "ROCK!";
		document.getElementById("result").innerHTML = "YOU LOSE!";
	} else if (RNG == 1){
		document.getElementById("computerHandType").innerHTML = "PAPER!";
		document.getElementById("result").innerHTML = "YOU WIN!";
	} else if (RNG == 2){
		document.getElementById("computerHandType").innerHTML = "SCISSORS!";
		document.getElementById("result").innerHTML = "TIE!";
	}
}

