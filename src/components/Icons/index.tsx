// icons used by the components

import React from 'react';
import AccountIcon from './svgs/account.svg';
import OnelineIcon from './svgs/oneline.svg';
import BusyIcon from './svgs/busy.svg';
import FocusIcon from './svgs/focus.svg';
import OfflineIcon from './svgs/offline.svg';
import ApprovedIcon from './svgs/approved.svg';
import DeclinedIcon from './svgs/declined.svg';
import LockedIcon from './svgs/locked.svg';

type Props = {
  [x: string]: any;
};

export function Account(props: Props) {
  return <AccountIcon {...props} />;
}

export function Online(props: Props) {
  return <OnelineIcon {...props} />;
}

export function Busy(props: Props) {
  return <BusyIcon {...props} />;
}

export function Focus(props: Props) {
  return <FocusIcon {...props} />;
}

export function Offline(props: Props) {
  return <OfflineIcon {...props} />;
}

export function Approved(props: Props) {
  return <ApprovedIcon {...props} />;
}

export function Declined(props: Props) {
  return <DeclinedIcon {...props} />;
}

export function Locked(props: Props) {
  return <LockedIcon {...props} />;
}
