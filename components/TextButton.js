import React from 'react'
import { Text, TouchableOpacity, StyleSheet} from 'react-native'
import { white } from '../utils/colors'

export default function TextButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={ onPress } style={ [styles.TextBtn, style] }>
      <Text style={ styles.BtnText }>{ children }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({  
  BtnText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: white
  },
  TextBtn: {
    padding: 10,
    height: 50
  }  
}); 