
var readlineSync = require("readline-sync");

  
score = 0
//input

var username = readlineSync.question("Hi ! What's your name ? ");
console.log("Welcome " + username + ", Let's check Are you a good fan of naruto?.");

// function 

function play (question,answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log ("Your are right!")
    score = score+1
  }else{
    console.log("you are wrong")
  }
  console.log("Your score is "+score)  
}

//array of objects

var questions = [{
  question : "What is the name of Kakashi’s smallest Ninken?  ",
  answer : "Pakkun"
},
{
  question : "How old was Naruto in the original Naruto? ",
  answer : "12" 
},
{
  question : "Who is terrified of Toads ? ",
  answer : "Sakura"
},
{
  question : "Who else has the same ability as Kakashi to create lightning with the hand ? ",
  answer : "Indra"
},
{
  question : "Who were the Team 7 looking for in their first mission (which was a cat) ? ",
  answer : "Tora"
},
{
  question : "Who was the youngest ninja graduate from the academy ? ",
  answer : "Kakashi"
}
]

for (var i = 0;i<questions.length;i++) {
  var currentQue = questions[i];
  play(currentQue.question,currentQue.answer)
}

console.log("Thanks for participating ! Your final score is "+score+" out of 6.")  

