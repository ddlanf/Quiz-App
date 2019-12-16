//This function starts the quiz and transition to the first question
function startQuiz(){
    console.log('Running startQuiz()');
   $('#start').click(function(event){
     $('.quiz-start').css('display', 'none');
     renderQuiz();
   }
   );
}

//This function renders the Quiz
function renderQuiz(){
    const question = getQuestion(STORE);
    const options = getOptions(STORE);
    $('.question').html(`Q${STORE.currentQuestion}. ` + question);
    for(let i = 0; i < options.length; i++){
        $('.four-choices').append(`
        <label class="choice choice-${i+1}" for="choice">
        <input class="radio" type="radio" id="answer-${i+1}" value="answer-${i+1}" name="choice" required>
        <span class="answer-one-text">${options[i]}</span>
        </label>`);
    }
    $('.questions').css('display', 'block')
}

//This function grabs the question from the object
function getQuestion(item){
    console.log('Running getQuestion()');
    return item.questions[item.currentQuestion-1].question;
}

//This function grabs the 
function getOptions(item){
    console.log('Running getOptions()');
    return item.questions[item.currentQuestion-1].options;
}

//This function is used to transition to the answer screen and shows the answer
function showAnswer(){

}

//This function checks the answer and return true or false
function answerCheck(){
    console.log('Running answerCheck()');
}

//This function is used to transition to the answer to the next quiz or to the ending section 
function nextQuiz(){
    console.log('Running showQuiz()');
}

//This function restarts the quiz
function restartQuiz(){
    console.log('Running restartQuiz()');
} 

//This function updates progress and score
function updateProgressAndScore(){
    console.log('Running updateProgressAndScore()');
}

//This function restarts the quiz from the ending page
function restartQuiz(){
    console.log('Running restartQuiz()');
}

function runTheQuiz(){
    startQuiz();
    getQuestion();
    getOptions();
    showAnswer();
    nextQuiz();
    restartQuiz();
    updateProgressAndScore();
    restartQuiz();
}

$(runTheQuiz);