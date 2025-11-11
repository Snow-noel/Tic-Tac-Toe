const gameBoard = document.querySelector(".maingame");

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

  const getBoard = () => gamecells;

  const placemark = (i, mark) => {
    if (gamecells[i] === "") {
      gamecells[i] = mark;
      return true;
    }
    return false;
  };

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
          currentplayer = currentplayer === playeX ? playerO : playeX;
        }
      });

      gameBoard.append(slot);
    });
  }

  const resetBoard = () => {
    gamecells = ["", "", "", "", "", "", "", "", ""];
    createBoard();
  };

  return { getBoard, placemark, createBoard, resetBoard };
};

const displayBoard = () => {
  const squares = initialiseGame();
  squares.createBoard();
};

displayBoard();
