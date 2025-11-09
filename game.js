const gameBoard=document.querySelector(".maingame");

 let gamecells=["","","","","","","","",""];
 

const myplayer=(playermark)=>({
        playermark,
        makemove(){
            return playermark
        }
         
});     
        const playerx=myplayer("x");
        const playerO=myplayer("O");
        const playerOmarker=playerO.makemove();
        const playerXmarker=playerx.makemove();
         
function createBoard(){
        gamecells.forEach(()=>{
        const slot =document.createElement('div');
        slot.classList.add('mycell');
        slot.addEventListener("click",()=>{
            if(slot.textContent===""){
                slot.textContent=playerXmarker
            }
          else if(slot.textContent===""&&slot.textContent!==playerXmarker){
                slot.textContent=playerOmarker
            }
        })
        gameBoard.append(slot);
    })

}


createBoard();

