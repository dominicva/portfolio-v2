import clsx from 'clsx';
import { overPassMono } from '@/lib/font';
import PostTitle from './post/PostTitle';

type H1Props = React.PropsWithChildren<JSX.IntrinsicElements['h1']>;

export const components = {
  h1: (props: H1Props) => {
    return (
      <h1 {...props} className={clsx(overPassMono.className, props.className)}>
        {props.children}
      </h1>
    );
  },
  PostTitle,
};
