import { useMemo } from 'react';
import TypoGraphy from '../Typography/Typography';
import { IBannerCardProps } from './Card.types';

const BannerCard = ({
  variant,
  icon = '/default-1.png',
  heading,
  body,
  subtitle = '',
  colors = ['#422497', '#6998D0'],
  children = '',
}: IBannerCardProps) => {
  const gradient = useMemo(
    () => `linear-gradient(93.1deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
    [colors],
  );
  let VariantComponent = () => (
    <>
      <TypoGraphy variant="h4">{heading}</TypoGraphy>
      {subtitle?.length ? (
        <div>
          <TypoGraphy variant="subtitle2" color="rgba(64,76,85,0.5)">
            {subtitle}
          </TypoGraphy>
        </div>
      ) : null}
      {variant !== 'custom' && (
        <div className="flex items-center mt-16">
          <div className="w-5 h-5 rounded-full mr-2">
            <img
              src={icon}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="max-w-[80%]">
            <TypoGraphy variant="body2">{body}</TypoGraphy>
          </div>
        </div>
      )}
      {children}
    </>
  );
  if (variant === 'banner') {
    VariantComponent = () => (
      <>
        <div
          style={{ background: gradient }}
          className="h-[100px] w-full rounded-[20px]"
        />
      </>
    );
  }
  return (
    <div
      style={{ padding: variant === 'banner' ? 0 : '' }}
      className="p-5 bg-white shadow-card rounded-[20px] w-full"
    >
      <VariantComponent />
    </div>
  );
};

export default BannerCard;
