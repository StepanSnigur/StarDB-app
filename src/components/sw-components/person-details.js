import React from 'react';

import withSwapiService from '../hoc-helpers/with-swapi-service';
import ItemDetails, { Record } from '../item-details';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye color" />
            <Record field="birthYear" label="Birth year" />
        </ItemDetails>
    );
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);