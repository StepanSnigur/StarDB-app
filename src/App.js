import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import SwapiService from '../src/services/swapi-service';
import { SwapiServiceProvider } from '../src/components/swapi-service-context';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../src/components/header';
import RandomPlanet from '../src/components/random-planet';
import PeoplePage from '../src/components/pages/people-page';
import PlanetPage from '../src/components/pages/planets-page';
import StarshipPage from '../src/components/pages/starships-page';

import LoginPage from '../src/components/pages/login-page';
import SecretPage from '../src/components/pages/secret-page';

const MainBg = styled.div`
  background: #000;
  height: 100vh;
`
const MainWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
`

class App extends Component {
  swapiService = new SwapiService();

  state = {
    isLoggedIn: false
  }
  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }
  render() {
    return (
      <MainBg>
        <MainWrapper>
          <SwapiServiceProvider value={this.swapiService}>
            <Router>
              <div>
                <Header />
                <RandomPlanet />
                <Switch>
                  <Route path="/" render={() => <h2 className="hello-text">Welcome to StarDB</h2>} exact />
                  <Route path="/people/:id?" component={PeoplePage} />
                  <Route path="/planets" component={PlanetPage} />
                  <Route path="/starships/:id?" component={StarshipPage} />

                  {/*<Route path="/login" render={() => <LoginPage isLoggedIn={false} onLogin={this.onLogin} />} />
                  <Route path="/secret" render={() => <SecretPage isLoggedIn={this.state.isLoggedIn} />} />*/}

                  <Redirect to="/" />
                </Switch>
              </div>
            </Router>
          </SwapiServiceProvider>
        </MainWrapper>
      </MainBg>  
    );
  }
}

export default App;