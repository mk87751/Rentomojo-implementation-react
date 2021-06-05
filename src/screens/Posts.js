import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

function Posts(props) {
  const [posts, setPosts] = useState(null);
  const userId = useLocation().search.split("=")[1];
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then(setPosts);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {posts &&
        posts.map((post) => {
          return (
            <Col sm="6">
              <Card body>
                <CardTitle tag="h5">{post.title}</CardTitle>
                <CardText>{post.body}</CardText>
                <Button style={{ color: "white" }}>
                  <Link to={"/Details?postId=" + post.id}>post Details</Link>
                </Button>
              </Card>
            </Col>
          );
        })}
    </div>
  );
}

export default Posts;
