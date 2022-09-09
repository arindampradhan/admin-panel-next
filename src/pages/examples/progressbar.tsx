import React, { useState } from 'react';
import Background from '@/components/Background';
import Progressbar from '@/components/Progressbar';

const DesignSystem = () => {
  return (
    <>
      <Background>
        <Progressbar appearance="success" value={0.5} />
        <br />
        <Progressbar appearance="default" value={0.5} />
        <br />
        <Progressbar appearance="inverse" value={0.5} />
      </Background>
    </>
  );
};

export default DesignSystem;
