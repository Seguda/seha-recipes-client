import React from 'react';
import './landing.css';


export default function Landing(props) {
  return (
    <div className="landing">
      <div className="welcome_text wrap">
        <h2>Welcome to World of Yummy Recipes</h2>
        <p>Get your free yummy recipes today and start eating food that makes your soul happy while fueling your body and <strong>share your yummy recipes.</strong></p>
        <ol>
          <li>Click the <strong>Create Recipe</strong> button to create a new recipe.</li>
          <li>Then fill out the form with all details.</li>
          <li>Hit <strong>Save</strong> button to save the recipe.</li>
          <li>Lastly, hit <strong>Hide</strong> button to clear out the form and to hide the form.</li>
          <li>In order to make a <strong>Search</strong> you can type into search box also you can see the details of old recipes from Recipe List by <strong>Clicking</strong> on one of them.</li>
        </ol>
        <p>Enjoy!</p>
      </div>
    </div>
  );
}
