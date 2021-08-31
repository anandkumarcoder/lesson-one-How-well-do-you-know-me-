
  //Importing libraries
  var readlineSync = require('readline-sync');
  const chalk = require('chalk');
  




//Universal variables
  var score = 0;

var userName = readlineSync.question("what's your name?  ");

console.log(chalk.yellowBright("Welcome " + userName  +  
"\nLet's play How well do you know Anand?" + " \nFor each correct answer you will get 1 score\n" ));
//" For each correct answer you will get 1 score" );


var highScores = [
  {
    name: "Rahul",
    score: 4,
  },

  {
    name: "Manok",
    score: 4,
  },
]

//function

  function play(question, answer) {
    var userAnswer= readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
      console.log(chalk.green.bold("Correct!"));
      score = score + 1;
    }
    else {
      console.log(chalk.red.bold("Incorrect" + chalk.green("\ncorrect answer is : " + answer)))
    }

    console.log("current score is : ", score)
    console.log("--------")
  }

var question = [{
  question: "Q1: where do i live?\n\n a)Mumbai\n b)Bangalore\n c)New Delhi\n d)Kashmir\n",
  answer: "b"
  }, {
  question: "Q2: who is my favourite superhero? \n a)Superman\n b)Iron Man\n c)Batman\n d)Wonder Woman\n", 
  answer: "c"},
{
 question: "Q3: What's my favourite flavour of ice cream? \n\n a)Choclate\n b)Vanilla+ Choclate\n c)Sitaphal\n d)Coconut\n", 
  answer: "c"},

 { question: "Q4: Do i ever share my briyani? \n\n a)Yes\n b)No \n", 
  answer: "a"},


 { question: "Q5: Which type of location i like for vaccation? \n\n a)Beach\n b)trekking\n c)Mountains\n d)City\n", 
  answer: "c"
}];


//function game (){
for (var i=0; i< question.length; i++) {
  var currentQuestion = question[i];
  play(currentQuestion.question, currentQuestion.answer)}



function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

 highScores.map(score => console.log(score.name, " : ", score.score))
} 
  showScores();
