import React from "react";
import { Card } from "react-bootstrap";
import "./Choose.css";

const Choose = () => {
  return (
    <div>
      <h3 className="mt-5 mb-3">Why Choose us?</h3>
      <div className="choose-container row mt-3">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src="https://i.ibb.co/x2fcLS5/1.jpg" />
          <Card.Body>
            <Card.Title>2000+ Our worldwide guide</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src="https://i.ibb.co/Mc2g3t5/2.jpg" />
          <Card.Body>
            <Card.Title>100% trusted travel agency</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src="https://i.ibb.co/JnNLGy5/3.jpg" />
          <Card.Body>
            <Card.Title>10+ year of travel experience</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src="https://i.ibb.co/qsk9sFb/4.jpg" />
          <Card.Body>
            <Card.Title>90% of our traveller happy</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Choose;
