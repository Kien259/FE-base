import { cn } from '../../../utils/cn';
import { ComponentProps } from 'react';

export function H2({ className, ...rest }: ComponentProps<'h2'>) {
  const classNames = cn(
    'mt-10 scroll-m-20 pb-2 text-3xl fonts-semibold tracking-tight transition-colors first:mt-0 ',
    className
  );
  return <h2 className={classNames} {...rest}></h2>;
}
