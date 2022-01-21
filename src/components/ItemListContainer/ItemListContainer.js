import React, { Fragment } from 'react'
import ItemCount from '../itemCount/itemCount.js'
//import PropTypes from 'prop-types'
function onAdd(cant){
    console.log(cant);
}

export const ItemListContainer = ({greetings,valor1}) => {
    return (
        <div> 
            <ItemCount initial={1} stock={6} onAdd={onAdd} />
        </div>
    )
}


