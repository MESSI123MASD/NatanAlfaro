import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
}
