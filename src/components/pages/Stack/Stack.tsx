import './Stack.css';
import Layout from '../../atoms/Layout/Layout';
import Navbar from '../../atoms/Navbar/Navbar';
import TypoGraphy from '../../atoms/Typography/Typography';
import TextField from '../../atoms/TextField/TextField';
import Card from '../../atoms/Card/Card';
import Button from '../../atoms/Button/Button';
import { IStackProps } from './Stack.types';

const Stake = ({
  navbarProps,
  cardTitle,
  cardProps,
  imageProps,
  textLabelProps,
  inputTextLabelProps1,
  inputTextLabelProps2,
  ButtonLeftProps,
  ButtonRightProps,
  ButtonCenterProps,
  inputTextLabelProps3,
  inputTextLabelProps4,
  inputTextLabelProps5,
  inputTextLabelProps6,
}: IStackProps) => {
  return (
    <div className="w-full">
      <Navbar {...navbarProps} />
      <div className="mb-28 min-h-screen flex flex-col items-center justify-center">
        <Layout variant="wide">
          <div className="w-full flex items-center justify-center">
            <div className="w-auto">
              <Card {...cardProps}>
                <div className="w-full px-1 py-4 text-center">
                  <TypoGraphy variant="h2">{cardTitle}</TypoGraphy>
                </div>
                <div className="w-full flex flex-row items-center justify-between py-4">
                  <div className="w-full flex flex-row items-center gap-3">
                    <img
                      src={imageProps}
                      alt=""
                      className="w-8 h-full object-cover rounded-full"
                    />
                    <TypoGraphy {...textLabelProps} />
                  </div>
                  <div className="w-full text-right">
                    <TypoGraphy variant="subtitle1" isbold>
                      N/A
                    </TypoGraphy>
                  </div>
                </div>
                <form>
                  <div className="w-full flex flex-row flex-wrap gap-4 py-4">
                    <div className="w-full flex-1">
                      <TypoGraphy {...inputTextLabelProps1} />
                      <TextField
                        variant="outlined"
                        placeholder="SDEX"
                        type="text"
                      />
                    </div>
                    <div className="w-full flex-1">
                      <TypoGraphy {...inputTextLabelProps2} />
                      <TextField
                        variant="outlined"
                        placeholder="Days"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="border rounded-lg mt-4 p-4">
                    <div className="w-full flex flex-row items-center justify-between mb-4">
                      <div className="w-full flex flex-row items-center gap-1">
                        <TypoGraphy {...inputTextLabelProps3} />
                      </div>
                      <div className="w-full text-right">
                        <TypoGraphy color="#51C64F" {...inputTextLabelProps4} />
                      </div>
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className="w-full flex flex-row items-center gap-1">
                        <TypoGraphy {...inputTextLabelProps5} />
                        {/* <TypoGraphy variant="subtitle2" isbold>Estimated ROI After Maturity:</TypoGraphy> */}
                      </div>
                      <div className="w-full text-right">
                        <TypoGraphy color="#51C64F" {...inputTextLabelProps6} />
                      </div>
                    </div>
                  </div>
                  <div className="buttons-container flex flex-row justify-end gap-2 py-4">
                    <Button {...ButtonLeftProps} />
                    <Button {...ButtonCenterProps} />
                    <Button {...ButtonRightProps} />
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Stake;
