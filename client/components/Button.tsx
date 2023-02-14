import { cva, VariantProps } from 'class-variance-authority';
import React, { FC } from 'react';

const btnClasses = cva(
  [
    'font-bold',
    'val-btn'
  ],
  {
    variants: {
      intent: {
        primary: ['bg-primary', 'text-light', 'hover:bg-primary-brighten' ],

        secondary: ['ghost-btn', 'text-dark', 'hover:bg-primary', 'hover:text-light'],

        text: ['no-bg', 'text-dark', 'hover:text-primary' ],

        icon: ['icon-btn']
      },

      size: {
        small: ['btn-small'],
        medium: ['btn-med'],
        large: ['btn-lg'],
        full: ['btn-block']
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium'
    }
  }
);

export interface ButtonProps 
  extends React.HTMLAttributes<HTMLButtonElement>,
  //Allows TS to derive types from the variant classes above
	VariantProps<typeof btnClasses> {}

  const Button: FC<ButtonProps> = ({children, className, intent, size, ...props}) => {
    return (
      <button className={btnClasses({intent, size, className})} {...props}>
        {children}
      </button>
    );
  };

  export default Button;
