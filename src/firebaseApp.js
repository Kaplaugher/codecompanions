import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDQn8ySXekd2hyC-nvlMC3-xqM2wdFOak4",
  authDomain: "code-companions.firebaseapp.com",
  databaseURL: "https://code-companions.firebaseio.com",
  projectId: "code-companions",
  storageBucket: "",
  messagingSenderId: "70171313598"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
