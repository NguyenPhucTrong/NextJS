"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  console.log("check:", params);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>View Detail = {params.id}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViewDetailBlog;
