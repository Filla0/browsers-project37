'use strict';

import { quizData } from '../data.js';
import { nextQuestion } from '../pages/questionPage.js';

/**
 * Create an Answer element
 * @returns {Element}
 */
let score = 0

 export const getAnswerElements = (answersListElement, nextQuestionButton) => {
   
   const currentQuestion = quizData.questions[quizData.currentQuestionIndex]
   const correctAnswer = currentQuestion.correct
   
  const correctAnswerMessage = document.createElement('div')
  correctAnswerMessage.classList.add('message')
  correctAnswerMessage.textContent = `You have answered ${score} question correct`

   let answerClicked = false;
   
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText)
    answerElement.classList.add('answers')
    answersListElement.appendChild(answerElement)
    
    const selectedAnswer = function() {
      if(answerClicked === true){
        return
      }
      if(key === correctAnswer){
        answerElement.style.backgroundColor = 'rgb(0, 110, 3)'
        answerElement.style.transform = "scale(1.1)"
        answerElement.style.color = "white"

        correctAnswerMessage.textContent = `You have answered ${score +=1} question correct`

        nextQuestionButton.removeAttribute('disabled')
        nextQuestionButton.style.backgroundColor = 'rgb(15, 83, 171)'
        nextQuestionButton.style.color = 'white'
        nextQuestionButton.classList.add('unable-button')
      } else {
        answerElement.style.backgroundColor = 'rgb(194, 2, 2)'
        answerElement.style.transform = "scale(1.1)"
        answerElement.style.color = "white"
      } 
      answerClicked = true
    }

    answerElement.addEventListener('click', selectedAnswer)
  }
  return correctAnswerMessage;
}

export const ShowRightAnswer = (answerListElement) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex]
  const questions = quizData.questions

  if(quizData.currentQuestionIndex !== questions.length-1){
  let i = 0;
  for (const key of Object.keys(currentQuestion.answers)) {
    if (key === currentQuestion.correct) {
      let answerElement = answerListElement[i]
      answerElement.style.backgroundColor = 'rgb(0, 110, 3)'
      answerElement.style.transform = "scale(1.1)"
      answerElement.style.color = "white"
      setTimeout(nextQuestion, 1500)
    } i++ }
  } else {
    let i = 0;
    for (const key of Object.keys(currentQuestion.answers)) {
      if (key === currentQuestion.correct) {
        let answerElement = answerListElement[i]
        answerElement.style.backgroundColor = 'rgb(0, 110, 3)'
        answerElement.style.transform = "scale(1.1)"
        answerElement.style.color = "white"
      }
    } 
  }
}

export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText}
  `;
  return element;
};

