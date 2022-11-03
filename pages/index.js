import React, { useState, useEffect, useRef } from 'react';
import Benefit from '../components/campaign/Benefit/Benefit';
import CampaignHero from '../components/campaign/CampaignHero/CampaignHero';
import CardSection from '../components/campaign/CardSection/CardSection';
import Faq from '../components/campaign/Faq/Faq';

import GNB from '../components/campaign/GNB/GNB';
import Story from '../components/campaign/Stroy/Story';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef(null);

  const handelScroll = () => {
    if (scrollRef.current) {
      const rect = scrollRef.current.getBoundingClientRect();
      if (rect.top <= -2060) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handelScroll);

    return () => window.removeEventListener('scroll', handelScroll);
  }, []);

  return (
    <div ref={scrollRef}>
      <GNB visible={visible} />
      <CampaignHero />
      <Story />
      <CardSection />
      <Benefit />
      <Faq />
    </div>
  );
};

export default Home;
