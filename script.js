let btn = document.querySelectorAll(".cell");
let resetbutton = document.querySelector("#reset");
let gameOver = document.querySelector(".gameOver");
let play_again = document.querySelector(".play_again");
let playagainbutton = document.querySelector("#play_again_btn");
let playagainpara = document.querySelector(".playagainpara");


let button_state = "X";
let i = 0;

let win_Patterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

btn.forEach(button => {
    button.addEventListener("click",() => {

        i++;

        if(button.innerText !== "") return;

        if(button_state === "X"){
            button.innerText = "X";
            button_state = "O";
        }
        else{
            button.innerText = "O";
            button_state = "X";
        }
        
        check_win();
    });
});

const check_win = () => {
    for(let pattern of win_Patterns){
        // console.log(pattern);

        let pos1 = btn[pattern[0]].innerText;
        let pos2 = btn[pattern[1]].innerText;
        let pos3 = btn[pattern[2]].innerText;
     
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3){ 
                
                btn[pattern[0]].classList.add("highlight");
                btn[pattern[1]].classList.add("highlight");
                btn[pattern[2]].classList.add("highlight");

                 console.log(pos1 + " is winner");
                 disable_all_buttons();
                 gameOver.style.visibility = "visible";
                 playagainpara.innerText = pos1 + " is the Winner!";
                 play_again.style.visibility = "visible";
                 return;
            }
            else if (i === 9){
                console.log("Match Draw");
                gameOver.style.visibility = "visible";
                i = 0;
                return;
            }
        }
    }
}
const disable_all_buttons = () => {
    btn.forEach(button => {
        if(button.innerText === ""){
            button.disabled = true;
        }
    });
}
resetbutton.addEventListener("click",() => {
    btn.forEach(button => {
        button.innerText = "";
        button.disabled = false;
        button.classList.remove("highlight");
        button_state = "X";
        gameOver.style.visibility = "hidden";

    });
});
playagainbutton.addEventListener("click",()=> {
    btn.forEach(button => {
        button.innerText = "";
        button_state = "X";
        button.disabled = false;
        button.classList.remove("highlight");
        gameOver.style.visibility = "hidden";
    });
    play_again.style.visibility = "hidden";
});