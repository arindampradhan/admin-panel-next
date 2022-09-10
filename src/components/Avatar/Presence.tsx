import React from 'react';
import { Busy, Focus, Offline, Online } from '@/components/Icons/index';

type Props = {
  children?: React.ReactNode;
  borderColor?: string;
  presence: 'busy' | 'focus' | 'offline' | 'online';
};

export const Presence: React.FC<Props> = ({
  children,
  borderColor,
  presence
}) => {
  if (presence) {
    return (
      <span
        className="box-border flex content-center items-center overflow-hidden rounded-full border-2"
        style={{ borderColor }}
      >
        {
          {
            busy: <Busy className="h-full w-full" />,
            focus: <Focus className="h-full w-full" />,
            offline: <Offline className="h-full w-full" />,
            online: <Online className="h-full w-full" />
          }[presence]
        }
      </span>
    );
  }
  return null;
};

export default Presence;
