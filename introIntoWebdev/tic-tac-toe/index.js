var xImg = 'https://img.favpng.com/24/9/3/tic-tac-toe-computer-icons-clip-art-png-favpng-HgY8wp1eB9xD8S46av4ZWWxQg_t.jpg'

var oImg = 'https://www.clipartmax.com/png/middle/440-4408148_transparent-o-tic-tac-toe-o.png'

var defaultPic = 'https://images.squarespace-cdn.com/content/v1/5802f248e3df288140a0accf/1605462776208-P9Y48FH7JQM5L526F616/9MIND+Logo+Ideas+Transparent.png'

$('#button').click(startGame)

var player1Turn = true
var player2Turn = false

let topLeft = 0
let topMiddle = 0
let topRight = 0
let middleLeft = 0
let middleMiddle = 0
let middleRight = 0
let botLeft = 0
let botMiddle = 0
let botRight = 0
let pickCount = 0

function resetScores(){
  location.reload()
}

function playAgainButton(){
  $('#button').after("<button></button>");
  $('button').text('Play Again!')
  $('button').addClass('resetButton')
  $('#button').hide()
  $('.resetButton').click(resetScores)
}


function checkWinner(num){
  if(topLeft == num && topMiddle == num && topRight == num){
    $('#header').hide();
    $('#header2').text('Player ' + num + ' wins!')
    playAgainButton()
  }else if(middleLeft == num && middleMiddle == num && middleRight == num){
    $('#header').hide();
    $('#header2').text('Player ' + num + ' wins!')
    playAgainButton()
  }else if(botLeft == num && botMiddle == num && botRight == num){
    $('#header').hide();
    $('#header2').text('Player ' + num + ' wins!')
    playAgainButton()
  }else if(topRight == num && middleMiddle == num && botLeft == num){
    $('#header').hide();
    $('#header2').text('Player ' + num + ' wins!')
    playAgainButton()
  }else if(topLeft == num && middleMiddle == num && botRight == num){
    $('#header').hide();
    $('#header2').text('Player ' + num + ' wins!')
    playAgainButton()
  }else if(topLeft == num && middleLeft == num && botLeft == num){
    $('#header').hide();
    $('#header2').text('Player ' + num + ' wins!')
    playAgainButton()
  }else if(topMiddle == num && middleMiddle == num && botMiddle == num){
    $('#header').hide();
    $('#header2').text('Player ' + num + ' wins!')
    playAgainButton()
  }else if(topRight == num && middleRight == num && botRight == num){
    $('#header').hide();
    $('#header2').text('Player ' + num + ' wins!')
    playAgainButton()
  }
}

function startGame(){
  $('#button').hide()
  if(player1Turn){
    $('#header').text('Player 1 Turn')
  }else if(player2Turn){
    $('#header').text('Player 2 Turn')
  }
  $('#top-left').click(() => {
    if(player1Turn){
      $('#top-left').attr('src', xImg);
      player1Turn = false;
      player2Turn = true;
      topLeft = 1
      $('#header').text('Player 2 Turn')
      checkWinner(1);
    }else if(player2Turn){
      $('#top-left').attr('src', oImg);
      player2Turn = false;
      player1Turn = true; 
      topLeft = 2
      $('#header').text('Player 1 Turn')
      checkWinner(2)
    }
  })
  $('#top-middle').click(() => {
    if(player1Turn){
      $('#top-middle').attr('src', xImg);
      player1Turn = false;
      player2Turn = true;
      topMiddle = 1
      $('#header').text('Player 2 Turn')
      checkWinner(1);
    }else if(player2Turn){
      $('#top-middle').attr('src', oImg);
      player2Turn = false;
      player1Turn = true; 
      topMiddle = 2
      $('#header').text('Player 1 Turn')
      checkWinner(2)
    }
  })
  $('#top-right').click(() => {
    if(player1Turn){
      $('#top-right').attr('src', xImg);
      player1Turn = false;
      player2Turn = true;
      topRight = 1
      $('#header').text('Player 2 Turn')
      checkWinner(1);
    }else if(player2Turn){
      $('#top-right').attr('src', oImg);
      player2Turn = false;
      player1Turn = true; 
      topRight = 2
      $('#header').text('Player 1 Turn')
      checkWinner(2)
    }
  })
  $('#middle-left').click(() => {
    if(player1Turn){
      $('#middle-left').attr('src', xImg);
      player1Turn = false;
      player2Turn = true;
      middleLeft = 1
      $('#header').text('Player 2 Turn')
      checkWinner(1)
    }else if(player2Turn){
      $('#middle-left').attr('src', oImg);
      player2Turn = false;
      player1Turn = true; 
      middleLeft = 2
      $('#header').text('Player 1 Turn')
      checkWinner(2)
    }
  })
  $('#middle-middle').click(() => {
    if(player1Turn){
      $('#middle-middle').attr('src', xImg);
      player1Turn = false;
      player2Turn = true;
      middleMiddle = 1
      $('#header').text('Player 2 Turn')
      checkWinner(1)
    }else if(player2Turn){
      $('#middle-middle').attr('src', oImg);
      player2Turn = false;
      player1Turn = true; 
      middleMiddle = 2
      $('#header').text('Player 1 Turn')
      checkWinner(2)
    }
  })
  $('#middle-right').click(() => {
    if(player1Turn){
      $('#middle-right').attr('src', xImg);
      player1Turn = false;
      player2Turn = true;
      middleRight = 1
      $('#header').text('Player 2 Turn')
      checkWinner(1)
    }else if(player2Turn){
      $('#middle-right').attr('src', oImg);
      player2Turn = false;
      player1Turn = true; 
      middleRight = 2
      $('#header').text('Player 1 Turn')
      checkWinner(2)
    }
  })
  $('#bottom-left').click(() => {
    if(player1Turn){
      $('#bottom-left').attr('src', xImg);
      player1Turn = false;
      player2Turn = true;
      botLeft = 1
      $('#header').text('Player 2 Turn')
      checkWinner(1)
    }else if(player2Turn){
      $('#bottom-left').attr('src', oImg);
      player2Turn = false;
      player1Turn = true; 
      botLeft = 2
      $('#header').text('Player 1 Turn')
      checkWinner(2)
    }
  })
  $('#bottom-middle').click(() => {
    if(player1Turn){
      $('#bottom-middle').attr('src', xImg);
      player1Turn = false;
      player2Turn = true;
      botMiddle = 1
      $('#header').text('Player 2 Turn')
      checkWinner(1)
    }else if(player2Turn){
      $('#bottom-middle').attr('src', oImg);
      player2Turn = false;
      player1Turn = true; 
      botMiddle = 2
      $('#header').text('Player 1 Turn')
      checkWinner(2)
    }
  })
  $('#bottom-right').click(() => {
    if(player1Turn){
      $('#bottom-right').attr('src', xImg);
      player1Turn = false;
      player2Turn = true;
      botRight = 1
      $('#header').text('Player 2 Turn')
      checkWinner(1)
    }else if(player2Turn){
      $('#bottom-right').attr('src', oImg);
      player2Turn = false;
      player1Turn = true; 
      botRight = 2
      $('#header').text('Player 1 Turn')
      checkWinner(2)
    }
  })
}
