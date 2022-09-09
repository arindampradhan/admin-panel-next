import React, { useState } from 'react';
import Background from '../components/Background';
import Button, { ButtonGroup } from '../components/Button';

const DesignSystem = () => {
  const [isExpanded, setExpanse] = useState(false);

  return (
    <div>
      <Background className="bg-white">
        <ButtonGroup appearance="primary">
          <Button>First button</Button>
          <Button>Second button</Button>
          <Button>Third button</Button>
        </ButtonGroup>
      </Background>
    </div>
  );
};

export default DesignSystem;
