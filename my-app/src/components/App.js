import React, { Component } from "react";
import { connect } from "react-redux";
import { People } from "./People";
import { Transport } from "./Transport";
import { setCars } from "../actions/CarsActions";
import "./App.css";

class App extends Component {
  render() {
    const { people, transport, setCarsAction } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <People people={people.amount} />
            <Transport
              transport={transport.cars}
              setCars={setCarsAction}
              isFetching={transport.isFetching}
            />
          </h1>
        </header>
      </div>
    );
  }
}

// приклеиваем данные из store
const mapStateToProps = store => {
  console.log(store); // посмотрим, что же у нас в store?
  return {
    people: store.people,
    transport: store.transport
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCarsAction: cars => dispatch(setCars(cars))
  };
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App);
