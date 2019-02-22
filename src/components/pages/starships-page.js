import React from 'react';

import { withRouter } from 'react-router-dom';

import Row from '../row';
import { StarshipList, StarshipDetails } from '../sw-components/index';

const StarshipPage = ({ history, match }) =>  {
    return (
        <Row left={<StarshipList onItemSelected={(id) => history.push(id)} />} right={<StarshipDetails itemId={match.params.id} />} />
    );
}

export default withRouter(StarshipPage);