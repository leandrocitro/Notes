import { Container } from "./styles";
import React from 'react';


export function Button({ title }) {

    return(
    <Container type="button">
        {title}        
    </Container>
    );
}