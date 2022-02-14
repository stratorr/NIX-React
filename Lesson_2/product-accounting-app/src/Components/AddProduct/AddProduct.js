import { useState } from "react";
import "./AddProduct.css";

function AddProduct(props) {
  let [name, setName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState(0);
  let [count, setCount] = useState("");

  var inputs = document.querySelectorAll("input");

  return (
    <div className="AddProduct">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();

          props.addNewProduct(name, category, price, count);

          setName((name = ""));
          setCategory((category = ""));
          setPrice((price = 0));
          setCount((count = 0));

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
            setName((name = e.target.value));
          }}
          placeholder="Введите Имя Продукта"
          required
        />
        <p>Category:</p>
        <input
          minLength={3}
          type="text"
          onChange={(e) => {
            setCategory((category = e.target.value));
          }}
          placeholder="Введите Категорию"
          required
        />
        <p>Price:</p>
        <input
          type="number"
          onChange={(e) => {
            setPrice((price = e.target.value));
          }}
          placeholder="Введите Цену"
          required
        />

        <p>Count:</p>
        <input
          type="number"
          onChange={(e) => {
            setCount((count = e.target.value));
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

export default AddProduct;
