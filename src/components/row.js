import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 35px;
`

const Row = ({left, right}) => {
    return (
        <ItemPageWrapper>
            {left}
            {right}
        </ItemPageWrapper>
    )
}
Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}

export default Row;