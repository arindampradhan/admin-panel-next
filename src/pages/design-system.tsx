import React from 'react';
import Background from '../components/Background';
import Banner from '../components/Banner';

const DesignSystem = () => {
  return (
    <div className="bg-white">
      <Background>
        <Banner appearance="error">
          Payment details needed. To stay on your current plan after your trial
          ends, add payment details by June 30, 2020.
          <a href="/components/banner/examples">Add payment details</a>
        </Banner>
      </Background>
    </div>
  );
};

export default DesignSystem;
