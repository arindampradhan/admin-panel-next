import React from 'react';
import { Approved, Declined, Locked } from '@/components/Icons/index';

// TODO: for different sizes
type Props = {
  children?: React.ReactNode;
  borderColor?: string;
  status: 'approved' | 'declined' | 'locked';
};

export const Status: React.FC<Props> = ({
  children,
  borderColor,
  status = 'approved'
}) => {
  if (status) {
    return (
      <span
        className="box-border flex content-center items-center overflow-hidden rounded-full border-2"
        style={{ borderColor }}
      >
        {
          {
            approved: <Approved className="h-full w-full" />,
            declined: <Declined className="h-full w-full" />,
            locked: <Locked className="h-full w-full" />
          }[status]
        }
      </span>
    );
  }
  return null;
};

export default Status;
