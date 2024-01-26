"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import CreateModel from "./create.modal";
import { useState } from "react";

interface Iprops {
  blogs: IBlogs[];
}

const AppTable = (props: Iprops) => {
  const { blogs } = props;
  console.log(blogs);

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div
              className="mb-3"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h3>Table Blogs</h3>
              <Button
                variant="secondary"
                onClick={() => setShowModalCreate(true)}
              >
                Add New
              </Button>
            </div>

            <Table striped bordered hover size="sm">
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
            <CreateModel
              showModalCreate={showModalCreate}
              setShowModalCreate={setShowModalCreate}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppTable;
