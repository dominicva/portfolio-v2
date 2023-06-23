import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const buttonClasses = cva(
  [
    'rounded-full',
    'font-medium',
    'hover:translate-y-0.5',
    'active:translate-y-0.5',
    'hover:opacity-90',
    'transition',
    'duration-200',
    'ease-in-out',
    'shadow-sm',
    'hover:shadow-md',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-secondary',
          'text-primary',
          'font-semibold',
          'border-transparent',
        ],
        secondary: [
          'bg-none',
          'text-secondary',
          'border-secondary',
          'border-2',
        ],
        tertiary: ['bg-white', 'text-primary', 'border-transparent'],
        error: ['bg-error', 'text-primary', 'font-bold', 'hover:bg-gray-100'],
        'error-accent': ['bg-none', 'text-error', 'border-error', 'border-2'],
      },
      size: {
        xsmall: ['text-sm', 'px-2', 'py-1'],
        small: ['text-md', 'px-3', 'py-2'],
        medium: ['text-lg', 'px-6', 'py-3'],
        large: ['text-xlg', 'px-8', 'py-4'],
        round: ['text-lg', 'p-2'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  intent,
  size,
  ...props
}) => {
  return (
    <button className={buttonClasses({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};
