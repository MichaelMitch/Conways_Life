var size = 10





function main () {

  displayBoard(board)
  var board = createBoard(size)
    for (var row = 0; row < size; row++) {
      for (var colPoint = 0; colPoint < size; colPoint++) {
        var neighourCount = countAliveNeighbours(row, colPoint, board)

    }
  }
}

function createBoard (size) {
  var newBoard = []
  for (var i = 0; i < size; i++) {
    newBoard.push([])
    for (var j = 0; j < size; j++) {
      newBoard[i].push([0])}}
  return newBoard
}

function displayBoard (board) {
  for (var i in board) {
    console.log(board[i] + '\n')}
  }
function countAliveNeighbours(row, colPoint, board){
    var northBound = -1
    var southBound = 2
    var eastBound = 2
    var westBound = -1
    var edgeStatus = isOnEdge(row, colPoint, board) 
    switch(edgeStatus){
      case 'north':
        var northBound = northBound +1
      case 'northEast':
        var northEast = 
      case 'east':

      case 'southEast':

      case 'south':

      case 'southWest':

      case 'west':

      case 'northWest':


    }

    }
}
function isOnEdge(row, colPoint, board){
  if (board[-1][0] === undefined && board[0][-1] === undefined ){ return 'northWest' }
  if (board[-1][0] === undefined && board[board.length+1][0] === undefined ){ return 'northEast' }
  if (board[board.length +1][0] === undefined && board[0][-1] === undefined){return 'southWest'}
  if (board[board.length +1][0] === undefined && board[board.length+1][0] === undefined){return 'southEast'}

  if (board[-1][0] === undefined){ return 'north'}
  if (board[board.length +1][0] === undefined){return 'south'}
  if (board[0][-1] === undefined){return 'west'}
  if (board[board.length+1][0] === undefined){return 'east'} 
  

  }
}

main()

