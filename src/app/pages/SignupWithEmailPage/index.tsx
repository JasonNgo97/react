import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SignupFields } from 'app/components/SignupFields';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthLayout } from 'app/components/AuthLayout';
import { firebase_app } from '../../../firbaseApp';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { errorMessages } from 'utils/FirebaseErrors';

export function SignupWithEmailPage(props) {
  const navigate = useNavigate();
  const urlParams = useParams();
  const isStudent = urlParams.role === 'student';
  const [error, setError] = useState('');

  return (
    <>
      <Helmet>
        <title>Lytesnap Signup</title>
        <meta name="description" content="Lytesnap Signup" />
      </Helmet>

      <AuthLayout
        page={'signup'}
        isStudent={isStudent}
        backPath={`/signup/${urlParams.role}`}
        renderView={
          <SignupFields
            error={error}
            signupWithEmail={(email, password, fullName, phone) => {
              const auth = getAuth(firebase_app);
              createUserWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                  updateProfile(userCredential.user, {
                    displayName: fullName,
                  })
                    .then(() => {
                      console.log('updated......');
                    })
                    .catch(error => {
                      console.log('error......', error);
                    });
                  navigate(`/confirm-email/${urlParams.role}/${email}`);
                })
                .catch(error => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setError(errorMessages[errorCode]);
                  console.log(errorMessage);
                  // ..
                });
            }}
          />
        }
      />
    </>
  );
}
