function rpsGame(yourChoice){
    console.log(yourChoice.id);
    var humanChoice, botChoice;
    var humanChoice = yourChoice.id;
    
    botChoice= computerChoice(randomInt());
    console.log('computerChoice:',botChoice);

    result= decideWinner(humanChoice, botChoice); // [0,1] you won!
    console.log(result);
    
    message = finalMessage(result)
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);


}

function randomInt (){
     return Math.floor(Math.random() * 3);
}

function computerChoice (number){
   return ["rock", "paper","scissor"][number];
}

function decideWinner (yourChoice,computerChoice){
    rpsDecider = {
        "rock": {'scissor': 1, 'rock': 0.5, 'paper': 0},
        "paper": {'rock': 1, 'paper': 0.5, 'scissor': 0},
        "scissor": {'paper': 1, 'scissor': 0.5, 'rock': 0}
    };

    var yourScore = rpsDecider[yourChoice][computerChoice];
    var ComputerScore = rpsDecider[computerChoice][yourChoice];

    return [yourScore,ComputerScore];
}
  function finalMessage([yourScore,computerScore]){
      if (yourScore === 0){
        return {"message": 'You lost!', "color": 'red'};
      }else if (yourScore === 0.5) {
          return {"message": 'You tied!', "color": 'yellow'};
      } else {
        return {"message": 'You won!', "color": 'green'};
      }
}
 function rpsFrontEnd (humanImageChoice,botImageChoice, finalMessage) {
     var imageDatabase = {
        "rock": document.getElementById('rock').src,
         "paper": document.getElementById('paper').src,
         "scissor": document.getElementById('scissor').src

     }

        document.getElementById('rock').remove(); 
        document.getElementById('paper').remove();
        document.getElementById('scissor').remove();

        var humanDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        var messageDiv = document.createElement('div');

        humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "'style='box-shadow: 0px 10px 50px blue;'>"
        messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" +  finalMessage['message'] + "</h1>"
        botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "'style='box-shadow: 0px 10px 50px red;'>"
 
        document.getElementById ('flex-box-div-rps').appendChild(humanDiv);
        document.getElementById ('flex-box-div-rps').appendChild(messageDiv);
        document.getElementById ('flex-box-div-rps').appendChild(botDiv);
}


