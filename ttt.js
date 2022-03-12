a=document.getElementById("box-0")
b=document.getElementById("box-1")
c=document.getElementById("box-2")
d=document.getElementById("box-3")
e=document.getElementById("box-4")
f=document.getElementById("box-5")
g=document.getElementById("box-6")
h=document.getElementById("box-7")
i=document.getElementById("box-8")
let box=[a, b, c, d, e, f, g, h, i]

tr = document.querySelector("#retry")
let req=true


pstat=document.getElementById("pstat")
bstat=document.getElementById("bstat")
pstat.textContent="0"
bstat.textContent="0"
pWin=false
bWin=false
pStat=0
bStat=0
console.log(box)
let msg=document.querySelector("#displayMessage")

console.log(msg)

function clik(x)
{
    if(pWin==false&&bWin==false)
    {
    console.log("inside clik()")
if(box[x].value=="")
{
    console.log("inside if")
 box[x].value="X"
 checkWin()
 if(pWin==false&&bWin==false)
 {
     setTimeout(function(){botValue()},150)
  }  
}
    }
}
function botValue()
{
    console.log("inside botValue()")
    req=true
    mainValue()
    checkWin()
    

}

function mcheckWin(x,y,z)
{
    if(box[x].value=="X"&&box[y].value=="X"&&box[z].value=="X")//checks left to right diag line for player
{
    console.log("You WIN")
pWin=true
msg.textContent="You Win "
msg.style.color="blue"
pStat++
pstat.textContent=pStat
retry()

}
else

    if(box[x].value=="O"&&box[y].value=="O"&&box[z].value=="O")//checks left to right diag line for bot
{
    bWin=true
bStat++
bstat.textContent=bStat
msg.textContent="You Lose"
msg.style.color="Red"


retry()}
}


function checkWin()
{
    mcheckWin(0,4,8)
    mcheckWin(1,4,7)
mcheckWin(0,1,2)
mcheckWin(2,4,6)
mcheckWin(2,5,8)
mcheckWin(3,4,5)
mcheckWin(0,3,6)
mcheckWin(6,7,8)
if(box[0].value!=""&&box[1].value!=""&&box[2].value!=""&&box[3].value!=""&&box[4].value!=""&&box[5].value!=""&&box[6].value!=""&&box[7].value!=""&&box[8].value!="")
{
    retry()
}

}
/*
function checkWin()
{
if(box[0].value=="X"&&box[1].value=="X"&&box[2].value=="X")//checks first line for player
{
    console.log("You WIN")
pWin=true
msg.textContent="You Win "
msg.style.color="blue"
pStat++
pstat.textContent=pStat
retry()
tr.style.backgroundColor="blue"
}
else

    if(box[0].value=="O"&&box[1].value=="O"&&box[2].value=="O")//checks first line for bot
{bWin=true
bStat++
bstat.textContent=bStat
msg.textContent="You Lose"
msg.style.color="Red"

retry()
}

{
if(box[3].value=="X"&&box[4].value=="X"&&box[5].value=="X")//checks second line for player
{
    console.log("You WIN")
pWin=true
msg.textContent="You Win "
msg.style.color="blue"
pStat++
pstat.textContent=pStat
retry()
tr.style.backgroundColor="blue"
}
else
if(box[3].value=="O"&&box[4].value=="O"&&box[5].value=="O")//checks second line for bot
{bWin=true
bStat++
bstat.textContent=bStat
msg.textContent="You Lose"
msg.style.color="Red"

retry()}
}



if(box[6].value=="X"&&box[7].value=="X"&&box[8].value=="X")//checks third line for player
{
    console.log("You WIN")
pWin=true
msg.textContent="You Win "
msg.style.color="blue"
pStat++
pstat.textContent=pStat
retry()
tr.style.backgroundColor="blue"
}
else

    if(box[6].value=="O"&&box[7].value=="O"&&box[8].value=="O")//checks third line for bot
{bWin=true
bStat++
bstat.textContent=bStat
msg.textContent="You Lose"
msg.style.color="Red"

retry()
}

if(box[0].value=="X"&&box[3].value=="X"&&box[6].value=="X")//checks first vertical line for player
{
    console.log("You WIN")
pWin=true
msg.textContent="You Win "
msg.style.color="blue"
pStat++
pstat.textContent=pStat
retry()
tr.style.backgroundColor="blue"
}
else

    if(box[0].value=="O"&&box[3].value=="O"&&box[6].value=="O")//checks first vertical line for bot
{
    bWin=true
bStat++
bstat.textContent=bStat
msg.textContent="You Lose"
msg.style.color="Red"

retry()
}


if(box[1].value=="X"&&box[4].value=="X"&&box[7].value=="X")//checks second vertical line for player
{
    
pWin=true
msg.textContent="You Win "
msg.style.color="blue"
pStat++
pstat.textContent=pStat
retry()
tr.style.backgroundColor="blue"
}
else
  if(box[1].value=="O"&&box[4].value=="O"&&box[7].value=="O")//checks second  verticalline for bot
{
    bWin=true
    msg.textContent="You Lose"
    msg.style.color="Red"

bStat++
bstat.textContent=bStat

retry()
}


if(box[2].value=="X"&&box[5].value=="X"&&box[8].value=="X")//checks third vertical line for player
{
    console.log("You WIN")
pWin=true
msg.textContent="You Win "
msg.style.color="blue"
pStat++
pstat.textContent=pStat
retry()
tr.style.backgroundColor="blue"
}
else
     if(box[2].value=="O"&&box[5].value=="O"&&box[8].value=="O")//checks third vertical line for bot
{
    bWin=true
bStat++
bstat.textContent=bStat
msg.textContent="You Lose"
msg.style.color="Red"

retry()
}


if(box[0].value=="X"&&box[4].value=="X"&&box[8].value=="X")//checks left to right diag line for player
{
    console.log("You WIN")
pWin=true
msg.textContent="You Win "
msg.style.color="blue"
pStat++
pstat.textContent=pStat
retry()
tr.style.backgroundColor="blue"
}
else

    if(box[0].value=="O"&&box[4].value=="O"&&box[8].value=="O")//checks left to right diag line for bot
{
    bWin=true
bStat++
bstat.textContent=bStat
msg.textContent="You Lose"
msg.style.color="Red"

retry()}


if(box[2].value=="X"&&box[4].value=="X"&&box[6].value=="X")//checks rigth to left diag line for player
{
    console.log("You WIN")
pWin=true
msg.textContent="You Win "
msg.style.color="blue"
pStat++
pstat.textContent=pStat
retry()
tr.style.backgroundColor="blue"
}
else

    if(box[2].value=="O"&&box[4].value=="O"&&box[6].value=="O")//checks rigth to left diag line for bot
{
    bWin=true
bStat++
bstat.textContent=bStat
msg.textContent="You Lose"
msg.style.color="Red"

retry()
}


}*/

function retry()
{
    tr.style.color="black"
    tr.style.backgroundColor="white"//for background-color write in camel case without'-'
    tr.style.border="black 3px solid"


}
function resetValues()
{
bWin=false
pWin=false
msg.textContent=""

for(i=0;i<box.length;i++)
{
box[i].value=""
}
tr.style.color="transparent"
tr.style.backgroundColor="transparent"
tr.style.border="transparent"

}


function subValue(i,j,k)
{
    if(req==true)
    {
if(box[4].value=="")
{
    box[4].value="O"
    req=false
}}
    
    
    if(req==true)
    { 
    if(box[i].value=="O"&&box[j].value=="O")
    {
        
if(box[k].value=="")
{
    box[k].value="O"
    req=false
}
    } 
}


    if(req==true)
    {
if(box[j].value=="O"&&box[k].value=="O")
    {
if(box[i].value=="")
{
    box[i].value="O"
    req=false
}
    }
}



if(req==true)
{    if(box[i].value=="O"&&box[k].value=="O")
    {
if(box[j].value=="")
{
    box[j].value="O"
    req=false
}
    }
    
}  
  
    
}

function mainValue()
{
    

    subValue(0,4,8)
    subValue(1,4,7)
subValue(0,1,2)
subValue(2,4,6)
subValue(3,4,5)
subValue(0,3,6)
subValue(6,7,8)
subValue(2,5,8)
xValue(0,4,8)
xValue(1,4,7)
xValue(0,1,2)
xValue(2,4,6)
xValue(3,4,5)
xValue(0,3,6)
xValue(6,7,8)
xValue(2,5,8)




subValue(2,5,8)
if(req===true)
    {
a=Math.floor(Math.random()*9)
{
if(box[a].value=="")
    {
        console.log("inside bot value if condition for random"+"valueof box["+a+"] is O")
        box[a].value="O"
    checkWin()
}
else
botValue()
    }
    }

}
function xValue(i,j,k)
{
    if(req==true)
    { 
    if(box[i].value=="X"&&box[j].value=="X")
    {
        
if(box[k].value=="")
{
    box[k].value="O"
    req=false
}
    } 
}


    if(req==true)
    {
if(box[j].value=="X"&&box[k].value=="X")
    {
if(box[i].value=="")
{
    box[i].value="O"
    req=false
}
    }
}



if(req==true)
{    if(box[i].value=="X"&&box[k].value=="X")
    {
if(box[j].value=="")
{
    box[j].value="O"
    req=false
}
    }
    
} 
}
