import React, { Component } from "react";

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    window.location = "/type";
    console.log("Submitted");
  };
  state = {};
  render() {
    return (
      <div>
        <h1>Enter details:</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="rollno">Roll Number</label>
            <input id="rollno" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="img">Image</label>
            <input id="img" type="file" className="form-control" />
          </div>
          <button className="btn btn-primary">Start Typing</button>
        </form>
      </div>
    );
  }
}

export default Form;
