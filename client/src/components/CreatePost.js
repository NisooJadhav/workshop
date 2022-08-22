import AdminAuth from "./AdminAuth";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

import { RiDeleteBin7Line } from "react-icons/ri"
import { BsPen } from "react-icons/bs"
import { MdDone } from "react-icons/md"
import { IoMdAdd } from "react-icons/io"
import { AiOutlineClose } from "react-icons/ai"

function CreatePost() {

  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
    fromDate: "",
    toDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createWorkshop = (e) => {
    e.preventDefault();

    axios
      .post("/create", post)
      .catch((err) => console.log(err));

    navigate("posts");
  };

  // const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({
    id: "",
    title: "",
    content: "",
    fromDate: "",
    toDate: "",
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
    axios.delete(`/delete/${id}`).catch((err) => console.log(err));

    window.location.reload();
  };

  const updatePost = (id, title, content, fromDate, toDate) => {
    setUpdatedPost((prev) => {
      return {
        ...prev,
        id: id,
        title: title,
        content: content,
        fromDate: fromDate,
        toDate: toDate,
      };
    });
    handleShow();
  };

  const handleUpdate = (e) => {
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
    <>
      <h1 className='main-head'>Admin area</h1>

      <AdminAuth />
      <NavLink to="/workshops" style={{ fontSize: "1.3rem", color: "#ffffff99", textDecoration: "none", paddingTop: "0", marginTop: "0", marginBottom: "10px" }}>See Existing Workshops</NavLink>
      <div style={{ textAlign: "center", width: "90%", margin: "auto auto" }} className="belowAdmin">

        <div className="onlyForAdmin">
          <center>
            <Form onSubmit={createWorkshop} style={{ textAlign: "center", width: "80%" }} >
              <Form.Group>
                <h1>Create Workshop</h1>
                <label style={{ paddingTop: "1rem" }}>workshop title: </label>
                <br />
                <input type="text"
                  name="title"
                  value={post.title}
                  onChange={handleChange}
                  style={{ marginBottom: "1rem" }}
                  placeholder="title"
                  required
                />
                <br />

                <label>workshop description: </label>
                <br />
                <textarea
                  cols="40"
                  rows="5"
                  onChange={handleChange}
                  name="content"
                  value={post.content}
                  style={{ marginBottom: "1rem" }}
                  placeholder="content"
                  required
                />

                <label style={{ paddingTop: "1rem" }}>from date: </label>
                <br />
                <input type="date"
                  name="fromDate"
                  value={post.fromDate}
                  onChange={handleChange}
                  style={{ marginBottom: "1rem" }}
                  placeholder="from date"
                  required
                />
                <br />

                <label style={{ paddingTop: "1rem" }}>to date: </label>
                <br />
                <input type="date"
                  name="toDate"
                  value={post.toDate}
                  onChange={handleChange}
                  style={{ marginBottom: "1rem" }}
                  placeholder="to date"
                  required
                />
                <br />
              </Form.Group>
              <div style={{
                marginBottom: "1rem",
                border: "none",
                borderRadius: "8px",
              }} >
                <Button
                  variant="outline-success"
                  style={{ marginBottom: "1rem", width: "25%" }}
                  type="submit"
                >
                  Add <IoMdAdd />
                </Button>
              </div>
            </Form>
          </center>
          <br />

          <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
            <Modal show={show} onHide={handleClose} size="lg" className="editWorkshop"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header>
                <Modal.Title className="modalHeading">Update workshop</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input type="text"
                  placeholder="title"
                  name="title"
                  value={updatedPost.title ? updatedPost.title : ""}
                  style={{ marginBottom: "1rem" }}
                  onChange={handleUpdate}
                />
                <textarea
                  placeholder="content"
                  name="content"
                  onChange={handleUpdate}
                  value={updatedPost.content ? updatedPost.content : ""}
                  className="modalTextarea"
                  cols="22" rows="6"
                />
                <input type="date"
                  placeholder="from date"
                  name="fromDate"
                  onChange={handleUpdate}
                  value={updatedPost.fromDate ? updatedPost.fromDate : ""}
                  style={{ marginBottom: "1rem" }}
                  required
                />
                <input type="date"
                  placeholder="to date"
                  name="toDate"
                  onChange={handleUpdate}
                  value={updatedPost.toDate ? updatedPost.toDate : ""}
                  style={{ marginBottom: "1rem" }}
                  required
                />
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  <AiOutlineClose />
                </Button>
                <Button variant="primary" onClick={saveUpdatedPost}>
                  <MdDone />
                </Button>
              </Modal.Footer>
            </Modal>

            {posts ? (
              <>
                {posts.map((post) => {
                  return (
                    <div
                      className="belowWorkshop"
                      style={{
                        marginBottom: "1rem",
                        border: "none",
                        borderRadius: "8px",
                      }}
                      key={post._id}
                    >
                      <h2>{post.title}</h2>
                      <p>{post.content}</p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center"
                        }}
                      >
                        <Button
                          onClick={() =>
                            updatePost(post._id, post.title, post.content)
                          }
                          style={{ width: "25%" }}
                        >
                          <BsPen />
                        </Button>
                        <Button
                          onClick={() => deletePost(post._id)}
                          style={{ width: "25%" }}
                        >
                          <RiDeleteBin7Line />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <p>"loading..."</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;