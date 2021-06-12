import Layout from '../layout/Layout';
import Header from '../header/Header';
import SpeakOutBanner from '../speakOutBanner/SpeakOutBanner';
import SubmitNameBanner from '../submitNameBanner/SubmitNameBanner';

import './main.scss';

const Main = () => {
  return (
    <Layout>
      <Header />
      <div className='max-centered'>
        <SpeakOutBanner />
        <main role='main'> Your code goes here </main>
        <SubmitNameBanner />
        <hr className='separator' />
      </div>
    </Layout>
  );
};

export default Main;
