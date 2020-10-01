import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import image from './cryptomonedas.png'
import Form from './Components/Form/index'
import Price from './Components/Price/index'
import Spinner from './Components/Spinner/index'
import axios from 'axios'

const Container = styled.div`
max-width: 900px;
margin: 0 auto;
@media (min-width:992px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
 column-gap: 2rem;
}
`

const Heading = styled.h1`
font-family: 'Bebas Neue', cursive;
color:#fff;
text-align: left;
font-weight: 700px;
font-size: 50px;
margin-bottom: 50px;
margin-top: 80px;

&::after {
  content: '';
  width: 100px;
  height: 6px;
  background-color: #66A2FE;
  display: block
}
`

const Image = styled.img`
max-width: 100%;
margin-top: 5rem;
`

function App() {

  const [currency, saveCurrency] = useState('')
  const [cryptocurrency, saveCryptocurrency] = useState('')
  const [result, saveResult] = useState({})
  const [loading, saveLoading] = useState(false)

  useEffect(() => {

    const criptocurrencyPrice = async () => {

      if (currency === '') return
    
      //call API to get the price

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`

      const result = await axios.get(url)

      //Show Spinner

      saveLoading(true)

      //Hide Spinner & show the result

      setTimeout(() => {

         saveLoading(false)

        saveResult(result.data.DISPLAY[cryptocurrency][currency])
    
      }, 3000)

      }
  criptocurrencyPrice()

  }, [currency, cryptocurrency])

//Show Spinner or Result
  
  const component = (loading)? <Spinner/> :<Price result={result} />

  return (
    <Container>
      <div>
        <Image
          src={image}
          alt='cryptocurrency image'
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Form
          saveCurrency={saveCurrency}
          saveCryptocurrency={saveCryptocurrency}
        />
        {component}
        
      </div>
    </Container>
    
  );
}

export default App;
