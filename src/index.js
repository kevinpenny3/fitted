import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from "firebase/app"
import firebaseConfig from './firebaseConfig'
import { BrowserRouter as Router } from "react-router-dom";
import Fitted from './components/fitted';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <Router>
        <Fitted />
    </Router>
    , document.getElementById("root"))