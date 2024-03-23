import { ButtonContainer } from "./styles";
import React from 'react';


export function Button({ title, onclick }) {

    return(
    <button type="button">
        {title}
        {onclick}    
        
    </button>
    );
}