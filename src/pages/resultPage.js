'use strict';
import { USER_INTERFACE_ID,
  CLOSE_BUTTON_ID
 } from '../constants.js';
import { createResultPage } from '../views/resultView.js';
import { initQuestionPage } from './questionPage.js';

export const viewResult = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID)
  userInterface.innerHTML = '';

  const createResultMessage = createResultPage()
  userInterface.appendChild(createResultMessage)
}
