const getUserChoice = (userInput) =>{
    userInput = userInput.toLowerCase();
    if((userInput === "rock") || (userInput === "scissors") || (userInput === "paper")){
      return userInput
    }
    else{
      console.log("Error, try again")
    }
  }
  // console.log(getUserChoice("rock"))
  
  let getComputerChoice = () => {
    let number = Math.floor(Math.random()*3)
    if(number === 0){
      return "rock"
    }
    else if(number === 1){
      return "paper"
    }
    else{
      return "scissors"
    }
  }
  // console.log(getComputerChoice())
  
  let determineWinner = (userChoice,computerChoice) =>{
    if(userChoice === computerChoice){
      return "Game was a tie!!!"
    }
    if(userChoice === "rock"){
      if(computerChoice === "paper"){
        return "Computer won!!!"
      }
      else{
        return " User won!!!"
      }
    }
    if(userChoice === "paper"){
      if(computerChoice === "scissors"){
        return "Computer won"
      }
      else{
        return "User Won"
      }
    }
  
    if(userChoice === "scissors"){
      if(computerChoice === "paper"){
        return "User won!"
      }
      else{
        return "Computer won"
      }
    }
  }
  
  
  let playgame = () =>{
    let userChoice = getUserChoice("rock")
    let computerChoice = getComputerChoice()
    console.log(userChoice)
    console.log(computerChoice)
  
    console.log(determineWinner(userChoice,computerChoice))
  }
  playgame()