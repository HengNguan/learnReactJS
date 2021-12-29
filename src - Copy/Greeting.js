import React from 'react';
export const Greeting = (props) => {
    console.log(props);
    let ismorning = (new Date()).getHours() < 12;
    return ismorning
      ? ( 
      <div> 
          <h3> Good Morning, {props.name}!  </h3>
          <p> You have {props.numberofMessage} new messages</p>
      </div> )

      : ( 
        <> 
            <h3> Good Evening, {props.name}! </h3>
            <p> You have {props.numberofMessage} new messages</p>
        </> 
        );
}

export default Greeting;