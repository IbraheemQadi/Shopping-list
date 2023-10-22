import { Navbar as NavbarBs, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const styles: { [key: string]: React.CSSProperties } = {
  badge: {
    width: "1.5rem",
    height: "1.5rem",
    position: "absolute",
    right: 0,
    bottom: 0,
    transform: "translate(25%, 25%)",
  },
  button: { width: "3rem", height: "3rem", position: "relative" },
};

function Navbar() {
  return (
    <NavbarBs sticky="top" expand="sm" className="bg-white shadow-sm mb-3">
      <Container>
        <NavbarBs.Brand as={NavLink} to="/">
          My Shopping List
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store">
              Store
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Button
            style={styles.button}
            variant="outline-primary"
            className="rounded-circle"
          >
            <img src="./shoppingcart.svg" />
            <div
              className="rounded-circle bg-danger text-white text-center"
              style={styles.badge}
            >
              3
            </div>
          </Button>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;