const x=parseInt(Math.random()*100+1)

const input=document.querySelector("#input")
const button=document.querySelector("#subt")
const result=document.querySelector("#result")
const remaining=document.querySelector("#remin")
const playgame=true

let r=1
play()
 function play(){
    if(playgame){
    button.addEventListener("click",function(e){
        e.preventDefault()
        const guess=parseInt(input.value) 
        validguess(guess)
    })
}}

function validguess(guess){
   if(guess <1 || guess >100 || isNaN(guess)){
    message("Please enter a valid number")
    
   newgame(r)
   }
   else if(r==10){
    message(`You lost and the number is ${x}`)
    playgame=false
   }
else
    checkguess(guess)
   
}
function checkguess(guess){
    if(guess==x){
        message("congrats its a correct number")
        playgame=false
        alert(" you won ,for a new game please refresh the page")
        }
        else if(guess>x){
            message("your guessed number is too big, Think smaller than this number")
            r++
            newgame(r)
        }
        else{
            message("your guessed number is too small, Think greater than this number")  
            r++
           newgame(r)
        }

}
function message(sms){
    result.innerHTML=`<h4>${sms}</h4>`
}

function newgame(r){
    remaining.innerHTML=11-r
    input.value=''  
    playgame=true
    play()
}