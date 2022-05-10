'use strict';

// import { nextQuestion } from '../pages/questionPage';
/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};

// const skipPage.addEventListener('click', function () {

// })

