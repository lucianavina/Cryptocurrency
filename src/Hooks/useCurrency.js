import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled'

const Label = styled.label`
font-family:'Bebas Neue', cursive;
color: #fff;
text-transform: uppercase;
font-weight: bold;
font-size: 2.4rem;
margin-top: 2rem;
display:block;

`

const Select = styled.select`
    width:100%;
    display: block;
    padding: 1rem;
    --webkit-appearance: none;
    border-radius: 10px;
    border: none;
`

const useCurrency = (label, starterState, currencies) => {

    //Custom Hook's State

    const [state, updateState] = useState(starterState)
    
    const Choose = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => updateState(e.target.value)}
                value={state}
            >
                <option value=''>- Seleccione -</option>
                {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </Select>
        </Fragment>
    )

    // Return state, interface & function that updates the state
    return [state, Choose, updateState]
    
}

export default useCurrency