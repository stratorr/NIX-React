import { Component } from "react";
import "./SearchPanel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
  }

  onUpdateSeach = (e) => {
    const term = e.target.value;

    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <div className="search">
        <span>Search:</span>
        <input
          type="text"
          className="search__panel"
          placeholder="Найти Продукт"
          onChange={this.onUpdateSeach}
        />
      </div>
    );
  }
}

export default SearchPanel;
