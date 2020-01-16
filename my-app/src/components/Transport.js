import React from "react";
import PropTypes from "prop-types";

export class Transport extends React.Component {
  render() {
    const { transport } = this.props;
    return (
      <div>
        <p>Кількість авто: {transport}</p>
      </div>
    );
  }
}

Transport.propTypes = {
  people: PropTypes.number.isRequired
};
