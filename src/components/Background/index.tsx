import React from 'react';

type BackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

const Background = ({ children, className }) => (
  <div
    className={`p-6 ${className || ''}`}
    style={{
      backgroundImage:
        'linear-gradient( 45deg, var(--ds-surface-sunken, #f9f9fa) 25%, transparent 25% ),linear-gradient( 135deg, var(--ds-surface-sunken, #f9f9fa) 25%, transparent 25% ),linear-gradient( 45deg, transparent 75%, var(--ds-surface-sunken, #f9f9fa) 75% ),linear-gradient( 135deg, transparent 75%, var(--ds-surface-sunken, #f9f9fa) 75% )',
      backgroundSize: '20px 20px',
      backgroundPosition: '0px 0px, 10px 0px, 10px -10px, 0px 10px',
      borderRadius: '3px 3px 0px 0px'
    }}
  >
    {children}
  </div>
);

Background.propTypes = {
  className: ''
};

export default Background;
