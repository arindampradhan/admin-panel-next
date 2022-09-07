import React from 'react';
import Button from '../components/Button';
import Background from '../components/Background';
import Badge from '../components/Badge';

const DesignSystem = () => {
  return (
    <div>
      <Background className="">
        <Badge appearance="removed" max={10}>
          {18}
        </Badge>
      </Background>
    </div>
  );
};

export default DesignSystem;
