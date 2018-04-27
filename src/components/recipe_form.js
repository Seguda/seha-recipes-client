import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { submitNewRecipe } from '../actions';
import Input from './input';
import Button from './create_button';
import { required } from '../validators';



class CreateRecipeForm extends Component {
  
        // handleSubmit(values, event){
        // event.preventDefault();
        
        // this.props.dispatch(createNewRecipe(this.props.));
    // }

    render() {
        const { fields: { name, author, type, ethnicity, servings, ingredients, directions }, onSubmit} = this.props;
        const createRecipeForm = (
        <div>
        <form onSubmit={this.props.onSubmit}>
            
            <h2>Create New a Recipe</h2>
            <label htmlFor="add name">Recipe Name</label>
            <Field
                component={Input}
                type="text"
                name="name"
                placeholder="Eclair"
                validate={[required]}
                {...name}
            />
            <br />
            <label htmlFor="add author">Author</label>
            <Field
                component={Input}
                type="text"
                name="author"
                placeholder="Sam"
                validate={[required]}
                {...author}
            />
            <br />
            <label htmlFor="add type">Type</label>
            <Field
                component={Input}
                type="text"
                name="type"
                placeholder="Dessert"
                validate={[required]}
                {...type}
            />
            <br />
            <label htmlFor="add ethnicity">Ethnicity</label>
            <Field
                component={Input}
                type="text"
                name="ethnicity"
                placeholder="French"
                validate={[required]}
                {...ethnicity}        
            />
            <br />
            <label htmlFor="add num of servings">Servings</label>
            <Field
                component={Input}
                type="number"
                name="servings"
                placeholder="4"
                validate={[required]}
                {...servings}
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
                {...ingredients}
            />
            <br />
            <label htmlFor="add directions">Directions</label>
            <Field
                component={Input}
                type="text"
                element="textarea"
                name="directions"
                placeholder="Pay someone to bake it for you"
                validate={[required]}
                {...directions}
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

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: () => dispatch(submitNewRecipe())
})

//connect: 1st argument is mapStateToProps,2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapsStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: 'recipe',
    fields:['name','author','type','ethnicity','servings','ingredients','directions','image']
}, null, mapDispatchToProps)(CreateRecipeForm);


