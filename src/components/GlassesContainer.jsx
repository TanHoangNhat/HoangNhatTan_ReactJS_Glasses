import React, { Component } from "react";
import GlassesList from "./GlassesList";
import Model from "./Model";
import data from "../data.json";

export class GlassesContainer extends Component {
  state = {
    glassesDetails: data[0]
  };
  handleChangeGlasses = (id) => {
    this.setState({
      glassesDetails: data.find((glasses) => glasses.id === id)
    });
  };
  render() {
    return (
      <div className="container row">
        <Model glassesDetails={this.state.glassesDetails} />
        <GlassesList
          handleChangeGlasses={this.handleChangeGlasses}
          glassesList={data}
        />
      </div>
    );
  }
}

export default GlassesContainer;
