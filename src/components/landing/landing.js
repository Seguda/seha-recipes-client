import React from 'react';
import './landing.css';


export default function Landing(props) {
  return (
    <div className="landing">
      <div className="wrap">
        <h2>Welcome to Yummy</h2>
        <p>Get your free yummy recipes today and start eating food that makes your soul happy while fueling your body. Then go the extra mile and share the love by posting your recipes for others to enjoy!</p>
        <h2>Share the Love</h2>
        <ol className="landingsteps">
          <li>Start sharing by clicking <span>Add Recipe</span>.</li>
          <li>Complete the form with all scrumptious details.</li>
          <li>Hit that <span>Save</span> button to save the recipe.</li>
        </ol>
        <div className="enjoy">
          <p>Enjoy!</p>
        </div>
      </div>
    </div>
  );
}
