var size = 3
var iterations = 4
var board = createBoard(size)
board = dataPoints(board)
var newBoard = createBoard(size)
function main () {

  for (var i = 0; i < iterations; i++) {
    for (var row = 0; row < size; row++) {
      for (var colPoint = 0; colPoint < size; colPoint++) {
        var neighourCount = countAliveNeighbours(row, colPoint, board)
        if (board[row][colPoint] === 1) {
          if (neighourCount < 2) {
            newBoard[row][colPoint] = 0
          } else if (neighourCount > 3) {
            newBoard[row][colPoint] = 0
          } else newBoard[row][colPoint] = 1
        } else if (neighourCount === 3) {
          newBoard[row][colPoint] = 1
        }
      }
    }
    displayBoard(board)
    displayBoard(newBoard)
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
  console.log('\n')
  console.log('\n')
}
function countAliveNeighbours (row, colPoint, board) {
  var neighbourCount = 0
  var boundsArr = ifOnEdge(isOnEdge(row, colPoint, board))
  for (var i = boundsArr[0]; i < boundsArr[1]; i++) {
    for (var j = boundsArr[3]; j < boundsArr[2]; j++) {
      if (i === 0 && j === 0 && board[row + i][colPoint + j] === 1) { neighbourCount = neighbourCount - 1 }
      if (board[row + i][colPoint + j] === 1) { neighbourCount = neighbourCount + 1 }
    }
  }
  return neighbourCount
}
function isOnEdge (row, colPoint, board) {
  if (row - 1 < 0 && colPoint - 1 < 0) { return 'northWest' }
  if (row - 1 < 0 && colPoint + 1 === board.length) { return 'northEast' }
  if (row + 1 > board.length && colPoint - 1 < 0) { return 'southWest' }
  if (row + 1 > board.length && colPoint + 1 === board.length) { return 'southEast' }

  if (row - 1 < 0) { return 'north' }
  if (row + 1 === board.length) { return 'south' }
  if (colPoint - 1 < 0) { return 'west' }
  if (colPoint + 1 === board.length) { return 'east' }
}
function dataPoints (board) {
  board[1][0] = 1
  board[1][1] = 1
  board[1][2] = 1

  return board
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
  boundsArr.push(northBound)
  boundsArr.push(southBound)
  boundsArr.push(eastBound)
  boundsArr.push(westBound)
  return boundsArr
}
main()
