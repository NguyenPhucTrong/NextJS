"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";
import Link from "next/link";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<IBlogs, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <Container style={{ minHeight: "calc(100vh-106px)" }}>
        <Row>
          <Col>
            <div>
              <Link href="/facebook">Back</Link>
            </div>
            <div>View Detail = {params.id}</div>
            <div>
              <Card className="text-center">
                <Card.Header>{data?.title}</Card.Header>
                <Card.Body>
                  {/* <Card.Title>{data?.}</Card.Title> */}
                  <Card.Text>{data?.content}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  Author: {data?.author}
                </Card.Footer>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViewDetailBlog;
