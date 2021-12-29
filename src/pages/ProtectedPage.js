import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

export const ProtectedPage = () => {
    const history = useHistory();

    const isAuthed = true;
    
    useEffect(() => {
        if (!isAuthed) {
            history.push('/');
        }
    });

    return (
    <h1> Only authed users should be able to see this! </h1>
    )
    
}