import React from 'react';
import {connect} from 'react-redux';
import { createform } from '../actions';


function Button (props) {

    return (
        <div>
            <button className={props.cls?props.cls:"button"} value={props.value} onClick={props.onClick}> {props.text} </button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    createFormHidden: state.createFormHidden === ownProps.value
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => { 
        dispatch(createform(ownProps.value))
        if(ownProps.onClick){
            ownProps.onClick()
        }
}
})

export default connect(mapStateToProps, mapDispatchToProps)(Button);

   


