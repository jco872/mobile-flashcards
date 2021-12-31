import React, { Component } from 'react'
import { View, Text, Alert, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { black, white } from '../utils/colors'

class Deck extends Component {   
   startQuiz = () => {
    const { navigation, title, numCards } = this.props

    if (numCards === 0) {
      Alert.alert("Please add a card to this deck before starting",
        [{ text: 'OK' }]
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

const styles = StyleSheet.create({
  DeckContainer: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'space-around',
  },
  DeckCard: {
    backgroundColor: black,
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    shadowRadius: 8,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  DeckHeader: {
     fontSize: 42,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    color: white
  },
  DeckSubHeader: {
    fontSize: 24,
    fontWeight: '700',
    color: white,
    marginBottom: 10,
    textAlign: 'center'
  },
  DeckButton: {
    borderRadius: 8,
    marginLeft: 20,
    fontWeight: '700',
    marginRight: 20,
    marginBottom: 15
  },
});