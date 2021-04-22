import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';

const Page = forwardRef(({ children, title = '', ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Page;
