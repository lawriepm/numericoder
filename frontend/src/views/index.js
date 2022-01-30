import { Container, Row } from 'react-bootstrap';
import MessageProvider from 'context/message';
import HomePage from 'views/home';
import Navbar from 'navbar';

function App() {
  return (
    <MessageProvider>
      <Navbar />
      <Container className="pt-3">
        <Row>
          <HomePage />
        </Row>
      </Container>
    </MessageProvider>
  );
}

export default App;
