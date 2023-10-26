import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { RxCross2 } from "react-icons/rx";

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
  delete: {
    width: "20px",
    height: "20px",
    color: "white",
    borderRadius: "50%",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    position: "absolute",
    right: "0",
    top: "-5px",
  },
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const {
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
    storeItems,
  } = useShoppingCart();

  const item = storeItems.find((item) => item.id === id);
  if (!item) return null;

  return (
    <div className="d-flex align-items-center justify-content-between">
      <Stack direction="horizontal">
        <div className="position-relative">
          <div onClick={() => removeFromCart(id)} style={styles.delete}>
            <RxCross2 size={"1rem"} />
          </div>
          <img src={item.imgUrl} style={styles.img} />
        </div>
        <div>
          <span>{item.name}</span>
          <p className="text-muted mb-0">
            {formatCurrency(item.price * quantity)}
          </p>
        </div>
      </Stack>
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
  );
};

export default CartItem;
