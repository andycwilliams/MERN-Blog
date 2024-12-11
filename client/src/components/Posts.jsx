import React, { useState } from "react";

import Thumbnail1 from "../images/blog1.jpg";
import Thumbnail2 from "../images/blog2.jpg";
import Thumbnail3 from "../images/blog3.jpg";
import Thumbnail4 from "../images/blog4.jpg";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "This is a test title",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, voluptatum adipisci quibusdam eius sed unde eligendi non dolorem culpa veritatis, tempore perferendis quia reiciendis soluta ipsum fuga nulla quisquam minus officiis tempora minima consequatur aspernatur sequi repudiandae. A, sint sit!",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "science",
    title: "This is a test title 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, voluptatum adipisci quibusdam eius sed unde eligendi non dolorem culpa veritatis, tempore perferendis quia reiciendis soluta ipsum fuga nulla quisquam minus officiis tempora minima consequatur aspernatur sequi repudiandae. A, sint sit!",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "weather",
    title: "This is a test title Triple",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, voluptatum adipisci quibusdam eius sed unde eligendi non dolorem culpa veritatis, tempore perferendis quia reiciendis soluta ipsum fuga nulla quisquam minus officiis tempora minima consequatur aspernatur sequi repudiandae. A, sint sit!",
    authorID: 3,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "farming",
    title: "This is a test title Four",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, voluptatum adipisci quibusdam eius sed unde eligendi non dolorem culpa veritatis, tempore perferendis quia reiciendis soluta ipsum fuga nulla quisquam minus officiis tempora minima consequatur aspernatur sequi repudiandae. A, sint sit!",
    authorID: 3,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
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
    </section>
  );
};

export default Posts;
