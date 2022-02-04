import { Component } from "react";
import Car from "../Car/Car";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        {
          id: 1,
          name: "Mercedes",
          model: "AMG",
          color: "black",
        },
        {
          id: 2,
          name: "BMW",
          model: "M5",
          color: "Blue",
        },
        {
          id: 3,
          name: "Ford",
          model: "Mustang",
          color: "Yellow",
        },
        {
          id: 4,
          name: "Mazda",
          model: "Cx-6",
          color: "red",
        },
      ],
    };
  }

  addCar = () => {
    this.setState({
      cars: [
        ...this.state.cars,
        {
          id: 5,
          name: "Range Rover",
          model: "D250",
          color: "White",
        },
      ],
    });
  };

  removeCar = () => {
    this.setState({
      cars: this.state.cars.slice(0, this.state.cars.length - 1),
    });
  };

  render() {
    const { cars } = this.state;

    return (
      <div className="App">
        <table>
          <tbody>
            {cars.map((car) => {
              return <Car key={car.id} car={car} />;
            })}
          </tbody>
        </table>
        <button onClick={this.addCar}>Add Car</button>
        <button onClick={this.removeCar}>Remove Car</button>
      </div>
    );
  }
}

export default App;
