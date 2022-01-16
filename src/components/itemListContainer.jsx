import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
export const ItemListContainer = ({greetings,valor1}) => {
    //console.log(props)
    return (
        <> {/*Fragment cuando necesito usar un ClassName*/}
            <h1>ITEMLIST</h1>
            <p>{greetings}</p>
            <p>{valor1}</p>

        </>
    )
}

/*ItemListContainer.prototype={
    greetings: PropTypes.string.isRequired,
    valor1   : PropTypes.number
}*/
ItemListContainer.defaultProps={
    greetings:"Soy un greetings vacio",
    valor1   : "ups no pasaron la prop valor 1"
}