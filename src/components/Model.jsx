import React, { Component } from "react";

export class Model extends Component {
  render() {
    let { name, price, url } = this.props.glassesDetails;
    return (
      <section className="model d-flex justify-content-center col-5">
        <div
          className="card text-left"
          style={{ width: 300, position: "relative" }}
        >
          <img
            className="card-img-top"
            src="./img/glassesImage/model.jpg"
            alt="hinh model"
          />
          <img
            src={url}
            alt="kinh"
            style={{
              width: 170,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "16%"
            }}
          />
          <div className="card-body">
            <span className="card-title badge-danger h3 px-2 rounded">
              {price}
            </span>
            <p className="card-text mt-2">{name}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Model;
