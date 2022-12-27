import Card from '../../atoms/SmallCard/Card';
import Footer from '../../atoms/NewFooter/Footer';
import Layout from '../../atoms/Layout/Layout';
import Navbar from '../../atoms/NewNavbar/Navbar';
import TypoGraphy from '../../atoms/Typography/Typography';
import './Ownership.css';
import { IOwnershipProps } from './Ownership.types';
import { Modal } from '../../atoms/Modal/Modal';
import Button from '../../atoms/ConnectButton/Button';
import { useState } from 'react';

const Ownership = ({
  navbarProps,
  footerProps,
  caption,
  caption2,
  title,
  refLink,
  copy,
  connect,
  cardProps,
  buttonText,
  variant,
  percent,
  disableButton,
  modalTitle,
  modalBody,
  hasClaimed,
  connected,
}: IOwnershipProps) => {
  const [position, closeModal] = useState(false);
  const colors = ['#422497', '#6998D0'];
  const gradient = `linear-gradient(93.1deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
  return (
    <div className="w-full bg-[#F5F5F5] min-h-screen">
      <Navbar {...navbarProps} />
      <div className="mt-12 mb-32">
        <Layout variant="wide">
          <div className="mt-6">
            <h3 className="font-bold text-center text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#442095] to-[#6B90CB]">
              {title}
            </h3>
          </div>
          <div className="flex justify-center">
            <h3 className="mt-7 pb-7 w-[32rem] text-center text-base">
              {caption}
            </h3>
          </div>
          {connected ? (
            hasClaimed ? (
              <div className="w-full flex justify-center">
                <div className="w-[480px]">
                  <div
                    style={{ background: gradient }}
                    className="h-[100px] w-full rounded-[20px] flex items-center justify-center text-white text-2xl"
                  >
                    <div className="text-center">
                      This wallet owns <strong>{percent}%</strong>
                      <div className="flex text-center space-x-2 justify-center items-end">
                        <p className="text-2xl ">
                          of<br></br>
                        </p>
                        <p className="font-black text-center text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#8EFCA1] to-[#10CCFA]">
                          Very Banking
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}

          <div className="flex justify-center m-2">
            <div className="w-[32rem]">
              <div className="flex items-center flex-wrap justify-around">
                {cardProps &&
                  cardProps.map((card, idx) => (
                    <div key={idx} className="w-[220px] mt-5">
                      <Card {...card} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {connected ? (
            hasClaimed ? (
              <div className="w-full flex justify-center mt-6">
                <div className="w-[480px]">
                  <div className="bg-white h-[100px] w-full rounded-[20px] flex items-center justify-center">
                    <div className="text-center">
                      Earn ownership points when you refer other users with
                      <div className="flex text-center justify-center items-center  space-x-2">
                        <p className="">this link: </p>
                        <Button
                          variant="outlined"
                          className="font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-[#8EFCA1] to-[#10CCFA]"
                          onClick={copy}
                        >
                          {refLink.substring(0, 33)}...{refLink.slice(-5)}
                        </Button>
                        
                      </div>
                      <span id="custom-tooltip">Copied</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}

          <div className="flex justify-center mt-8">
            <TypoGraphy variant="subtitle1">
              <center>{caption2}</center>
            </TypoGraphy>
          </div>

          <div className="flex justify-center mt-6">
            {disableButton ? (
              <Button
                variant={variant === 'wrong_network' ? 'outlined' : 'contained'}
                size="large"
                onClick={connect}
                disabled
              >
                {buttonText}
              </Button>
            ) : (
              <Button
                variant={variant === 'wrong_network' ? 'outlined' : 'contained'}
                size="large"
                onClick={connect}
              >
                {buttonText}
              </Button>
            )}
          </div>
        </Layout>
      </div>
      <Footer {...footerProps} />
      <Modal open={position} onClose={() => closeModal(false)}>
        <div className="flex flex-col items-center justify-center">
          <TypoGraphy variant="h4">{modalTitle}</TypoGraphy>
          <div className="my-3">
            <TypoGraphy className="mt-8" centered variant="body2" isbold>
              {modalBody}
            </TypoGraphy>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Ownership;
