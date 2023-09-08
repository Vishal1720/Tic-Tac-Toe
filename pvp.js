//functions for PVP

tr = document.querySelector("#retry");
p1stat = document.getElementById("pstat");
p2stat = document.getElementById("bstat");
p1stat.textContent = "0";
p2stat.textContent = "0";
p1Stat=0;
p2Stat=0;
p1Win=false;
p2Win=false;
let msg = document.querySelector("#displayMessage");

box=document.getElementsByClassName('box'); 

pvpval="X";

function pvpclick(x) {
  if (p1Win == false && p2Win == false) {
    console.log("inside clik()");
    if (box[x].value == "") {
      box[x].value = pvpval;
      }
      if(pvpval == "X")
      {pvpval="O";
    }
      else
      {
        pvpval="X";
      }
    }
    checkWin();
  }

  function mcheckWin(x, y, z) {
    if (box[x].value == "X" && box[y].value == "X" && box[z].value == "X") {
      //checks left to right diag line for player
      console.log("You WIN");
      p1Win = true;
      msg.textContent = "You Win ";
      msg.style.color = "blue";
      p1Stat++;
      pstat.textContent = p1Stat;
      retry();
    } else if (
      box[x].value == "O" &&
      box[y].value == "O" &&
      box[z].value == "O"
    ) {
      //checks left to right diag line for bot
      p2Win = true;
      p2Stat++;
      bstat.textContent = p2Stat;
      msg.textContent = "You lose";
      msg.style.color = "Red";
  
      retry();
    }
  }
  
  function checkWin() {
    mcheckWin(0, 4, 8);
    mcheckWin(1, 4, 7);
    mcheckWin(0, 1, 2);
    mcheckWin(2, 4, 6);
    mcheckWin(2, 5, 8);
    mcheckWin(3, 4, 5);
    mcheckWin(0, 3, 6);
    mcheckWin(6, 7, 8);
    //below condition to check if all elements are filled to display retry button
    if (
      box[0].value != "" &&
      box[1].value != "" &&
      box[2].value != "" &&
      box[3].value != "" &&
      box[4].value != "" &&
      box[5].value != "" &&
      box[6].value != "" &&
      box[7].value != "" &&
      box[8].value != ""
    ) {
      retry();
    }
  }
  
  function retry() {
    tr.style.color = "black";
    tr.style.backgroundColor = "white"; //for background-color write in camel case without'-'
    tr.style.border = "black 3px solid";
  }

  function resetValues() {
    p2Win = false;
    p1Win = false;
    msg.textContent = "";
  
    for (i = 0; i < box.length; i++) {
      box[i].value = "";
    }
    tr.style.color = "transparent";
    tr.style.backgroundColor = "transparent";
    tr.style.border = "transparent";
  }