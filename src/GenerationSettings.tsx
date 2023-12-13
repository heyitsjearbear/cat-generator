import { Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const GenerationSettings: React.FC = () => {
  const styles: string[] = [
    "None",
    "Photo",
    "Digital Art",
    "3d",
    "Painting",
    "Low Poly",
    "Pixel Art",
    "Anime",
    "Cyberpunk",
    "Comic",
    "Vintage",
    "Cartoon",
  ];
  const aspectRatios: string[] = ["Square", "Portrait", "Landscape"];
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [selectedAspectRatio, setSelectedAspectRatio] = useState<string>("");

  const toggleStyle = (style: string) => {
    setSelectedStyle((prevStyle) => (prevStyle === style ? "" : style));
  };

  const toggleAspectRatio = (aspectRatio: string) => {
    setSelectedAspectRatio((prevAspectRatio) =>
      prevAspectRatio === aspectRatio ? "" : aspectRatio
    );
  };

  return (
    <Container style={{ maxWidth: "50vw" }}>
      <div className="bg-white p-4 rounded shadow">
        <div className="panel-header mb-3">
          <h2 className="h5 mb-2">Aspect Ratio</h2>
          <div className="d-flex gap-2">
            {aspectRatios.map((ratio, idx) => (
              <Button
                key={idx}
                variant="secondary"
                style={
                  selectedAspectRatio === ratio
                    ? { border: "2px solid #007bff" }
                    : {}
                }
                onClick={() => toggleAspectRatio(ratio)}
              >
                {ratio}
              </Button>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <h2 className="style-header h5 mb-2">Style</h2>
          <Row xs={1} md={4} className="g-4">
            {styles.map((style, idx) => (
              <Col key={idx}>
                <Button
                  variant="secondary"
                  style={
                    selectedStyle === style
                      ? { border: "2px solid #007bff" }
                      : {}
                  }
                  onClick={() => toggleStyle(style)}
                >
                  {style}
                </Button>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default GenerationSettings;
