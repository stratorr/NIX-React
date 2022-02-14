import "./SearchPanel.css";

function SearchPanel(props) {
  const onUpdateSearch = (e) => {
    const term = e.target.value;
    props.onUpdateSearch(term);
  };

  return (
    <div className="search">
      <span>Search:</span>
      <input
        type="text"
        className="search__panel"
        placeholder="Найти Продукт"
        onChange={onUpdateSearch}
      />
    </div>
  );
}

export default SearchPanel;
