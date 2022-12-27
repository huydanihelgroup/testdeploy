import './Vault.css';
import Footer from '../../atoms/Footer/Footer';
import Layout from '../../atoms/Layout/Layout';
import Navbar from '../../atoms/Navbar/Navbar';
import TypoGraphy from '../../atoms/Typography/Typography';
import { IVaultProps } from './Vault.types';
import Card from '../../atoms/Card/Card';
import Button from '../../atoms/Button/Button';

const Vault = ({
  footerProps,
  navbarProps,
  buttonText,
  caption,
  title,
  cards,
  icon = '/lock.png',
}: IVaultProps) => {
  return (
    <div className="w-full bg-[#F7FAFC]">
      <Navbar {...navbarProps} />
      <div className="mt-12 mb-28 min-h-screen flex flex-col items-center justify-center vault-section">
        <Layout variant="medium">
          <div className="flex justify-center items-center">
            <Card variant="custom">
              <div className="w-full flex flex-col items-center text-center">
                <TypoGraphy variant="h3">{title}</TypoGraphy>
                <div className="mt-3">
                  <TypoGraphy variant="caption">{caption}</TypoGraphy>
                </div>
                <div className="mt-5">
                  <img
                    src={icon}
                    className="object-contain w-8"
                    alt="Claim SDX"
                  />
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
                <div className="mt-10">
                  <Button variant="contained">{buttonText}</Button>
                </div>
              </div>
            </Card>
          </div>
        </Layout>
      </div>
      <Footer {...footerProps} />
    </div>
  );
};

export default Vault;
