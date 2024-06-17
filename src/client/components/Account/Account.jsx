import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart } from "../../slices/Cart";

export default function Account() {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleRemove = (i) => {
    dispatch(removeFromCart(i));
  };
  return (
    <>
      <h1 id="accPg">My Account</h1>
      <p id={"accPg2"}>Account Info</p>
      <div className="accBox">
        <h4 className="boxTitles">Checked Out Items:</h4>
        {cart.length === 0 ? (
          <div className="noCont">
            <h4 className="noItems">
              No Items Checked Out...Get To Shopping!
            </h4>
          </div>
        ) : (
            cart.map((i) => (
                <ul key={i.id}>
                  <li className="list">Item Name: {i.name}</li>
                  <li className="list">{i.image}</li>
                  <li className="list">Price: {i.price}</li>
                  <button onClick={() => handleRemove(i)} className="return-butt">
                    Return Item
                  </button>
                </ul>
              ))
            )}
          </div>
        </>
      );
    }