import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

export type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const styles: { [key: string]: React.CSSProperties } = {
  cardImg: { height: "220px", objectFit: "cover" },
  cardTitle: { display: "flex", justifyContent: "space-between" },
};

const StoreItem = ({ name, imgUrl, price }: StoreItemProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={imgUrl} style={styles.cardImg} />
      <Card.Body>
        <Card.Title style={styles.cardTitle}>
          <Card.Text className="fs-2">{name}</Card.Text>
          <Card.Text className="ms-2 text-muted">{formatCurrency(price)}</Card.Text>
        </Card.Title>
        <button className="btn btn-primary w-100">Add to cart</button>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
