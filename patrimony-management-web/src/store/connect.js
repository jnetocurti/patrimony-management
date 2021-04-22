import React from 'react';

import { StoreContext } from '.';

const mapPropsAsDefault = (_store, props) => ({ ...props });

const Connect = (mapStateToProps = mapPropsAsDefault) => (Component) => {
  return (props) => {
    return (
      <StoreContext.Consumer>
        {({ store, dispatch }) => {
          const storeProps = mapStateToProps(store, props);
          return <Component {...storeProps} dispatch={dispatch} />;
        }}
      </StoreContext.Consumer>
    );
  };
};

export default Connect;
