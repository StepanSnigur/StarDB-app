import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SwapiService from '../services/swapi-service';
import Preloader from '../components/preloader/preloader';
import ErrorMessage from '../components/error-message';

const PlanetDetailsWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    padding: 15px;
    margin-top: 40px;
    border: 1px solid #444;
    background: #444;
`
const PlanetImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background: #000;
    margin-right: 20px;
`
const PlanetName = styled.div`
    margin-left: 30px;
`
const PlanetDescriptionHeadline = styled.h2`
    color: #fff;
    font-size: 35px;
`
const PlanetDescription = styled.ul`
    margin-left: 50px;
`
const PlanetDescriptionItem = styled.li`
    list-style: none;
    color: #fff;
    border-top: 1px solid #fff;
    padding-top: 5px;
`

class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }
    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, this.props.updateInterval);
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    planetView = () => {
        return (
            <React.Fragment>
                <PlanetImage alt="planet image" src={`https://starwars-visualguide.com/assets/img/planets/${this.state.planet.id}.jpg`} />
                <PlanetName>
                    <PlanetDescriptionHeadline>{this.state.planet.name}</PlanetDescriptionHeadline>
                    <PlanetDescription>
                        <PlanetDescriptionItem>Population <span>{this.state.planet.population}</span></PlanetDescriptionItem>
                        <PlanetDescriptionItem>Rotation Period <span>{this.state.planet.rotationPeriod}</span></PlanetDescriptionItem>
                        <PlanetDescriptionItem>Diameter <span>{this.state.planet.diameter}</span></PlanetDescriptionItem>
                    </PlanetDescription>
                </PlanetName>
            </React.Fragment>
        );
    }
    onError = (err) => {
        this.setState({
            error: !this.state.error,
            loading: !this.state.loading
        })
    }
    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError)
    }

    render() {

        const hasData = !(this.state.loading || this.state.error)
        const spinner = this.state.loading ? <Preloader /> : null
        const content = hasData ? this.planetView() : null
        const error = this.state.error ? <ErrorMessage /> : null

        return (
            <PlanetDetailsWrapper>
                {error}
                {spinner}
                {content}
            </PlanetDetailsWrapper>
        )
    }

    static defaultProps = {
        updateInterval: 10000
    }
    static propTypes = {
        updateInterval: PropTypes.number
    }
}

export default RandomPlanet;