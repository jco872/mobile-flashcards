import React from 'react'
import { View, Text } from 'react-native'
import TextButton from './TextButton'
import { black} from '../utils/colors'
import styles from '../utils/styles'


export default function QuizScore({
  correctAnsCount,
  incorrectAnsCount,
  restartQuiz,
  backToDeck 
}) 
{
  const QutCount = correctAnsCount + incorrectAnsCount
  const percentage = (correctAnsCount / QutCount) * 100

  return(
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
              { correctAnsCount } out of { QutCount }
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={ styles.QuizResultsDetails }>
          Wrong:
          </Text>
          <Text style={ styles.QuizResultsDetails }>
            { incorrectAnsCount } out of { QutCount }
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

