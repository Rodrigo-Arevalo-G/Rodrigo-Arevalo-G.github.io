import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar
      expand="sm"
      className="w-100 d-flex justify-content-between align-items-start bg-white"
      fixed="top"
    >
      <div className="ps-3">
        <Navbar.Brand href="#home">Rodrigo</Navbar.Brand>
      </div>
      <div className="w-50">
        <div className="d-flex justify-content-end">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <Navbar.Collapse>
          <Nav
            className="w-100 center ps-2 pe-2"
            fill
            variant="underline"
            defaultActiveKey="#home"
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#about_me">About me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
