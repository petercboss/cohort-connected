import React from 'react';

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export const Col = ({ size, className, children }) => (
  <div className={size.split(' ').map(size => 'col-' + size).join(' ') + ' ' + className}>
    {children}
  </div>
);
