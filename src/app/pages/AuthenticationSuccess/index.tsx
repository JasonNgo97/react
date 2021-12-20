import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMediaQuery } from 'react-responsive';
import { AuthLayout } from 'app/components/AuthLayout';
import { useParams } from 'react-router-dom';

export function AuthenticationSuccess(props) {
  const urlParams = useParams();
  const isStudent = urlParams.role === 'student';
  const email = urlParams.email;

  const isMobile = useMediaQuery({
    query: `(max-width: 760px)`,
  });

  const renderView = () => {
    if (isMobile) {
      return (
        <div>
          <span className={`font-normal text-3xl`}>{'Check your email'}</span>
          <span className={`font-normal text-base mt-3 w-full text-gray-400`}>
            {`To confirm your email address, follow the link in the Email we
                  sent to `}
            <span className={`font-normal text-base mt-3 w-96 text-black`}>
              {email}
            </span>
          </span>
          <div
            className={`flex flex-row cursor-pointer mt-4 text-`}
            onClick={() => {}}
          >
            <span>Resend Email</span>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <span className={`font-normal text-3xl w-96`}>
            {'Check your email'}
          </span>
          <span className={`font-normal text-base mt-3 w-96 text-gray-400`}>
            {`To confirm your email address, follow the link in the Email we
                  sent to `}
            <span className={`font-normal text-base mt-3 text-black`}>
              {email}
            </span>
          </span>
          <div
            className={`flex flex-row cursor-pointer mt-4 text-main-secondary w-96`}
            onClick={() => {}}
          >
            <span className={`self-start`}>Resend Email</span>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>signin Page</title>
        <meta name="description" content="Lytesnap Home" />
      </Helmet>
      <AuthLayout
        backPath={`/signup-with-email/${urlParams.role}`}
        page={'signup'}
        isStudent={isStudent}
        renderView={renderView()}
      />
    </>
  );
}
