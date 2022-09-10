import React, { useState } from 'react';
import Background from '../components/Background';
import Avatar, { Skeleton } from '@/components/Avatar';

const DesignSystem = () => {
  return (
    <>
      <Background background="white">
        <Skeleton />
        <Avatar
          status="approved"
          presence="online"
          label="Scott Farquhar (online)"
          href="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
          src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
        />
        <Avatar
          presence="busy"
          label="Scott Farquhar (busy)"
          src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
        />
        <Avatar
          presence="focus"
          label="Scott Farquhar (focus)"
          src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
        />
        <Avatar
          presence="offline"
          label="Scott Farquhar (offline)"
          src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
        />
      </Background>
    </>
  );
};

export default DesignSystem;
