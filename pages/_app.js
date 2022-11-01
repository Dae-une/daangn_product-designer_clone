import React, { useEffect } from 'react';
import GNB from '../components/campaign/GNB/GNB';
import '../global.css';

const App = ({ Component }) => {
  useEffect(() => {
    const reload = () => {
      window.location.reload();
    };
    window.addEventListener('resize', reload);
    return () => window.removeEventListener('resize', reload);
  });

  return (
    <>
      <GNB />
      <Component />
    </>
  );
};

export default App;
