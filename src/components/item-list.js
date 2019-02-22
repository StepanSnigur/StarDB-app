import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListItemContainer = styled.ul`
    width: 42%;
    border: 1px solid #fff;
    border-radius: 3px;
    margin-top: 30px;
`
const ListItem = styled.li`
    list-style: none;
    padding: 7px 15px;
    border-bottom: 1px solid #fff;
    color: #fff;
    cursor: pointer;

    &:hover {
        background: #444;
    }
`

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);
  
    return (
      <ListItem
          key={id}
          onClick={() => onItemSelected(id)}>
        {label}
      </ListItem>
    );
  });
  
  return (
    <ListItemContainer>
      {items}
    </ListItemContainer>
  );
};
ItemList.defaultProps = {
  onItemSelected: () => {}
}
ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}
  
export default ItemList;