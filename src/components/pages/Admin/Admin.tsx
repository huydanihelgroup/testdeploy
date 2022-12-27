import Card from '../../atoms/Card/Card';
import Footer from '../../atoms/Footer/Footer';
import Layout from '../../atoms/Layout/Layout';
import Navbar from '../../atoms/Navbar/Navbar';
import TypoGraphy from '../../atoms/Typography/Typography';
import { IAdminProps } from './Admin.types';
import Table from '../../atoms/Table/Table';
import Button from '../../atoms/Button/Button';
import TextField from '../../atoms/TextField/TextField';
import './Admin.css';
import AutoCompleteField from '../../atoms/AutoCompleteField/AutoComplete';

const Admin = ({
  navbarProps,
  footerProps,
  caption,
  eyebrow,
  title,
  tableProps,
  ButtonProps,
  inputProps,
  inputProps1,
  icon = '/download.png',
  autoCompleteProps,
  autoCompleteProps1,
}: IAdminProps) => {
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
            <Card variant="custom">
              <div className="w-full px-1 py-3">
                <div className="my-11 w-full flex flex-row justify-end gap-2">
                  <div className="custom-input-container-auto-complete">
                    <AutoCompleteField {...autoCompleteProps1} />
                  </div>
                  <div className="custom-input-container">
                    <TextField
                      variant="outlined"
                      className="w-8"
                      placeholder={inputProps1}
                    />
                  </div>
                  <div className="custom-input-container-auto-complete">
                    <AutoCompleteField {...autoCompleteProps} />
                  </div>
                  <Button variant="outlined">{inputProps}</Button>
                  <Button variant="outlined">
                    {ButtonProps}
                    <img className="pl-2" src={icon} alt={'download icon'} />
                  </Button>
                </div>
                <div className="my-11 w-full">
                  <Table {...tableProps} />
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
export default Admin;
