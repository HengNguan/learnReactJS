import React, {useState} from 'react';
import { useEffect } from 'react';

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
    useEffect( ()=>{
        console.log('useEffect funtion called!');

        return () => console.log('unmounting!');
    },[]);

// the special about the useEffect is that we can control the logic when we rerun
// useeffect hook ? <- 2nd arug array, only hen array changing then it rerun the effect

    return (
        <>
        <p> Had click the button for {numberOfClicks} times</p>
        <button onClick={onIncrement}> Click Me! </button>
        <p></p>
        </>
    );
}