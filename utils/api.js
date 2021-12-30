import AsyncStorage  from '@react-native-async-storage/async-storage'
import { DECK_STORAGE_KEY, setData } from './_DATA'

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(setData)
}

export function addDeck({entry, key}) {  
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}