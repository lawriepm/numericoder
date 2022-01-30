import { Container, Navbar } from 'react-bootstrap';

export default function Nav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Numericoder</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
