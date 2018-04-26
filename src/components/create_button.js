import React from 'react';
import {connect} from 'react-redux';
import { createNewRecipe, createform } from '../actions';

function Button(props) {

    return (
        <div>
            <button onClick={() => props.dispatch(createform(false))}>
                Create Recipe</button>
        </div>
    )
}

export default connect() (Button);

   


