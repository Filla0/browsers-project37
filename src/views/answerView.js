'use strict';
import {SKIP_THE_QUESTION,
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
   } from '../constants.js';
import { quizData } from '../data.js';
import { nextQuestion} from '../pages/questionPage.js';

/**
 * Create an Answer element
 * @returns {Element}
 */
let score = 0

 export const createAnswerElements = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;

    let correctAnswerScore = document.createElement('span')
    correctAnswerScore.textContent = 0;
    const correctAnswerMessage = document.createElement('div')
    correctAnswerMessage.classList.add('message')
    correctAnswerMessage.textContent = `You have answered ${score} question correct`

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  let answerClicked = false;

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.classList.add('answers')
    answersListElement.appendChild(answerElement);
    
    const selectedAnswer = function() {
      if(answerClicked === true){
        return
      }
      if(key === correctAnswer){
        answerElement.style.backgroundColor = 'rgb(0, 110, 3)'
        answerElement.style.transform = "scale(1.1)"
        answerElement.style.color = "white"

        correctAnswerMessage.textContent = `You have answered ${score +=1} question correct`

        const unableTheButton = document.getElementById(NEXT_QUESTION_BUTTON_ID)
        unableTheButton.removeAttribute('disabled')
        unableTheButton.style.backgroundColor = 'rgb(15, 83, 171)'
        unableTheButton.style.color = 'white'
        unableTheButton.classList.add('unable-button')
      } else {
        answerElement.style.backgroundColor = 'rgb(194, 2, 2)'
        answerElement.style.transform = "scale(1.1)"
        answerElement.style.color = "white"
      } 
      answerClicked = true
    }
    answerElement.addEventListener('click', selectedAnswer)

    const ShowRightAnswer = () => {
        if(key === correctAnswer){
          answerElement.style.backgroundColor = 'rgb(0, 110, 3)'
          answerElement.style.transform = "scale(1.1)"
          answerElement.style.color = "white"
          setTimeout(nextQuestion, 1500)
      }
    }

    document
      .getElementById(SKIP_THE_QUESTION)
      .addEventListener('click', ShowRightAnswer)
  }
  return correctAnswerMessage;
}
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};

