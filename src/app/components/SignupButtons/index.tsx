import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import google from 'assets/images/google.svg';
import facebook from 'assets/images/facebook.svg';
import { Button } from '../Button';
import { firebase_auth } from 'firbaseApp';
// import firebaseui from 'firebaseui';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
var firebaseui = require('firebaseui');
var ui = new firebaseui.auth.AuthUI(firebase_auth);

export function SignupButtons(props) {
  const { signupWithEmail, signupWithGoogle, signupWithFacebook } = props;
  const isMobile = useMediaQuery({
    query: `(max-width: 760px)`,
  });

  const onPress = type => {
    switch (type) {
      case 'facebook':
        signupWithFacebook();
        break;
      case 'google':
        signupWithGoogle();
        break;
      case 'email':
        signupWithEmail();
    }
  };

  const loginButton = (icon, text, type) => {
    return (
      <button
        className={`button border rounded-lg border-gray-300 ${
          !isMobile ? 'w-96' : 'w-full'
        } text-black mt-4 p-2 flex flex-row items-center justify-center`}
        onClick={() => onPress(type)}
      >
        {icon && <img src={icon} className="h-6 w-7" alt="student" />}
        <span className={`font-normal text-lg text-center ml-4`}>{text}</span>
      </button>
    );
  };

  return (
    <div>
      {loginButton(facebook, 'Sign up with Facebook', 'facebook')}
      {loginButton(google, 'Sign up with Google', 'google')}

      {/* <div id="firebaseui-auth-container">
        {ui.start('#firebaseui-auth-container', {
          signInOptions: [
            {
              provider: new GoogleAuthProvider().providerId,
              scopes: ['https://www.googleapis.com/auth/contacts.readonly'],
              customParameters: {
                // Forces account selection even when one account
                // is available.
                prompt: 'select_account',
              },
            },
            {
              provider: new FacebookAuthProvider().providerId,
              scopes: ['public_profile', 'email', 'user_likes', 'user_friends'],
              customParameters: {
                // Forces password re-entry.
                auth_type: 'reauthenticate',
              },
            },
          ],
        })}
      </div> */}

      <div className="flex flex-row items-center justify-center mt-4">
        <div className="border-b border-gray-200 w-40" />
        <span className={`font-light text-lg text-center mx-6 text-gray-500`}>
          or
        </span>
        <div className="border-b border-gray-200 w-40" />
      </div>

      <Button
        title={'Sign up with email'}
        onClick={() => signupWithEmail()}
        type={'secondary'}
      />
    </div>
  );
}
