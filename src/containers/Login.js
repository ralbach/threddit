import React, { FC } from 'react';
import * as firebase from "firebase/app";
import 'firebase/auth';
import { Form } from 'react-bootstrap';

import firebaseConfig from '../environments.js';
firebase.initializeApp(firebaseConfig);
//enable google firebase and add scope to read email and profile data of users



const LoginComp: FC = () => {
  //initialize firebase to access user profile and email from google
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');

  //google login function on click
  const handleGoogleLogin = () => firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(result);
    console.log('Successfully logged in!')
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    console.error('error code ', errorCode, ':', errorMessage, 'for email address ', email, ' and credential ', credential)

  });

  //reddit login on click
  const handleRedditLogin = () => firebase.auth.signInWithCustomToken(console.log('click')).then(function(result){
    console.log('reddit login click!')
  }).catch(function(error){
    console.error(error);

  })

  return (
    <div id="signInPage">
      <div id="emailSignIn">
      Sign in with email
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email Address" />
          <Form.Text className='text-muted'>
            We don't share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <button variant="primary" type="submit">
          Submit
        </button>
      </Form>
      </div>
      <div id="googleSignIn">
      <button variant="contained" color="primary" onClick={handleGoogleLogin}>
        Login with Google
      </button>
      </div>
      <div id="redditSignIn">
      <button variant="contained" color="primary" onClick={handleRedditLogin}>
        Login with Reddit
      </button>
      </div>
    </div>
  )
}

export default LoginComp;