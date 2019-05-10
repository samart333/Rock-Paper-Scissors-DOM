 //Global variables
let buttonsList = document.querySelectorAll('button');

var ronda = 1;
var myScore = 0;
var computerScore = 0;



let myPlay = document.createElement('h1');
let pcPlay = document.createElement('h1');
let roundResult = document.createElement('h1');
let round = document.createElement('h1')
let miPuntaje = document.createElement('h1')
let pcPuntaje = document.createElement('h1')
let finalResult = document.createElement('h1')



let resultsDiv = document.querySelector('.results')




//agregar el event listener a cada boton
buttonsList.forEach(function(button){
    button.addEventListener('click', (e)=> {
        
         finalResult.innerText = ""

        myPlay.innerText = e.target.textContent
        pcPlay.innerText = computerPlay()


        resultsDiv.appendChild(myPlay)
        resultsDiv.appendChild(pcPlay)

        

        var result = playRound(myPlay.innerText, pcPlay.innerText)
        roundResult.innerText = "Current round result:" + " " + result;
        resultsDiv.appendChild(roundResult)
        
        if(result === "you win!"){
            myScore++   
        }
        if(result === "computer win!"){
            computerScore++   
        }

        miPuntaje.innerText = "My score:" + myScore
        resultsDiv.appendChild(miPuntaje)

        pcPuntaje.innerText = "PC Score:" + computerScore
        resultsDiv.appendChild(pcPuntaje)
       
        if(myScore===5){
            finalResult.innerText = "Final score: you have won!"
            resultsDiv.appendChild(finalResult)
            myScore = 0
            computerScore = 0
            
            


        }

        if(computerScore===5){
            finalResult.innerText = "Final score: PC has won!"
            resultsDiv.appendChild(finalResult)
            myScore = 0
            computerScore = 0
            
            
        }



       

    
    })
 })
 //event listener ending
 





 //Function declarations
 function computerPlay(){
 var computerTry = Math.floor(Math.random() * 3);

     if (computerTry===0){
         return "rock"
     }
     else if (computerTry===1){
         return "paper"
     }
     else if (computerTry===2){
         return "scissors"
     }
 }

 
 function playRound(playerSelection, computerSelection){
     

    if(playerSelection=="Rock" && computerSelection=="paper"){
            
        return "computer win!";
    }

    if(playerSelection=="Rock" && computerSelection=="scissors"){
        
        return "you win!";
        
    }


    if(playerSelection=="Scissors" && computerSelection=="rock"){
        
        return "computer win!";
    }

    if(playerSelection=="Scissors" && computerSelection=="paper"){
        
        return "you win!";

    }

    if(playerSelection=="Paper" && computerSelection=="scissors"){
        return "computer win!";
    }

    if(playerSelection=="Paper" && computerSelection=="rock"){
        return "you win!";
    }

    else {
        return "Tie!";
    }


 }


 
     
     




 

 
 
 












