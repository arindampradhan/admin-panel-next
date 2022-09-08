import React from 'react';
import Background from '../components/Background';
import EmptyState from '../components/EmptyState';
import Button from '../components/Button';

const DesignSystem = () => {
  return (
    <div>
      <Background>
        <EmptyState
          header="You don't have access to this issue"
          description="Make sure the issue exists in this project. If it does, ask a project admin for permission to see the project's issues."
          primaryAction={<Button>View permission</Button>}
          tertiaryAction={<Button appearance="link">Learn more</Button>}
          imageUrl="https://atlassian.design/static/LockClosed-18281e85ee8523db807bb04889ceaac8.png"
          width="narrow"
        />
      </Background>
    </div>
  );
};

export default DesignSystem;
