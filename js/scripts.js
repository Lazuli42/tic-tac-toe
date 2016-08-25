// Back end
function Player(turn, XorO) {
  this.turn = turn;
  this.XorO = XorO;
}

function Board () {
  this.grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
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
// Board.prototype.currentSquare = function() {
//   if()
// }
Board.prototype.markSquare = function(y, x, XorO) {
  // var curentsq = board.grid.currentSquare();
  if(this.grid[y[x]] === 0){
    this.grid[0[0]] = XorO;
    }
}
// Front End
var board = new Board();
var player1 = new Player (true, 'X');
var player2 = new Player (false, 'O');
var X = 'X';
var O = 'O';

$("#00").click(function() {
    if (player1.turn) {
      board.markSquare(0,0,'X');
      $("#00").text('X');
      player1.nextTurn();
      player2.nextTurn();
    }
    else {
      $("#00").text(O);
      board.markSquare(0,0,'O');
      player1.nextTurn();
      player2.nextTurn();
    }
  console.log(board.grid)
})

$("#x2y1").click(function() {
  if(board.y1s[1] === 0){
    if (player1.turn) {
      $("#x2y1").text(X);
      board.y1s[1] = X;
      player1.nextTurn();
      player2.nextTurn();
    }
    else {
      $("#x2y1").text(O);
      board.y1s[1] = O;
      player1.nextTurn();
      player2.nextTurn();
    }
  }
  console.log(board.y1s)
  console.log(board.y2s)
  console.log(board.y3s)
})
