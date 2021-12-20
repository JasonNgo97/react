import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import google from 'assets/images/google.svg';
import facebook from 'assets/images/facebook.svg';
import { Input } from 'app/components/Input';
import { Button } from '../Button';
import { isNullSafe } from 'utils/Validators';

export function LoginView(props) {
  const {
    signinWithEmail,
    signinWithGoogle,
    signinWithFacebook,
    error = '',
  } = props;
  const isMobile = useMediaQuery({
    query: `(max-width: 760px)`,
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = type => {
    switch (type) {
      case 'facebook':
        signinWithFacebook();
        break;
      case 'google':
        signinWithGoogle();
        break;
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
    <div className="">
      <span className={`font-bold text-3xl text-left mb-16 w-96`}>
        Welcome back
      </span>
      <Input
        label="Email"
        value={email}
        setValue={setEmail}
        error={error}
        isEmail
      />
      <Input
        label="Password"
        value={password}
        setValue={setPassword}
        isPassword
        showForgotPassword
      />
      <Button
        title={'Log in'}
        onClick={() => signinWithEmail(email, password)}
        isDisabled={!isNullSafe(email) || !isNullSafe(password)}
      />
      <div className="flex flex-row items-center justify-center mt-4">
        <div className="border-b border-gray-200 w-40" />
        <span className={`font-light text-lg text-center mx-6 text-gray-500`}>
          or
        </span>
        <div className="border-b border-gray-200 w-40" />
      </div>

      {loginButton(facebook, 'Sign in with Facebook', 'facebook')}
      {loginButton(google, 'Sign in with Google', 'google')}
    </div>
  );
}
