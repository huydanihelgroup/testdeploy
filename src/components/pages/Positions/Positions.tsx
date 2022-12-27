import './Positions.css';
import Button from '../../atoms/Button/Button';
import Footer from '../../atoms/Footer/Footer';
import Layout from '../../atoms/Layout/Layout';
import Navbar from '../../atoms/Navbar/Navbar';
import TypoGraphy from '../../atoms/Typography/Typography';
import { IPositionProps } from './Positions.types';
import Card from '../../atoms/Card/Card';
import Table from '../../atoms/Table/Table';

const Positions = ({
  footerProps,
  navbarProps,
  caption,
  eyebrow,
  title,
  topButtonProps,
  topButtonProps1,
  topButtonProps2,
  tableProps1,
  tableProps2,
  cardTitle,
  cardTitle1,
  dollarIcon,
  waveIcon,
}: IPositionProps) => {
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
            <div className="mt-4 flex gap-3">
              {topButtonProps ? <Button {...topButtonProps} /> : null}

              {topButtonProps1 ? (
                <Button {...topButtonProps1}>
                  {topButtonProps1?.children}
                  <img className="pl-2" src={waveIcon} alt={'wave icon'} />
                </Button>
              ) : null}
              {topButtonProps2 ? (
                <Button {...topButtonProps2}>
                  {topButtonProps2?.children}
                  <img className="pl-2" src={dollarIcon} alt={'dollar icon'} />
                </Button>
              ) : null}
            </div>
          </div>
          <div className="mt-10">
            <Card variant="custom">
              <div className="w-full px-1 py-3">
                <TypoGraphy variant="h4">{cardTitle}</TypoGraphy>
                <div className="my-11 w-full">
                  <Table {...tableProps1} />
                </div>
                <TypoGraphy variant="h4">{cardTitle1}</TypoGraphy>
                <div className="mt-11 w-full">
                  <Table {...tableProps2} />
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

export default Positions;
