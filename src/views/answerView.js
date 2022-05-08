'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  element.addEventListener('mouseover', function(event) {
    event.target.style.color = 'orange'
 
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

element.addEventListener('click', function() {
  // for(let i = 0; i < key.length; i++) {
  // if(key[i] === correct){
    const message = document.createElement('p')
    element.appendChild(message)
    message.innerHTML = 'correct answer'
//   }
// }
})


return element;
};
