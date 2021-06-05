import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

function Posts(props) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const postId = useLocation().search.split("=")[1];
  console.log(postId);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then(setPost);
  }, []);

  const buttonClickHandler = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then(setComments);
  };
  const deletePostHandler = () => {
    setPost(null);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10%",
      }}
    >
      {post && (
        <Col sm="12">
          <Button onClick={deletePostHandler}>X</Button>
          <Card body>
            <CardTitle tag="h5">{post.title}</CardTitle>
            <CardText>{post.body}</CardText>
            <Button onClick={buttonClickHandler}>show comments</Button>
          </Card>
        </Col>
      )}
      {comments &&
        comments.map((comment) => {
          return (
            <Col sm="6">
              <Card body>
                <CardTitle tag="h5">{comment.email}</CardTitle>
                <CardText>{comment.body}</CardText>
              </Card>
            </Col>
          );
        })}
    </div>
  );
}

export default Posts;
