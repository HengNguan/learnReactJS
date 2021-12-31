import React, {useState} from "react";



export const ControlledFormPage = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [favourite,setFavourite] = useState('');

    return (
        <form>
           <h3>Please Enter Your Information:</h3> 

           <div>
               <input type="text" placeholder="Name"
               value={name}
               onChange={e => setName(e.target.value)} />
           </div>
           <div>
               <input type="text" placeholder="Email"
               value={email}
               onChange={e => setEmail(e.target.value)} />
           </div>
           <div>
               <input type="text" placeholder="Favourite Color"
               value={favourite}
               onChange={e => setFavourite(e.target.value)} />

           </div>
           <button onClick={ e => {
               alert('Your Name is '+ name +' \nYour Email is ' + email + '\nYour favourite color is ' + favourite);
           e.preventDefault();
           }}> Submit </button>
        </form>
    )

}