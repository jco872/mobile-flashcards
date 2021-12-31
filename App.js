import React, { Component } from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppNavigation from './components/Navigation'
import reducer from './reducers'

class App extends Component {
 
	render() {
	  return (
		<Provider store={createStore(reducer)}>
		  <View style={{flex: 1}}> 
			  <AppNavigation/>
		  </View>
		</Provider>
	  );
	}}

  export default App;