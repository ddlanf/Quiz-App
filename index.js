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
    checkIfResetIsNeeded(1);
    const question = getQuestion(STORE);
    const options = getOptions(STORE);
    $('.option').remove();
    $('.question').html(`Q${STORE.currentQuestion}. ` + question);
    for(let i = 0; i < options.length; i++){
        $('.four-choices').append(`
        <label class="choice choice-${i+1} option" for="choice">
        <input class="radio option" type="radio" id="${i}" name="choice" values="${options[i]}"required>
        <span class="answer-one-text option">${options[i]}</span>
        </label>`);
    }
    $('.progress').html(`Question: ${STORE.currentQuestion}/5 | Score: ${STORE.correctAnswers}/5`);
    $('.questions').css('display', 'block');
}

//This function grabs the question from the object
function getQuestion(item){
    console.log('Running getQuestion()');
    return item.questions[item.currentQuestion-1].question;
}

//This function grabs the options
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
        $('quiz-picture').html(`<img src="images/Q1_answers.jpg" alt="Q1_answer">`);
        $('#answer-to-quiz').html(`${STORE.questions[STORE.currentQuestion-1].options[STORE.questions[STORE.currentQuestion-1].answer]}`);
        $('.explanation').html(`${STORE.questions[STORE.currentQuestion-1].explanation}`);
        checkIfResetIsNeeded(5);
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
    $('#next').click(function(event){
        if(STORE.currentQuestion < 5){
        STORE.currentQuestion++;
        $('.answer').css('display', 'none');
        renderQuiz();
        }
        else{
            endQuiz();
        }
    });
}

//This function is used to transition to the ending page
function endQuiz(){
    $('.answer').css('display', 'none');
    $('.score').html(STORE.correctAnswers +' out of 5');
    $('.quiz-end').css('display', 'block');

    $('#retry').click(function(event){
        $(this).closest('section').css('display', 'none');
        resetValues();
    });
} 

//This function restarts the quiz from the ending page
function restartQuiz(){
    $('.reset').click(function(event){
        $(this).closest('section').css('display', 'none');
        resetValues();
    });
}

function resetValues(){
    STORE.currentQuestion = 1;
    STORE.correctAnswers = 0;
    renderQuiz();
}

function checkIfResetIsNeeded(num){
    if(STORE.currentQuestion === num){ $('.reset').css('display', 'none'); }
    else{$('.reset').css('display', 'block');}
}
//This function adjust the font size
function adjustQuestionSize(questions, options){
    alert("hello");
}

function runTheQuiz(){
    startQuiz();
    showAnswer();
    nextQuiz();
    restartQuiz();
}

//This function adjusts the font size for each element


$(runTheQuiz);