import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import QuizScore from './QuizScore'
import { black} from '../utils/colors'
import styles from '../utils/styles'

class Quiz extends Component {
  state = {
    index: 0,
    counter: 1,
    viewAnswer: false,
    correctAnsCount: 0,
    incorrectAnsCount: 0
  }
  handleQuestionAnswer = () => {
    this.setState((previousState) => ({
      viewAnswer: !previousState.viewAnswer
    }))
  }
  handleCorrectAnswer = () => {
    this.setState((previousState) => ({
      index: previousState.index + 1,
      counter: previousState.counter + 1,
      correctAnsCount: previousState.correctAnsCount + 1,
      viewAnswer: false
    }))
  }
  handleIncorrectAnswer = () => {
    this.setState((previousState) => ({
      index: previousState.index + 1,
      counter: previousState.counter + 1,
      incorrectAnsCount: previousState.incorrectAnsCount + 1,
      viewAnswer: false
    }))
  }
  handleRestartQuiz = () => {
    this.setState(() => ({
      index: 0,
      counter: 1,
      viewAnswer: false,
      correctAnsCount: 0,
      incorrectAnsCount: 0
    }))
  }
  handleGoBackToDeck = () => {
    const { deck, navigation } = this.props
    const title = deck.title
    navigation.navigate('Deck', { title })
  }

  render() {
    const { deck } = this.props
    const { index, counter, viewAnswer, correctAnsCount, incorrectAnsCount } = this.state
    const questions = deck.questions
    const QuizCount = questions.length

    if (counter > QuizCount) {
      return (
        <QuizScore
          correctAnsCount={ correctAnsCount }
          incorrectAnsCount={ incorrectAnsCount }
          restartQuiz={ this.handleRestartQuiz }
          backToDeck={ this.handleGoBackToDeck }
        />
      )
    }

    return(
      <View style={ styles.QuizContainer }>
        <View style={ styles.QuizProgressContainer }>
          <Text style={ styles.QuizProgress }>{ counter }/{ QuizCount }</Text>
        </View>
        <View style={ styles.QuizContainer }>
          <View style={{ justifyContent: 'center' }}>
            <Text style={
                [styles.Question, { fontSize: (questions[index].question.length > 50 || 
                questions[index].answer.length > 50) ? 33 : 44 }] }>
              { viewAnswer
                ? questions[index].answer
                : questions[index].question
              }
            </Text>
            <TextButton
              style={ [styles.QuizAnswerBtn,
              { backgroundColor: black, justifyContent: 'center' }] }
              onPress={ this.handleQuestionAnswer }>
                { viewAnswer
                  ? 'View Question'
                  : 'View Answer'
                }
                
            </TextButton>
            {/* Buttons are included to allow the student to 
            mark their guess as 'Correct' or 'Incorrect'/
           */}
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
