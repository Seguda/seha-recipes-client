import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { createrecipe, createNewRecipe, createform} from '../actions';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import Input from './input';
import { required } from '../validators';


export class CreateRecipeForm extends Component {
    onSubmit(value) {
        this.props.dispatch(createrecipe(value));
        this.props.dispatch(createrecipe(value.name, value.author, value.type, value.ethnicity, value.servings, value.ingredients, value.directions, value.image));
    }
             
    createform(){
        this.props.dispatch(createform(this.props.createFormHidden));
    }
  
render() {
  
        const createRecipeForm = (<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
    <div className="modal-body">
        <h2>Create New a Recipe</h2>
        <label htmlFor="add name">Recipe Name</label>
        <Field
            component={Input}
            type="text"
            name="name"
            placeholder="Eclair"
            validate={[required]}
        />
        <br />
        <label htmlFor="add author">Author</label>
        <Field
            component={Input}
            type="text"
            name="author"
            placeholder="Sam"
            validate={[required]}
        />
        <br />
        <label htmlFor="add type">Type</label>
        <Field
            component={Input}
            type="text"
            name="type"
            placeholder="Dessert"
            validate={[required]}
        />
        <br />
        <label htmlFor="add ethnicity">Ethnicity</label>
        <Field
            component={Input}
            type="text"
            name="ethnicity"
            placeholder="French"
            validate={[required]}
        />
        <br />
        <label htmlFor="add num of servings">Servings</label>
        <Field
            component={Input}
            type="number"
            name="servings"
            placeholder= "4"
            validate={[required]}
        />
        <br />
        <label htmlFor="add ingredients">Ingredients:</label>
        <Field
            component={Input}
            type="text"
            element="textarea"
            name="ingredients"
            placeholder="Chocolate, Flour, Milk"
            validate={[required]}
        />
        <br />
        <label htmlFor="add directions">Directions</label>
        <Field
            component={Input}
            type="text"
            element="textarea"
            name="name"
            placeholder="Pay someone to bake it for you"
            validate={[required]}
        />
        <br />
        <label htmlFor="add image">Recipe Image</label>
        <Field
            component={Input}
            type="image"
            name="image"
            placeholder="Image"
            validate={[required]}
        />
        <br />
            <button
            type="submit"
            className="btn btn-success">Add Recipe</button>           
    </div>
    </form>)

    return(
        <div>{this.props.createFormHidden ? '' : createRecipeForm}
        <button onClick={() => this.createform()}>{this.props.createFormHidden ? 'Create Recipe' : 'Hide form'}</button>
        </div>
    )
}
}
    export default reduxForm({
        form:'recipe'
    })(CreateRecipeForm);