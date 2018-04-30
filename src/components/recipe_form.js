import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createNewRecipe }  from '../actions';
import Button from './create_button';

class CreateRecipeForm extends Component {
   
    onSubmit(values){
        console.log(values);
        this.props.dispatch(createNewRecipe(values));
    }  
    render() {
        const createRecipeForm = (
        <div>
                <form onSubmit = {this.props.handleSubmit(values => this.onSubmit(values)) 
                     }> 
            <h2>Create New a Recipe</h2>
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
                id="author"
                placeholder="Sam"
                
            />
            <br />
            <label htmlFor="add type">Type</label>
            <Field
                component="input"
                type="text"
                name="type"
                id="type"
                placeholder="Dessert"
                // validate={[required]}
            />
            <br />
            <label htmlFor="add ethnicity">Ethnicity</label>
            <Field
                component="input"
                type="text"
                name="ethnicity" 
                id="ethnicity"
                placeholder="French"
                // validate={[required]}
            />
            <br />
            <label htmlFor="add num of servings">Servings</label>
            <Field
                component="input"
                type="number"
                name="servings"
                id="servings"
                placeholder="4"
                // validate={[required]}
            />
            <br />
            <label htmlFor="add ingredients">Ingredients:</label>
            <Field
                component="input"
                type="text"
                element="textarea"
                name="ingredients"
                id="ingredients"
                placeholder="Chocolate, Flour, Milk"
                // validate={[required]}
            />
            <br />
            <label htmlFor="add directions">Directions</label>
            <Field
                component="input"
                type="text"
                element="textarea"
                name="directions"
                id="directions"
                placeholder="Pay someone to bake it for you"
                // validate={[required]}
            />
            <br />
            <label htmlFor="add image">Recipe Image</label>
            <Field
                component="input"
                type="image"
                name="image"
                id="image"
                placeholder="Image"
                // validate={[required]}
            />
            <br />
             <button type="submit"
                className="add_recipe">Add Recipe</button>  

        </form>
            <Button value={false} text={'Hide Form'}></Button>       

        </div>
        )
    
        return (
            <div>
                {this.props.createFormHidden ? createRecipeForm : ''}
            </div>
        )
    }
}
//connect: 1st argument is mapStateToProps,2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapsStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: 'recipes'
})(CreateRecipeForm);


