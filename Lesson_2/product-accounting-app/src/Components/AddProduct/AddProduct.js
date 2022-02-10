import { number } from "prop-types";
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
    var inputs = document.querySelectorAll("input");

    return (
      <div className="AddProduct">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addNewProduct(name, category, price, count);
            this.setState({
              name: "",
              category: "",
              price: 0,
              count: 0,
            });

            for (var i = 0; i < inputs.length; i++) {
              inputs[i].value = "";
            }
          }}
          className="addProduct__form"
        >
          <p>Name:</p>
          <input
            minLength={3}
            type="text"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            placeholder="Введите Имя Продукта"
            required
          />
          <p>Category:</p>
          <input
            minLength={3}
            type="text"
            onChange={(e) => {
              this.setState({ category: e.target.value });
            }}
            placeholder="Введите Категорию"
            required
          />
          <p>Price:</p>
          <input
            type="number"
            onChange={(e) => {
              this.setState({ price: e.target.value });
            }}
            placeholder="Введите Цену"
            required
          />

          <p>Count:</p>
          <input
            type="number"
            onChange={(e) => {
              this.setState({ count: e.target.value });
            }}
            className="test"
            placeholder="Введите Кол-во"
            required
          />

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
