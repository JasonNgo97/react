import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import home from 'assets/images/home.png';
import logo from 'assets/images/logo.png';
import cap from 'assets/images/cap.png';
import star from 'assets/images/star.png';
import mobileLogo from 'assets/images/mobileLogo.png';
import { HomePanel } from 'app/components/HomePanel';
import { useMediaQuery } from 'react-responsive';
// import { useNavigate } from 'react-router-dom';
import { AlreadyHaveAccount } from 'app/components/AlreadyHaveAccount';

interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  const [leftHover, setLeftHover] = React.useState(false);
  const [rightHover, setRightHover] = React.useState(false);
  const [selectedRole, setSelectedRole] = React.useState(0);
  // const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: `(max-width: 760px)`,
  });

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Lytesnap Homepage" />
      </Helmet>

      {isMobile ? (
        <div className="h-screen w-screen p-3 h-screen w-screen">
          <img className="mb-8" src={mobileLogo} alt="logo" />

          <div className="pb-4">
            <span className={`font-normal text-3xl`}>
              {'Welcome! Please select your role'}
            </span>
          </div>

          <HomePanel
            isSelected={selectedRole === 0}
            icon={cap}
            title1={'I’m Student'}
            subtitle={
              'I want to find a coach and book a training through this service.'
            }
            toggleSelection={() => setSelectedRole(0)}
          />

          <div className="border-b border-gray-200" />

          <HomePanel
            isSelected={selectedRole === 1}
            icon={star}
            title1={'I’m Coach'}
            subtitle={'I want to do sports training and also get paid easily.'}
            setHover={value => setLeftHover(value)}
            toggleSelection={() => setSelectedRole(1)}
          />

          <button
            className="w-full h-14 rounded-lg text-white bg-main-primary mt-2"
            // onClick={() =>
            //   // navigate(selectedRole === 0 ? '/signup/student' : '/signup/coach')
            // }
          >
            Continue
          </button>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <AlreadyHaveAccount
              // onClick={() => navigate('/signin')}
              isBlue={rightHover || isMobile}
            />
          </div>
        </div>
      ) : (
        <>
          <div
            className="h-screen w-screen items-center justify-center flex bgimg bg-cover h-screen w-screen"
            style={{
              backgroundImage: `url(${home})`,
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute top-4 left-4 right-4 flex flex-row align-center place-content-between ">
              <img className="" src={logo} alt="logo" />

              <AlreadyHaveAccount
                // onClick={() => navigate('/signin')}
                isBlue={rightHover || isMobile}
              />
            </div>

            <button
              className={`border rounded-full h-16 w-16 py-2 px-2 z-20 align-center ${
                rightHover || leftHover
                  ? 'text-gray-500 border-white bg-white'
                  : 'text-white border-gray-50'
              }`}
            >
              OR
            </button>
          </div>

          <div className="absolute inset-0 z-10 grid grid-cols-2">
            <HomePanel
              title1={'BECOME'}
              title2={'A STUDENT'}
              subtitle={
                'I want to find a coach and book a training through this service.'
              }
              setHover={value => setLeftHover(value)}
              hover={leftHover}
              // onClick={() => navigate('signup/student')}
            />

            <HomePanel
              title1={'BECOME A'}
              title2={'COACH'}
              subtitle={
                'I want to do sports training and also get paid easily.'
              }
              setHover={value => setRightHover(value)}
              hover={rightHover}
              // onClick={() => navigate('signup/coach')}
            />
          </div>
        </>
      )}
    </>
  );
}
