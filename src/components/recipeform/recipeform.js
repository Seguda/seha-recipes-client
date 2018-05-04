import React, { Component } from 'react';
import { Field, reduxForm, reset} from 'redux-form';
import { createNewRecipe, createform}  from '../../actions';
import Button from '../create_button';
import './recipeform.css'

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }
    onSubmit(values) {
        values.file = this.fileInput.current.files[0];
        this.props.dispatch(createNewRecipe(values));
        this.props.dispatch(reset('recipes'));
        //this.props.dispatch(createform(false));
        this.props.history.push('/recipes');
    }
    render() {
        const createRecipeForm = (
          <div className="formcontent">
            <form className="wrap" onSubmit = {this.props.handleSubmit(values => this.onSubmit(values))
            }>

              <h2>Create New a Recipe</h2>

              <ul className="fields">

                <li>
                  <label htmlFor="add name">Recipe Name:</label>
                  <Field
                    component="input"
                    type="text"
                    name="name"
                    placeholder="Eclair"
                  />
                </li>

                <li>
                  <label htmlFor="add author">Author:</label>
                  <Field
                    component="input"
                    type="text"
                    name="author"
                    id="author"
                    placeholder="Sam"
                  />
                </li>

                <li>
                  <label htmlFor="add type">Type:</label>
                  <Field
                    component="input"
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Dessert"
                    // validate={[required]}
                  />
                </li>

                <li>
                  <label htmlFor="add ethnicity">Ethnicity:</label>
                  <Field
                    component="input"
                    type="text"
                    name="ethnicity"
                    id="ethnicity"
                    placeholder="French"
                  />
                </li>

                <li>
                  <label htmlFor="add num of servings">Servings:</label>
                  <Field
                    component="input"
                    type="number"
                    name="servings"
                    id="servings"
                    placeholder="4"
                  />
                </li>

                <li>
                  <label htmlFor="add ingredients">Ingredients:</label>
                  <Field
                    component="input"
                    type="textarea"
                    name="ingredients"
                    id="ingredients"
                    placeholder="Chocolate, Flour, Milk"
                  />
                </li>

                <li>
                  <label htmlFor="add directions">Directions:</label>
                  <Field
                    component="input"
                    type="textarea"
                    name="directions"
                    id="directions"
                    placeholder="Pay someone to bake it for you"
                  />
                </li>

                <li>
                  <label htmlFor="add image">Recipe Image</label>
                  <input
                    component="input"
                    type="file"
                    name="file"
                    accept="image/*"
                    ref={this.fileInput}
                  />
                </li>

              </ul>

              <button type="submit" className="add_recipe">Save</button>
              {/* <Button value={false} text={'Hide'} onClick={() => this.props.dispatch(reset('recipes'))} ></Button>  */}

            </form>
          </div>

        )

        return (
          <div>{createRecipeForm}</div>
        )
    }
}
//connect: 1st argument is mapStateToProps,2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapsStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: 'recipes'
})(RecipeForm);
