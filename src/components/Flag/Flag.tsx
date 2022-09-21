import React from 'react';

type FlagProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  id?: number;
  onBlur: () => void;
  onFocus: () => void;
  appearance: 'error' | 'info' | 'normal' | 'success' | 'warning';
  description: React.ReactNode;
  linkComponent: React.ReactNode;
};

// TODO : add flag data
function Flag({ title, icon, description }: FlagProps) {
  return (
    <div className="box-border w-full rounded-[3px] p-4">
      <div className="flex items-start text-darkneutral-100">
        <span className="inline-block shrink-0 leading-none">{icon}</span>
        <span className="flex-1 font-semibold ">{title}</span>
      </div>
      <div className="flex max-h-36 min-w-0 flex-shrink-0 flex-grow basis-full flex-col justify-center pl-10 transition-all">
        {description}
      </div>
    </div>
  );
}

export default Flag;
