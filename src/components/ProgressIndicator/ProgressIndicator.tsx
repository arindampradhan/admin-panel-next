import React, { SyntheticEvent } from 'react';
import Button from '@/components/Button';

type eventData = {
  event: SyntheticEvent;
  index: number;
};

type ProgressIndicatorProps = {
  selectedIndex: number;
  values: any[];
  appearance?: 'default' | 'help' | 'inverted' | 'primary';
  onSelect?: (e: eventData) => void;
  size?: 'small' | 'default' | 'large';
  spacing?: 'comfortable' | 'cozy' | 'compact';
};

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  selectedIndex,
  values = [],
  appearance = 'default',
  size = 'default',
  spacing = 'comfortable',
  onSelect
}) => {
  const appearanceBehaviour = {
    default: 'bg-lightneutral-600',
    help: 'bg-purple-200',
    inverted: 'bg-white/40',
    primary: 'bg-blue-200'
  };

  const selectedAppearanceBehaviour = {
    default: 'bg-darkneutral-500',
    help: 'bg-purple-600',
    inverted: 'bg-white',
    primary: 'bg-blue-600'
  };

  const sizesBehaviour = {
    small: 'h-1 w-1',
    default: 'h-2 w-2',
    large: 'h-3 w-3'
  };

  const spacingDivisionBehaviour = {
    comfortable: 'before:left-[-4px] before:top-[-4px] before:h-4 before:w-4',
    cozy: 'before:left-[-2px] before:top-[-2px] before:h-4 before:w-[2px]',
    compact: 'before:left-[-1px] before:top-[-1px] before:h-4 before:w-[2px]'
  };

  const isSelectAvailable = !!onSelect;

  return (
    <div role="tablist" className="flex justify-center gap-2">
      {values.map((value, index) => (
        <div
          key={index}
          role="presentation"
          onClick={event =>
            isSelectAvailable ? onSelect({ event, index }) : null
          }
          className={`relative rounded-full before:absolute before:block before:content-[''] ${
            isSelectAvailable ? 'cursor-pointer' : ''
          } ${spacingDivisionBehaviour[spacing]} ${sizesBehaviour[size]} ${
            selectedIndex === index
              ? selectedAppearanceBehaviour[appearance]
              : appearanceBehaviour[appearance]
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressIndicator;
