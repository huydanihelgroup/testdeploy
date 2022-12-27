import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import TypoGraphy from '../Typography/Typography';
import './Navbar.css';

import { INavbarProps } from './Navbar.types';

const Navbar = (navbarProps: INavbarProps) => {
  const {
    variant = 'connect',
    logo = '',
    connectedText,
    buttonText,
    rightIcon = '',
    items = [],
    shadowed = true,
    ...props
  } = navbarProps;

  const [hasShadow, setHasShadow] = useState(false);

  const trackScrollPosition = () => {
    const y = window.scrollY;
    setHasShadow(!!y);
  };
  useEffect(() => {
    trackScrollPosition();
    window.addEventListener('scroll', trackScrollPosition);

    return () => {
      window.removeEventListener('scroll', trackScrollPosition);
    };
  }, []);
  const shadow = hasShadow || shadowed ? 'shadow-nav' : '';
  return (
    <nav
      {...props}
      className={`bg-white w-full px-6 h-24 z-50 flex justify-center sticky top-0 transition-all duration-500 items-center ${shadow}`}
    >
      <div className="w-full max-w-7xl flex justify-between items-center">
        <div className="flex items-center flex-1">
          <a href="/">
            <img srcSet={logo ? logo : '/logo.png 2x'} alt="Logo" width={30} />
          </a>
          <div className="flex items-center mx-10 overflow-x-auto">
            {items?.length
              ? items.map((item, idx) => (
                  <a
                    href={item.link}
                    aria-label={item.name}
                    key={idx}
                    className="ml-10"
                  >
                    <TypoGraphy variant="subtitle1">{item.name}</TypoGraphy>
                  </a>
                ))
              : null}
          </div>
        </div>
        <div className="flex items-center">
          <img
            srcSet={rightIcon ? rightIcon : '/icon.png 2x'}
            alt={connectedText}
            width={37}
            className="mr-5"
          />
          {variant !== 'connected' ? (
            <Button
              variant={variant === 'wrong_network' ? 'contained' : 'outlined'}
              size="large"
            >
              {buttonText}
            </Button>
          ) : (
            <TypoGraphy variant="subtitle1">{connectedText}</TypoGraphy>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
