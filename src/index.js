import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import 'typeface-roboto';

var firebaseConfig = {
    apiKey: "AIzaSyBpPKG8dNqBCowzdmRhiFSxFYIrSHtAWvg",
    authDomain: "fitted-capstone.firebaseapp.com",
    databaseURL: "https://fitted-capstone.firebaseio.com",
    projectId: "fitted-capstone",
    storageBucket: "fitted-capstone.appspot.com",
    messagingSenderId: "298801174548",
    appId: "1:298801174548:web:443990a5edc89edf5aef01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
