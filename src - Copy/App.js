import React, {useState} from 'react';
import logo from './logo.svg';
import { CounterButton } from './CounterButton';
import { Congratulations } from './Congratulation';
import Greeting from './Greeting';
import { PeopleList } from './PeopleList';
import './App.css';

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

function App() {
  // let ismorning = (new Date()).getHours() < 12;
  // let greetingElement = ismorning
  //   ? <h3> Good Morning! </h3>
  //   : <h3> Good Evening! </h3>;
  let adjective = 'cool'

  const displayAlert = () => {
    alert('Hello!')
  }

  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const increment = () => setNumberOfClicks ( numberOfClicks + 1);
  const [hideMessage, setHideMessge] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        
        
        {hideMessage
          ? null
          : <Congratulations
            numberOfClicks = {numberOfClicks}
            threshold = {10} 
            onHide = {() => setHideMessge(true)}/> 
            }
          <CounterButton onIncrement = {increment} numberOfClicks = {numberOfClicks} />

        {/* Parent node can pass the agg/msg to child node, but not backward  */}
        



























        {/* <Greeting name="shaun" numberofMessage={5}/>
        <PeopleList people = {people} />
        <button onClick = {displayAlert} > Click Me! </button> */}
        {/* not passing a string, in fact use {} to insert the function should be run. In html, we use
        |  button onClick = "doSomething()" |  <- passing the string of the funtion 
        if we put () after the funciton, the function will been executed once the react been render */}
         
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is the {adjective} part!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
