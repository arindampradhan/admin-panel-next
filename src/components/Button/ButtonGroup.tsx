import React from 'react';

type ButtonGroupProps = {
  children: React.ReactNode;
  appearance?:
    | 'default'
    | 'primary'
    | 'subtle'
    | 'link'
    | 'subtle-link'
    | 'warning'
    | 'danger';
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  appearance
}) => {
  return (
    <div className="inline-flex gap-1">
      {React.Children.map(children, (child, idx) => {
        if (React.isValidElement(child)) {
          return (
            <div key={idx} className="flex flex-shrink-0 flex-grow basis-auto">
              {appearance
                ? React.cloneElement(child as JSX.Element, { appearance })
                : child}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ButtonGroup;
