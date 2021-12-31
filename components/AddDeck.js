import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView,
         TouchableOpacity, Alert, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../utils/api'
import { addDecks } from '../actions'
import { black, white } from '../utils/colors'

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
    this.setState({ title })
  }

  submit = () => {
    const { dispatch } = this.props
    const { title } = this.state
    const key = this.state.title

    if (title.length === 0) {
      Alert.alert("Please enter a title for the deck",
        [{ text: 'OK' }]
      )     
    } else {
      const entry = {
        title,
        questions: []
      }

      dispatch(addDecks({
        [key]: entry
      }))

      this.setState({title: ''})
      this.navigateToDecks(title);

      addDeck({ key, entry })
    }
  }

  navigateToDecks = (title) => {
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

        <SubmitBtn onPress={ this.submit } style={ styles.SubmitBtn, {marginTop: 75} }/>
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

const styles = StyleSheet.create({
  AddDeckSubmitBtn: {
    backgroundColor: black,
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    marginLeft: 60,
    padding: 10,
    marginRight: 60
  },
  AddDeckSubmitBtnText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center'
  },  
  AddDeckContainer: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'flex-start'

  },
  AddDeckHeader: {
    fontSize: 36,
    fontWeight: '700',
    marginTop: 20,
    color: black,
    marginBottom: 10
  },
  InputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    },
  Input: {
    fontSize: 20,
    color:black,
    padding: 30,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 100,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20
  },
});
