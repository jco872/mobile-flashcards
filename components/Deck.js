import React, { Component } from 'react'
import { View, Text, Alert} from 'react-native'
import { connect } from 'react-redux'
import { black } from '../utils/colors'
import TextButton from './TextButton'
import styles from '../utils/styles'

class Deck extends Component {   
   startQuiz = () => {
    const { navigation, title, numCards } = this.props

    if (numCards === 0) {
      Alert.alert("Please add a card to this deck",
        [
          { text: 'OK' }
        ]
      )          
    } else {
      navigation.navigate('Quiz', { title })
    }
  }

  addCard = () => {
    const { title, navigation } = this.props
    navigation.navigate('AddCard', { title })  
  }

  render() {
    const { title, numCards } = this.props
 
    return (
      <View style={ styles.DeckContainer}>
        <View style= {styles.DeckCard }>
          <Text style={ styles.DeckHeader }>
            { title }
          </Text>
          <Text style={ styles.DeckSubHeader }>
            { numCards === 1
              ? numCards + ' card'
              : numCards + ' cards'
            }
          </Text>
        </View>
        <View>
          <TextButton
            style={ [styles.DeckButton, { backgroundColor: black }] }
            onPress={ this.startQuiz }>
              Start Quiz
          </TextButton>
          <TextButton
            style={ [styles.DeckButton, { backgroundColor: black }] }
            onPress={ this.addCard }>
              Add Card
          </TextButton>
          </View>
      </View>
    )
  }
}

function mapStateToProps(decks, { navigation }) {
  const { title } = navigation.state.params
  const numCards = decks[title].questions.length
  const deck = decks[title];
  return {
    deck,
    title,
    numCards
  }
}

export default connect(mapStateToProps)(Deck)