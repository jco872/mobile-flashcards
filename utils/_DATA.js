import AsyncStorage  from '@react-native-async-storage/async-storage'

export const DECK_STORAGE_KEY = 'Flashcards:Udacity'

export function setData(savedData) {
  let Decks; 

  if (JSON.parse(savedData) !== null) {
    Decks = JSON.parse(savedData);
  } else {
   Decks = {
      React: {
        title: 'React',
        questions: [ 
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          },
          {
            question: 'What are the two ways to create a component in React?',
            answer: 'Using a class component or a functional component'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          },
          {
            question: 'Assigning a value to a variable that has not been declared has what scope?',
            answer: 'Global'
          },
          {
            question: 'ECMAScript 2015 is also known as what?',
            answer: 'ES6'
          }
        ]
      }
    }
  }

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(Decks))

  return Decks
}