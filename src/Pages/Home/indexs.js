import React, { useEffect } from "react";
import Post from "../../Components/Post";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../Redux/features/postSlice";

export default function Home() {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.post);

  let image = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg";
  let content;

  useEffect(() => {
    dispatch(getPost);
  }, [dispatch]);

  if (loading === "idle") {
    content = data;
    console.log("content", content);
  }
  return (
    <div className="home">
      <Post title="Mudgu123" image={image} />
    </div>
  );
}
