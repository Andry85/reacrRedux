import React from "react";
import PropTypes from "prop-types";

export class People extends React.Component {
  render() {
    const { people } = this.props;
    return (
      <div>
        <p>У вашому місці живе {people} людей.</p>
      </div>
    );
  }
}

People.propTypes = {
  people: PropTypes.string.isRequired
};
