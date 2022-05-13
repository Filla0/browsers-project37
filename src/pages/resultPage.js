'use strict';
import { USER_INTERFACE_ID,
  CLOSE_BUTTON_ID
 } from '../constants.js';
import { createResultMessage } from '../views/resultView.js';

const userInterface = document.getElementById(USER_INTERFACE_ID)
userInterface.innerHTML = '';

// const resultMessage = document.createElement('div')
// userInterface.appendChild(resultMessage);

const viewResult = createResultMessage()
userInterface.appendChild(viewResult)


document
.getElementById(CLOSE_BUTTON_ID)
.addEventListener('click', closeApp);

const closeApp = () => {
  closeApp.close()
}
