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

  function changename(){
    btn=document.getElementById("nameChange");
    btn.style.backgroundColor="transparent";
    btn.style.marginLeft="-300px";
    btn.style.color="transparent";
    btn.style.border="none";
    p1=document.getElementById("P1");
    p2=document.getElementById("P2");
    p1.contentEditable=true;
    p1.focus();
    p1.addEventListener("keydown",function(event){
      if(event.key == "Enter"){
        p1.contentEditable=false;
        p2.contentEditable=true;
        p2.focus();
      }
    });
    p2.addEventListener("keydown",function(event){  
      if(event.key== "Enter"){
        p2.contentEditable=false;
      }
    })
    
    
  }

  function mcheckWin(x, y, z) {
    if (box[x].value == "X" && box[y].value == "X" && box[z].value == "X") {
      //checks left to right diag line for player
      console.log("You WIN");
      p1Win = true;
      msg.textContent = "Player 1 Wins";
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
      msg.textContent = "Player 2 Wins";
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
    tr.style.color = "white";
  tr.style.backgroundColor = "#023E8A";
    tr.style.border = "black 3px solid";
    tr.style.marginLeft="654px";
  }

  function resetValues() {
    p2Win = false;
    p1Win = false;
    msg.textContent = "";
  
    for (i = 0; i < box.length; i++) {
      box[i].value = "";
    }
    tr.style.marginLeft="-444px";
    
    
  }
