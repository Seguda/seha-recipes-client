import React from 'react';
import {connect} from 'react-redux';



function Button(props) {

    return (
        <div>
            <button onClick={ event => props.onButtonClick(event)}>
                Create Recipe</button>
        </div>
    )
}

export default connect() (Button);

   


