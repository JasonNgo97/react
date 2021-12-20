import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthLayout } from 'app/components/AuthLayout';
import { ForgotPasswordView } from 'app/components/ForgotPasswordView';
import { useParams } from 'react-router-dom';

export function ForgotPasswordPage(props) {
  const params = useParams();
  const path = params['*'] || '';
  const isResetPasswordPage = path.includes('resetPassword');
  const resetPassword = () => {
    // send reset password instructions here
  };

  return (
    <>
      <Helmet>
        <title>Lytesnap Password</title>
        <meta name="description" content="Lytesnap" />
      </Helmet>

      <AuthLayout
        showBackButton={!isResetPasswordPage}
        page={isResetPasswordPage ? 'resetPassword' : 'forgotPassword'}
        backPath={`/signin`}
        renderView={
          <ForgotPasswordView
            resetPassword={resetPassword}
            isResetPasswordPage={isResetPasswordPage}
          />
        }
      />
    </>
  );
}
