import React, {
  SyntheticEvent,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef
} from 'react';
import {
  appearanceBehaviour,
  selectedAppearanceBehaviour,
  sizesBehaviour,
  spacingDivisionBehaviour
} from './theme';
import bind from '@/lib/bind';

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
  ariaControls?: string;
  ariaLabel?: string;
};

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  selectedIndex,
  values = [],
  appearance = 'default',
  size = 'default',
  spacing = 'comfortable',
  onSelect,
  ariaControls = 'panel',
  ariaLabel = 'tab'
}) => {
  const isSelectAvailable = !!onSelect;
  const tablistRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);

  // FIXME: focus css not working
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const indicators = Array.from(
        tablistRef.current!.children
      ) as HTMLButtonElement[];

      // bail if the target isn't an indicator
      if (!indicators.includes(event.target as HTMLButtonElement)) {
        return;
      }

      // bail if not valid arrow key
      const isLeft = event.key === 'ArrowLeft';
      const isRight = event.key === 'ArrowRight';
      if (!isLeft && !isRight) {
        return;
      }

      // bail if at either end of the values
      const isAlpha = isLeft && selectedIndex === 0;
      const isOmega = isRight && selectedIndex === values.length - 1;
      if (isAlpha || isOmega) {
        return;
      }

      const index = isLeft ? selectedIndex - 1 : selectedIndex + 1;

      // call the consumer's select method and focus the applicable indicator
      if (onSelect) {
        onSelect({
          event: event as unknown as React.MouseEvent<HTMLButtonElement>,
          index
        });
      }

      if (typeof indicators[index].focus === 'function') {
        indicators[index].focus();
      }
    },
    [selectedIndex, values, onSelect]
  );

  useEffect(() => {
    if (!onSelect) {
      return null;
    }
    return bind(document, {
      type: 'keydown',
      listener: handleKeyDown,
      options: { capture: false }
    });
  }, [onSelect, handleKeyDown]);

  return (
    <div
      ref={r => {
        tablistRef.current = r;
      }}
      role="tablist"
      className="flex justify-center gap-2"
    >
      {values.map((value, index) => {
        const isSelected = selectedIndex === index;
        const tabId = `${ariaLabel}${index}`;
        const panelId = `${ariaControls}${index}`;

        return (
          <div
            tabIndex={isSelected ? 0 : -1}
            key={index}
            role="presentation"
            onClick={event =>
              isSelectAvailable ? onSelect({ event, index }) : null
            }
            className={`relative rounded-full before:absolute before:block before:content-[''] ${
              isSelectAvailable ? 'cursor-pointer' : ''
            } ${spacingDivisionBehaviour[spacing]} ${sizesBehaviour[size]} ${
              isSelected
                ? selectedAppearanceBehaviour[appearance]
                : appearanceBehaviour[appearance]
            }`}
          />
        );
      })}
    </div>
  );
};

export default ProgressIndicator;
