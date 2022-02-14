import { useState } from "react";
import Modal from "react-modal";
import "./EditProductModal.css";

function EditProductModal(props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let [name, setName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [count, setCount] = useState("");

  return (
    <Modal isOpen={props.isOpenModal} style={customStyles} ariaHideApp={false}>
      <div className="EditProductModal">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.onAccepted(
              name || props.product?.name,
              category || props.product?.category,
              price || props.product?.price,
              count || props.product?.count
            );
            console.log(name, category, price, count);
            props.onCloseModal();
          }}
        >
          <p>Name:</p>
          <input
            type="text"
            // value={name || props.product?.name}
            onChange={(event) => {
              setName((name = event.target.value));
            }}
            minLength={3}
            placeholder="Введите Имя"
            required
          />
          <p>category:</p>
          <input
            // value={category || props.product?.category}
            onChange={(event) => {
              setCategory((category = event.target.value));
            }}
            minLength={3}
            placeholder="Введите Категорию"
            required
          />
          <p>price:</p>
          <input
            // value={price || props.product?.price}
            onChange={(event) => {
              setPrice((price = event.target.value));
            }}
            type="number"
            placeholder="Введите Цену"
            required
          />
          <p>count:</p>
          <input
            type="number"
            // value={count || props.product?.count}
            onChange={(event) => {
              setCount((count = event.target.value));
            }}
            placeholder="Введите Кол-во"
            required
          />
          <div className="buttons-group">
            <button
              onClick={() => {
                setName((name = null));
                setCategory((category = null));
                setPrice((price = null));
                setCount((count = null));
                props.onCloseModal();
              }}
              className="btn btn-danger"
            >
              Cancel
            </button>
            <button className="btn btn-success" type="submit">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default EditProductModal;
