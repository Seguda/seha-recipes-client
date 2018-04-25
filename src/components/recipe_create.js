import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createrecipe } from '../actions/recipes';

export class CreateRecipe extends React.Component {
    onChange(value) {
        return this.props.dispatch(addrecipe(value))
    }
      render(){
        return(
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
            )}