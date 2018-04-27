import React from 'react';
import {connect} from 'react-redux';
import { createform } from '../actions';

function Button(props) {

    return (
        <div>
            <button value={props.value} onClick={props.onClick}> {props.text} </button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    createFormHidden: state.createFormHidden === ownProps.value
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(createform(ownProps.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Button);

   


