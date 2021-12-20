import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { LoginView } from 'app/components/LoginView';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from 'app/components/AuthLayout';
import { firebase_auth } from '../../../firbaseApp';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { errorMessages } from 'utils/FirebaseErrors';
import {
  signinWithFacebook,
  signinWithGoogle,
} from 'app/services/FirebaseService';

export function LoginPage(props) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const signinWithEmail = (email, password) => {
    console.log(email, password);
    signInWithEmailAndPassword(firebase_auth, email, password)
      .then(userCredential => {
        navigate(`/signin-with-email`);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessages[errorCode]);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <Helmet>
        <title>Lytesnap Login</title>
        <meta name="description" content="Lytesnap Login" />
      </Helmet>

      <AuthLayout
        page="login"
        backPath={`/`}
        renderView={
          <LoginView
            signinWithEmail={signinWithEmail}
            signinWithFacebook={signinWithFacebook}
            signinWithGoogle={signinWithGoogle}
            error={error}
          />
        }
      />
    </>
  );
}
