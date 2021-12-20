import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

interface ButtonProps {
  onClick: () => void;
  title: string;
  isDisabled?: boolean;
  type?: string;
  icon?: any;
}

export function Button(props: ButtonProps) {
  const {
    onClick,
    title = 'Continue',
    isDisabled = false,
    type = 'primary',
    icon,
  } = props;
  const [mouseEnter, setMouseEnter] = React.useState(false);

  const isMobile = useMediaQuery({
    query: `(max-width: 760px)`,
  });

  const buttonStyle = () => {
    switch (type) {
      case 'primary':
        return `bg-main-primary text-white bg-semantic-subtone1:active 
        hover:bg-semantic-tone3 
        focus:outline-primary focus:ring
        disabled:text-neutral-secondary disabled:bg-neutral-quinary`;
      case 'secondary':
        return `text-neutral-primary border-neutral-quaternary border
        hover:bg-neutral-quinary hover:border-neutral-primary
        active:bg-neutral-quaternary active:border-neutral-primary
        focus:outline-neutral focus:ring focus:border-neutral-primary focus:bg-white
        disabled:text-neutral-tertiary disabled:border-neutral-quinary`;
      case 'tertiary':
        return `text-neutral-primary
        hover:bg-neutral-senary
        active:bg-neutral-quinary
        disabled:text-neutral-quaternary`;
    }
  };

  return (
    <button
      disabled={isDisabled}
      className={`rounded-lg flex flex-row items-center justify-center ${
        !isMobile ? 'w-96' : 'w-full'
      } h-12 ${buttonStyle()}`}
      onMouseEnter={() => {
        setMouseEnter(true);
      }}
      onMouseLeave={() => {
        setMouseEnter(false);
      }}
      onClick={onClick}
    >
      {icon && <img src={icon} className="h-6 w-7 mr-4" alt="student" />}
      {title}
    </button>
  );
}
