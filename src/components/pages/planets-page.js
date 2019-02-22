import React, { Component } from 'react';

import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components/index';

class PlanetPage extends Component {
    state = {
        selectedItem: 2
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {
        return (
            <Row left={<PlanetList onItemSelected={this.onItemSelected} />} right={<PlanetDetails itemId={this.state.selectedItem} />} />
        );
    }
}

export default PlanetPage;