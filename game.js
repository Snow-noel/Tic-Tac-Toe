const gameBoard = document.querySelector(".maingame");
const turn =document.getElementById("playerturn")
const main=document.querySelector(".main-content")
const restart=document.createElement("button");
restart.textContent="Restart game";
restart.classList.add('Restart');
const myplayer = (playermark, playername) => ({
  playermark,
  playername,
  getmark() {
    return playermark;
  },
  getname() {
    return playername;
  }
});

const initialiseGame = () => {
  let gamecells = ["", "", "", "", "", "", "", "", ""];
  const playeX = myplayer("X", "PlayerX");
  const playerO = myplayer("O", "PlayerO");
  let currentplayer = playeX;
  turn.textContent=`${currentplayer.getname()}'s Turn`

  const getBoard = () => gamecells;

  const placemark = (i, mark) => {
    if (gamecells[i] === "") {
      gamecells[i] = mark;
      return true;
    }
    return false;
  };
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let [a, b, c] of winningCombinations) {
    if (
      gamecells[a] !== "" &&
      gamecells[a] === gamecells[b] &&
      gamecells[a] === gamecells[c]
    ) {
      return gamecells[a];
    }
  }

  return null; 
}
function createBoard() {
    gameBoard.textContent = "";

    gamecells.forEach((mark, i) => {
      const slot = document.createElement("div");
      slot.classList.add("mycell");
      slot.dataset.i = i;
      slot.textContent = mark;

      slot.addEventListener("click", () => {
        if (placemark(i, currentplayer.getmark())) {
          slot.textContent = currentplayer.getmark(); 
          const winner=checkWinner();
          if(winner){
            turn.textContent=`Player${winner} Wins the Game`;
            main.append(restart);
            slot.placemark();
            return;
          }
              if (!gamecells.includes("")) {
              turn.textContent="its a draw"
              main.append(restart)
              
              return;
            }

          currentplayer = currentplayer === playeX ? playerO : playeX;
          turn.textContent=`${currentplayer.getname()}'s turn`;
        }
      });

      gameBoard.append(slot);
    });
  }

  const resetBoard = () => {
    gamecells = ["", "", "", "", "", "", "", "", ""];
    createBoard();
    turn.textContent=`${currentplayer.getname()}'s Turn`
  };

  return { getBoard, placemark, createBoard, resetBoard };
};

const displayBoard = () => {
  const squares = initialiseGame();
  squares.createBoard();
  restart.addEventListener("click",()=>{
    squares.resetBoard();
    main.removeChild(restart);
  })
};

displayBoard();
