'use strict';
import {
  USER_INTERFACE_ID,
  CLOSE_BUTTON_ID
 } from '../constants.js';
 import {ShowRightAnswer} from '../views/answerView.js'


const userInterface = document.getElementById(USER_INTERFACE_ID)
userInterface.innerHTML = '';

export const createResultMessage = () => {
  const resultMessage = document.createElement('div');
  resultMessage.innerHTML = `
  <h1> Your score is ${ShowRightAnswer} from 10 </h1>
  <button id="${CLOSE_BUTTON_ID}">Close</button>
  `
}
