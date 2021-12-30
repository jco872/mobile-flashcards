import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from '../utils/styles'

class DeckCard extends Component {
  handleDeckCardRoute = () => {
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
        <TouchableOpacity onPress={ this.handleDeckCardRoute }>
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
