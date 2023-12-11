import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './GenerationSettings.css';

const GenerationSettings: React.FC = () => {
  return (
    <div className="card-container">
      <Card className="card">
        <Card.Body>
          <Card.Title>Panel Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the panel title and make up the bulk of the panel's content.
          </Card.Text>
          <Button variant="primary">Button 1</Button>
          <Button variant="secondary">Button 2</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GenerationSettings;