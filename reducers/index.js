import {RECEIVE_DECKS, ADD_DECK, ADD_CARD_TO_DECK} from '../actions'

function decks(state = {}, action) {
  switch(action.type) {
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case ADD_CARD_TO_DECK:
      const { title, card } = action
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: state[title].questions.concat([card])
        }
      }
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }      
    default:
      return state
  }
}

export default decks