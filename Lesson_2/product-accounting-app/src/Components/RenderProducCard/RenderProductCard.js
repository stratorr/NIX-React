import "./RenderProductCard.css";

function RenderProductCard(props) {
  return (
    <div>
      <div className="RenderProductCard">
        {props.products.map((item) => {
          return (
            <div className="product__card" key={item.id}>
              <div className="product__card-wrapper">
                <div className="title">{item.name}</div>
                <div className="article">{item.category}</div>
                <div className="article">{item.price + "$"}</div>
                <div className="article">{item.count + " items"}</div>
              </div>
              <div className="product__card-buttons">
                <button
                  className="btn btn-warning"
                  onClick={() => props.editItem(item.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => props.deleteItem(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RenderProductCard;
