import { v4 as uuidv4 } from "uuid";
import RenderProductCard from "../RenderProducCard/RenderProductCard";
import AddProduct from "../AddProduct/AddProduct";
import EditProductModal from "../EditProductModal/EditProductModal";

const { Component } = require("react");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenModal: false,
      currentId: null,
      products: [
        {
          id: uuidv4(),
          name: "Apple",
          category: "Fruits",
          price: 30,
          count: 200,
        },
        {
          id: uuidv4(),
          name: "Tomato",
          category: "Vegetables",
          price: 20,
          count: 300,
        },
        {
          id: uuidv4(),
          name: "Banana",
          category: "Fruits",
          price: 50,
          count: 400,
        },
      ],
    };
  }

  addNewProduct = (name, category, price, count) => {
    this.setState({
      products: [
        ...this.state.products,
        {
          id: uuidv4(),
          name,
          category,
          price,
          count,
        },
      ],
    });
  };

  deleteItem = (id) => {
    this.setState({
      products: this.state.products.filter((item) => item.id !== id),
    });
  };

  editItem = (id) => {
    this.onOpenModal();
    this.setState({
      currentId: id,
    });
  };

  onOpenModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };

  onAcceptedModal = (props) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === this.state.currentId) {
        product = { id: this.state.currentId, ...product, ...props };
      }
      return product;
    });

    this.setState({
      products: updatedProducts,
    });
  };

  render() {
    return (
      <div>
        <AddProduct addNewProduct={this.addNewProduct} />
        <RenderProductCard
          products={this.state.products}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
        />
        <EditProductModal
          isOpenModal={this.state.isOpenModal}
          onCloseModal={this.onOpenModal}
          onAccepted={this.onAcceptedModal}
          product={this.state.products.find(
            (product) => product.id === this.state.currentId
          )}
        />
        ;
      </div>
    );
  }
}

export default App;
