"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

interface Iprops {
  blogs: IBlogs[];
}

const AppTable = (props: Iprops) => {
  const { blogs } = props;
  console.log(blogs);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => {
                  return (
                    <tr key={blog.id}>
                      <td>{blog.id}</td>
                      <td>{blog.title}</td>
                      <td>{blog.author}</td>
                      <td>
                        <Button>view</Button>
                        <Button variant="warning" className="mx-3">
                          Edit
                        </Button>
                        <Button variant="danger">Delete</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppTable;
