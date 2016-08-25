// Back end
var X = 'X';
var O = 'O';

function Player(turn, XorO) {
  this.turn = turn;
  this.XorO = XorO;
}

function Board () {
  this.grid = [
                [0,0,0],
                [0,0,0],
                [0,0,0]]
}

//Prototypes:
Player.prototype.nextTurn = function() {
  if (this.turn) {
    this.turn = false;
  }
  else {
    this.turn = true;
  }
};
$(".board").find("td").on("click", function() { //finds and works when clicked!
  if(player1.turn) {
    $(this).text("X"); //add the x at the clicked square - other way around than usual?
    player1.nextTurn();
    player2.nextTurn();
    board.chekWinBruh('X');
  }

  else {
    $(this).text("O");
    player1.nextTurn();
    player2.nextTurn();
    board.chekWinBruh('O');
  }
})

Board.prototype.chekWinBruh = function(XorO) {
  if(document.getElementById('00').innerHTML === XorO && document.getElementById('01').innerHTML === XorO && document.getElementById('02').innerHTML === XorO){
    alert(XorO + " Wins!");
    $("td").html("");
  }
  else if(document.getElementById('10').innerHTML === XorO && document.getElementById('11').innerHTML === XorO && document.getElementById('12').innerHTML === XorO){
    alert(XorO + " Wins!");
    $("td").html("");
  }
  else if(document.getElementById('20').innerHTML === XorO && document.getElementById('21').innerHTML === XorO && document.getElementById('22').innerHTML === XorO){
    alert(XorO + " Wins!");
    $("td").html("");
  }
  else if(document.getElementById('01').innerHTML === XorO && document.getElementById('11').innerHTML === XorO && document.getElementById('21').innerHTML === XorO){
    alert(XorO + " Wins!");
    $("td").html("");
  }
  else if(document.getElementById('00').innerHTML === XorO && document.getElementById('10').innerHTML === XorO && document.getElementById('20').innerHTML === XorO){
    alert(XorO + " Wins!");
    $("td").html("");
  }
  else if(document.getElementById('02').innerHTML === XorO && document.getElementById('12').innerHTML === XorO && document.getElementById('22').innerHTML === XorO){
    alert(XorO + " Wins!");
    $("td").html("");
  }
  else if(document.getElementById('00').innerHTML === XorO && document.getElementById('11').innerHTML === XorO && document.getElementById('22').innerHTML === XorO){
    alert(XorO + " Wins!");
    $("td").html("");
  }
  else if(document.getElementById('02').innerHTML === XorO && document.getElementById('11').innerHTML === XorO && document.getElementById('20').innerHTML === XorO){
    alert(XorO + " Wins!");
    $("td").html("");
  }
  else if (document.getElementById('00').innerHTML != "" && document.getElementById('01').innerHTML != "" && document.getElementById('02').innerHTML != "" && document.getElementById('10').innerHTML != "" && document.getElementById('11').innerHTML != "" && document.getElementById('12').innerHTML != "" && document.getElementById('20').innerHTML != "" && document.getElementById('21').innerHTML != "" && document.getElementById('22').innerHTML != "") {
    alert("A strange game. The only winning move is not to play.")
    $("td").html("");
  }
}
// Board.prototype.checkWin = function(XorO) {
//   if (this.grid[0][0] === XorO && this.grid[0][1] === XorO && this.grid[0][2] === XorO) {
//     alert(XorO + " wins!")
//   }
//   if (this.grid[1][0] === XorO && this.grid[1][1] === XorO && this.grid[1][2] === XorO) {
//     alert(XorO + " wins!")
//   }
//   if (this.grid[2][0] === XorO && this.grid[2][1] === XorO && this.grid[2][2] === XorO) {
//     alert(XorO + " wins!")
//   }
//   if (this.grid[0][0] === XorO && this.grid[1][0] === XorO && this.grid[2][0] === XorO) {
//     alert(XorO + " wins!")
//   }
//   if (this.grid[0][1] === XorO && this.grid[1][1] === XorO && this.grid[2][1] === XorO) {
//     alert(XorO + " wins!")
//   }
//   if (this.grid[0][2] === XorO && this.grid[1][2] === XorO && this.grid[2][2] === XorO) {
//     alert(XorO + " wins!")
//   }
//   if (this.grid[0][0] === XorO && this.grid[1][1] === XorO && this.grid[2][2] === XorO) {
//     alert(XorO + " wins!")
//   }
//   if (this.grid[0][2] === XorO && this.grid[1][1] === XorO && this.grid[2][0] === XorO) {
//     alert(XorO + " wins!")
//   }
// }

// Front End
var board = new Board();
var player1 = new Player (true, 'X');
var player2 = new Player (false, 'O');

// var markSquare = function(y, x, XorO) {
//   if ((player1.turn) && (board.grid[y][x] === 0)) {
//     $("#" + y + x).text('X');
//     board.grid[y][x] = 'X'
//     board.checkWin('X')
//     player1.nextTurn();
//     player2.nextTurn();
//   }
//   else if ((player2.turn) && (board.grid[y][x] === 0)) {
//     $("#" + y + x).text('O');
//     board.grid[y][x] = 'O'
//     board.checkWin('O')
//     player1.nextTurn();
//     player2.nextTurn();
//   }
//   console.log(board.grid)
// }

// $("#00").click(function() {
//   markSquare('0', '0');
// })
// $("#01").click(function() {
//   markSquare('0', '1');
// })
// $("#02").click(function() {
//   markSquare('0', '2');
// })
// $("#10").click(function() {
//   markSquare('1', '0');
// })
// $("#11").click(function() {
//   markSquare('1', '1');
// })
// $("#12").click(function() {
//   markSquare('1', '2');
// })
// $("#20").click(function() {
//   markSquare('2', '0');
// })
// $("#21").click(function() {
//   markSquare('2', '1');
// })
// $("#22").click(function() {
//   markSquare('2', '2');
// })
