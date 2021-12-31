import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import QuizScore from './QuizScore'
import { black, white } from '../utils/colors'

class Quiz extends Component {
  state = {
    questionIndex: 0,
    cardNumber: 1,
    showAnswer: false,
    correctAnswers: 0,
    incorrectAnswers: 0
  }
  toggleQuestionAnswer = () => {
    this.setState(({showAnswer}) => ({
      showAnswer: !showAnswer
    }))
  }
  handleCorrectAnswer = () => {
    this.setState(({questionIndex, cardNumber, correctAnswers}) => ({
      questionIndex: questionIndex + 1,
      cardNumber: cardNumber + 1,
      correctAnswers: correctAnswers + 1,
      showAnswer: false
    }))
  }
  handleIncorrectAnswer = () => {
    this.setState(({questionIndex, cardNumber, incorrectAnswers}) => ({
      questionIndex: questionIndex + 1,
      cardNumber: cardNumber + 1,
      incorrectAnswers: incorrectAnswers + 1,
      showAnswer: false
    }))
  }
  restartQuiz = () => {
    this.setState({
      questionIndex: 0,
      cardNumber: 1,
      showAnswer: false,
      correctAnswers: 0,
      incorrectAnswers: 0
    })
  }
  backToDeck = () => {
    const { deck, navigation } = this.props
    const title = deck.title
    navigation.navigate('Deck', { title })
  }

  render() {
    const { deck } = this.props
    const { questionIndex, cardNumber, showAnswer, correctAnswers, incorrectAnswers } = this.state
    const questions = deck.questions
    const numQuestions = questions.length
    const isFinished = cardNumber > numQuestions

    if (isFinished) {
      return (
        <QuizScore
          correctAnswers={ correctAnswers }
          incorrectAnswers={ incorrectAnswers }
          restartQuiz={ this.restartQuiz }
          backToDeck={ this.backToDeck }
        />
      )
    }
    
    const question = questions[questionIndex]; 

    return(
      <View style={ styles.QuizContainer }>
        <View style={ styles.QuizProgressContainer }>
          <Text style={ styles.QuizProgress }>{ `${cardNumber}/${numQuestions}`}</Text>
        </View>
        <View style={ styles.QuizContainer }>
          <View>
            <Text style={
                [styles.Question] }>
              { showAnswer
                ? question.answer
                : question.question
              }
            </Text>
            <TextButton
              style={ [styles.QuizAnswerBtn,
              { backgroundColor: black, justifyContent: 'center' }] }
              onPress={ this.toggleQuestionAnswer }>
                { showAnswer
                  ? 'View Question'
                  : 'View Answer'
                }
                
            </TextButton>
          </View>
          <View style={ styles.QuizButtonContainer }>
            <TextButton
              style={ [styles.QuizOptionBtn, { backgroundColor: black }] }
              onPress={ this.handleCorrectAnswer }>
                Correct
            </TextButton>
            <TextButton
              style={ [styles.QuizOptionBtn, { backgroundColor: black }] }
              onPress={ this.handleIncorrectAnswer }>
                Incorrect
            </TextButton>
          </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps(decks, { navigation }) {
  const { title } = navigation.state.params
  const deck = decks[title]

  return {
    deck
  }
}

export default connect(mapStateToProps)(Quiz)

const styles = StyleSheet.create({
  QuizContainer: {
    flex: 1,
    backgroundColor: white
  },
  QuizProgressContainer: {
    flex: 1,
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    height: 50,   
  },
  QuizProgress: {
    fontSize: 26,
    fontWeight: '600'
  },
  Question: {
   fontSize: 36,
   fontWeight: '700',
   textAlign: 'center',
   marginBottom: 15
  },
  QuizButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  QuizAnswerBtn: {
    borderRadius: 8,
    justifyContent: 'center',
    width: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 15
  },
  QuizOptionBtn: {
    borderRadius: 8,
    marginLeft: '2.5%',
    marginRight: '2.5%',
    marginBottom: 15,
    marginTop: 20,
    width: '45%'
  },  
  QuizContainer: {
    flex: 7,
    justifyContent: 'space-around',
    margin: 20   
  },  
});