

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

        showProgress();
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
        //Fish 1 
        let quizEndHTML =
            `
            <h2 id='score'> YOUR IDEAL FISH:</h2>
            <div class="wrapper">
            <div class="main_fish">
           <center>
            <img class="fish_img" src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/1433873-center-1">
            
            <h3 id='score'> GOLDEN WHITE CLOUD</h3>
            <p id='score'>Golden White Clouds are active, gold-colored fish that like to swim around the tank near the surface. They require a 10-gallon tank and are hardy, so they’re great for beginner aquarists. They like to swim with a school of fish, so consider getting some friends! </p>
            </center>
            </div>
           
            <div class="other-consider">
            <h3 id='score'> ALSO CONSIDER</h3>
            <img class="fish_img2" src="images/fish/gold.png">
            <h4 id='score'> Gold fish</h4>
            <img class="fish_img2" src="images/fish/betta.png">
            <h4 id='score'> Beta</h4>
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
    // Fish 2
    else {
        let quizEndHTML =
            `
        <h2 id='score'> YOUR IDEAL FISH:</h2>
        <div class="wrapper">
        <div class="main_fish">
        <center>
        <img class="fish_img" src="https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/3468522-center-1">
        <h3 id='score'> YELLOWTAIL DAMSELFISH</h3>
        <p id='score'>The Yellowtail Damselfish is no damsel in distress, but it does prefer to have a few hiding places and peaceful tankmates. It’s hardy, easy to care for, and beautiful, making it a great option for both beginner and advanced aquarists alike. </p>
        </center>
        </div>
        <div class="other-consider">
        <h3 id='score'> ALSO CONSIDER</h3>
        <img class="fish_img2" src="http://cdn.shopify.com/s/files/1/0443/5007/9132/products/Electricblueramcichlid_thumbnail_1200x1200.jpg?v=1615573573">
        <h4 id='score'> Electric Blue Cichlid</h4>
        <img class="fish_img2" src="https://thumbs.dreamstime.com/b/purple-firefish-15832463.jpg">
        <h4 id='score'> Purple Firefish</h4>
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
        "", ["Small", "Large","Not Sure"], "Small"
    ),
    new Question(
        "", ["Cool", "Warm", "Not Sure"], "Warm"
    ),
    new Question(
        "", ["Small", "Medium", "Large"], "Medium"
    ),
    new Question(
        "", ["Minimal", "Moderate", "Excessive"], "Moderate"
    ),
    new Question(
        "", ["Yes", "No", "Not Sure"], "Yes"
    )
];

//Changes the piture each question
function pictureChange() {
    document.querySelector('#myImage').setAttribute("src", `images/fish/step${quiz.questionIndex + 1}.png`)

}




//index comparing insted the string^

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
pictureChange();

displayQuestion();



