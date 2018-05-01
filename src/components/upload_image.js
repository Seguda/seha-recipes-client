import React from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';


export class ImageUpload extends React.Component {

    constructor(props) {
        super(props);
        this.fileInput = null;
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    formSubmitHandler(evt) {
        evt.preventDefault();

        var data = new FormData();
        data.append("file", this.fileInput.files[0]);

       // "http://localhost:8000/upload"
        axios.post(`${API_BASE_URL}/recipes/upload`, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(function (res) {
                alert('uploaded');
            })
            .catch(function (err) {
            });
    }

    render() {
        return (
            <div>
                {/* <form onSubmit={this.formSubmitHandler} >
                    <input type="file" name="sampleFile" ref={el => this.fileInput = el} />
                    <button type="submit">Submit</button>
                </form> */}
            </div>
        );
    }

}