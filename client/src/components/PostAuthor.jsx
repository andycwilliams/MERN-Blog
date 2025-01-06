// React Imports
import { useEffect, useState } from "react";
// React Router Imports
import { Link } from "react-router-dom";
// External Library Imports
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
// Asset Imports
import avatarPlaceholder from "../images/avatarPlaceholder.png";
// Axios Import
import axios from "axios";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const PostAuthor = ({ authorID, createdAt }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/users/${authorID}`
        );
        setAuthor(response?.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAuthor();
  }, [authorID]);

  return (
    <Link to={`/posts/users/${authorID}`} className="post__author">
      <div className="post__author-avatar">
        <img
          src={
            author?.avatar
              ? `${process.env.REACT_APP_ASSETS_URL}/uploads/${author.avatar}`
              : avatarPlaceholder
          }
          alt="Author Avatar"
        />
      </div>
      <div className="post__author-details">
        <h5>By: {author?.name}</h5>
        <small>
          <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
        </small>
      </div>
    </Link>
  );
};

export default PostAuthor;
