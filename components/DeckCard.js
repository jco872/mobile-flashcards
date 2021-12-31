import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { black, white } from '../utils/colors'

class DeckCard extends Component {
  navigateToDeck = () => {
    const { numCards, title, navigation } = this.props

    navigation.navigate('Deck', {
      title,
      numCards
    })
  }

  render() {
    const { title, numCards } = this.props

    return (
      <View style={ styles.Card }>
        <TouchableOpacity onPress={ this.navigateToDeck }>
            <Text style={ styles.CardHeader }>
            { title }
          </Text>
          <Text style={ styles.CardSubHeader }>
            { numCards === 1
              ? numCards + ' card'
              : numCards + ' cards'
            }
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(decks, { title, navigation }) {
  const numCards = decks[title].questions.length

  return {
    title,
    numCards,
    navigation
  }
}

export default connect(mapStateToProps)(DeckCard)

const styles = StyleSheet.create({
  Card: {
    backgroundColor: black,
    borderRadius: 5,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 100,
    marginRight: 100,
    justifyContent: 'center',
    shadowRadius: 8,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  CardHeader: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: white,
    marginBottom: 15
  },
  CardSubHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: white,
    marginBottom: 10,
    textAlign: 'center'
  }
});
