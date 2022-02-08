import { Component } from "react";
import "./AddProduct.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: "",
      price: 0,
      count: 0,
    };
  }

  render() {
    const { name, category, price, count } = this.state;
    var inputs = document.querySelectorAll("input[type=text]");

    return (
      <div className="AddProduct">
        <p>Name:</p>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <p>Category:</p>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ category: e.target.value });
          }}
        />
        <p>Price:</p>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ price: e.target.value });
          }}
        />

        <p>Count:</p>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ count: e.target.value });
          }}
          className="test"
        />

        <button
          onClick={() => {
            this.props.addNewProduct(name, category, price, count);
            for (var i = 0; i < inputs.length; i++) {
              inputs[i].value = "";
            }
          }}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddProduct;
