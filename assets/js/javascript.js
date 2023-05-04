let quizArea = document.getElementById("questions_area");
let startQuizButton = document.getElementById("button_start_quiz");
let restartButton = document.getElementById("button_restart");
let nextButton = document.getElementById("button_next");

// Questions
const questionsArray = [
  {
      id: "0",
      question: "Which is the highest mountain in the USA?",
      options: ["Mount Lincoln", "Mount Bona", "Mount Denali", "Mount Saint Elias"],
      correct: "Mount Denali",
  },
  {
      id: "1",
      question: "Which is the highest mountain in the Ierland?",
      options: ["Brandon Peak", "Carrauntoohil", "Caher", "Beenkeragh"],
      correct: "Carrauntoohil",
  },
  {
      id: "2",
      question: "Which is the highest mountain in the Germany?",
      options: ["Watzmann", "Schneefernerkopf", "Zugspitze", "Hochwanner"],
      correct: "Zugspitze",
  },
  {
      id: "3",
      question: "Which is the country with the most time zones (including foreign territories)?",
      options: ["USA", "France", "Russia", "UK"],
      correct: "France",
  },
  {
      id: "4",
      question: "How many continents dose earth have?",
      options: ["3", "5", "11", "7"],
      correct: "7",
  },
  {
      id: "5",
      question: "Which country has the most rain forest?",
      options: ["Brazil", "Peru", "DRC", "Indonesia"],
      correct: "Brazil",
  },
  {
     id: "6",
      question: "In what country is the worlds biggest freshwater lake located?",
      options: ["Russia", "Canada", "Uganda", "USA"],
      correct: "Russia",
  },
  {
      id: "7",
      question: "Which is the smalest country in the world (by land area)?",
      options: ["Nauru", "Monaco", "San Marino", "Vatican City"],
      correct: "Vatican City",
  },
  {
      id: "8",
      question: "Which is the largest country in the world (by land area)?",
      options: ["China", "Russia", "Canada", "Ausralia"],
      correct: "Russia",
  },
  {
      id: "9",
      question: "Which of the following countries is the youngest (date of independance)?",
      options: ["South Sudan", "Slovakia", "Montenegro", "Palau"],
      correct: "South Sudan",
  },
  {
      id: "10",
      question: "How many humans live on earth (in 2023)?",
      options: ["8 Billion", "10 Billion", "5 Billion", "2 Billion"],
      correct: "8 Billion",
  },
]