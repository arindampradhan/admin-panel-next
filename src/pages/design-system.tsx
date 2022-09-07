import React from 'react';
import Background from '../components/Background';
import Lozenge from '../components/Lozenge';

const DesignSystem = () => {
  return (
    <div className="bg-white">
      <Background>
        <Lozenge appearance="moved" isBold>
          Default BOLD
        </Lozenge>
      </Background>
    </div>
  );
};

export default DesignSystem;
