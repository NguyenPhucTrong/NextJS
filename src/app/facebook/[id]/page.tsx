"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  console.log("check:", params);
  return (
    <div>
      <Container style={{ minHeight: "calc(100vh-106px)" }}>
        <Row>
          <Col>
            <div>View Detail = {params.id}</div>
            <div>
              <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViewDetailBlog;
