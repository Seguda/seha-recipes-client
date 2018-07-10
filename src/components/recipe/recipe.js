import React from "react";
import { connect } from "react-redux";
import { API_BASE_URL } from "../../config";
import "./recipe.css";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: {}
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.setState({
      steps: { ...this.props.recipe }
    });
  }

  render() {
    var props = this.props.recipe
      ? this.props
      : {
          recipe: {
            name: "",
            author: "",
            ethnicity: "",
            type: "",
            servings: 0,
            ingredients: "",
            directions: "",
            downloadUrl: ""
          }
        };
    // console.log(props.recipe);
    var className =
      "recipeListItem " + (props.display === "block" ? "block" : "hidden");
    if (props.recipe.downloadUrl) {
      var image = `/${props.recipe.downloadUrl}`;
    } else {
      var image = `/images/default.jpg`;
    }

    return (
      <div className="singlerecipe">
        <div className="wrap">
          <div className="nimg">
            <img src={API_BASE_URL + image} alt="visual" />
          </div>
          <div className="recipetitle">{this.state.steps.name}</div>
          <ul>
            <li>
              <span>Author:</span>
              {this.state.steps.author}
            </li>
            <li>
              <span>Type:</span>
              {this.state.steps.type}
            </li>
            <li>
              <span>Ethnicity:</span>
              {this.state.steps.ethnicity}
            </li>
            <li>
              <span>Servings:</span>
              {this.state.steps.servings}
            </li>
            <li>
              <span>Ingredients:</span>
              {this.state.steps.ingredients}
            </li>
            <li>
              <span>Directions:</span>
              {this.state.steps.directions}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    recipe: state.recipeReducer.recipe
  };
};

export default connect(mapStateToProps)(Recipe);
