
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
        //Dog person 
        let quizEndHTML =
            `
        <h2 id='score'> You are a Dog person</h2>

        <center><img class="background" src="https://hips.hearstapps.com/vidthumb/images/gettyimages-155696335-1619709287.jpg?crop=1.00xw%3A0.376xh%3B0%2C0.225xh&resize=480%3A270">
        <br>
        <br>
         <br>
        <br>

        <div class="quiz-repeat">

        <a href="suggestor.html">Take Quiz Again</a>
        </div>
        `;
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = quizEndHTML;
    }
    // Cat person
    else {
        let quizEndHTML =
            `
        <h2 id='score'> You are a Cat Person</h2>
        <center><img class="background" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg?crop=0.670xw:1.00xh;0.147xw,0&resize=480:*">
        <br>
        <br>
        <br>
        <br>
        <div class="quiz-repeat">
        <a href="suggestor.html">Take Quiz Again</a>
        </div>
        `;
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = quizEndHTML;

    }
};

var image = document.getElementById('myImage');

function pictureChange() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    console.log(currentQuestionNumber)
    // if(currentQuestionNumber == 1){
    //     image.src = "step.png";
    // }
    // else if(currentQuestionNumber == 2)
    // {    image.src = "step1.png";}
    // else if(currentQuestionNumber == 3)
    // {    image.src = "step2.png";}
    // else if(currentQuestionNumber == 4)
    // {    image.src = "step3.png";}
    // else if(currentQuestionNumber == 5)
    // {    image.src = "step4.png";}
    // else{
    //     image.src = "step.png";
    // }
}

// create questions here
let questions = [
    new Question(
        "", ["1 time per week", "2-3 times per week", "Every day", "I do not clean"], "2-3 times per week"
    ),
    new Question(
        "", ["Once a week", "Once a month", "Every day", "3-4 times per week"], "Every day"
    ),
    new Question(
        "", ["I have plenty of space in my home, plus a backyard.", "Cozy, with an abundance of sunny windowsills.", "Pretty fly, with plenty of perches.", "It is perfect for me, but I am not so sure I want a pet roaming around…"], "I have plenty of space in my home, plus a backyard."
    ),
    new Question(
        "", ["Healthy. I can afford both routine and unexpected costs, if necessary.", "Basic. I can afford start-up supplies and inexpensive recurring costs.", "Pretty good, but I would like to avoid any major expenses.", "After the initial costs for a habitat and supplies, I would like to spend very little."], "Healthy. I can afford both routine and unexpected costs, if necessary."
    ),
    new Question(
        "", ["As much as it takes. I plan to work with a trainer and am looking forward to learning along with my pet.", "I would prefer a pet that does not require any training. ", "I am not against training, but I was not planning on it.", "A little bit. Tricks sound especially fun!"], "As much as it takes. I plan to work with a trainer and am looking forward to learning along with my pet."
    )
];



//Changes the piture each question
function pictureChange() {
    document.querySelector('#myImage').setAttribute("src", `steps/step${quiz.questionIndex + 1}.png`)

}




//index comparing insted the string^

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
pictureChange();

displayQuestion();



