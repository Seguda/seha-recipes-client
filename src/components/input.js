import React from 'react';

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }
    render() {
        const Element = this.props.element || 'input';

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
        }

        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

       

        return (
            <div className="form-input">
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {warning}
                    {error}
                   
                </label>
                <Element
                    {...this.props.input}
                    name={this.props.input.name}
                    author={this.props.input.author}
                    type={this.props.input.type}
                    ethnicity={this.props.input.ethnicity}
                    servings={this.props.input.servings}
                    ingredients={this.props.input.ingredients}
                    directions={this.props.input.directions}
                    //image={this.props.recipe.image}
                    ref={input => (this.input = input)}  
                >
                    {this.props.children}
                </Element>
            </div>
        );
    }
}