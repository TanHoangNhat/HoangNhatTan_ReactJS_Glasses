import React, { Component } from "react";

export class Glasses extends Component {
  render() {
    let { url, id } = this.props.glasses;
    let { handleChangeGlasses } = this.props;
    return (
      <div className="col-3">
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleChangeGlasses(id)}
        >
          <img src={url} alt="hinh" style={{ width: 100, borderRadius: 20 }} />
        </button>
      </div>
    );
  }
}

export default Glasses;
