
import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <div>
      <Alert variant="primary">
        <Alert.Heading>Benvenuto nel nostro shop!</Alert.Heading>
        <p>Esplora i nostri libri!</p>
      </Alert>
    </div>
  );
}

export default Welcome;