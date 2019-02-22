import React, { Component } from 'react';
import styled from 'styled-components';

import SwapiService from '../services/swapi-service';
import Preloader from './preloader/preloader';

const ItemCard = styled.div`
    width: 48%;
    display: flex;
    align-items: center;
    margin-top: 30px;
    padding: 20px;
    background: #444;
`
const ItemImage = styled.img`
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background: #000;
`
const Info = styled.div`
    margin-left: 40px;
`
const ItemName = styled.h2`
    color: #fff;
    font-size: 45px;
`
const ItemDescription = styled.ul`
    margin-left: 40px;
`
const ItemDescriptionText = styled.li`
    list-style: none;
    color: #fff;
    border-top: 1px solid #fff;
    padding-top: 5px;
`
const Record = ({item, field, label}) => {
    return (
        <ItemDescriptionText>{label} <span>{item[field]}</span></ItemDescriptionText>
    );
}
export {
    Record
}

class ItemDetails extends Component {
    swapiService = new SwapiService();
    state = {
        item: null,
        image: null,
        loading: false
    }
    componentDidMount() {
        this.updatePerson();
    }
    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId) {
            this.updatePerson();
            this.setState({
                loading: true
            })
        }
    }
    updatePerson ()  {
        if(!this.props.itemId) {
            return;
        }
        this.props.getData(this.props.itemId)
            .then((item) => {this.setState({ 
                item,
                image: this.props.getImageUrl(item),
                loading: false 
            });
      });
    }
    render() {

        if (!this.state.item) {
            return (
                <ItemCard>
                    <span>Select a item from list</span>
                </ItemCard>
            );
        }
        if (this.state.loading) {
            return <Preloader />
        }
        const { item } = this.state;
        return (
            <ItemCard>
                <ItemImage src={this.state.image} alt="image" />
                <Info>
                    <ItemName>{this.state.item.name}</ItemName>
                    <ItemDescription>
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item })
                            })
                        }
                    </ItemDescription>
                </Info>
            </ItemCard>
        );
    }
}

export default ItemDetails;