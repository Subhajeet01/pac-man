window.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const displayScore = document.getElementById('score')
  const width = 28
  let score = 0

  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
    1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
    2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
    2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]

  //   console.log(layout.length)
  const squares = []

  function createBoard() {
    for (let i = 0; i < 784; i++) {
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)

      if (layout[i] === 0) {
        squares[i].classList.add('food')
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall')
      } else if (layout[i] === 3) {
        squares[i].classList.add('power')
      } else if (squares[i] === 2) {
        squares[i].classlist.add('ghost')
      }
    }
  }
  createBoard()

  // default starting position of pac-man

  let pacmanIndex = 490
  squares[pacmanIndex].classList.add('pac-man')

  // pacman movement

  function movePacman(e) {
    squares[pacmanIndex].classList.remove('pac-man')

    switch (e.keyCode) {
      case 37:
        if (
          pacmanIndex % 28 != 0 &&
          !squares[pacmanIndex - 1].classList.contains('wall') &&
          !squares[pacmanIndex - 1].classList.contains('ghost')
        )
          pacmanIndex--

        if (pacmanIndex - 1 == 363) {
          pacmanIndex = 391
        }
        break
      case 38:
        if (
          pacmanIndex - width >= 0 &&
          !squares[pacmanIndex - width].classList.contains('wall') &&
          !squares[pacmanIndex - width].classList.contains('ghost')
        )
          pacmanIndex -= width
        break
      case 39:
        if (
          pacmanIndex % 28 < 27 &&
          !squares[pacmanIndex + 1].classList.contains('wall') &&
          !squares[pacmanIndex + 1].classList.contains('ghost')
        )
          pacmanIndex += 1
        if (pacmanIndex + 1 == 392) {
          pacmanIndex = 364
        }
        break
      case 40:
        if (
          pacmanIndex + width < 784 &&
          !squares[pacmanIndex + width].classList.contains('wall') &&
          !squares[pacmanIndex + width].classList.contains('ghost')
        )
          pacmanIndex += width
        break
      default:
        break
    }
    squares[pacmanIndex].classList.add('pac-man')
    foodEaten()
    powerEaten()
    gameOver()
    checkWin()
  }

  document.addEventListener('keyup', movePacman)

  function foodEaten() {
    if (squares[pacmanIndex].classList.contains('food')) {
      score++
      displayScore.innerHTML = score
      squares[pacmanIndex].classList.remove('food')
    }
  }

  function powerEaten() {
    if (squares[pacmanIndex].classList.contains('power')) {
      score += 10
      ghosts.forEach((ghost) => (ghost.scared = true))
      setTimeout(unscareGhost, 10000)
      squares[pacmanIndex].classList.remove('power')
    }
  }

  function unscareGhost() {
    ghosts.forEach((ghost) => (ghost.scared = false))
  }

  function gameOver() {
    if (
      squares[pacmanIndex].classList.contains('ghost') &&
      !squares[pacmanIndex].classList.contains('scared')
    ) {
      ghosts.forEach((ghost) => clearInterval(ghost.timer))
      document.removeEventListener('keyup', movePacman)

      setTimeout(function () {
        alert(`Game Over ! Your Score: ${score}`)
      }, 500)
    }
  }

  function checkWin() {
    if (score === 274) {
      ghosts.forEach((ghost) => clearInterval(ghost.timer))
      document.removeEventListener('keyup', movePacman)

      setTimeout(function () {
        alert(`You Won! Your Score: ${score}`)
      }, 500)
    }
  }

  class Ghost {
    constructor(className, position, speed) {
      this.className = className
      this.position = position
      this.speed = speed
      this.currentPosition = position
      this.timer = NaN
      this.scared = false
    }
  }
  ghosts = [
    new Ghost('red', 348, 250),
    new Ghost('pink', 376, 400),
    new Ghost('blue', 351, 300),
    new Ghost('orange', 379, 500),
  ]

  ghosts.forEach((ghost) => {
    squares[ghost.currentPosition].classList.add(ghost.className)
    squares[ghost.currentPosition].classList.add('ghost')
  })

  ghosts.forEach((ghost) => moveGhost(ghost))

  function moveGhost(ghost) {
    const dir = [-1, 1, width, -width]
    let direction = dir[Math.floor(Math.random() * 4)]

    ghost.timer = setInterval(function () {
      if (
        !squares[ghost.currentPosition + direction].classList.contains(
          'ghost'
        ) &&
        !squares[ghost.currentPosition + direction].classList.contains('wall')
      ) {
        squares[ghost.currentPosition].classList.remove(
          'ghost',
          'scared',
          ghost.className
        )

        ghost.currentPosition += direction

        squares[ghost.currentPosition].classList.add('ghost', ghost.className)
      } else {
        direction = dir[Math.floor(Math.random() * 4)]
      }

      if (ghost.scared) {
        squares[ghost.currentPosition].classList.add('scared')
      }

      if (
        ghost.scared &&
        squares[ghost.currentPosition].classList.contains('pac-man')
      ) {
        score += 100
        squares[ghost.currentPosition].classList.remove(
          'ghost',
          ghost.className,
          'scared'
        )
        ghost.currentPosition = ghost.position
        squares[ghost.currentPosition].classList.add('ghost', ghost.className)
      }
      gameOver()
    }, ghost.speed)
  }
})
