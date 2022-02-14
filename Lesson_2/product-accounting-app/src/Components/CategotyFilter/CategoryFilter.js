import "./CategoryFilter.css";

function CategoryFilter(props) {
  const onUptadetSelect = () => {
    const select = document.querySelector(".select__category");
    console.log(select.value);
    props.onChangeSelect(select.value);
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
