import { Component } from "react";
import Modal from "react-modal";
import "../EditProductModal/EditProductModal.css";

class EditProductModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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

    return (
      <Modal
        isOpen={this.props.isOpenModal}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={this.props.isOpenModal}
        style={customStyles}
        ariaHideApp={false}
        // contentLabel="Example Modal"
      >
        <div className="EditProductModal">
          <form
            onSubmit={() => {
              this.setState({
                name: null,
                category: null,
                price: null,
                count: null,
              });
              this.props.onAccepted(this.state);
              this.props.onCloseModal();
            }}
          >
            <p>Name:</p>
            <input
              type="text"
              // value={this.state?.name || this.props.product?.name || ""}
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
              minLength={3}
              required
            />
            <p>category:</p>
            <input
              // value={this.state?.category || this.props.product?.category || ""}
              onChange={(event) => {
                this.setState({ category: event.target.value });
              }}
              minLength={3}
              required
            />
            <p>price:</p>
            <input
              // value={this.state?.price || this.props.product?.price || ""}
              onChange={(event) => {
                this.setState({ price: event.target.value });
              }}
              type="number"
              required
            />
            <p>count:</p>
            <input
              type="number"
              // value={this.state?.count || this.props.product?.count || ""}
              onChange={(event) => {
                this.setState({ count: event.target.value });
              }}
              required
            />
            <div className="buttons-group">
              <button
                onClick={() => {
                  this.setState({
                    name: null,
                    category: null,
                    price: null,
                    count: null,
                  });
                  this.props.onCloseModal();
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
}

export default EditProductModal;
