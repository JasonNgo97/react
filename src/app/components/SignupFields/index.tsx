import React, { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { isNullSafe } from 'utils/Validators';

export function SignupFields(props) {
  const { signupWithEmail, error } = props;

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="">
      <Input
        label="Email"
        value={email}
        setValue={setEmail}
        isEmail
        error={error}
      />
      <Input label="Full name" value={fullName} setValue={setFullName} />
      <Input
        label="Phone number"
        value={phone}
        setValue={setPhone}
        isOptional
      />
      <Input
        label="Password"
        value={password}
        setValue={setPassword}
        isPassword
        showPasswordStrength
      />
      <Button
        title={'Sign up'}
        isDisabled={
          !isNullSafe(email) || !isNullSafe(fullName) || !isNullSafe(password)
        }
        onClick={() => signupWithEmail(email, password, fullName, phone)}
      />
    </div>
  );
}
