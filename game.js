const gameBoard=document.querySelector(".maingame");



const myplayer=(playermark,playername)=>({
        playermark,
        playername,
        getmark(){
            return playermark;
        },
        getname(){
          return playername;
        }  
}); 
const initialiseGame=()=>{
      let gamecells=["","","","","","","","",""];

      const getBoard=()=>gamecells;

      const placemark=(i,mark)=>{
            if(gamecells[i]===""){
                gamecells[i]=mark;
                return true;
            }
            return false;
      }

      function createBoard(){
        gamecells.forEach((mark,i)=>{
        const slot =document.createElement('div');
        slot.classList.add('mycell');
        slot.dataset.i=i;
        slot.textContent=mark;
        gameBoard.append(slot)

    })
     }

      const resetBoard=()=>{
        gamecells=["","","","","","","","",""];
      }

    return {getBoard,placemark, createBoard,resetBoard};
};

 const displayBoard=()=>{
  const playeX=myplayer("X","PlayerX");
   const playerO=myplayer("O","PlayerO")
  const squares=initialiseGame();
   squares.getBoard();
   squares.createBoard();
 
 }
 
 displayBoard();