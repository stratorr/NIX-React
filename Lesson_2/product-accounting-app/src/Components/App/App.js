import { v4 as uuidv4 } from "uuid";
import RenderProductCard from "../RenderProducCard/RenderProductCard";
import AddProduct from "../AddProduct/AddProduct";
import EditProductModal from "../EditProductModal/EditProductModal";
import SearchPanel from "../SearchPanel/SearchPanel";
import CategoryFilter from "../CategotyFilter/CategoryFilter";

const { Component } = require("react");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        {
          id: uuidv4(),
          name: "Potato",
          category: "Vegetables",
          price: 50,
          count: 99,
        },
      ],
      term: "",
      filter: "",
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

  searchProd = (items, term) => {
    if (term.length === 1) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onChangeSelect = (category) => {
    this.setState({
      filter: category,
    });
  };

  filterCategory = (items, filter) => {
    switch (filter) {
      case "Fruits":
        return items.filter((item) => item.category === "Fruits");
      case "Vegetables":
        return items.filter((item) => item.category === "Vegetables");
      default:
        return items;
    }
  };

  render() {
    const { products, term, filter } = this.state;
    const visibleProducts = this.filterCategory(
      this.searchProd(products, term),
      filter
    );

    return (
      <div>
        <SearchPanel onUpdateSearch={this.onUpdateSearch} />
        <CategoryFilter
          onChangeSelect={this.onChangeSelect}
          category={this.state.products}
        />
        <AddProduct addNewProduct={this.addNewProduct} />
        <RenderProductCard
          products={visibleProducts}
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
