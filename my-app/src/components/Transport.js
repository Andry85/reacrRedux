import React from "react";
import PropTypes from "prop-types";

export class Transport extends React.Component {
  onBtnClick = e => {
    this.props.setCars();
  };
  render() {
    const { transport, isFetching } = this.props;
    return (
      <div>
        <button onClick={this.onBtnClick}>Add</button> a cars
        {isFetching ? <p>Загрузка...</p> : <p>Кількість авто: {transport}</p>}
      </div>
    );
  }
}

Transport.propTypes = {
  setCars: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};
