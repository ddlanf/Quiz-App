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
    adjustQuestionSize(question, options);
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
        const explanation = getExplanation();
        const answerToQuiz = getAnswerToQuiz();
        $('.questions').css('display', 'none')
        if(correctAnswer === true){
           // alert("correct");
            $('.result').html('Correct!!').css('color', 'green');
        }
        else{
            $('.result').html('Incorrect').css('color', 'red');
        }
        $("img.quiz-picture").attr("src", `images/Q${STORE.currentQuestion}_answer.jpg`);
        $('#answer-to-quiz').html(`${answerToQuiz}`);
        $('.explanation').html(`${explanation}`);
        checkIfResetIsNeeded(5);
        adjustAnswerSize(explanation, answerToQuiz);
        $('.answer').css('display', 'block');
    }); 

}
//Function grabs the answer
function getExplanation(){
    return STORE.questions[STORE.currentQuestion-1].explanation;
}

//Function grabs the answer
function getAnswerToQuiz(){
    return STORE.questions[STORE.currentQuestion-1].options[STORE.questions[STORE.currentQuestion-1].answer];
};


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
        resetFontSizeAndMargin();
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
        resetFontSizeAndMargin();
        resetValues();
    });
} 

//This function restarts the quiz from the ending page
function restartQuiz(){
    $('.reset').click(function(event){
        $(this).closest('section').css('display', 'none');
        resetFontSizeAndMargin();
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

//This function adjust the font size of questions
function adjustQuestionSize(question, options){
   //alert(parseInt($('.question').css('font-size'), 10));
   currentQuestionSize = parseInt($('.question').css('font-size'), 10);
   currentOptionSize = parseInt($('.choice').css('font-size'), 10);
   const NumberOfStrings = options.map(function(string){ return string.length });
   const sumOfStringNumbers = NumberOfStrings.reduce(function(a, b){ return a + b });
   const averageNumberOfStrings = sumOfStringNumbers/options.length;
   
   if(averageNumberOfStrings > 6 && averageNumberOfStrings < 50){
    $('.choice').css('font-size',`${currentOptionSize-5}px`);
    $('.choice-4').css('margin-bottom',`px`);
        if(question.length >= 40 && question.length <  60){
            $('.question').css('font-size',`${currentQuestionSize-3}px`);
        }
        else if(question.length >= 150){
            $('.question').css('font-size',`${currentQuestionSize-20}px`);
        }
   }
   else if(averageNumberOfStrings >= 50){
    $('.choice').css({'font-size':`${currentOptionSize-20}px`, 'margin-top':`3px`});
    $('.choice-4').css('margin-bottom',`5px`);
        if(question.length >= 40 && question.length <  60){
            $('.question').css('font-size',`${currentQuestionSize-3}px`);
        }
        else if(question.length >= 150){
            $('.question').css('font-size',`${currentQuestionSize-20}px`);
        }
   }
 
   //alert(`${question.length} : ${averageNumberOfStrings}`);
}

//This function adjust the font size of answers
function adjustAnswerSize(explanation, answer){
   currentAnswerSize = parseInt($('.answer-to-quiz-p').css('font-size'), 10);
   currentExplanationSize = parseInt($('.explanation').css('font-size'), 10);
  // alert(`${explanation.length} | ${answer.length}`);
   
   if(explanation.length > 120 && explanation.length < 150){
    $('.explanation').css('font-size',`${currentExplanationSize-1}px`);
        if(answer.length >= 10 && answer.length < 15){
            $('.answer-to-quiz-p').css('font-size',`${currentAnswerSize-2}px`);
        }
        else if(answer.length >= 15){
            $('.answer-to-quiz-p').css('font-size',`${currentAnswerSize-8}px`);
        }
   }
   else if(explanation.length >= 150 && explanation.length < 200){
    $('.explanation').css('font-size',`${currentExplanationSize- 3}px`);
    
        if(answer.length >= 10 && answer.length < 15){
            $('.answer-to-quiz-p').css('font-size',`${currentAnswerSize-5}px`);
        }
        else if(answer.length >= 15){
            $('.answer-to-quiz-p').css('font-size',`${currentAnswerSize-10}px`);
        }
   }
   else if(explanation.length > 200){
    $('.explanation').css('font-size',`${currentExplanationSize- 10}px`);
    
        if(answer.length >= 10 && answer.length < 15){
            $('.answer-to-quiz-p').css('font-size',`${currentAnswerSize-5}px`);
        }
        else if(answer.length >= 15){
            $('.answer-to-quiz-p').css('font-size',`${currentAnswerSize-11}px`);
        }
   }

}

function resetFontSizeAndMargin(){
    $('.question').css('font-size',`45px`);
    $('.choice').css('font-size',`40px`);
    $('.choice-4').css('margin-bottom',`15px`);
    $('.explanation').css('font-size',`30px`);
    $('.answer-to-quiz-p').css('font-size',`40px`);
}

function runTheQuiz(){
    startQuiz();
    showAnswer();
    nextQuiz();
    restartQuiz();
}

//This function adjusts the font size for each element
$(runTheQuiz);