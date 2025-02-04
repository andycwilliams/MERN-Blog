// React Imports
import { useContext, useEffect, useState } from "react";
// React Router Imports
import { Link, useParams } from "react-router-dom";
// Component Imports
import DeletePost from "./DeletePost";
import PostAuthor from "../components/PostAuthor";
// Context Imports
import { UserContext } from "../context/userContext";
// Axios Import
import axios from "axios";


const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    getPost();
  }, [id]);

  return (
    <section className="post-detail">
      {error && <p className="error">{error}</p>}
      {post && (
        <div className="container post-detail__container">
          <div className="post-detail__header">
            <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
            {currentUser?.id === post?.creator && (
              <div className="post-detail__buttons">
                <Link
                  to={`/posts/${post?._id}/edit`}
                  className="btn sm primary"
                >
                  Edit
                </Link>
                <DeletePost postId={id} />
              </div>
            )}
            <h1>{post.title}</h1>
            <div className="post-detail__thumbnail">
              <img
                src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`}
                alt=""
              />
            </div>
          </div>
          <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
        </div>
      )}
    </section>
  );
};

export default PostDetail;
