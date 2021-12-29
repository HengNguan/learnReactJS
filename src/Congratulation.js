import React,{useEffect} from 'react'

export const Congratulations = ({ numberOfClicks, threshold, onHide}) => {
    useEffect(() => {
        return () => console.log('CongratulationMessage Unmounting');
    },[]);
    
    return numberOfClicks >= threshold
        ? <>
            <h1> Congratulations! You've reached {threshold} number of clicks. </h1> 
            <button onClick = {onHide}>Hide</button>
        </>
        :null;
}