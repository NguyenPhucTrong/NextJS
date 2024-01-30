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
import { toast } from "react-toastify";
import { mutate } from "swr";

interface Iprops {
  blogs: IBlogs[];
}

const AppTable = (props: Iprops) => {
  const { blogs } = props;
  // console.log(blogs);

  const [blog, setBlog] = useState<IBlogs | null>(null);

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [ShowModalDelete, setShowModalDelete] = useState<boolean>(false);

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handDeleteModel = (id: number) => {
    if (confirm(`Do you want to delete this blog (id = ${id})`)) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, author, content }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            toast.success("Create new blogs success");
            mutate("http://localhost:8000/blogs");
          } else {
            toast.error("error");
          }
        });
    }
  };

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
                        <Button
                          variant="danger"
                          onClick={() => {
                            handDeleteModel(item.id);
                          }}
                        >
                          Delete
                        </Button>
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
