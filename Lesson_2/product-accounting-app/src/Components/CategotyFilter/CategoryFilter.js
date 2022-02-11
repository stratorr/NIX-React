import { Component } from "react";
import "./CategoryFilter.css";

class CategoryFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
    };
  }

  onUptadetSelect = () => {
    const select = document.querySelector(".select__category");
    this.props.onChangeSelect(select.value);
  };

  render() {
    // const categories = this.props.category.map(({ category }) => category);
    // const uniqCategories = [...new Set(categories)];

    return (
      <div className="CategoryFilter">
        <p>Filter:</p>
        <select className="select__category" onChange={this.onUptadetSelect}>
          <option value="All">All Products</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>

          {/* {uniqCategories.map((item) => {
            return <option key={item.id}>{item}</option>;
          })} */}
        </select>
      </div>
    );
  }
}

export default CategoryFilter;
