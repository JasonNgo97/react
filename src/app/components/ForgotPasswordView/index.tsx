import React, { useState } from 'react';
import { Input } from 'app/components/Input';
import { Button } from 'app/components/Button';
import { isNullSafe, isValidEmail } from 'utils/Validators';
import { useMediaQuery } from 'react-responsive';

export function ForgotPasswordView(props) {
  const { resetPassword, isResetPasswordPage, error } = props;
  const [email, setEmail] = useState('');

  const isMobile = useMediaQuery({
    query: `(max-width: 760px)`,
  });

  return (
    <div>
      <span className={`font-bold text-3xl text-left mb-16`}>
        {isResetPasswordPage ? 'Reset password' : 'Forgot password?'}
      </span>
      <div className={`${!isMobile && 'w-96'} mt-4 mb-4`}>
        <span className={`font-normal text-lg text-left`}>
          {isResetPasswordPage
            ? `Enter the email address you used when you joined and we’ll send you instructions to reset your password.`
            : `Enter the email address you used when you joined and we’ll send you
        instructions to reset your password.`}
        </span>
      </div>
      {isResetPasswordPage ? (
        <Input
          label={'New Password'}
          value={email}
          setValue={setEmail}
          error={error}
          isPassword
          showPasswordStrength
        />
      ) : (
        <Input label={'Email'} value={email} setValue={setEmail} isEmail />
      )}
      <Button
        title={
          isResetPasswordPage
            ? 'Reset Password'
            : 'Send password reset instructions'
        }
        onClick={() => resetPassword(email)}
        isDisabled={!isNullSafe(email)}
      />
    </div>
  );
}
