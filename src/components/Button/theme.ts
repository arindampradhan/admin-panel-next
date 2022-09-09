interface Behaviour {
  primary: string;
  default: string;
  subtle: string;
  link: string;
  'subtle-link': string;
  warning: string;
  danger: string;
  selected?: string;
}

export const textBehaviour: Behaviour = {
  primary: '',
  default: '',
  subtle: '',
  link: '',
  'subtle-link': '',
  warning: '',
  danger: ''
};

export const buttonBehaviour: Behaviour = {
  primary:
    'text-white bg-primary hover:bg-blue-500 focus:bg-blue-600 active:bg-blue-700',
  default:
    'text-darkneutral-100 bg-darkneutral-500/[.04] active:bg-blue-200/[0.6] focus:bg-darkneutral-500/[.04] hover:bg-darkneutral-500/[0.08] active:text-primary focus:text-darkneutral-100 hover:text-darkneutral-100',
  subtle:
    'text-darkneutral-100 hover:text-darkneutral-100 focus:text-darkneutral-100 active:text-primary hover:bg-darkneutral-500/[0.08] focus:bg-none  active:bg-blue-200/[0.6]',
  link: 'text-primary hover:text-blue-500 focus:text-blue-600 active:text-blue-700 focus:shadow-blue-300 bg-none focus:bg-none active:bg-none hover:bg-none hover:underline duration-0 focus:duration-75',
  'subtle-link':
    'text-neutral-600 hover:text-neutral-400 focus:text-neutral-600 active:text-neutral-800 hover:underline bg-none hover:bg-none active:bg-none focus:bg-none',
  warning:
    'bg-yellow-500 text-primarydark hover:text-primarydark active:text-primarydark focus:text-primarydark hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-600',
  danger:
    'bg-red-600 text-white hover:text-white hover:bg-red-500 focus:text-white focus:bg-red-600 active:text-white active:bg-red-700',
  selected:
    'bg-darkneutral-300 text-lightneutral-300 hover:text-lightneutral-300 focus:text-lightneutral-300 active:text-lightneutral-300 hover:bg-darkneutral-300 focus:bg-darkneutral-300 active:bg-darkneutral-300'
};
