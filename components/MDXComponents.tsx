export const components = {
  h1: (props: React.PropsWithChildren) => {
    return <h1 {...props}>{props.children}</h1>;
  },
};
