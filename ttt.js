a = document.getElementById("box-0");
b = document.getElementById("box-1");
c = document.getElementById("box-2");
d = document.getElementById("box-3");
e = document.getElementById("box-4");
f = document.getElementById("box-5");
g = document.getElementById("box-6");
h = document.getElementById("box-7");
i = document.getElementById("box-8");
let box = [a, b, c, d, e, f, g, h, i];

tr = document.querySelector("#retry");
let req = true;
pstat = document.getElementById("pstat");
bstat = document.getElementById("bstat");
pstat.textContent = "0";
bstat.textContent = "0";
pWin = false;
bWin = false;
pStat = 0;
bStat = 0;
console.log(box);
let msg = document.querySelector("#displayMessage");

console.log(msg);

function clik(x) {
  if (pWin == false && bWin == false) {
    console.log("inside clik()");
    if (box[x].value == "") {
      box[x].value = "X";
      checkWin();
      if (pWin == false && bWin == false) {
        setTimeout(function () {
          botValue();
        }, 250);
      }
    }
  }
}

function botValue() {
  console.log("inside botValue()");
  req = true;
  mainValue();
  checkWin();
}

function mcheckWin(x, y, z) {
  if (box[x].value == "X" && box[y].value == "X" && box[z].value == "X") {
    //checks left to right diag line for player
    console.log("You WIN");
    pWin = true;
    msg.textContent = "You Win ";
    msg.style.color = "blue";
    pStat++;
    pstat.textContent = pStat;
    retry();
  } else if (
    box[x].value == "O" &&
    box[y].value == "O" &&
    box[z].value == "O"
  ) {
    //checks left to right diag line for bot
    bWin = true;
    bStat++;
    bstat.textContent = bStat;
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
  tr.style.marginLeft="444px";
  
}

function resetValues() {
  bWin = false;
  pWin = false;
  msg.textContent = "";

  for (i = 0; i < box.length; i++) {
    box[i].value = "";
  }
  tr.style.marginLeft="-444px";
}

function subValue(i, j, k) {
               if (req == true) {
    if (box[4].value == "") {
      box[4].value = "O";//by default fills the center of the box if empty
      req = false;
    }
  }

  //conditions for two boxes that have the same value O so that the bot can win by filling the remaining box
  if (req == true) {
    if (box[i].value == "O" && box[j].value == "O") {
      if (box[k].value == "") {
        box[k].value = "O";
        req = false;
      }
    }
  }

  if (req == true) {
    if (box[j].value == "O" && box[k].value == "O") {
      if (box[i].value == "") {
        box[i].value = "O";
        req = false;
      }
    }
  }

  if (req == true) {
    if (box[i].value == "O" && box[k].value == "O") {
      if (box[j].value == "") {
        box[j].value = "O";
        req = false;
      }
    }
  }
}

function mainValue() {
  //checking for chances that bot can win directly if two boxes have same value O 
  subValue(0, 4, 8);
  subValue(1, 4, 7);
  subValue(0, 1, 2);
  subValue(2, 4, 6);
  subValue(3, 4, 5);
  subValue(0, 3, 6);
  subValue(6, 7, 8);
  subValue(2, 5, 8);
  // preventing chances for user to win if there are two consecutive boxes have X 
  xValue(0, 4, 8);
  xValue(1, 4, 7);
  xValue(0, 1, 2);
  xValue(2, 4, 6);
  xValue(3, 4, 5);
  xValue(0, 3, 6);
  xValue(6, 7, 8);
  xValue(2, 5, 8);


  subValue(2, 5, 8);
  if (req === true) {
    a = Math.floor(Math.random() * 9);
    {
      if (box[a].value == "") {
        console.log(
          "inside bot value if condition for random" +
            "valueof box[" +
            a +
            "] is O"
        );
        box[a].value = "O";
        checkWin();
      } else botValue();
    }
  }
}

function xValue(i, j, k) {
  if (req == true) {
    if (box[i].value == "X" && box[j].value == "X") {
      if (box[k].value == "") {
        box[k].value = "O";
        req = false;
      }
    }
  }
  if (req == true) {
    if (box[j].value == "X" && box[k].value == "X") {
      if (box[i].value == "") {
        box[i].value = "O";
        req = false;
      }
    }
  }
  if (req == true) {
    if (box[i].value == "X" && box[k].value == "X") {
      if (box[j].value == "") {
        box[j].value = "O";
        req = false;
      }
    }
  }
}

function change1name(){
  a=document.getElementById("nameChanges");
  a.style.marginLeft="-500px";
  pl=document.getElementById("pl1");
  pl.contentEditable=true;
  console.log(pl);
  pl.focus();
  pl.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
      pl.contentEditable=false;
    }
});
}



