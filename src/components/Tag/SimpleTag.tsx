import React from 'react';
import { baseColorBehaviour, linkColorBehaviour } from './theme';

type TagProps = {
  children?: React.ReactNode;
  text?: React.ReactNode;
  appearance?: 'default' | 'rounded';
  color?:
    | 'standard'
    | 'green'
    | 'blue'
    | 'red'
    | 'purple'
    | 'grey'
    | 'teal'
    | 'yellow'
    | 'greenLight'
    | 'blueLight'
    | 'redLight'
    | 'purpleLight'
    | 'greyLight'
    | 'tealLight'
    | 'yellowLight';
  elemBefore?: React.ReactNode;
  href?: string;
  linkComponent?: React.ReactNode;
  onAfterRemoveAction?: () => boolean;
  onBeforeRemoveAction?: () => boolean;
  isRemovable?: boolean;
  removeButtonLabel?: string;
};

export const SimpleTag: React.FC<TagProps> = ({
  children,
  text,
  appearance = 'default',
  color = 'standard',
  elemBefore,
  href,
  linkComponent,
  removeButtonLabel,
  isRemovable,
  onAfterRemoveAction,
  onBeforeRemoveAction
}) => {
  const content = text || children;
  const appearanceBehaviour = {
    default: 'rounded-[3px]',
    rounded: 'rounded-xl'
  };

  const isRemove = isRemovable || removeButtonLabel;
  const paddingR = isRemove ? 'pr-4' : 'pr-1';
  const paddingL = elemBefore ? 'pl-4' : 'pl-1';

  return (
    <span
      className={`relative m-1 inline-flex h-5 cursor-default overflow-hidden p-0 leading-none ${
        appearanceBehaviour[appearance]
      } ${href ? linkColorBehaviour[color] : baseColorBehaviour[color]} ${
        appearanceBehaviour[appearance]
      }`}
    >
      {elemBefore && (
        <span className="absolute top-0 flex items-center justify-center rounded-xl">
          {elemBefore}
        </span>
      )}
      {href ? (
        <a
          href={href}
          className={`max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap py-[2px] text-sm font-normal leading-none hover:underline focus:outline-none active:underline ${paddingL} ${paddingR}`}
        >
          {content}
        </a>
      ) : (
        <span
          className={`max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap py-[2px] text-sm font-normal leading-none ${paddingL} ${paddingR}`}
        >
          {content}
        </span>
      )}
      {isRemove && (
        <button className="pointer-events-none absolute right-0 m-0 flex h-4 cursor-pointer appearance-none flex-row items-center self-center rounded-xl border-none bg-transparent p-0 text-darkneutral-100">
          <span className="inline-block h-4 w-4 flex-shrink-0 leading-none">
            x
          </span>
        </button>
      )}
    </span>
  );
};

export default SimpleTag;
