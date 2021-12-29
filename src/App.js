import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; // use link instead of href to avoid browser for reload everything, one of adds of react 
import { HomePage, ConterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage } from './pages';
import logo from './logo.svg';
import { CounterButton } from './CounterButton';
import { Congratulations } from './Congratulation';
import Greeting from './Greeting';
import { PeopleList } from './PeopleList';
import './App.css';


function App() {
  
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const increment = () => setNumberOfClicks ( numberOfClicks + 1);
  const [hideMessage, setHideMessge] = useState(false);

  return (
    <div className = "App">
      
      <Router>
        <Switch>
        
        <Route path = "/" exact>
          <HomePage/>
        </Route>
          
        <Route path ="/counter">
          <ConterButtonPage />
        </Route>
          
        <Route path ="/people-list">
          <PeopleListPage/>
        </Route>

        <Route path ="/protected"> 
          <ProtectedPage/>
        </Route>
        
        <Route>
          <NotFoundPage/>
        </Route>

        </Switch>
        <Link to= "/counter">Go to Counter Page</Link>   {/* Link have to inside the router package  */}
        <p> </p>
        <Link to ='/people-list'>Go to People Lists </Link>

      </Router>
    </div>
  );
}

export default App;
