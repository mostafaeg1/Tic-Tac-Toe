const gameboard = (() => {
  let turn ="player1";
  let array=[["","",""],["","",""],["","",""]];
  let counter=0;
  let gamemode="1player";

  const checkWinner = () => {           //check if the game is finished and return the result

  if((array[0][0]===array[0][1] && array[0][0]===array[0][2] && array[0][0]!=="")||   //first row
  (array[0][0]===array[1][0] && array[0][0]===array[2][0] && array[0][0]!=="")||        //fitst col
  (array[0][0]===array[1][1] && array[0][0]===array[2][2] && array[0][0]!==""))      //diameter 1
  {
      return array[0][0];   //winner
  }
  if((array[2][2]===array[2][1] && array[2][2]===array[2][0] && array[2][2]!=="")||  //third row
  (array[2][2]===array[1][2] && array[2][2]===array[0][2] && array[2][2]!==""))      //third col
  {
    //console.log("ddd");
      return array[2][2];   //winner
  }
  if((array[1][1]===array[0][1] && array[1][1]===array[2][1] && array[1][1]!=="")||      //second col
    (array[1][1]===array[1][0] && array[1][1]===array[1][2] && array[1][1]!=="")||   //second row
  (array[1][1]===array[0][2] && array[1][1]===array[2][0] && array[1][1]!==""))      //diameter 2
  {
      return array[1][1];   //winner
  }
   return false;
}
 
  const newgame=()=>{                  // begin new game
     array=[["","",""],["","",""],["","",""]];
     document.getElementById(`screen`).textContent="Player X's turn";
     turn ="player1";
     counter=0;
     for(const cell of gameboardcells)
     {
        cell.textContent="";  
     }
  }

  const newTurnOnePlayer=(x,y)=>{     // new turn for one player mode 
    if(array[x][y]==="" && checkWinner()===false)
    {
       array[x][y]="x";
       document.getElementById(`a${x}${y}`).textContent="X";
       document.getElementById(`a${x}${y}`).style.color="#545454";
       counter++;
       if(checkWinner()===false && counter!==9)
       {
        if(findPathO()!==false)
        {
          let indexes=findPathO();
          array[indexes[0]][indexes[1]]="o";
          document.getElementById(`a${indexes[0]}${indexes[1]}`).textContent="O";
          document.getElementById(`a${indexes[0]}${indexes[1]}`).style.color="white";
        }
        
        else if(findPathX()!==false)
        {
          let indexes=findPathX();
          array[indexes[0]][indexes[1]]="o";
          document.getElementById(`a${indexes[0]}${indexes[1]}`).textContent="O";
          document.getElementById(`a${indexes[0]}${indexes[1]}`).style.color="white";
        }
        else
        {
          let indexes=Randomindex();
          array[indexes[0]][indexes[1]]="o";
          document.getElementById(`a${indexes[0]}${indexes[1]}`).textContent="O";
          document.getElementById(`a${indexes[0]}${indexes[1]}`).style.color="white";
        }
        counter++;
       }
       
    }
    
    if(counter===9 || checkWinner()!==false)
    {
      showResult();
    }
  }

const Randomindex=()=>{              //return random empty index
  let emptyindexes=[];
for(let i=0;i<3;i++)
{
  for(let j=0;j<3;j++)
  {
     if(array[i][j]==="")
     {
       emptyindexes.push([i,j]);
     }
  }
}

let randomindex=Math.floor(Math.random() * emptyindexes.length);
//console.log(emptyindexes);
return emptyindexes[randomindex];
}

const findPathO=()=>{                 //find the lacking index for possible winning path for  o player if exist
  if(array[0][0] === "")
  {
    
     array[0][0]="x";
     if(checkWinner()==="x")
     {
       array[0][0]="";
       return [0,0];
     }
     array[0][0]="";
  }
  if(array[0][1] === "")
  {
     array[0][1]="o";
     if(checkWinner()==="o")
     {
       array[0][1]="";
       return [0,1];
     }
     array[0][1]="";
  }
  if(array[0][2] === "")
  {
     array[0][2]="o";
     if(checkWinner()==="o")
     {
       array[0][2]="";
       return [0,2];
     }
     array[0][2]="";
  }
  if(array[1][0] === "")
  {
     array[1][0]="o";
     if(checkWinner()==="o")
     {
       array[1][0]="";
       return [1,0];
     }
     array[1][0]="";

  }
  if(array[1][1] === "")
  {
   
     array[1][1]="o";
     if(checkWinner()==="o")
     {
       array[1][1]="";
       return [1,1];
     }
     array[1][1]="";
  }

  if(array[1][2] === "")
  {
     array[1][2]="o";
     if(checkWinner()==="o")
     {
       array[1][2]="";
       return [1,2];
     }
     array[1][2]="";
  }
  if(array[2][0] === "")
  {
     array[2][0]="o";
     if(checkWinner()==="o")
     {
       array[2][0]="";
      // console.log(array);
       return [2,0];
     }
     array[2][0]="";

  }
  if(array[2][1] === "")
  {
     array[2][1]="o";
     if(checkWinner()==="o")
     {
       array[2][1]="";
       return [2,1];
     }
     array[2][1]="";
  }
  if(array[2][2] === "")
  {
     array[2][2]="o";
     if(checkWinner()==="o")
     {
       array[2][2]="";
       return [2,2];
     }
     array[2][2]="";
  }
  return false;
}

const findPathX=()=>{                 //find the lacking index for possible winning path for  x player if exist
  if(array[0][0] === "")
  {
    
     array[0][0]="x";
     if(checkWinner()==="x")
     {
       array[0][0]="";
       return [0,0];
     }
     array[0][0]="";
  }
  if(array[0][1] === "")
  {
     array[0][1]="x";
     if(checkWinner()==="x")
     {
       array[0][1]="";
       return [0,1];
     }
     array[0][1]="";
  }
  if(array[0][2] === "")
  {
     array[0][2]="x";
     if(checkWinner()==="x")
     {
       array[0][2]="";
       return [0,2];
     }
     array[0][2]="";
  }
  if(array[1][0] === "")
  {
     array[1][0]="x";
     if(checkWinner()==="x")
     {
       array[1][0]="";
       return [1,0];
     }
     array[1][0]="";

  }
  if(array[1][1] === "")
  {
   
     array[1][1]="x";
     if(checkWinner()==="x")
     {
       array[1][1]="";
       return [1,1];
     }
     array[1][1]="";
  }

  if(array[1][2] === "")
  {
     array[1][2]="x";
     if(checkWinner()==="x")
     {
       array[1][2]="";
       return [1,2];
     }
     array[1][2]="";
  }
  if(array[2][0] === "")
  {
     array[2][0]="x";
     if(checkWinner()==="x")
     {
       array[2][0]="";
      // console.log(array);
       return [2,0];
     }
     array[2][0]="";

  }
  if(array[2][1] === "")
  {
     array[2][1]="x";
     if(checkWinner()==="x")
     {
       array[2][1]="";
       return [2,1];
     }
     array[2][1]="";
  }
  if(array[2][2] === "")
  {
     array[2][2]="x";
     if(checkWinner()==="x")
     {
       array[2][2]="";
       return [2,2];
     }
     array[2][2]="";
  }
  return false;
}

  const newTurnTwoPlayers=(x,y)=>{      // new turn for two player mode 
      if(turn==="player1" && array[x][y]==="" && checkWinner()===false)
      {
         array[x][y]="x";
         turn="player2";
         document.getElementById(`a${x}${y}`).textContent="X";
         document.getElementById(`a${x}${y}`).style.color="#545454";
         document.getElementById(`screen`).textContent="Player O's turn";
         counter++;
      }
      if(turn==="player2" && array[x][y]==="" && checkWinner()===false)
      {
        array[x][y]="o";
         turn="player1";
         document.getElementById(`a${x}${y}`).textContent="O";
         document.getElementById(`a${x}${y}`).style.color="white";
         document.getElementById(`screen`).textContent="Player X's turn";
         counter++;
      }
      if(counter===9 || checkWinner()!==false)
      {
        showResult();
      }
     // console.log(array[x][y]);
  }

  const newTurn=(x,y)=>{
   if(gamemode==="1player")
   {
        newTurnOnePlayer(x,y);
   }
   else
   {
       newTurnTwoPlayers(x,y);
   }
    
  }

  const changeGameMode=()=>{
    newgame();
    if(gamemode==="1player")
    {
      document.getElementById(`screen`).style.display="flex";
      gamemode="2players";
    }
    else
    {
      document.getElementById(`screen`).style.display="none";
      gamemode="1player";
    }

  }

  const showResult= () =>{       //show the result of the game
   screen=document.getElementById("Overlay");
   screen.style.display="block";
   let  result=document.getElementById("result");

    if(checkWinner()===false)
    {
       result.textContent="It's a draw!";
    }
    else
    {
      if(checkWinner()==="x")
      {
        result.textContent="Player X has won!";
      }
      else
      {
        result.textContent="Player O has won!";
      }
    }
  }
  
  return {
    newgame,
    checkWinner,
    newTurn,
    newTurnOnePlayer,
    changeGameMode
  };
})();

const player = () => {
  let wins = 0;
  return () => {
    console.log(count);
    count++;
  };
};


let gameboardcells=Array.from(document.getElementsByClassName("grid-item"));
for(const cell of gameboardcells)
{
  cell.addEventListener("click",(e)=>{
    gameboard.newTurn(e.target.id.charAt(1),e.target.id.charAt(2));
  })  
}

let btn=document.getElementById("delete-btn");
btn.addEventListener("click",()=>{
  gameboard.newgame();
})

let changemodebtn=document.getElementById("game-mode-btn");
changemodebtn.addEventListener("click",(e)=>{
gameboard.changeGameMode();
if(e.target.textContent==="2 players")
{
  e.target.textContent="1 player";
}
else
{
  e.target.textContent="2 players";
}
})

let  overlay=document.getElementById("Overlay");
overlay.addEventListener("click",()=>{
  if(overlay.style.display==="none")
  {
    overlay.style.display="block";
  }
  else
  {
    overlay.style.display="none";
  }
  gameboard.newgame();
})

