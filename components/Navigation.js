import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import Decks from './Decks';
import AddDeck from './AddDeck';
import Deck from './Deck';
import AddCard from './AddCard';
import Quiz from './Quiz';
import QuizScore from './QuizScore';
import { white, grey, black} from '../utils/colors';

const Tabs = createBottomTabNavigator({
	Decks: {
		  screen: Decks,
		  navigationOptions: {
			  tabBarLabel: 'All Decks',
			  tabBarIcon: () => <Ionicons size={35}
			   style={{width: 25}} color={black} name="ios-albums"/>
		  }
	},
	AddDeck: {
		  screen: AddDeck,
		  navigationOptions: {
			  tabBarLabel: 'New Deck',
			  tabBarIcon: () => <Ionicons size={35} 
			  style={{width: 25}} color={black} name="ios-add-circle"/>
		  }
	}
  }, {
	tabBarOptions: {
		  activeTintColor: black,
		  inactiveTintColor: grey,
		  labelStyle: {
			  fontSize: 15,
		  },
		  style: {
			  height: 55,
			  backgroundColor: white,
			  shadowColor: 'rgba(0, 0, 0, 0.24)',
			  paddingTop: 10,
			  shadowOffset: {
				  width: 0,
				  height: 3
			  },
			  shadowRadius: 6,
			  shadowOpacity: 1
		  }
	}
  });
  
  const AppNavigation = createStackNavigator({
	Home: {
		  screen: Tabs,
		  navigationOptions: {
			  headerShown: false
		  }
	},
	Deck: {
		  screen: Deck,
		  navigationOptions: {
			  headerTintColor: white,
			  headerStyle: {
				  backgroundColor: black,
			  }
		  }
	},
	AddCard: {
		  screen: AddCard,
		  navigationOptions: {
			  headerTintColor: white,
			  headerStyle: {
				  backgroundColor: black,
			  }
		  }
	},
	Quiz: {
		  screen: Quiz,
		  navigationOptions: {
			  headerTintColor: white,
			  headerStyle: {
				  backgroundColor: black,
			  }
		  }
	},
	QuizScore: {
		  screen: QuizScore,
		  navigationOptions: {
			  headerTintColor: white,
			  headerStyle: {
				  backgroundColor: black,
			  }
		  }
	}
  });

 const container = createAppContainer(AppNavigation);

 export default container