'use strict';
import {
  // USER_INTERFACE_ID,
  CLOSE_BUTTON_ID
 } from '../constants.js';
 import {ShowRightAnswer} from '../views/answerView.js'

 
 export const createResultPage = () => {
  const resultMessage = document.createElement('div');
  resultMessage.innerHTML = `
  <h1> Your score is 
  from 10 </h1>
  `
  return resultMessage
}

// ${ShowRightAnswer()}