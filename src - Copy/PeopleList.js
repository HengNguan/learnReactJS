import React from 'react'
// the data is loaded at "app.js" which we are hard-coded in this situation

import { PeopleListItem } from './PeopleListItem';

// by adding the people in the funtion (), we load the people data into peoplelist.js
export const PeopleList =({people}) => (
    <>
    {/* react normally will request devp to assign a unique key for render purpose */}

    {people.map(person => <PeopleListItem person={person} key = {person.name} /> )}
      {/* <div>
         <h3>{person.name}</h3>
         <p> Age: {person.age}</p>
     </div> */}
     
    </>
);