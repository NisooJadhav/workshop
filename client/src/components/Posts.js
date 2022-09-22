import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import moment from "moment";

function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({
    id: "",
    title: "",
    content: "",
    fromDate: "",
    toDate: "",
    instructor: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`/delete/${id}`)
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const updatePost = (id, title, content, fromDate, toDate, instructor) => {
    setUpdatedPost((prev) => {
      return {
        ...prev,
        id: id,
        title: title,
        content: content,
        fromDate: fromDate,
        toDate: toDate,
        instructor: instructor,
      };
    });
    handleShow();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedPost = () => {
    axios
      .put(`/update/${updatedPost.id}`, updatedPost)
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  return (
    <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
      <h1>Workshops</h1>
      <Button
        variant="outline-dark"
        style={{ width: "100%", marginBottom: "1rem" }}
        onClick={() => navigate(-1)}
      >
        BACK
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="title"
            name="title"
            value={updatedPost.title ? updatedPost.title : ""}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
            placeholder="content"
            name="content"
            onChange={handleChange}
            value={updatedPost.content ? updatedPost.content : ""}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <div
                style={{
                  marginBottom: "1rem",
                  border: "solid lightgray 1px",
                  borderRadius: "8px",
                }}
                key={post._id}
              >
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <p>{moment.utc(post.fromDate).format('MM/DD/YYYY')} - {moment.utc(post.toDate).format('MM/DD/YYYY')}</p>
                <p>{post.instructor}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",

                    padding: "1rem",
                  }}
                >
                  <Button
                    variant="outline-info"
                    onClick={() =>
                      updatePost(post._id, post.title, post.content)
                    }
                    style={{ width: "100%", marginRight: "1rem" }}
                  >
                    UPDATE
                  </Button>
                  <Button
                    onClick={() => deletePost(post._id)}
                    variant="outline-danger"
                    style={{ width: "100%" }}
                  >
                    DELETE
                  </Button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Posts;
