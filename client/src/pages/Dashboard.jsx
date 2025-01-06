// React Imports
import { useContext, useEffect, useState } from "react";
// React Router Imports
import { Link, useNavigate, useParams } from "react-router-dom";
// Component Imports
import DeletePost from "./DeletePost";
// Context Imports
import { UserContext } from "../context/userContext";
// Axios Import
import axios from "axios";

// import Loader from "../components/Loader";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const token = currentUser?.token;

  // Redirect to login page for any user who is not logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/users/${id}`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setPosts(response?.data);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <section className="dashboard">
      {posts.length ? (
        <div className="container dashboard__container">
          {posts.map((post) => {
            return (
              <article key={post._id} className="dashboard__post">
                <div className="dashboard__post-info">
                  <div className="dashboard__post-thumbnail">
                    <img
                      src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post?.thumbnail}`}
                      alt=""
                    />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard__post-actions">
                  <Link to={`/posts/${post._id}`} className="btn sm">
                    View
                  </Link>
                  <Link
                    to={`/posts/${post._id}/edit`}
                    className="btn sm primary"
                  >
                    Edit
                  </Link>
                  <DeletePost postId={post._id} />
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2 className="center">You have no posts yet.</h2>
      )}
    </section>
  );
};

export default Dashboard;
