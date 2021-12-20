import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import loginArrowBlue from 'assets/images/login-arrow-blue.svg';
import loginArrow from 'assets/images/login-arrow.svg';

export function AlreadyHaveAccount(props) {
  const {
    onClick,
    text = 'Already have an account?',
    buttonText = 'Log in',
    isBlue = true,
  } = props;
  const [mouseEnter, setMouseEnter] = React.useState(false);

  const isMobile = useMediaQuery({
    query: `(max-width: 760px)`,
  });

  console.log('asdsd');

  return (
    <div className="m-2 flex flex-row z-20">
      <span className={`font-regular ${isBlue ? 'text-black' : 'text-white'}`}>
        {text}
      </span>
      <div
        className={`flex flex-row ml-2 cursor-pointer ${
          isBlue ? 'text-main-secondary' : 'text-white'
        }`}
        onClick={onClick}
      >
        <span>{buttonText}</span>
        <img alt="login" src={isBlue ? loginArrowBlue : loginArrow} />
      </div>
    </div>
  );
}
