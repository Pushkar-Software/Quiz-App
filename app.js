let kuler = require("kuler");
let readlineSync = require("readline-sync");
let score = 0;
let userName = readlineSync.question(
  kuler("Please Enter Your Name: \n", "#991b1b"),
);
console.log(kuler(`Welcome ${userName} to the Quiz`, `#3f6212`));

// Creating the Structure

const database = {
  data: [
    {
      question: `let a = {}, b = {};
console.log(a == b); 
console.log(a === b);`,

      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true",
      },
      correctAnswer: "a",
    },
    {
      question: "Object.assign(target, source) creates which type of copy?",
      options: {
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference",
      },
      correctAnswer: "b",
    },
    {
      question: "Is method chaining possible with forEach?",
      options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
  ],
};
const leaderBoard = {
  data: [
    {
      name: "Pushkar",
      score: 3,
    },
    {
      name: "Aman",
      score: 2,
    },
    {
      name: "Snadeep",
      score: 1,
    },
  ],
};
function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("Correct Answer", "#14532d"));
    score++;
  } else {
    console.log(kuler("Incorrect Answer", "#b91c1c"));
    console.log(kuler(`The correct answer is ${correctAnswer}`,"#14532d"));
  }
}
function showQuestionsAndOptions(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1} -
      ${database.data[i].question}'\n'`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`);
    }
    let userAnswer = readlineSync
      .question("Enter your answer (a,b,c or d) - ")
      .toLowerCase();

    playGame(userAnswer, database.data[i].correctAnswer);
  }
}
function highScorer(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(kuler("\nCheck your position on the leaderboard😒😒😒","#ca8a04"));
  for (let leader of sortedScoreList) {
    console.log(`${leader.name} - Score: ${leader.score}`);
  }
}
// Call the function
showQuestionsAndOptions(database);
console.log(kuler(`Your Score is -${score}`,"#1d4ed8"));
highScorer(leaderBoard);
