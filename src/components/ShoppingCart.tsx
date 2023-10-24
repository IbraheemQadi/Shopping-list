import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";

const ShoppingCart = () => {
  const { isOpen, cartItems, closeCart, storeItems } = useShoppingCart();
  return (
    <>
      <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <div key={item.id}>
                <CartItem {...item} />
              </div>
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ShoppingCart;
