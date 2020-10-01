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

const useCryptocurrency = (label, starterState, currencies) => {

    // console.log(currencies)
    //Custom Hook's State

    const [state, updateState] = useState(starterState)
    
    const ChooseCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => updateState(e.target.value)}
                value={state}
            >
                <option value=''>- Seleccione -</option>
                {currencies.map(currency => (
                    <option key={currency.CoinInfo.Id} value={currency.CoinInfo.Name}>{currency.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    )

    // Return state, interface & function that updates the state
    return [state, ChooseCrypto, updateState]
    
}

export default useCryptocurrency