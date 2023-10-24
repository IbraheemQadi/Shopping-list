import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const styles: { [key: string]: React.CSSProperties } = {
  img: {
    width: "125px",
    height: "75px",
    marginRight: "5px",
    objectFit: "cover",
  },
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { increaseItemQuantity, decreaseItemQuantity, storeItems } =
    useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (!item) return null;

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div>
        <Stack direction="horizontal">
          <img src={item.imgUrl} style={styles.img} />
          <div>
            <span>{item.name}</span>
            <p className="text-muted mb-0">
              {formatCurrency(item.price * quantity)}
            </p>
          </div>
        </Stack>
      </div>
      <div>
        <div className="d-flex align-items-center">
          <button
            onClick={() => decreaseItemQuantity(id)}
            className="btn btn-sm btn-outline-secondary me-2"
          >
            -
          </button>
          <p className="mb-0">{quantity}</p>
          <button
            onClick={() => increaseItemQuantity(id)}
            className="btn btn-sm btn-outline-secondary ms-2"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

// <div className="mb-1">
//   <button className="btn btn-sm btn-outline-danger w-100">Remove</button>
// </div>;
