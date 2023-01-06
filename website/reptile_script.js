

// create a Quiz class
class Quiz {
    constructor(questions) {
        //refer to score
        this.score = 0;
        //refer to questions
        this.questions = questions;
        //refer to question index
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        //guess if the question is correct and increase the score with 1
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
            //console.log("right answer")
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// create the back button and append it to the quiz element
let backButton = document.createElement("button");
backButton.innerHTML = "Back";
backButton.style.backgroundColor = "rgb(43 41 41)";
backButton.style.color = "#FFC800";
backButton.style.borderColor = "#FFC800";
backButton.style.borderWidth = "4px";
backButton.style.height = "50px";
backButton.style.width = "67px";
backButton.style.borderRadius = "50%";
backButton.onclick = function () {
    quiz.questionIndex--;
    displayQuestion();
    pictureChange();
}
let quizElement = document.getElementById("quiz");
quizElement.appendChild(backButton);

// this function displays the questions in the container
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
    }

    // hide or show the back button based on the current questionIndex
    if (quiz.questionIndex === 0) {
        backButton.style.display = "none";
    } else {
        backButton.style.display = "inline-block";
    }
};

// GUESS ANSWER
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        displayQuestion();
        pictureChange();
    }
};

// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

// Show the final result based on the answers
function showScores() {
    //console.log(quiz.score)
    if (quiz.score >= 4) {
        // reptile that sheds
        let quizEndHTML =
            `
        <h2 id='score'> YOUR IDEAL reptile:</h2>
            <div class="wrapper">
                <div class="main_fish">
                    <center>
                        <img class="fish_img" src="images/reptile/leopard_gecko.jpg">
                        <h3 id='score'>Leapard Gecko</h3
                        <p id='score'>Leapard Gecko's are small, have minimal care requirements, and can be left alone for several days if necessary. 
                        They are also quiet, don't smell, and don't need a lot of attention.</p>
                    </center>
                </div>
                    <div class="other-consider">
                        <h3 id='score'> ALSO CONSIDER</h3>
                        <img class="fish_img2" src="images/reptile/Bearded_Dragon.jpg">
                        <h4 id='score'>Bearded Dragon</h4>
                        <img class="fish_img2" src="images/reptile/tortouse.jpg">
                        <h4 id='score'>Tortoise</h4>
                    </div>
                </div>
        <div class="quiz-repeat">
            <a href="shops.html">Find my pet</a>
        </div>
        `;
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = quizEndHTML;
    }
    // reptile that doesn't shed
    else {
        let quizEndHTML =
            `
        <h2 id='score'> YOUR IDEAL reptile:</h2>
            <div class="wrapper">
                <div class="main_fish">
                    <center>
                        <img class="fish_img" src="images/reptile/leopard_gecko.jpg">
                        <h3 id='score'>Leapard Gecko</h3
                        <p id='score'>Leapard Gecko's are small, have minimal care requirements, and can be left alone for several days if necessary. 
                        They are also quiet, don't smell, and don't need a lot of attention.</p>
                    </center>
                </div>
                    <div class="other-consider">
                        <h3 id='score'> ALSO CONSIDER</h3>
                        <img class="fish_img2" src="images/reptile/Bearded_Dragon.jpg">
                        <h4 id='score'>Bearded Dragon</h4>
                        <img class="fish_img2" src="images/reptile/tortouse.jpg">
                        <h4 id='score'>Tortoise</h4>
                    </div>
                </div>
        <div class="quiz-repeat">
            <a href="shops.html">Find my pet</a>
        </div>
        `;
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = quizEndHTML;
    }
};

var image = document.getElementById('myImage');


// create questions here


let questions = [
    new Question(
        "", ["Big", "Normal", "Small"], "Big"
    ),
    new Question(
        "", ["Twice a week", "Once a week", "Once every 2 weeks"], "Twice a week"
    ),
    new Question(
        "", ["5-7 years", "20-25 years", "more then 25 years"], "No"
    ),
    new Question(
        "", ["yes", "no",], "yes"
    ),
    new Question(
        "", ["I dont have one ", "less then 200", "more then 200>"], "No"
    ),
    new Question(
        "", ["Yes", "No", "I dont know"], "No"
    ),
    new Question(
        "", ["Yes", "No", "I dont know"], "No"
    )
];

//Changes the piture each question
function pictureChange() {
    document.querySelector('#myImage').setAttribute("src", `images/reptile/step${quiz.questionIndex + 1}.png`)

}




//index comparing insted the string^

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
pictureChange();

displayQuestion();



