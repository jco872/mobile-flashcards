import { StyleSheet, Platform } from "react-native";
import { white, black, red } from "./colors";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    width: "100%",
    alignSelf: "center",
  },

  NewCardContainer: {
    flex: 1,
  },
  AddCardInputContainer: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'flex-start'
  },
  AddCardInput: {
    fontSize: 22,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 15,
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
 
  // Deck, Card Style
  Card: {
    backgroundColor: black,
    borderRadius: 5,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 100,
    marginRight: 100,
    justifyContent: 'center',
    shadowRadius: 8,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  CardHeader: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: white,
    marginBottom: 15
  },
  CardSubHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: white,
    marginBottom: 10,
    textAlign: 'center'
  },
  DecksContainer: {
    flex: 1,
    backgroundColor: white,
  },
  DecksHeader: {
    fontSize: 36,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 15,
    color:black,
    marginLeft: 20,
    marginRight: 20
  },
  DeckContainer: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'space-around',
  },
  DeckCard: {
    backgroundColor: black,
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    shadowRadius: 8,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  DeckHeader: {
     fontSize: 42,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    color: white
  },
  DeckSubHeader: {
    fontSize: 24,
    fontWeight: '700',
    color: white,
    marginBottom: 10,
    textAlign: 'center'
  },
  DeckButton: {
    borderRadius: 8,
    marginLeft: 20,
    fontWeight: '700',
    marginRight: 20,
    marginBottom: 15
  },
  // Quiz Style
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
    fontSize: 22,
    fontWeight: '600'
  },
  QuizContainer: {
    flex: 7,
    justifyContent: 'space-around',
    margin: 20,
   
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
  },
  TextBtn: {
    padding: 10,
    height: 50
  },
  BtnText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: white
  }
});

export default Styles;
