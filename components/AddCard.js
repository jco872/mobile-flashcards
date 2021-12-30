import React, { Component } from 'react'
import { View, TextInput, KeyboardAvoidingView, Alert} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { addCardToDeck } from '../actions'
import TextButton from './TextButton'
import { black } from '../utils/colors'
import styles from '../utils/styles'

class AddCard extends Component {
   state = {
    question: '',
    answer: ''
  }

  handleQuestionCard = (question) => {
    this.setState(() => ({ question }))
  }

  handleAnswerCard= (answer) => {
    this.setState(() => ({ answer }))
  }

  handleAddCard = () => {
    const { dispatch, title } = this.props
    const { question, answer } = this.state

    if (question.length === 0 && answer.length === 0) {
      Alert.alert(
        "Please Enter a question & answer",
        [
          { text: 'OK' }
        ]
      )    
    } else {
      const card = {
        question,
        answer
      }

      dispatch(addCardToDeck(title, card))
      this.setState(() => ({
        question: '',
        answer: ''
      }))

      this.goBack()
    }
  }
  goBack = () => {
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
                onChangeText={ this.handleQuestionCard }
                multiline={ true }
                numberOfLines={ 3 }
                maxLength={ 100 }
              />
              <TextInput
                style={ styles.AddCardInput }
                placeholder={ 'Answer' }
                value={ answer }
                onChangeText={ this.handleAnswerCard}
                multiline={ true }
                numberOfLines={ 3 }
                maxLength={ 100 }
              />
            </View>
            <TextButton
              style={ [styles.AddCardButton, { marginTop: 100,  backgroundColor: black}] }
              onPress={ this.handleAddCard }>
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
