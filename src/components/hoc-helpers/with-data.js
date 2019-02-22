import React, { Component } from 'react';
import Preloader from '../preloader/preloader';
import ErrorMessage from '../error-message';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            error: false
        }
        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update()
            }
        }
        componentDidMount() {
            this.update()
        }
        update () {
            this.props.getData().then((data) => {
                this.setState({
                    data
                })
            }).catch(() => {
                this.setState({ error: true })
            })
        }
        render() {
            if (!this.state.data) {
                return <Preloader />
            } else if (this.state.error) {
                return <ErrorMessage />
            } else {
                return <View {...this.props} data={this.state.data} />
            }
        }
    }
}
export default  withData;