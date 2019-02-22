import React from 'react';

import withSwapiService from '../hoc-helpers/with-swapi-service';
import ItemDetails, { Record } from '../item-details';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model" />
            <Record field="costInCredits" label="Cost in credits" />
            <Record field="length" label="Length" />
        </ItemDetails>
    );
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);