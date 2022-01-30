import { Col } from 'react-bootstrap';
import { useMessageContext } from 'hooks';
import { DecodeNumericode } from 'forms';

function DecodedMessage() {
  const context = useMessageContext();
  return (
    <h3 className="my-5 text-center">{context.message || 'Use Input to Decode Numericode'}</h3>
  );
}

export default function HomePage() {
  return (
    <Col xs={12}>
      <DecodedMessage />
      <DecodeNumericode />
    </Col>
  );
}
