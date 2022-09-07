import React from 'react';

type BannerProps = {
  children: React.ReactNode;
  appearance?: 'default' | 'warning' | 'error' | 'announcement';
  icon?: React.ReactNode;
};

export const Banner: React.FC<BannerProps> = ({
  children,
  appearance,
  icon
}) => {
  const appearanceBehaviour = {
    default: 'bg-blue-100 text-primarydark',
    warning: 'bg-yellow-500 text-darkneutral-300',
    error: 'bg-red-600 text-white',
    announcement: 'bg-darkneutral-100 text-white'
  };

  return (
    <div className="max-h-14 overflow-hidden">
      <div
        className={`m-auto flex items-center justify-start p-3 ${appearanceBehaviour[appearance]}`}
      >
        {icon && (
          <span className="flex flex-0 flex-col items-center">{icon}</span>
        )}
        <span className="flex-initial self-center overflow-hidden text-ellipsis whitespace-nowrap p-1 text-center font-medium leading-5">
          {children}
        </span>
      </div>
    </div>
  );
};

Banner.defaultProps = {
  appearance: 'default'
};

export default Banner;
