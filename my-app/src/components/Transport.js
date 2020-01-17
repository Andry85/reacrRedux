import React from "react";
import PropTypes from "prop-types";

export class Transport extends React.Component {
  onBtnClick = e => {
    const cars = e.currentTarget.innerText;
    this.props.setCars(cars);
  };
  render() {
    const { transport, isFetching } = this.props;
    return (
      <div>
        Add <button onClick={this.onBtnClick}>100</button> cars
        {isFetching ? <p>Загрузка...</p> : <p>Кількість авто: {transport}</p>}
      </div>
    );
  }
}

Transport.propTypes = {
  setCars: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};
