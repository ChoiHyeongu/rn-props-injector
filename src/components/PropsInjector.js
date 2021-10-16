import React from 'react';

const PropsInjector = ({ children, ...props }) => {
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { ...props }),
  );
};

export default React.memo(PropsInjector);
