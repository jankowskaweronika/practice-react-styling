import React from 'react';
import styled from 'styled-components';

const StyledCardBody = styled.div`
	padding: 1.25rem;
`;

const CardBody = ({ children }) => {
  return <StyledCardBody>{children}</StyledCardBody>;
};

export default CardBody;