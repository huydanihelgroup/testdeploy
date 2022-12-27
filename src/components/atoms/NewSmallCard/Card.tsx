import { useMemo } from 'react';
import TypoGraphy from '../Typography/Typography';
import { ICardProps } from './Card.types';

const Card = ({
  variant,
  icon = '/default-1.png',
  heading,
  body,
  subtitle = '',
  colors = ['#92FEA4', '#10CCFA'],
  colors2 = ['#442095', '#6B90CB'],
  children = '',
}: ICardProps) => {
  const gradient = useMemo(
    () => `linear-gradient(225deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
    [colors],
  );
  const gradient2 = useMemo(
    () => `linear-gradient(225deg, ${colors2[0]} 0%, ${colors2[1]} 100%)`,
    [colors2],
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
          className="h-[120px] w-full rounded-[20px] p-6"
        >
          <TypoGraphy variant="h5" color="white">
            {heading}
          </TypoGraphy>
          {subtitle?.length ? (
            <div>
              <TypoGraphy variant="subtitle2" color="rgba(64,76,85,0.5)">
                {subtitle}
              </TypoGraphy>
            </div>
          ) : null}
          <div className="flex items-center mt-4">
            <div className="w-5 h-5 rounded-full mr-2">
              <img src={icon} alt="" className="w-full h-full" />
            </div>
            <div className="max-w-[80%]">
              <p className="text-sm font-black text-white">
                {body}
              </p>
            </div>
          </div>
          {children}
        </div>
      </>
    );
  }
  if (variant === 'nft2') {
    VariantComponent = () => (
      <>
        <div
          style={{ background: gradient2 }}
          className="h-[120px] w-full rounded-[20px] p-6"
        >
          <TypoGraphy variant="h5" color="white">
            {heading}
          </TypoGraphy>
          {subtitle?.length ? (
            <div>
              <TypoGraphy variant="subtitle2" color="rgba(64,76,85,0.5)">
                {subtitle}
              </TypoGraphy>
            </div>
          ) : null}
          <div className="flex items-center mt-4">
            <div className="w-5 h-5 rounded-full mr-2">
              <img src={icon} alt="" className="w-full h-full" />
            </div>
            <div className="max-w-[80%]">
              <p className="text-sm font-black text-white">{body}</p>
            </div>
          </div>
          {children}
        </div>
      </>
    );
  }
  return (
    <div
      style={{ padding: variant === 'nft' || 'nft2' ? 0 : '' }}
      className="p-5 bg-white shadow-card rounded-[20px] w-full"
    >
      <VariantComponent />
    </div>
  );
};

export default Card;
