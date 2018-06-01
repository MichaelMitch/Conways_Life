var size = 10
var iterations = 50

function main () {
  var board = createBoard(size)
  var newBoard = createBoard(size)
  displayBoard(board)
  for (var i = 0; i < iterations; i++) {
    for (var row = 0; row < size; row++) {
      for (var colPoint = 0; colPoint < size; colPoint++) {
        var neighourCount = countAliveNeighbours(row, colPoint, board)
        if (board[row][colPoint] === 1) {
          if (neighourCount < 2) {
            newBoard[row][colPoint] = 0
          }
          if (neighourCount > 3) {
            newBoard[row][colPoint] = 0
          }
        }
        if (board[row][colPoint] === 0 && neighourCount === 3) {
          newBoard[row][colPoint] = 1
        }
      }
    }
    board = newBoard
  }
}

function createBoard (size) {
  var newBoard = []
  for (var i = 0; i < size; i++) {
    newBoard.push([])
    for (var j = 0; j < size; j++) {
      newBoard[i].push([0])
    }
  }
  return newBoard
}
function displayBoard (board) {
  for (var i in board) {
    console.log(board[i] + '\n')
  }
}
function countAliveNeighbours (row, colPoint, board) {
  var neighbourCount = 0
  var boundsArr = ifOnEdge(isOnEdge(row, colPoint, board))
  for (var i = boundsArr[0]; i < boundsArr[1]; i++) {
    for (var j = boundsArr[2]; j < boundsArr[3]; j++) {
      if (board[i][j] === 1) { neighbourCount = neighbourCount + 1 }
    }
  }
  return neighbourCount
}
function isOnEdge (row, colPoint, board) {
  if (board[-1][0] === undefined && board[0][-1] === undefined) { return 'northWest' }
  if (board[-1][0] === undefined && board[board.length + 1][0] === undefined) { return 'northEast' }
  if (board[board.length + 1][0] === undefined && board[0][-1] === undefined) { return 'southWest' }
  if (board[board.length + 1][0] === undefined && board[board.length + 1][0] === undefined) { return 'southEast' }

  if (board[-1][0] === undefined) { return 'north' }
  if (board[board.length + 1][0] === undefined) { return 'south' }
  if (board[0][-1] === undefined) { return 'west' }
  if (board[board.length + 1][0] === undefined) { return 'east' }
}

function ifOnEdge (edgeStatus) {
  var boundsArr = []
  var northBound = -1
  var southBound = 2
  var eastBound = 2
  var westBound = -1
  switch (edgeStatus) {
    case 'north':
      northBound = northBound + 1
      break
    case 'northEast':
      northBound = northBound + 1
      eastBound = eastBound - 1
      break
    case 'east':
      eastBound = eastBound - 1
      break
    case 'southEast':
      southBound = southBound - 1
      eastBound = eastBound - 1
      break
    case 'south':
      southBound = southBound - 1
      break
    case 'southWest':
      southBound = southBound - 1
      westBound = westBound + 1
      break
    case 'west':
      westBound = westBound + 1
      break
    case 'northWest':
      westBound = westBound + 1
      northBound = northBound + 1
      break
  }
  boundsArr.pop(northBound, southBound, eastBound, westBound)
}
main()
