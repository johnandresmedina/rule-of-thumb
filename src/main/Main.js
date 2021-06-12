import Layout from '../layout/Layout';
import Header from '../header/Header';
import SpeakOutBanner from '../speakOutBanner/SpeakOutBanner';

import './main.scss';

const Main = () => {
  return (
    <Layout>
      <Header />
      <div class='max-centered'>
        <SpeakOutBanner />
        <main role='main'> Your code goes here </main>
      </div>
    </Layout>
  );
};

export default Main;
