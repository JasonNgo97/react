import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import eyeShow from 'assets/images/eye-show.svg';
import eyeHide from 'assets/images/eye-hide.svg';
import { useNavigate } from 'react-router-dom';
import { isValidEmail, passwordStrengthPoint } from 'utils/Validators';

export function Input(props) {
  const {
    label,
    value,
    setValue,
    isOptional = false,
    isPassword = false,
    isEmail = false,
    showForgotPassword = false,
    showPasswordStrength = false,
    isDisabled = false,
    type = 'default',
    error = '',
  } = props;

  const [hidePassword, setHidePassword] = useState(true);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [strength, setStrength] = useState(0);
  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: `(max-width: 760px)`,
  });

  const onBlur = text => {
    const newValue = text.target.value;
    setInvalidEmail(!isValidEmail(newValue));
  };

  const onChange = text => {
    const newValue = text.target.value;
    if (showPasswordStrength) {
      const strengthPoints = passwordStrengthPoint(newValue);
      console.log('strength', strengthPoints);
      setStrength(strengthPoints || 0);
    }
    setValue(newValue);
  };

  const passwordStrength = () => {
    switch (strength) {
      case 0:
        return 'Please use 8+ characters for secure password';
      case 1:
        return (
          <>
            {/* <p>{`Please choose a stronger password.`}</p> */}
            <p>{`Try a mix of letters, numbers and symbols`}</p>
          </>
        );
      case 2:
        return 'So-so password';
      case 3:
        return 'Good password';
      case 4:
        return 'Great password';
      default:
        return 'Please use 8+ characters for secure password';
    }
  };

  const strengthColor = (isFont = false) => {
    const color =
      strength === 0
        ? '-neutral-tertiary'
        : strength === 1
        ? '-additional-warning'
        : strength === 2
        ? '-additional-yellow'
        : strength === 3
        ? '-additional-green'
        : '-main-secondary';
    return isFont ? 'text' + color : 'bg' + color;
  };

  const inputStyle = () => {
    const defaultStyle = `text-neutral-primary border border-neutral-quaternary
    hover:border-neutral-primary
    focus:outline-none
    disabled:text-neutral-secondary disabled:bg-neutral-senary`;
    if (error || invalidEmail) {
      return `${defaultStyle} border-additional-warning hover:border-additional-warning`;
    }
    return defaultStyle;
  };

  return (
    <div className={`mb-8`}>
      <div className={`flex flex-row justify-between`}>
        {label && (
          <span
            className={`font-normal text-lg text-center text-neutral-primary`}
          >
            {label}
            {isOptional && (
              <span className={`text-gray-400`}>{` optional`}</span>
            )}
          </span>
        )}

        {showForgotPassword && (
          <div
            className={`cursor-pointer text-main-secondary`}
            onClick={() => navigate('/forgotPassword')}
          >
            <span>Forgot password</span>
          </div>
        )}
      </div>

      <div
        className={`${
          !isMobile ? 'w-96' : 'w-full'
        } flex flex-row items-center justify-between`}
      >
        <input
          disabled={isDisabled}
          className={`border rounded-lg border-neutral-tertiary h-12 ${
            !isMobile ? 'w-96' : 'w-full'
          } text-black mt-1 p-2 flex flex-row items-center justify-center ${inputStyle()}`}
          type={isPassword && hidePassword ? 'password' : 'text'}
          value={value}
          onChange={text => onChange(text)}
          onBlur={text => isEmail && onBlur(text)}
        />

        {isPassword && (
          <img
            src={hidePassword ? eyeHide : eyeShow}
            alt="hide"
            className={`-ml-8 mr-3`}
            onClick={() => setHidePassword(!hidePassword)}
          />
        )}
      </div>

      {(error || (isEmail && invalidEmail)) && (
        <span className={'mt-2 h-4 text-additional-warning'}>
          {error
            ? error
            : isEmail && invalidEmail
            ? 'Please enter a valid email address'
            : ''}
        </span>
      )}

      {showPasswordStrength && (
        <div>
          <div className={`grid grid-cols-3 h-1 my-4`}>
            <div className={`${strengthColor()} mr-1 rounded`} />
            <div
              className={`${
                strength <= 2
                  ? 'bg-neutral-tertiary'
                  : strength === 3
                  ? 'bg-additional-green'
                  : 'bg-main-secondary'
              } rounded`}
            />
            <div
              className={`${
                strength <= 3 ? 'bg-neutral-tertiary' : 'bg-main-secondary'
              } ml-1 rounded`}
            />
          </div>
          <div className={`${strengthColor(true)}`}>{passwordStrength()}</div>
        </div>
      )}
    </div>
  );
}
