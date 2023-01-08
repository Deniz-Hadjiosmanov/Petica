

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
        // Cat that sheds
        let quizEndHTML =
            `
            <h2 class='score'> YOUR IDEAL CAT:</h2>
            <div class="wrapper">
            <div class="main_fish">
           <center>
            <img class="fish_img" src="images/cat/persian_cat.png">
            
            <h3 class='score'> PERSIAN CAT</h3>
            <p class='score'>These cats have long, thick coats that require frequent grooming to maintain. They are known to shed frequqntly and may require daily grooming to control shedding. We believe that you will be able to pay enough attention to your new friend at home :) </p>
            </center>
            </div>
           
            <div class="other-consider">
            <h3 class='score'> ALSO CONSIDER</h3>
            <img class="fish_img2" src="images/cat/siberian_cat.png">
            <h4 class='score'> Siberian Cat</h4>
            <img class="fish_img2" src="images/cat/maine_coon_cat.png">
            <h4 class='score'> Maine Coon Cat</h4>
            </div>
    
           
            </div>
           
            <br>
            <br>
            <div class="quiz-repeat">
            <a href="shops.html">Find my pet</a>
            </div>
        `;
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = quizEndHTML;
    }
    // Cat that doesn't shed
    else {
        let quizEndHTML =
            `
        <h2 class='score'> YOUR IDEAL CAT:</h2>
        <div class="wrapper">
        <div class="main_fish">
        <center>
        <img class="fish_img" src="images/cat/devon_rex_cat.png">
        <h3 class='score'> DEVON REX CAT</h3>
        <p class='score'>These cats have short, thin coats that require minimal grooming. They are known to shed very little and may only require occasional grooming </p>
        </center>
        </div>
        <div class="other-consider">
        <h3 class='score'> ALSO CONSIDER</h3>
        <img class="fish_img2" src="images/cat/cornish_rex_cat.png">
        <h4 class='score'> Cornish Rex Cat</h4>
        <img class="fish_img2" src="images/cat/sphynx_cat.png">
        <h4 class='score'> Sphynx Cat</h4>
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
        "", ["Almost all day", "Half day", "During the evening"], "Almost all day"
    ),
    new Question(
        "", ["Yes", "No", "Not Sure"], "No"
    ),
    new Question(
        "", ["Twice a week", "Once a week", "Once every 2 weeks"], "Twice a week"
    ),
    new Question(
        "", ["Active", "Laid-back", "I don't have preferences"], "Active"
    ),
    new Question(
        "", ["Yes", "No", "There will be soon"], "No"
    )
];

//Changes the piture each question
function pictureChange() {
    document.querySelector('#myImage').setAttribute("src", `images/cat/step${quiz.questionIndex + 1}.png`)

}




//index comparing insted the string^

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
pictureChange();

displayQuestion();



