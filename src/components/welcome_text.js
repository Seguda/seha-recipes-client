import React from 'react';
import './welcome_text.css';


export default function WelcomeText(props) {
    return (
        <div className="landing">
        {/* // style={{ 'display': (props.visibility) ? 'block' : 'none' }}> */}
            <div className="welcome_text">
                <h2>Welcome to World of Yummy Recipes </h2>
                    <p>Get your free yummy recipes today and start eating food that makes your soul happy while fueling your body and <strong>share your yummy recipes.</strong> </p>
                    <ul>
                        <li>1. Click the "Create Recipe" button to create a new recipe.</li>
                        <li>2. Then fill out the form with all details.</li>
                        <li>3. Hit <strong>Save</strong> button to save the recipe.</li>
                        <li>4. Lastly, hit <strong>Hide</strong> button to clear out the form and to hide the form.</li>
                    </ul>
                    <p>Enjoy!</p>
                {/* <Button /> */}
                </div>
                </div>


    );
}
