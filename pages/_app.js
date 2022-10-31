import React from 'react';
import GNB from '../components/campaign/GNB/GNB';
import '../global.css';

const App = ({ Component }) => {
  return (
    <>
      <GNB />
      <Component />
    </>
  );
};

export default App;
