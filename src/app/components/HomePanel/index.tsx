import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

export function HomePanel(props) {
  const {
    title1,
    title2,
    subtitle,
    setHover,
    hover,
    icon,
    isSelected,
    toggleSelection,
    onClick,
  } = props;
  const isMobile = useMediaQuery({
    query: `(max-width: 760px)`,
  });

  if (isMobile) {
    return (
      <div
        className={`${
          isSelected ? 'border-indigo-700' : 'border-gray-300'
        } border-l-2 px-4 my-6`}
        onClick={toggleSelection}
      >
        <div className="flex flex-row">
          <img src={icon} className="h-6 w-7" alt="student" />
          <span className={`font-normal text-lg text-center ml-4`}>
            {title1}
          </span>
        </div>
        <span
          className={`font-normal text-base text-center mt-3 text-gray-500`}
        >
          {subtitle}
        </span>
      </div>
    );
  } else {
    return (
      <div
        className={`flex flex-col place-content-center content-center items-center ${
          hover ? 'bg-white text-black' : 'text-white'
        }`}
      >
        <span className={`font-normal text-6xl text-center h1`}>{title1}</span>
        <span className={`font-normal text-6xl text-center h1`}>{title2}</span>
        <span className={`font-normal text-xl text-center mt-3 w-96 p1`}>
          {subtitle}
        </span>
        <button
          className="button border rounded-lg border-white w-20 h-10 text-white hover:bg-semantic-tone3 mt-4 button1"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={onClick}
        >
          Continue
        </button>
      </div>
    );
  }
}
