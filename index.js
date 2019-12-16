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
        <input class="radio" type="radio" id="${i}" name="choice" values="${options[i]}"required>
        <span class="answer-one-text">${options[i]}</span>
        </label>`);
    }
    $('.questions').css('display', 'block');
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
    $('#quiz').submit(function(event){
        event.preventDefault();
        const answerId = $('input[name=choice]:checked', '#quiz').attr('id');
        const correctAnswer = answerCheck(answerId);
        $('.questions').css('display', 'none')
        if(correctAnswer === true){
           // alert("correct");
            $('.result').html('Correct!!').css('color', 'green');
        }
        else{
            $('.result').html('Incorrect').css('color', 'red');
        }
        $('#answer-to-quiz').html(`${STORE.questions[STORE.currentQuestion-1].options[STORE.questions[STORE.currentQuestion-1].answer]}`);
        $('.explanation').html(`${STORE.questions[STORE.currentQuestion-1].explanation}`);
        $('.answer').css('display', 'block');
    }); 
}

//This function checks the answer and return true or false
function answerCheck(item){
   if(STORE.questions[STORE.currentQuestion-1].answer == item){
       STORE.correctAnswers++;
       return true;
   }
   else{
       return false;
   }
}

//This function is used to transition to the answer to the next quiz or to the ending section 
function nextQuiz(){
    
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
    showAnswer();
}

$(runTheQuiz);