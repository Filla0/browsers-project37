'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  
  questions: [
    {
      text: 'Which typically Dutch dish originates from Rotterdam?',
      answers: {
        a: 'Poffertjes',
        b: 'Erwtensoep',
        c: 'Kapsalon',
        d: 'Bamischijf'
      },
      correct: 'c',
    },
    {
      text: 'what is the nickname of the Rotterdam artwork Santa Claus?',
      answers: {
        a: 'Weihnachtsmann',
        b: 'The buttplug Gnome',
        c: 'Papai Noel',
        d: 'Kris Kringle',
      },
      correct: 'b',
    },
    {
      text: 'Which saint is celebrated on November 11th?',
      answers: {
        a: 'Sint Michielsgestel',
        b: 'Sint Nicolaas (Saint Nicholas)',
        c: 'Sint Maarten (Saint Martin)',
        d: 'Sint Oedenrode',
      },
      correct: 'c',
    },
    {
      text: 'What is the Dutch city of light?',
      answers: {
        a: 'Maastricht',
        b: 'Breda',
        c: 'Eindhoven',
        d: 'Rotterdam'
      },
      correct: 'c',
    },
    {
      text: 'Cheese is NOT made in which of these cities?',
      answers: {
        a: 'Gouda',
        b: 'Stolwijk',
        c: 'Leerdam',
        d: 'Alkmaar'
      },
      correct: 'd',
    },
    {
      text: 'Who is the most popular saint in the Netherlands?',
      answers: {
        a: 'Saint Nicholas',
        b: 'Saint Juttemis',
        c: 'Saint Patrick',
        d: 'Saint Valentine'
      },
      correct: 'a',
    },
    {
      text: 'How long have the Dutch been making cheese?',
      answers: {
        a: '1000 years old',
        b: '1600 years old',
        c: '900 years old',
        d: '50 years old'
      },
      correct: 'b',
    },
    {
      text: 'What is a typical Dutch snack when having a drink?',
      answers: {
        a: 'Hagelslag ',
        b: 'Stroopwafels ',
        c: 'Stamppot ',
        d: 'Bitterballen'
      },
      correct: 'd',
    },
    {
      text: 'How many tropical days does The Netherlands count a year?', 
      answers: {
        a: '2 to 5 days a year',
        b: '5 to 8 days a year',
        c: '15 to 23 days a year',
        d: '20 to 23 days a year'
      },
      correct: 'a',
    },
    {
      text: 'Which typically Dutch dish originates from Rotterdam?',
      answers: {
        a: 'Poffertjes',
        b: 'Erwtensoep',
        c: 'Kapsalon',
        d: 'Bamischijf'
      },
      correct: 'c',
    }
  ]
};
