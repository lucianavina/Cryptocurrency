import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import Error from '../Error/index'
import useCurrency from '../../Hooks/useCurrency'
import useCrytocurrency from '../../Hooks/useCryptocurrency'
import axios from 'axios';

const Button = styled.input`
margin-top: 20px;
font-weight: bold;
font-size:20px;
padding:10px;
background-color: #66a2fe;
border:none;
width: 100%;
border-radius: 10px;
color: #fff;
transition: background-color .3s ease;

&:hover {
    background-color: #326ac0;
    cursor: pointer;
}
`

const Form = ({saveCurrency, saveCryptocurrency}) => {

    //Cryptocurrency list's State

    const [cryptoList, saveCryptocurrencies] = useState([])
    
    const [error, saveError] = useState(false)

    const Currencies = [

        { code: 'USD', name: 'Dolar de Estados Unidos' },
        { code: 'MXN', name: 'Peso Mexicano' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Libra Esterlina' }
        
    ]
//useCurrency
const [currency, Choose] = useCurrency('Elije tu moneda', '', Currencies)

//useCryptocurrency   
const [cryptocurrency, ChooseCrypto] = useCrytocurrency('Elige tu Criptomoneda', '', cryptoList)
  
//API call

useEffect(() => {
    const callAPI = async() => {
    
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    
    const result = await axios.get(url)

    saveCryptocurrencies(result.data.Data)
    
    } 

    callAPI()

}, [])
    
    //Onsubmit

    const currencyPrice = e => {
        e.preventDefault()

        //Check if all the field are complete
        if (currency === '' || cryptocurrency === '') {
            saveError(true)
            return
        }

        // send info to the main component

        saveError(false)
        saveCurrency(currency)
        saveCryptocurrency(cryptocurrency)
    }
    
    return (  
        <form
        onSubmit={currencyPrice}
        >
             {error ? <Error messaje='Todos los campos son obligatorios'/>: null}
            <Choose/>
            <ChooseCrypto/>
            <Button
                type='submit'
                value='Calcular'
            />
        </form>
    );
}
 
Form.propTypes = {
    saveCurrency: PropTypes.func.isRequired,
    saveCryptocurrency: PropTypes.func.isRequired
}

export default Form;