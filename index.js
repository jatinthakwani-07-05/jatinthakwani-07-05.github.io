const cell = document.getElementsByClassName("cell");
let currentPlayer="x";
let gameStatus="Game on";
let reset="on"
document.addEventListener('DOMContentLoaded', () => {
for(let i=0;i<cell.length;i++){
    cell[i].addEventListener("click", function(){
      if(cell[i].innerHTML.trim()==""&&gameStatus== "Game on"||reset==="on"){
        cell[i].innerHTML=currentPlayer;
        currentPlayer=currentPlayer=="x"?"o":"x";
        if(currentPlayer=="o"){
            document.querySelector(".PlayerOne").style.webkitTextStroke = '3px #2de35e';
            document.querySelector(".PlayerTwo").style.webkitTextStroke = '1px black';
        }
        else{
           document.querySelector(".PlayerTwo").style.webkitTextStroke = '3px #2de35e';
           document.querySelector(".PlayerOne").style.webkitTextStroke = '1px black';
        }
{
      if(cell[0].innerHTML==cell[1].innerHTML&&cell[1].innerHTML==cell[2].innerHTML&&cell[0].innerHTML.trim()!="")
        winner(0,1,2); 
      else if (cell[3].innerHTML==cell[4].innerHTML&&cell[4].innerHTML==cell[5].innerHTML&&cell[3].innerHTML.trim()!="")
        winner(3,4,5);

      else if (cell[6].innerHTML==cell[7].innerHTML&&cell[7].innerHTML==cell[8].innerHTML&&cell[6].innerHTML.trim()!="")
        winner(6,7,8);
  
      else if (cell[0].innerHTML==cell[3].innerHTML&&cell[3].innerHTML==cell[6].innerHTML&&cell[0].innerHTML.trim()!="")
        winner(0,3,6);
  
      else if (cell[1].innerHTML==cell[4].innerHTML&&cell[4].innerHTML==cell[7].innerHTML&&cell[1].innerHTML.trim()!="")
        winner(1,4,7);
  
      else if (cell[2].innerHTML==cell[5].innerHTML&&cell[5].innerHTML==cell[8].innerHTML&&cell[2].innerHTML.trim()!="")
        winner(2,5,8);
  
      else if (cell[0].innerHTML==cell[4].innerHTML&&cell[4].innerHTML==cell[8].innerHTML&&cell[0].innerHTML.trim()!="")
        winner(0,4,8);
  
      else if (cell[2].innerHTML==cell[4].innerHTML&&cell[4].innerHTML==cell[6].innerHTML&&cell[2].innerHTML.trim()!="")
        winner(2,4,6);
}
      }
    })
}
})

document.querySelector(".reset").addEventListener("click",function(){
    for(let i=0;i<cell.length;i++){
        cell[i].innerHTML="";
        cell[i].style.backgroundColor="#14bdac";
    }
    document.querySelector(".PlayerOne").innerHTML="Player(X)";
    document.querySelector(".PlayerTwo").innerHTML="Player(0)";

gameStatus="game on";

})

function winner(a,b,c){
   
        cell[a].style.backgroundColor="#DF4D60";
        cell[b].style.backgroundColor="#DF4D60";
        cell[c].style.backgroundColor="#DF4D60";
        if(currentPlayer=="x"){
          document.querySelector(".PlayerTwo").innerHTML="Winner";
          document.querySelector(".PlayerOne").innerHTML="Loser";
        }
       else{
          document.querySelector(".PlayerOne").innerHTML="Winner";
          document.querySelector(".PlayerTwo").innerHTML="Loser";
        }
        gameStatus="game over";
   
}
// function Tie(){
//   for(let i=0;i<cell.length;i++){
//     cell[i].style.backgroundColor="#DF4D60";
//     document.querySelector(".PlayerTwo").innerHTML="TIE";
//           document.querySelector(".PlayerOne").innerHTML="TIE";
//   }
// }
