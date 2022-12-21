import React, { Component } from "react";

class Type extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Type Here:</h1>
        <textarea name="txtarea" id="txtarea" cols="200" rows="15"></textarea>
      </div>
    );
  }
}

export default Type;
