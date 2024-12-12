import React, { useState } from "react";
import PostItem from "./PostItem";
import { DUMMY_POSTS } from "./../data";

const Posts = () => {
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section>
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map(
            ({ id, thumbnail, category, title, description, authorID }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={authorID}
              />
            )
          )}
        </div>
      ) : (
        <h2 className="center">No posts founds</h2>
      )}
    </section>
  );
};

export default Posts;
