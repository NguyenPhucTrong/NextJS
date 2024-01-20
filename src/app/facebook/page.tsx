"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Facebook = () => {
  const router = useRouter();
  const handleButton = () => {
    router.push("/");
  };
  return (
    // <div>
    //   facebook page
    //   <div>
    //     <Button variant="primary">Text</Button>
    //     {/* <Button onClick={() => handleButton()} variant="primary">
    //       Text1
    //     </Button> */}
    //     <button onClick={() => handleButton()}>Back Home</button>
    //   </div>
    // </div>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <button onClick={() => handleButton()}>Back Home</button>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Facebook;
