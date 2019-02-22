import React, { Component } from 'react';

import ErrorMessage from '../components/error-message';

class ErrorBoundry extends Component {
    state = {
        error: false
    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    render() {
        if (this.state.error) {
            return <ErrorMessage />
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundry;