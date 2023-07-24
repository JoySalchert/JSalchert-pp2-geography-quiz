//I took the artikle "Quiz App Using HTML, CSS And JavaScript (Source Code) – Coding Torque"
//Written by: Piyush Patil (Code Credits: @virtualwiz) as a guide!

let questionCount;
let scoreCount;

function startQuiz() {
    questionCount = 0;
    scoreCount = 0;
    quizCreator();
    document.getElementById("start_page").classList.add("hide");
    document.getElementById("question_page").classList.remove("hide");
    loadQuestion(0);
}

//Next Button
function displayNext() {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == questionsArray.length) {
        //hide question container and display score
        document.getElementById("question_page").classList.add("hide");
        document.getElementById("score_page").classList.remove("hide");
        //user score
        document.getElementById("result").innerHTML =
            "Your score is " + scoreCount + " out of " + questionCount;
    } else {
        //display questionCount
  //      countOfQuestion.innerHTML =
 //         questionCount + 1 + " of " + questionsArray.length + " Question";
        //display quiz
        loadQuestion(questionCount);
    }
}

//
function validateAnswer(userOption) {
    let userSolution = userOption.value;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    //if user clicked answer == correct option stored in object
    if (userSolution === questionsArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.value == questionsArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

// Restart (User clicks restart button)
function restart(){
    document.getElementById("start_page").classList.remove("hide");
    document.getElementById("score_page").classList.add("hide");
}

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

// Quiz creation
function quizCreator() { 
    let quizArea = document.getElementById("questions_area");
    questionsArray.sort (() => Math.random() - 0.5);
    for (let i of questionsArray) {
        i.options.sort (() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        let question_div = document.createElement("p");
        question_div.classList.add("question");
        question_div.innerHTML = i.question;
        div.appendChild(question_div);
        div.innerHTML += `
        <input type="radio" class="option-div" onclick="validateAnswer (this)" value="${i.options[0]}"/>
        <label>${i.options[0]}</label>
        <br>
        <input type="radio" class="option-div" onclick="validateAnswer (this)" value="${i.options[1]}"/>
        <label>${i.options[1]}</label>
        <br>
        <input type="radio" class="option-div" onclick="validateAnswer (this)" value="${i.options[2]}"/>
        <label>${i.options[2]}</label>
        <br>
        <input type="radio" class="option-div" onclick="validateAnswer (this)" value="${i.options[3]}"/>
        <label>${i.options[3]}</label>
        `;
        quizArea.appendChild(div);
    }
}

//Display quiz
function loadQuestion(questionCount) {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};
