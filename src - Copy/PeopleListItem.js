import React from 'react';
import './PeopleList.css'

export const PeopleListItem = ({person}) => (
    <div className = "list-item-container">
        <h3>{person.name}</h3>
        <p> Age: {person.age}</p>
    </div>
)
