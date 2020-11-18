import React from 'react';
import PropTypes from 'prop-types';
import { FaTruckLoading } from 'react-icons/fa';
import { Container } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;

  return (
    <Container>
      <div />
      <FaTruckLoading size={24} />
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
