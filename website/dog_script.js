
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
backButton.onclick = function() {
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
        //Dog person 
        let quizEndHTML =
        `
        <h2 class='score'> YOUR IDEAL DOG:</h2>
        <div class="wrapper">
        <div class="main_fish">
       <center>
        <img class="fish_img" src="https://images.pexels.com/photos/686094/pexels-photo-686094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        
        <h3 class='score'> Golden Retrever</h3>
        <p class='score'>The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. They are great family pets and may shed but theyre loving nature more than covers for this.</p>
        </center>
        </div>
       
        <div class="other-consider">
        <h3 class='score'> ALSO CONSIDER</h3>
        <img class="fish_img2" src="https://images.pexels.com/photos/998251/pexels-photo-998251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <h4 class='score'> Labrador</h4>
        <img class="fish_img2" src="https://images.pexels.com/photos/342214/pexels-photo-342214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <h4 class='score'> German Shepard</h4>
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
    // Cat person
    else {
        let quizEndHTML =
        `
        <h2 class='score'> YOUR IDEAL DOG:</h2>
        <div class="wrapper">
        <div class="main_fish">
       <center>
        <img class="fish_img" src="https://puppytoob.com/wp-content/uploads/2015/08/cavalier1.jpg">
        
        <h3 class='score'>Cavalier King Charles Spaniel</h3>
        <p class='score'>They’re small and they do not love too much to walk all the time. What they do love, however, is to spend their time doing what they love the most, which is sitting with you and relaxing. Some time playing in the yard and some short walks will be perfect for this particular breed.</p>
        </center>
        </div>
       
        <div class="other-consider">
        <h3 class='score'> ALSO CONSIDER</h3>
        <img class="fish_img2" src="https://puppytoob.com/wp-content/uploads/2015/08/english-bulldog.jpg">
        <h4 class='score'> English Bulldog</h4>
        <img class="fish_img2" src="https://puppytoob.com/wp-content/uploads/2015/08/bassett-hound.jpg">
        <h4 class='score'>Bassett Hound</h4>
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
        "", ["Apartment", "Studio", "Student House", "Family Home"], "Family Home"
    ),
    new Question(
        "", ["Every day", "3-4 times a week", "1-2 times a week", "I do not want to walk"], "Every day"
    ),
    new Question(
        "", ["Yes, but its small", "Yes, a large piece of land", "No, but I live near a park", "No"], "Yes, a large piece of land"
    ),
    new Question(
        "", ["Yes", "No", "Yes, but they are not that bad", "No, but somone in my house does"], "No"
    ),
    new Question(
        "", ["No", "Yes", "No, but one is on the way", "No, but family likes to vist"], "No"
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