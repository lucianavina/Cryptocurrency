import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ResultDiv = styled.div`
color: #fff;
font-family: Arial, Helvetica, sans-serif
`

const Paragraph = styled.p`

font-size:18px;
    span{
        font-weight:bold;
    }
`

const PriceParagaph = styled.p`
font-size: 30px;
 span{
        font-weight:bold;
    }
`

const Price = ({ result }) => {

    if (Object.keys(result).length === 0) return null;

    console.log(result)
    
    return ( 

        <ResultDiv>
            <PriceParagaph>El precio es: <span>{result.PRICE}</span></PriceParagaph>
            <Paragraph>Precio más alto del día: <span>{result.HIGHDAY}</span></Paragraph>
            <Paragraph>Precio más bajo del día: <span>{result.LOWDAY}</span></Paragraph>
            <Paragraph>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></Paragraph>
            <Paragraph>Ùltima actualización: <span>{result.LASTUPDATE}</span></Paragraph>
            
    </ResultDiv>

     );
}

Price.propTypes = {
    result: PropTypes.object.isRequired
}
 
export default Price;