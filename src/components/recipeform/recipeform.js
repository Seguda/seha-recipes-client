import React, { Component } from 'react';
import { Field, reduxForm, reset} from 'redux-form';
import { createNewRecipe }  from '../../actions';
// import Button from './create_button';
import './recipeform.css'

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }
    onSubmit(values) {
        values.file = this.fileInput.current.files[0];
        this.props.dispatch(createNewRecipe(values));
    }
    render() {
        const createRecipeForm = (
            <div className="form_content">
            <form onSubmit = {this.props.handleSubmit(values => this.onSubmit(values))
                     }>

            <h2>Create New a Recipe</h2>
            <label htmlFor="add name">Recipe Name:</label>
            <Field
                component="input"
                type="text"
                name="name"
                placeholder="Eclair"
            />
            <br />
            <label htmlFor="add author">Author:s</label>
            <Field
                component="input"
                type="text"
                name="author"
                id="author"
                placeholder="Sam"

            />
            <br />
            <label htmlFor="add type">Type:</label>
            <Field
                component="input"
                type="text"
                name="type"
                id="type"
                placeholder="Dessert"
                // validate={[required]}
            />
            <br />
            <label htmlFor="add ethnicity">Ethnicity:</label>
            <Field
                component="input"
                type="text"
                name="ethnicity"
                id="ethnicity"
                placeholder="French"
            />
            <br />
            <label htmlFor="add num of servings">Servings:</label>
            <Field
                component="input"
                type="number"
                name="servings"
                id="servings"
                placeholder="4"
            />
            <br />
            <label htmlFor="add ingredients">Ingredients:</label>
            <Field
                component="input"
                type="textarea"
                name="ingredients"
                id="ingredients"
                placeholder="Chocolate, Flour, Milk"
            />
            <br />
            <label htmlFor="add directions">Directions:</label>
            <Field
                component="input"
                type="textarea"
                name="directions"
                id="directions"
                placeholder="Pay someone to bake it for you"
            />
            <br />
            <label htmlFor="add image">Recipe Image</label>
           <input
                component="input"
                type="file"
                name="file"
                accept="image/*"
                ref={this.fileInput}
                />
            <br />

            <button type="submit"
            className="add_recipe">Save</button>
            {/*}<Button value={false} text={'Hide'} onClick={() => this.props.dispatch(reset('recipes'))} ></Button>*/}

        <div>
        </div>
            </form>
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
})(RecipeForm);
