import React from 'react';
import Card from '../../atoms/Card/Card';
import Footer from '../../atoms/Footer/Footer';
import Layout from '../../atoms/Layout/Layout';
import Navbar from '../../atoms/Navbar/Navbar';
import TypoGraphy from '../../atoms/Typography/Typography';
import { IWalletProps } from './Wallet.types';

const Wallet = ({
  caption,
  eyebrow,
  footerProps,
  navbarProps,
  title,
  caption2,
  title2,
  cards = [],
  apyCards = [],
}: IWalletProps) => {
  return (
    <div className="w-full">
      <Navbar {...navbarProps} />
      <div className="mt-12 mb-28 min-h-screen flex flex-col items-center">
        <Layout variant="wide">
          <TypoGraphy variant="body1" isbold>
            {eyebrow}
          </TypoGraphy>
          <div className="mt-6">
            <TypoGraphy variant="h3">{title}</TypoGraphy>
          </div>
          <div className="mt-7 border-b pb-7">
            <TypoGraphy variant="subtitle2">{caption}</TypoGraphy>
          </div>
          <div className="mt-10">
            <div className="w-full flex items-center justify-between border-b pb-7">
              {cards.map((card, idx) => (
                <div key={idx} className="w-[240px]">
                  <Card {...card} />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <TypoGraphy variant="h3">{title2}</TypoGraphy>
            </div>
            <div className="mt-7">
              <TypoGraphy variant="subtitle2">{caption2}</TypoGraphy>
            </div>
            <div className="w-full flex items-center border-b pb-7">
              {apyCards.map((card, idx) => (
                <div key={idx} className="w-[240px] mt-5 first:ml-0 ml-5">
                  <Card {...card} />
                </div>
              ))}
            </div>
          </div>
        </Layout>
      </div>
      <Footer {...footerProps} />
    </div>
  );
};

export default Wallet;
