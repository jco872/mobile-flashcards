import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { black, white } from '../utils/colors'

export default function QuizScore({
  correctAnswers,
  incorrectAnswers,
  restartQuiz,
  backToDeck 
}) 
{
  const totalAnswers = correctAnswers + incorrectAnswers
  const percentage = (correctAnswers / totalAnswers) * 100

  return (
    <View style={ [styles.QuizResultContainer, { justifyContent: 'space-around'}] }>
      <Text style={ styles.QuizResultHeader }>Quiz Results</Text>
      <View style={{ justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 28, color: black, fontWeight: '700',
         textAlign: 'center', marginBottom: 20 }}>
          Your Score: { percentage.toFixed(0) }%
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={ styles.QuizResultsDetails }>
              Correct:
          </Text>
          <Text style={ styles.QuizResultsDetails }>
              { correctAnswers } out of { totalAnswers }
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={ styles.QuizResultsDetails }>
          Wrong:
          </Text>
          <Text style={ styles.QuizResultsDetails }>
            { incorrectAnswers } out of { totalAnswers }
          </Text>
        </View>
      </View>
      <View >
          <TextButton
            style={ [styles.QuizResultButton, { backgroundColor: black }]}
            onPress={ restartQuiz }>
              Restart Quiz
          </TextButton>
          <TextButton
            style={ [styles.QuizResultButton, { backgroundColor: black }]}
            onPress={ backToDeck }>
              Back to Deck
          </TextButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({  
  QuizResultContainer: {
    flex: 1,
    backgroundColor: white
  },
  QuizResultHeader: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    color: black,
    marginBottom: 15,
    marginTop: 30
  },
  QuizResultsDetails: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: black
  },
  QuizResultButton: {
    borderRadius: 2,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15
  }
});