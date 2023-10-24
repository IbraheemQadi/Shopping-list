import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import {
  useShoppingCart,
  StoreItem as StoreItemType,
} from "../context/ShoppingCartContext";

const styles: { [key: string]: React.CSSProperties } = {
  cardImg: { height: "220px", objectFit: "cover" },
  cardTitle: { display: "flex", justifyContent: "space-between" },
};

const StoreItem = ({ id, name, imgUrl, price }: StoreItemType) => {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imgUrl} style={styles.cardImg} />
      <Card.Body>
        <Card.Title style={styles.cardTitle}>
          <Card.Text className="fs-2">{name}</Card.Text>
          <Card.Text className="ms-2 text-muted">
            {formatCurrency(price)}
          </Card.Text>
        </Card.Title>
        {getItemQuantity(id) === 0 ? (
          <Button className="w-100" onClick={() => increaseItemQuantity(id)}>
            Add to cart
          </Button>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: ".5rem" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}
            >
              <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
              <div>
                <span className="fs-3">{getItemQuantity(id)}</span> in cart
              </div>
              <Button onClick={() => increaseItemQuantity(id)}>+</Button>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
