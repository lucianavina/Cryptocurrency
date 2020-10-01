import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ErrorMessage = styled.p`
background-color:#b7322c;
padding:1rem;
color: #fff;
font-size: 30px;
text-transform: uppercase;
font-weight: bold;
text-align: center;
font-family: 'Bebes Neue', cursive
`

const Error = ({messaje}) => {
    return ( 
        <ErrorMessage>{messaje}</ErrorMessage>
     );
}
 
Error.propTypes = {
    message: PropTypes.string.isRequired
}

export default Error;