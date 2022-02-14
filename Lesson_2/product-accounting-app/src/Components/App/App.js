import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import RenderProductCard from "../RenderProducCard/RenderProductCard";
import AddProduct from "../AddProduct/AddProduct";
import EditProductModal from "../EditProductModal/EditProductModal";
import SearchPanel from "../SearchPanel/SearchPanel";

import "./App.css";

const PRODUCTS = [
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
];

function App() {
  let [allProducts, setProducts] = useState(PRODUCTS);
  let [term, setTerm] = useState("");
  let [filter, setFilter] = useState("");
  let [currentId, setCurrentId] = useState(null);
  let [isOpenModal, setOpenModal] = useState(false);

  const deleteItem = (id) => {
    setProducts(allProducts.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    onOpenModal();
    setCurrentId((currentId = id));
  };

  const addNewProduct = (name, category, price, count) => {
    setProducts([
      ...allProducts,
      { id: uuidv4(), name, category, price, count },
    ]);
  };

  const onOpenModal = () => {
    setOpenModal(!isOpenModal);
  };

  const onAcceptModal = (name, category, price, count) => {
    const updatedProducts = allProducts.map((product) => {
      if (product.id === currentId) {
        product = { id: currentId, ...product, name, category, price, count };
      }
      return product;
    });
    setProducts((allProducts = updatedProducts));
  };

  const searchProd = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  const onUpdateSearch = (termProp) => {
    setTerm((term = termProp));
    console.log(term);
  };

  const visibleProducts = searchProd(allProducts, term);

  return (
    <div>
      <SearchPanel onUpdateSearch={onUpdateSearch} />
      <AddProduct addNewProduct={addNewProduct} />
      <RenderProductCard
        products={visibleProducts}
        deleteItem={deleteItem}
        editItem={editItem}
      />
      <EditProductModal
        isOpenModal={isOpenModal}
        onCloseModal={onOpenModal}
        onAccepted={onAcceptModal}
        product={allProducts.find((product) => product.id === currentId)}
      />
    </div>
  );
}

export default App;
