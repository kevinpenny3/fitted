import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import { BrowserRouter as Router } from "react-router-dom";
import Fitted from './components/fitted';


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

ReactDOM.render(
    <Router>
        <Fitted />
    </Router>
    , document.getElementById("root"))