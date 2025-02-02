import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import { useStoreItems } from "../context/StoreItemsContext";

const Store = () => {
  const { storeItems } = useStoreItems();
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
