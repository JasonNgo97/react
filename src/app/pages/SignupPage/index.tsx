import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import capBlue from 'assets/images/capBlue.png';
import starBlue from 'assets/images/starBlue.png';
import { SignupButtons } from 'app/components/SignupButtons';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthLayout } from 'app/components/AuthLayout';
import {
  signinWithFacebook,
  signinWithGoogle,
} from 'app/services/FirebaseService';

export function SignupPage(props) {
  const navigate = useNavigate();
  let urlParams = useParams();
  const [isStudent, setIsStudent] = React.useState(
    urlParams.role === 'student',
  );

  const isMobile = useMediaQuery({
    query: `(max-width: 760px)`,
  });

  const isMD = useMediaQuery({
    query: `(max-width: 1000px)`,
  });

  const signupWithEmail = () => {
    navigate(`/signup-with-email/${isStudent ? 'student' : 'coach'}`);
  };

  const roleSelctionView = () => {
    return (
      <>
        <img
          src={isStudent ? capBlue : starBlue}
          className="h-6 w-7 mb-6"
          alt="student-cap"
        />
        <span className={`font-bold text-lg text-center ml-4`}>
          {isStudent ? 'I’m Student' : 'I’m Coach'}
        </span>
      </>
    );
  };

  const renderView = () => {
    return (
      <>
        {isMobile ? null : (
          <>
            <img
              src={isStudent ? capBlue : starBlue}
              className="h-6 w-7 mb-6"
              alt="student-cap"
            />
            <span className={`font-bold text-lg text-center ml-4`}>
              {isStudent ? 'I’m Student' : 'I’m Coach'}
            </span>
          </>
        )}
        <SignupButtons
          signupWithEmail={signupWithEmail}
          signupWithFacebook={() => signinWithFacebook(urlParams?.role)}
          signupWithGoogle={() => signinWithGoogle(urlParams?.role)}
        />
      </>
    );
  };

  return (
    <>
      <Helmet>
        <title>Lytesnap Register</title>
        <meta name="description" content="Lytesnap" />
      </Helmet>

      <AuthLayout
        page="signup"
        backPath={`/`}
        isStudent={isStudent}
        renderView={renderView()}
      />
    </>
  );
}
