import React from 'react';
import Button from "./Button";

const List = ({ item, onDismiss }) =>
    <div>
        <span><a href={ item.url }> { item.title }</a> </span>
        <span>{ item.author }, </span>
        <span>{ item.num_comments }, </span>
        <span>{ item.points } </span>
        <Button onClick={ () => onDismiss(item.objectID) }>Dismiss</Button>
    </div>

export default List;