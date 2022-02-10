import { Component } from "react";
import "./SearchPanel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
  }

  onUpdateSeach = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(this.state.term);
  };

  render() {
    return (
      <div className="search">
        <span>Search:</span>
        <input
          type="text"
          className="search__panel"
          placeholder="Найти Продукт"
          value={this.state.term}
          onChange={this.onUpdateSeach}
        />
      </div>
    );
  }
}

export default SearchPanel;
