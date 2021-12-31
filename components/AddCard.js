import React, { Component } from 'react'
import { View, TextInput, KeyboardAvoidingView, Alert, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { addCardToDeck } from '../actions'
import TextButton from './TextButton'
import { black, white } from '../utils/colors'

class AddCard extends Component {
   state = {
    question: '',
    answer: ''
  }

  updateQuestion = (question) => {
    this.setState({ question })
  }

  updateAnswer= (answer) => {
    this.setState({ answer })
  }

  addCard = () => {
    const { dispatch, title } = this.props
    const { question, answer } = this.state

    if (question.length === 0 && answer.length === 0) {
      Alert.alert(
        "Please enter a question and answer.",
        [{ text: 'OK' }]
      )    
    } else {
      const card = {
        question,
        answer
      }

      dispatch(addCardToDeck(title, card))

      this.setState({
        question: '',
        answer: ''
      })

      this.back()
    }
  }
  back = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    const { question, answer } = this.state
      return(
        <View style={ styles.NewCardContainer }>
          <KeyboardAvoidingView style={ styles.AddCardInputContainer } behavior='padding' enabled>
            <View>
              <TextInput
                style={ styles.AddCardInput }
                placeholder={ 'Question' }
                value={ question }
                onChangeText={ this.updateQuestion }
                multiline={ true }
                numberOfLines={ 3 }
                maxLength={ 200 }
              />
              <TextInput
                style={ styles.AddCardInput }
                placeholder={ 'Answer' }
                value={ answer }
                onChangeText={ this.updateAnswer}
                multiline={ true }
                numberOfLines={ 3 }
                maxLength={ 200 }
              />
            </View>
            <TextButton
              style={ [styles.AddCardButton, { marginTop: 100,  backgroundColor: black}] }
              onPress={ this.addCard }>
              Add Card
            </TextButton>
          </KeyboardAvoidingView>
        </View>
    )
  }
}

function mapStateToProps(decks, { navigation }) {
  const { title } = navigation.state.params

  return {
    title
  }
}

export default connect(mapStateToProps)(AddCard)

const styles = StyleSheet.create({
  NewCardContainer: {
    flex: 1,
  },
  AddCardInputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: white,
  },
  AddCardInput: {
    fontSize: 22,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 60,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20
  },
  AddCardButton: {
    borderRadius: 8,
    textAlign: "auto",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 20
  }
});