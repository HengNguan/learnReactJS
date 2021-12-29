import react from 'react';
import {PeopleList} from "../PeopleList";

// data hard coded part, normally its from server.
const people = [{
    name:'John',
    age:40,
}, {
    name: 'Helga',
    age: 35,
}, {
    name: 'Dwayne',
    age: 55,
}];
 
export const PeopleListPage = () => (
<>
    <h1>The People List page</h1>
    <PeopleList people = {people} />
</>
)