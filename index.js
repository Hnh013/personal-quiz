const readlineSync = require('readline-sync');
const chalk = require("chalk");

const highScoreArray = [{ name : "player013" , score : 12 },
{ name : "juno" , score : 4 },
{ name : "Riri" , score : 2 },
]

const quesArray = [
  { question : "What is my favorite game ?" , 
  answer : "football" },
  { question : "What is my favorite movie ?" , 
  answer : "the dark knight" },
  { question : "Who is my favorite singer ?" ,
  answer : "dua lipa" },
  { question : "Who is my favorite superhero ?" , 
  answer : "batman" },
  { question : "Who is my favorite Star Wars character ?" , 
  answer : "ashoka" },
  { question : "What is my favorite place that I have travelled ?" , 
  answer : "tungnath" },
  { question : "What is the common hobby I share with my cousins ?" ,
  answer : "drawing" },
  { question : "I made my first comic in class first : true or false ?" , 
  answer : "true" },
  { question : "My favorite club is manchester united : true or false ?" , 
  answer : "false" },
  { question : "Which player's jersey do I own : cristiano or messi ?" , 
  answer : "cristiano" },
  { question : "What is my favorite color?" , 
  answer : "green" },
  { question : "What is the only competition i took part in college ?" ,
  answer : "debate" },
  { question : "Which one is my favorite : Yippie or Maggie ?" , 
  answer : "yippie" }
]

var score = 0 ;
var username = '';
function quesfunc(questionsArray) {
  username = readlineSync.question("\nPlease enter your name , user : \n");
  for(let i = 0 ; i < questionsArray.length ; i++) {
    var ans = readlineSync.question(questionsArray[i].question + "\n");
    if (ans.trim().toLowerCase() === 'q' || ans.trim().toLowerCase() === 'quit') {
    break;
    } else {
      if (ans.trim().toLowerCase().toString() === questionsArray[i].answer) {

        if (score < 6 ) { 
        score++;
        console.log((chalk.bold.green)(`Correct Answer \nCurrent Score is ${score}`));
        console.log((chalk.bold.blue)("--------------------------------------")); }
        else if (score >= 6 && score < 18) { score += 2;
        console.log((chalk.bold.green)(`Correct Answer \nCurrent Score is ${score}`));
        console.log((chalk.bold.blue)("--------------------------------------")); }
        else if (score >= 18 && score < 36 ) { score += 3;
        console.log((chalk.bold.green)(`Correct Answer \nCurrent Score is ${score}`));
        console.log((chalk.bold.blue)("--------------------------------------")); }
        else if (score >= 36 && score < 60 ) { score += 4;
        console.log((chalk.bold.green)(`Correct Answer \nCurrent Score is ${score}`));
        console.log((chalk.bold.blue)("--------------------------------------")); }
       
      } else {

        console.log((chalk.bold.red)(`Wrong Answer`));  
        console.log((chalk.bold.green)(`Current Score is ${score}`));
        console.log((chalk.bold.blue)("--------------------------------------")); 
      }
    } 
  }
  console.log(`Hey ${username} Your score was ${score} , press Enter to continue \n`);  
  for(let i = 0; i< highScoreArray.length ; i++) {
     if(score > highScoreArray[i].score) {
        highScoreArray.splice(i, 1 , {name : username , score: score});
        console.log((chalk.bold.cyan)("LeaderBoard \n "));
          for(let i = 0; i < highScoreArray.length ; i++) {
            console.log((chalk.bold.yellowBright)("Rank "+ [i+1] + " name : "+highScoreArray[i].name+" score : "+ highScoreArray[i].score));  
          }
        console.log((chalk.bold.cyan)(`\nHey ${username} , you got a highscore, do message me me with a screenshot of this so you can be placed on the leader board`));
        break;    
      }
    }
  }


while(1) {
  score = 0;
  console.log((chalk.bold.yellow)(`Welcome to my personal Quiz!!
  \nRules of the Game are as follows
  \nNo negative marks , first 6 questions you get right you reach level 2
  \nAt level 2 , where each question is of 2 points
  \nPress Enter to start the game 
  \npress 'q' or type 'quit' any time instead of an answer to exit`)); 
  quesfunc(quesArray);
  var endGame = readlineSync.question(`----------------------------------- \nYou wish to end the game ${username} ? ,\nPress y or yes to end \nPress any other key to restart the game from beginning\n`);
  if(endGame.trim().toLowerCase() === 'yes' || endGame.trim().toLowerCase() === 'y') {
    break;
  }
}

console.log("------------------------------------------ \nthe game has ended ! Thanks for playing :D ");