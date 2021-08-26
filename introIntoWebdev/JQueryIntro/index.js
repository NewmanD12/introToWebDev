

// $('button').addEventListener('click', rollDice)
$('button').click(rollDice)
var oneDieImg = "https://cdn.emojidex.com/emoji/seal/die_face_1.png?1422536664"
var twoDieImg = 'https://cdn.emojidex.com/emoji/seal/die_face_2.png?1422536679'
var threeDieImg = 'https://cdn.emojidex.com/emoji/seal/die_face_3.png?1422536687'
var fourDieImg = 'https://cdn.emojidex.com/emoji/seal/die_face_4.png?1422536687'
var fiveDieImg = 'https://cdn.emojidex.com/emoji/seal/die_face_5.png?1422536693'
var sixDieImg = 'https://cdn.emojidex.com/emoji/seal/die_face_6.png?1422536701'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var diceRolls = 0
var player1Score = 0
var player2Score = 0

function rollDice(){
  var num1 = getRandomInt(5) + 1
  var num2 = getRandomInt(5) + 1

  player1Score = player1Score + num1
  player2Score = player2Score + num2

  $('#total-total').text('Total: ' +  (player1Score + player2Score)) 

  $('#player-1-Score').text('Player 1 Score: ' + player1Score)

  $('#player-2-Score').text('Player 2 Score: ' + player2Score)

  diceRolls += 1

  if(num1 == 2){
    $('#die-1').attr('src', twoDieImg) 
    $('#die-1-header').text('2')
  }else if(num1 == 3){
    $('#die-1').attr('src', threeDieImg)
    $('#die-1-header').text('3')
  } else if(num1 == 4){
    $('#die-1').attr('src', fourDieImg)
    $('#die-1-header').text('4')
  }else if(num1 == 5){
    $('#die-1').attr('src', fiveDieImg)
    $('#die-1-header').text('5')
  }else if(num1 == 6){
    $('#die-1').attr('src', sixDieImg)
    $('#die-1-header').text('6')
  }
  else if(num1 == 1){
    $('#die-1').attr('src', oneDieImg)
    $('#die-1-header').text('1')
  }

  if(num2 == 2){
    $('#die-2').attr('src', twoDieImg) 
    $('#die-2-header').text('2')
  }else if(num2 == 3){
    $('#die-2').attr('src', threeDieImg)
    $('#die-2-header').text('3')
  } else if(num2 == 4){
    $('#die-2').attr('src', fourDieImg)
    $('#die-2-header').text('4')
  }else if(num2 == 5){
    $('#die-2').attr('src', fiveDieImg)
    $('#die-2-header').text('5')
  }else if(num2 == 6){
    $('#die-2').attr('src', sixDieImg)
    $('#die-2-header').text('6')
  }
  else if(num2 == 1){
    $('#die-2').attr('src', oneDieImg)
    $('#die-2-header').text('1')
  }

  if(diceRolls == 5){
    if(player1Score > player2Score){
      alert('Player One Wins with a score of ' + player1Score)
    }
    else if(player1Score < player2Score){
      alert('Player 2 wins with a score of ' + player2Score)
    } else if(player1Score == player2Score){
      alert("It's a tie, play again")
    }
    
    diceRolls = 0
    player1Score = 0
    player2Score = 0
  }
}
