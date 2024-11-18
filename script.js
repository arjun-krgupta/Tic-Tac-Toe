
let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset-btn")
let newGamebtn=document.querySelector("#newGameBtn")
let result=document.querySelector("#result")
let msgContainer=document.querySelector(".msgContainer")
let turnO = true
const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],
    [2,5,8],[2,4,6],[3,4,5],[6,7,8]
]

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(turnO)
        {
            box.innerText='O'
            box.style.color="white"
            turnO=false
        }
        else{
            box.innerText="X"
             box.style.color="brown"
            turnO=true
        }
        box.disabled=true
        checkWinner()
    })
})

const disableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true
    }
}

const showWinner=(winner)=>
{
result.innerText=`Congratulation, Winner is ${winner}`
 msgContainer.classList.remove('hide')
 disableBoxes()
}

const resetGame=()=>
{
    turnO=true
    enableBoxes()
    msgContainer.classList.add("hide")
}

const enableBoxes=()=>
    {
        for(let box of boxes)
        {
            box.disabled=false
            box.innerText=""
        }
    }

const checkWinner=()=>
{
    for(pattern of winPatterns)
    {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !=0 && pos2Val !=0 && pos3Val!=0)
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                showWinner(pos1Val)
            }
        }
    }
};

resetBtn.addEventListener("click",resetGame)
newGamebtn.addEventListener("click",resetGame)

