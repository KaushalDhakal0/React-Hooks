import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setid] = useState(1);
  const [idFromButtonClick, setidFromButtonClick] = useState(1);
  const handleClick = () => {
    setidFromButtonClick(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setid(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <h1>{post.title}</h1>
    </div>
  );
}

export default DataFetching;
