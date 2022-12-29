import React from "react";
import ExplorePost from "../../Components/ExplorePost";
import "./explore.css";

export default function Explore() {
  let image = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg";
  return (
    <div className="explore">
      <ExplorePost image={image} />
      <ExplorePost image={image} />
      <ExplorePost image={image} />
      <ExplorePost image={image} />
      <ExplorePost image={image} />
      <ExplorePost image={image} />
      <ExplorePost image={image} />
      <ExplorePost image={image} />
      <ExplorePost image={image} />
      <ExplorePost image={image} />
      <ExplorePost image={image} />
      <ExplorePost image={image} />
      <ExplorePost image={image} />
    </div>
  );
}
