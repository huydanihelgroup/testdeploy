import { useState } from 'react';
import './Claim.css';
import Footer from '../../atoms/Footer/Footer';
import Layout from '../../atoms/Layout/Layout';
import Navbar from '../../atoms/Navbar/Navbar';
import TypoGraphy from '../../atoms/Typography/Typography';
import Icon from '../../atoms/Icon/Icon';
import Divider from '../../atoms/Divider/Divider';
import { IClaimProps } from './Claim.types';
import Card from '../../atoms/Card/Card';
import Button from '../../atoms/Button/Button';
import { Modal } from '../../atoms/Modal/Modal';

const Claim = ({
  footerProps,
  navbarProps,
  buttonText,
  caption,
  title,
  cards,
  claimText,
  claimValue,
  referralIcon,
  referralText,
  referralValue,
  confirmingStatus,
  modalTitle,
  modalBody,
  modelImage,
  modelCloseText,
  modelTopImg,
  followLink,
  claimValueDisplay,
}: IClaimProps) => {
  const [position, closeModal] = useState(false);
  return (
    <div className="w-full bg-[#F7FAFC]">
      <Navbar {...navbarProps} />
      <div className="mt-12 mb-28 min-h-screen flex flex-col items-center justify-center claim-section">
        <Layout variant="medium">
          <div className="flex justify-center items-center">
            <Card variant="custom">
              <div className="w-full flex flex-col items-center text-center">
                <TypoGraphy variant="h2">{title}</TypoGraphy>
                <div className="mt-3">
                  <TypoGraphy variant="subtitle1">{caption}</TypoGraphy>
                </div>
                <div className="mt-5 border px-5 pb-5 rounded-xl w-full">
                  {cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="w-full flex justify-between items-center mt-5"
                    >
                      <div className="flex items-center">
                        <img
                          src={card.icon}
                          className="w-7 object-cover"
                          alt={card.body1}
                        />
                        <div className="ml-4">
                          <TypoGraphy variant="body1" isbold>
                            {card.body1}
                          </TypoGraphy>
                        </div>
                      </div>
                      <div>
                        <TypoGraphy variant="body1" isbold>
                          {card.body2}
                          {card.change?.length ? (
                            <span className="ml-1" style={{ color: '#51C64F' }}>
                              {card.change}
                            </span>
                          ) : null}
                        </TypoGraphy>
                      </div>
                    </div>
                  ))}
                </div>

                {claimText && claimValue ? (
                  <div className="mt-3">
                    <TypoGraphy variant="subtitle1">{claimText}</TypoGraphy>
                    <TypoGraphy variant="subtitle1" isbold>
                      {claimValue}
                    </TypoGraphy>
                  </div>
                ) : null}

                {referralIcon || referralText || referralValue ? (
                  <>
                    <Divider />
                    <div className="flex justify-center items-center">
                      {referralIcon ? (
                        <Icon
                          color="rgba(64, 76, 85, 0.54)"
                          icon="InfoOutlined"
                        />
                      ) : null}

                      {referralText ? (
                        <div className="ml-2">
                          <TypoGraphy variant="subtitle1">
                            {referralText}
                          </TypoGraphy>
                        </div>
                      ) : null}
                    </div>
                    {referralValue ? (
                      <TypoGraphy variant="subtitle1">
                        {referralValue}
                      </TypoGraphy>
                    ) : null}
                  </>
                ) : null}

                <div className="mt-4">
                  {confirmingStatus ? (
                    <Button
                      onClick={() => closeModal(true)}
                      variant="contained"
                      disabled={referralIcon && referralText ? true : false}
                    >
                      {buttonText}
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      disabled={referralIcon && referralText ? true : false}
                    >
                      {buttonText}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </Layout>
      </div>
      <Footer {...footerProps} />

      <Modal open={position} onClose={() => closeModal(false)}>
        <div className="flex flex-col items-center justify-center">
          {modelTopImg ? (
            <img
              src={modelTopImg}
              className="object-contain w-8 "
              alt="loading transaction"
            />
          ) : null}
          <TypoGraphy variant="h4">{modalTitle}</TypoGraphy>
          <div className="my-3">
            <TypoGraphy className="mt-8" centered variant="body2" isbold>
              {claimValueDisplay ? claimValue : null} {modalBody}
            </TypoGraphy>
            {followLink ? (
              <div className="mt-5 mb-2 border px-5 pb-5 rounded-xl w-full">
                <div className="w-full flex flex-col justify-between items-center mt-5">
                  <TypoGraphy className="mt-8" centered variant="body2">
                    {followLink}
                  </TypoGraphy>
                  <div className="flex gap-2 mt-5">
                    <img
                      src="tweeter.png"
                      className="object-contain w-8"
                      alt="loading transaction"
                    />
                    <img
                      src="direction.png"
                      className="object-contain w-8"
                      alt="loading transaction"
                    />
                  </div>
                </div>
              </div>
            ) : null}

            {modelImage ? (
              <div className="flex justify-center items-center">
                <img
                  src={modelImage}
                  className="fixed_img"
                  alt="loading transaction"
                />
              </div>
            ) : null}
          </div>
          {modelCloseText ? (
            <Button
              onClick={() => closeModal(false)}
              variant="contained"
              disabled={referralIcon && referralText ? true : false}
            >
              {modelCloseText}
            </Button>
          ) : null}
        </div>
      </Modal>
    </div>
  );
};

export default Claim;
