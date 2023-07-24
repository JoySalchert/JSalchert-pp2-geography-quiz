//I took the artikle "Quiz App Using HTML, CSS And JavaScript (Source Code) – Coding Torque"
//Written by: Piyush Patil (Code Credits: @virtualwiz) as a guide!

// let quizArea = document.getElementById("questions_area");
// let startQuizButton = document.getElementById("button_start_quiz");
// let restartButton = document.getElementById("button_restart");
// let nextButton = document.getElementById("button_next");
// let questionCount;

// // Questions
// const questionsArray = [
//   {
//       id: "0",
//       question: "Which is the highest mountain in the USA?",
//       options: ["Mount Lincoln", "Mount Bona", "Mount Denali", "Mount Saint Elias"],
//       correct: "Mount Denali",
//   },
//   {
//       id: "1",
//       question: "Which is the highest mountain in the Ierland?",
//       options: ["Brandon Peak", "Carrauntoohil", "Caher", "Beenkeragh"],
//       correct: "Carrauntoohil",
//   },
//   {
//       id: "2",
//       question: "Which is the highest mountain in the Germany?",
//       options: ["Watzmann", "Schneefernerkopf", "Zugspitze", "Hochwanner"],
//       correct: "Zugspitze",
//   },
//   {
//       id: "3",
//       question: "Which is the country with the most time zones (including foreign territories)?",
//       options: ["USA", "France", "Russia", "UK"],
//       correct: "France",
//   },
//   {
//       id: "4",
//       question: "How many continents dose earth have?",
//       options: ["3", "5", "11", "7"],
//       correct: "7",
//   },
//   {
//       id: "5",
//       question: "Which country has the most rain forest?",
//       options: ["Brazil", "Peru", "DRC", "Indonesia"],
//       correct: "Brazil",
//   },
//   {
//      id: "6",
//       question: "In what country is the worlds biggest freshwater lake located?",
//       options: ["Russia", "Canada", "Uganda", "USA"],
//       correct: "Russia",
//   },
//   {
//       id: "7",
//       question: "Which is the smalest country in the world (by land area)?",
//       options: ["Nauru", "Monaco", "San Marino", "Vatican City"],
//       correct: "Vatican City",
//   },
//   {
//       id: "8",
//       question: "Which is the largest country in the world (by land area)?",
//       options: ["China", "Russia", "Canada", "Ausralia"],
//       correct: "Russia",
//   },
//   {
//       id: "9",
//       question: "Which of the following countries is the youngest (date of independance)?",
//       options: ["South Sudan", "Slovakia", "Montenegro", "Palau"],
//       correct: "South Sudan",
//   },
//   {
//       id: "10",
//       question: "How many humans live on earth (in 2023)?",
//       options: ["8 Billion", "10 Billion", "5 Billion", "2 Billion"],
//       correct: "8 Billion",
//   },
// ]

// // Quiz Start (User clicks start button)
// startQuizButton.addEventListener("click", () => {
//     start
// });

// // Next Button (User clicks next button)
// nextButton.addEventListener("click",
//    (displayNext = () => {
//     questionCount += 1;
//     if (questionCount == questionsArray.length) {
//         quizArea.classList.add("hide");
//     }
//     else {
//         quizArea
//     }
//    })
// )

// // Restart (User clicks restart button)
// restartButton.addEventListener("click", () => {
//     initial ();
//     displayContainer.classList.remove("hide")
// })

// // Quiz creation
// function quizCreator() {
//     questionsArray.sort (() => Math.random() - 0.5);
//     for (let i of questionsArray) {
//         i.options.sort (() => Math.random() - 0.5);
//         let div = document.createElement("div");
//         div.classList.add("container-mid", "hide");
//         countOfQestion.innerHTML = 1 + " of " + questionsArray.length + " Question";
//         let question_div = document.createElement("p");
//         question_div.classList.add("question");
//         question_div.innerHTML = i.question;
//         div.appendChild(question_div);
//         div.innerHTML += `
//         <button class="option-div" onclick="checker (this)">${i.options[0]}</button>
//         <button class="option-div" onclick="checker (this)">${i.options[2]}</button>
//         <button class="option-div" onclick="checker (this)">${i.options[3]}</button>
//         <button class="option-div" onclick="checker (this)">${i.options[4]}</button>
//         `;
//         quizArea.appendChild(div);
//     }
// }