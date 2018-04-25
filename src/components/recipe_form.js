import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { createrecipe, createNewRecipe } from '../actions';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';


export class CreateRecipeForm extends Component {
    onSubmit(value) {
        this.props.dispatch(createrecipe(value));
        this.props.dispatch(createrecipe(value.name, value.author, value.type, value.ethnicity, value.servings, value.ingredients, value.directions, value.image));
    }
               
render() {
return(
    <div className="modal-wrapper">
                <div className="modal-header">
                    <button onClick={this.props.onClose} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Create Recipe</h4>
                </div>
    <div className="modal-body">
    <form className="form"
        onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
)}>
        <label htmlFor="add name">Recipe Name</label>
        <Field
            component="input"
            type="text"
            name="name"
            placeholder="Eclair"
        />
        <br />
        <label htmlFor="add author">Author</label>
        <Field
            component="input"
            type="text"
            name="author"
            placeholder="Jane"
        />
        <br />
        <label htmlFor="add type">Type</label>
        <Field
            component="input"
            type="text"
            name="type"
            placeholder="Dessert"
        />
        <br />
        <label htmlFor="add ethnicity">Ethnicity</label>
        <Field
            component="input"
            type="text"
            name="ethnicity"
            placeholder="French"
        />
        <br />
        <label htmlFor="add num of servings">Servings</label>
        <Field
            component="input"
            type="number"
            name="servings"
            placeholder= "4"
        />
        <br />
        <label htmlFor="add ingredients">Ingredients:</label>
        <Field
            component="textarea"
            type="text"
            name="ingredients"
            placeholder="Chocolate, Flour, Milk"
        />
        <br />
        <label htmlFor="add directions">Directions</label>
        <Field
            component="input"
            type="text"
            name="name"
            placeholder="Pay someone to bake it for you"
        />
        <br />
        <label htmlFor="add image">Recipe Image</label>
        <Field
            component="input"
            type="image"
            name="image"
            placeholder="Image"
        />
        <br />
                <div className="form-submit">
                    <button
                    type="submit"
                    className="btn btn-success">Add Recipe</button>
                    
                </div>
    </form>
    </div>
    </div>
)
}}

    export default reduxForm({
        form:'recipe'
    })(CreateRecipeForm);