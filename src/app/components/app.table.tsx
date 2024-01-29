"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import CreateModel from "./create.modal";
import { useState } from "react";
import UpdateModel from "./update.modal";
import Link from "next/link";

interface Iprops {
  blogs: IBlogs[];
}

const AppTable = (props: Iprops) => {
  const { blogs } = props;
  // console.log(blogs);

  const [blog, setBlog] = useState<IBlogs | null>(null);

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

  return (
    <div>
      <Container style={{ minHeight: "calc(100vh-106px)" }}>
        <Row>
          <Col>
            <div>
              <Link href="/">Back</Link>
            </div>
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
                {blogs.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.author}</td>
                      {/* <td>{blog.content}</td> */}
                      <td>
                        <Link href={`/facebook/${item.id}`}>View</Link>

                        <Button
                          variant="warning"
                          className="mx-3"
                          onClick={() => {
                            setBlog(item);
                            setShowModalUpdate(true);
                          }}
                        >
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
            <UpdateModel
              showModalUpdate={showModalUpdate}
              setShowModalUpdate={setShowModalUpdate}
              blog={blog}
              setBlog={setBlog}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppTable;
