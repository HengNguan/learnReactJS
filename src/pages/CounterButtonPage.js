import React, {useState} from "react";
import { useParams, useLocation } from "react-router-dom";
import { CounterButton } from "../CounterButton";
import { Congratulations } from "../Congratulation";
import { parse } from 'query-string'

{/* */}

export const ConterButtonPage = () => {
  //const {name} = useParams();
  const location = useLocation();
  const startingValue = parse(location.search).startingValue; {/* .search need for insert the paramter*/}
  console.log(parse(location.search));
  const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue)); {/*by defualt a string will be feedback from the prase.startingValue*/}
  const increment = () => setNumberOfClicks ( numberOfClicks + 1);
  const [hideMessage, setHideMessge] = useState(false);
  
    return (
        <>
        <h1>The conter button page</h1>  {/*show the name here*/}
          
          {hideMessage
            ? null
            : <Congratulations
              numberOfClicks = {numberOfClicks}
              threshold = {10} 
              onHide = {() => setHideMessge(true)}/> 
              }
            <CounterButton onIncrement = {increment} numberOfClicks = {numberOfClicks} />
  
          {/* Parent node can pass the agg/msg to child node, but not backward  */}
       </>
    );


}