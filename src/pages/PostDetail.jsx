import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import PostService from "../services/post.service";

const PostDetail = () => {
  const { id } = useParams();
  const { userInfo } = useContext(UserContext);

  const [post, setPost] = useState({
    _id: "",
    title: "",
    createdAt: "",
    author: "",
    content: "",
    cover: "",
  });
  useEffect(() => {
    const fetchpost = async () => {
      try {
        const response = await PostService.getById(id);
        if (response.status === 200) {
          setPost(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Post Detail",
          text: error?.response?.data?.message || error?.message,
          icon: "error",
        });
      }
    };
    fetchpost();
  }, [id]);
  return (
    <div className="post-page min-h-full min-w-full items-center justify-center p-4 pt-20">
      <div className="bg-white p-8 rounded-b-lg shadow-lg max-4xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-grey-800">{post?.title}</h1>
        <div className="text-grey-600 mb-4 text-center">
          <time className="block mb-2">{post?.createdAt}</time>
          <div className="author mb-2">
            By <span className="text-blue-500">@{post?.author?.username}</span>
          </div>
          {userInfo?.id === post?.author?._id && (
            <div className="actions space-x-2">
              <a className="btn btn-warning" href={`/edit/${post?._id}`}>
                Edit
              </a>
              <a className="btn btn-error">Delete</a>
            </div>
          )}
        </div>
        <div className="content text-grey-700">
          {post.content}
          <img
            className="flex items-center justify-center"
            src={post?.cover}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
