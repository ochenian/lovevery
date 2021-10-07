import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Divider } from './Styles';

const propTypes = {
  items: PropTypes.array.isRequired,
};

const Breadcrumbs = ({ items }) => (
  <Container style={{ marginBottom: '3em' }}>
    {items.map((item, index) => {
      const lastIndex = items.length - 1;
      return (
        <Fragment key={item}>
          {index !== 0 && <Divider>{'>'}</Divider>}
          {index !== lastIndex ? (
            <span style={{ fontWeight: 'bold' }}>{item}</span>
          ) : (
            <>{item}</>
          )}
        </Fragment>
      );
    })}
  </Container>
);

Breadcrumbs.propTypes = propTypes;

export default Breadcrumbs;
