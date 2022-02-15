import "./CategoryFilter.css";

function CategoryFilter(props) {
  const onUptadetSelect = (e) => {
    const select = e.target.value;
    props.onChangeSelect(select);
  };

  return (
    <div className="CategoryFilter">
      <p>Filter:</p>
      <select className="select__category" onChange={onUptadetSelect}>
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

export default CategoryFilter;
