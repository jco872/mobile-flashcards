import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { loadDecks } from '../actions'
import DeckCard from './DeckCard'
import styles from '../utils/styles'

class Decks extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    getDecks()
      .then((decks) => dispatch(loadDecks(decks)))
  }


  render() {
    const { decks } = this.props

    return (
      <View style={ styles.DecksContainer }>
        <ScrollView>
          <Text style={ styles.DecksHeader }>Decks</Text>
          { Object.keys(decks).map((deckName) => (
            <DeckCard
              key={ deckName }
              title={ decks[deckName].title }
              navigation={ this.props.navigation }
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks)
