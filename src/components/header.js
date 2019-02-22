import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '../../src/App.css';

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
`
const HeaderMenu = styled.ul`
    height: 100%;
    display: flex;
    margin-left: 70px;
    height: 100%;
`
const HeaderMenuItem = styled.li`
    list-style: none;
    height: 100%;
    width: 80px;
    border-radius: 3px;
    padding-top: 11px;
    padding-bottom: 11px;
    text-align: center;
    cursor: pointer;
    &:hover {
        background: #444;
    }
`

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Link to="/" className="main-link">Star DB</Link>
                <HeaderMenu>
                    <HeaderMenuItem><Link to="/people/" className="header-link">People</Link></HeaderMenuItem>
                    <HeaderMenuItem><Link to="/planets/" className="header-link">Planets</Link></HeaderMenuItem>
                    <HeaderMenuItem><Link to="/starships/" className="header-link">Starships</Link></HeaderMenuItem>

                    {/*<HeaderMenuItem><Link to="/login/" className="header-link">Login</Link></HeaderMenuItem>
                    <HeaderMenuItem><Link to="/secret/" className="header-link">Secret page</Link></HeaderMenuItem>*/}
                </HeaderMenu>
            </HeaderWrapper>
        );
    }
}

export default Header;