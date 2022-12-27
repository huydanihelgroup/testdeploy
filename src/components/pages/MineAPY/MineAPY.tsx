import './MineAPY.css';
import Footer from '../../atoms/Footer/Footer';
import Layout from '../../atoms/Layout/Layout';
import Navbar from '../../atoms/Navbar/Navbar';
import TypoGraphy from '../../atoms/Typography/Typography';
import { IMineAPYProps } from './MineAPY.types';
import Card from '../../atoms/Card/Card';
import Button from '../../atoms/Button/Button';
import TextField from '../../atoms/TextField/TextField';

const MineAPY = ({
  footerProps,
  navbarProps,
  caption,
  eyebrow,
  title,
  cardTitle,
  button1Text,
  button2Text,
  cardBody,
  cardValue,
  input1Label,
  input1Placeholder,
  input2Label,
  input2Placeholder,
}: IMineAPYProps) => {
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
          <div className="mt-10 flex justify-center items-center">
            <div className="max-w-2xl w-full">
              <Card variant="custom">
                <div className="w-full px-1 py-3">
                  <TypoGraphy variant="h4">{cardTitle}</TypoGraphy>
                  <div className="my-11 w-full">
                    <div className="w-full flex justify-between items-start">
                      <div>
                        <label>
                          <TypoGraphy variant="body2" isbold>
                            {input1Label}
                          </TypoGraphy>
                        </label>
                        <div className="mt-6">
                          <TextField
                            variant="outlined"
                            placeholder={input1Placeholder}
                            type="number"
                          />
                        </div>
                      </div>
                      <div>
                        <label>
                          <TypoGraphy variant="body2" isbold>
                            {input2Label}
                          </TypoGraphy>
                        </label>
                        <div className="mt-6">
                          <TextField
                            variant="outlined"
                            placeholder={input2Placeholder}
                            type="number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full mt-11">
                      <TypoGraphy variant="body2" isbold>
                        {cardBody}
                      </TypoGraphy>
                      <TypoGraphy variant="body2" color="#51C64F" isbold>
                        {cardValue}
                      </TypoGraphy>
                    </div>
                    <div className="w-full flex justify-end items-center mt-8">
                      <div>
                        <Button variant="outlined">{button1Text}</Button>
                      </div>
                      <div className="ml-3">
                        <Button variant="contained">{button2Text}</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Layout>
      </div>
      <Footer {...footerProps} />
    </div>
  );
};

export default MineAPY;
