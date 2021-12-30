import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView,
   TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import styles from '../utils/styles'
import { addDeck } from '../utils/api'
import { addDecks } from '../actions'

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={ styles.AddDeckSubmitBtn }
      onPress={ onPress }>
        <Text style={ styles.AddDeckSubmitBtnText }>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddDeck extends Component {
  state = {
    title: ''
  }

  handleChange = (title) => {
    this.setState(() => ({ title }))
  }

  submit = () => {
    const { dispatch } = this.props
    const { title } = this.state
    const key = this.state.title
    // Adding same alert to test it on web.
    if (title.length === 0) {
      Alert.alert("You haven't entered a title for the new deck",
        [
          { text: 'OK' }
        ]
      )     
    } else {
      const entry = {
        title,
        questions: []
      }

      dispatch(addDecks({
        [key]: entry
      }))

      this.setState(() => ({
        title: ''
      }))

      this.moveToDecks(title);

      addDeck({ key, entry })
    }
  }

  moveToDecks = (title) => {
    const { navigation } = this.props
    navigation.navigate('Deck', { title })
  }

  render() {
    const value = this.state.title

    return(
      <View style={ styles.AddDeckContainer }>
        <Text style={ styles.AddDeckHeader }>
          Create Deck
        </Text>
        <KeyboardAvoidingView style={ styles.InputContainer } behavior='padding' enabled>
          <View>
          <TextInput
            style={ styles.Input }
            placeholder={ 'Deck Title' }
            value={ value }
            onChangeText={ this.handleChange }
           />
          {/* Pressing the button correctly creates the deck */}
        <SubmitBtn onPress={ this.submit } style={ styles.SubmitBtn , {marginTop: 100,} }/>
        </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}


function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(AddDeck)
