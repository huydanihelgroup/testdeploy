import Card from '../../atoms/Card/Card';
import Footer from '../../atoms/NewFooter/Footer';
import Layout from '../../atoms/Layout/Layout';
import Navbar from '../../atoms/Navbar/Navbar';
import TypoGraphy from '../../atoms/Typography/Typography';
import './NewClaim.css';
import { INewClaimProps } from './NewClaim.types';

const NewClaim = ({
  navbarProps,
  footerProps,
  caption,
  eyebrow,
  title,
  cardProps,
}: INewClaimProps) => {
  return (
    <div className="w-full">
      <Navbar {...navbarProps} />
      <div className="mt-12 mb-28 ml-32 flex flex-col items-center">
        <Layout variant="wide">
          <TypoGraphy variant="body1" isbold>
            {eyebrow}
          </TypoGraphy>
          <div className="mt-6 w-[25rem]">
            <h3 className="font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#442095] to-[#6B90CB]">
              {title}
            </h3>
          </div>
          <div className="mt-7 pb-7 w-[30rem]">
            <TypoGraphy variant="subtitle2">{caption}</TypoGraphy>
          </div>

          {/* <div className="flex justify-between items-center flex-wrap mt-6">
            {cardProps &&
              cardProps.map((card, idx) => (
                <div key={idx} className="w-[240px] mt-5">
                  <Card {...card} />
                </div>
              ))}
          </div> */}
        </Layout>
      </div>
      <div className="mt-auto">
        <Footer {...footerProps} />
      </div>
    </div>
  );
};

export default NewClaim;
