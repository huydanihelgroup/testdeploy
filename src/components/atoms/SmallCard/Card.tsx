import { useMemo } from 'react';
import TypoGraphy from '../Typography/Typography';
import { ICardProps } from './Card.types';

const Card = ({
  variant,
  icon = '/default-1.png',
  heading,
  body,
  subtitle = '',
  colors = ['#FADD46', '#FFB547'],
  children = '',
}: ICardProps) => {
  const gradient = useMemo(
    () => `linear-gradient(225deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
    [colors],
  );
  let VariantComponent = () => (
    <>
      <TypoGraphy variant="h5">{heading}</TypoGraphy>
      {subtitle?.length ? (
        <div>
          <TypoGraphy variant="subtitle2" color="rgba(64,76,85,0.5)">
            {subtitle}
          </TypoGraphy>
        </div>
      ) : null}
      {variant !== 'custom' && (
        <div className="flex items-center mt-4">
          <div className="w-5 h-5 rounded-full mr-2">
            <img
              src={icon}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="max-w-[80%]">
            {variant === 'opacity' ? (
              <p className="text-sm font-black leading-[22px] tracking-[0.1px] text-center text-transparent text-md bg-clip-text bg-gradient-to-r from-[#8EFCA1] to-[#10CCFA]">
                {body}
              </p>
            ) : (
              <TypoGraphy variant="body2">{body}</TypoGraphy>
            )}
          </div>
        </div>
      )}
      {children}
    </>
  );
  if (variant === 'nft') {
    VariantComponent = () => (
      <>
        <div
          style={{ background: gradient }}
          className="h-[250px] w-full rounded-tl-[20px] rounded-tr-[20px]"
        />
        <div className="w-full p-5">
          <div className="pb-2.5 mb-2.5 border-b border-[rgba(64,76,85,0.25)]">
            <TypoGraphy variant="body1" isbold>
              {heading}
            </TypoGraphy>
          </div>
          <div className="flex w-full justify-between items-center">
            <TypoGraphy variant="body1">{subtitle}</TypoGraphy>
            <TypoGraphy variant="body1" isbold>
              Owned (1)
            </TypoGraphy>
          </div>
        </div>
      </>
    );
  }
  return (
    <div
      style={{ padding: variant === 'nft' ? 0 : '' }}
      className="p-5 bg-white shadow-card rounded-[20px] w-full"
    >
      <VariantComponent />
    </div>
  );
};

export default Card;
