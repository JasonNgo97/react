import React, { useState } from 'react';
import student from 'assets/images/student.png';
import coach from 'assets/images/coach.png';
import login from 'assets/images/login.png';
import logo from 'assets/images/logo.png';
import forgotPassword from 'assets/images/forgotPassword.png';
import mobileLogo from 'assets/images/mobileLogo.png';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { AlreadyHaveAccount } from 'app/components/AlreadyHaveAccount';
import arrowBack from 'assets/images/arrow-back-small-active.svg';

export function AuthLayout(props) {
  const {
    renderView,
    isStudent,
    page,
    backPath,
    showBackButton = true,
  } = props;
  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: `(max-width: 760px)`,
  });

  const isMD = useMediaQuery({
    query: `(max-width: 1000px)`,
  });

  const sideImage = () => {
    switch (page) {
      case 'login':
        return login;
      case 'signup':
        return isStudent ? student : coach;
      case 'forgotPassword':
      case 'resetPassword':
        return forgotPassword;
      default:
        return login;
    }
  };

  console.log(backPath);
  if (isMobile) {
    return (
      <div className="h-screen w-screen p-3 h-screen w-screen">
        <img className="mb-8" src={mobileLogo} alt="logo" />

        {renderView}

        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          {page === 'login' ? (
            <AlreadyHaveAccount
              text={'Don’t have an account?'}
              buttonText={'Get started'}
              onClick={() => navigate('/')}
            />
          ) : (
            <AlreadyHaveAccount onClick={() => navigate('/signin')} />
          )}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div
          className={`h-screen grid ${
            isMD ? 'grid-col-1' : 'grid-cols-5'
          } justify-center flex bgimg bg-cover`}
        >
          {!isMD && (
            <img className={`mb-8 col-span-2`} src={sideImage()} alt="side" />
          )}

          <div className="justify-center flex flex-col col-span-3">
            {!isMD && showBackButton && (
              <button
                onClick={() => {
                  console.log('sdsdsd');
                  navigate(backPath);
                }}
                className={'absolute top-6 button z-10 flex flex-row'}
              >
                <img alt="back" src={arrowBack} className={'h-6'} />
                <span
                  className={`font-medium ml-3 text-base text-center text-black`}
                >
                  {'Go back'}
                </span>
              </button>
            )}
            <div className="justify-center flex items-center justify-center flex-col">
              {renderView}
            </div>
          </div>
        </div>

        <div className="absolute top-4 left-4 right-4 flex flex-row align-center place-content-between ">
          <img className="" src={isMD ? mobileLogo : logo} alt="logo" />
          {page === 'login' ? (
            <AlreadyHaveAccount
              text={'Don’t have an account?'}
              buttonText={'Get started'}
              onClick={() => navigate('/')}
            />
          ) : (
            <AlreadyHaveAccount onClick={() => navigate('/signin')} />
          )}
        </div>
      </>
    );
  }
}
