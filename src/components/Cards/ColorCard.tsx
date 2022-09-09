import { NextPage } from 'next';
import React from 'react';

type ComponentProps = {
  hex: string;
  name?: string;
};

type TextBoxProps = {
  isPass: boolean;
  inverted?: boolean;
  small?: boolean;
};

interface rgb {
  r: number;
  g: Number;
  b: number;
}

function hexToRgb(hex: string): rgb | null {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

const TextBox: React.FC<TextBoxProps> = ({ isPass, inverted, small }) => (
  <div className="mx-1 text-center">
    <span
      className={`${small ? 'text-sm' : 'text-lg'} ${
        inverted ? 'text-white' : 'text-black'
      } `}
    >
      A
    </span>
    <div className="rounded-lg bg-black px-2 text-xs text-white">
      {isPass ? 'PASS' : 'FAIL'}
    </div>
  </div>
);

export const ColorCard: React.FC<ComponentProps> = ({ hex, name }) => {
  const rgb: any = hexToRgb(hex);
  return (
    <div className="block w-64 rounded-md  bg-lightneutral-200 antialiased dark:bg-darkneutral-500">
      <div
        className="flex min-h-[120px] flex-wrap items-end justify-center p-3"
        style={{ backgroundColor: hex }}
      >
        <TextBox isPass={true}></TextBox>
        <TextBox isPass={true} small={true}></TextBox>
        <TextBox isPass={false} inverted={true}></TextBox>
        <TextBox isPass={false} inverted={true} small={true}></TextBox>
      </div>
      <div className="flex min-h-[120px] flex-wrap justify-between p-8">
        <div className="block max-w-full ">
          <h4 className=" text-slate-800 mb-2 text-sm font-semibold capitalize">
            HEX
          </h4>
          <p className="text-sm">{hex}</p>
        </div>
        <div className="block max-w-full ">
          <h4 className=" text-slate-800 mb-2 text-sm font-semibold capitalize">
            RGB
          </h4>
          <p className="text-sm">
            {rgb?.r}, {rgb?.g}, {rgb?.b}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;
