import type { NextPage } from 'next';
import React from 'react';
import Background from '@/components/Background';
import SectionMessage, {
  SectionMessageAction
} from '@/components/SectionMessage';

const DesignSystem: NextPage = () => {
  return (
    <>
      <Background background="white">
        <SectionMessage
          title="Editing is restricted"
          actions={[
            <SectionMessageAction key={1} href="#">
              Request edit access
            </SectionMessageAction>,
            <SectionMessageAction key={2} href="#">
              Learn more
            </SectionMessageAction>
          ]}
        >
          <p>
            {
              "You're not allowed to change these restrictions. It's either due to the restrictions on the page, or permission settings for this space."
            }
          </p>
        </SectionMessage>
      </Background>
    </>
  );
};

export default DesignSystem;
