import React, { Component } from 'react';
import styled from 'styled-components';

const ErrorHeadline = styled.h2`
    color: #fff;
    margin: 0 auto;
    padding-top: 21px;
    padding-bottom: 21px;
`

class ErrorMessage extends Component {
    render() {
        return (
            <ErrorHeadline>Something has gone terribly wrong</ErrorHeadline>
        );
    }
}

export default ErrorMessage;