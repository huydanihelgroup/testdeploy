import Card from '../../atoms/Card/Card';
import Footer from '../../atoms/Footer/Footer';
import Layout from '../../atoms/Layout/Layout';
import Navbar from '../../atoms/Navbar/Navbar';
import TypoGraphy from '../../atoms/Typography/Typography';
import './Home.css';
import { IHomeProps } from './Home.types';

const Home = ({
  navbarProps,
  footerProps,
  caption,
  eyebrow,
  title,
  cardProps,
}: IHomeProps) => {
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

          <div className="flex justify-between items-center flex-wrap mt-6">
            {cardProps &&
              cardProps.map((card, idx) => (
                <div key={idx} className="w-[240px] mt-5">
                  <Card {...card} />
                </div>
              ))}
          </div>
        </Layout>
      </div>
      <Footer {...footerProps} />
    </div>
  );
};

export default Home;
