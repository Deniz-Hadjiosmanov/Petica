

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
        // Big birds
        let quizEndHTML =
            `
        <h2 class='score'> YOUR IDEAL BIRD:</h2>
        <div class="wrapper">
        <div class="main_fish">
        <center>
        <img class="fish_img3" src="images/bird/africangrey1.png">
        <h3 class='score'>African Grey</h3>
        <p class='score'>
        African greys are known as having the outstanding ability to earn a human word and imitate speech, they earned the title "The Einstein of the Bird World".
        This might be the perfect pet for you, since they can bond strongly with you and learn positive reinforcement training from you , as his new owner.</p>
        </center>
        </div>
        <div class="other-consider">
        <h3 class='score'> ALSO CONSIDER</h3>
        <img class="fish_img3" src="images/bird/conures1.png">
        <h4 class='score'> Conures</h4>
        <img class="fish_img3" src="images/bird/macaws1.png">
        <h4 class='score'> Macaws</h4>
        </div>

       
        </div>
       
        <div class="quiz-repeat">
        <a href="shops.html">Find my pet</a>
        </div>
        
        `;
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = quizEndHTML;
    }
    // small birds
    else {
        let quizEndHTML =
            `
        <h2 class='score'> YOUR IDEAL BIRD:</h2>
        <div class="wrapper">
        <div class="main_fish">
       <center>
        <img class="fish_img3" src="images/bird/parkeet1.png">
        
        <h3 class='score'> Parakeet</h3>
         Parakeets are one of the top birds worldwide as a pet, they are tiny parrot versions with long tail feathers.
        This may be the perfect pet for you,since they can be trained on how to talk and also perform tricks. This pet bird is also pretty low-maintenance. </p>
        </center>
        </div>
       
        <div class="other-consider">
        <h3 class='score'> ALSO CONSIDER</h3>
        <img class="fish_img3" src="images/bird/parrot1.png">
        <h4 class='score'>Parrot</h4>
        <img class="fish_img3" src="images/bird/cockatiel1.png">
        <h4 class='score'>Cockatiel</h4>
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
};

var image = document.getElementById('myImage');


// create questions here


let questions = [
    new Question(
        "", ["Apartment", "Studio", "Student House", "Family Home"], "Family Home"
    ),
    new Question(
        "", ["Yes", "No", "Not Sure", "No but someone in my family has"], "No"
    ),
    new Question(
        "", ["5 to 10 years", "15 to 20 years", "20 years", "40 years"], "40 years"
    ),
    new Question(
        "", ["Usually all day", "Often", "Not home very often", "Mostly in the evenings and afternoons"], "Often"
    ),
    new Question(
        "", ["Big", "Small", "Average", "No preference"], "Big"
    )
];

//Changes the piture each question
function pictureChange() {
    document.querySelector('#myImage').setAttribute("src", `images/bird/step${quiz.questionIndex + 1}.png`)

}




//index comparing insted the string^

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
pictureChange();

displayQuestion();



