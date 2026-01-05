import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";
import PostService from "../services/post.service";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);

  const [post, setPost] = useState({
    title: "",
    summary: "",
    content: "",
    cover: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await PostService.getById(id);
        if (response.status === 200) {
          setPost(response.data);
          if (response.data.author._id !== userInfo?.id) {
            Swal.fire(
              "Error",
              "You are not allowed to edit this post",
              "error"
            );
            navigate("/");
          }
        }
      } catch (error) {
        Swal.fire(
          "Error",
          error?.response?.data?.message || error.message,
          "error"
        );
      }
    };
    fetchPost();
  }, [id, userInfo, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!post.title || !post.content) {
      Swal.fire("Error", "Title and content are required", "error");
      return;
    }

    try {
      const response = await PostService.updatePost(id, post);
      if (response.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Post updated successfully",
          icon: "success",
          confirmButtonColor: "#3b82f6",
        }).then(() => {
          navigate(`/post/${id}`);
        });
      }
    } catch (error) {
      Swal.fire(
        "Error",
        error?.response?.data?.message || error.message,
        "error"
      );
    }
  };

  // Helper สำหรับสไตล์ของ Input/Textarea
  const inputClass =
    "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pt-24 pb-12">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl border border-gray-100">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-800">Edit Post</h1>
          <p className="text-gray-500 mt-2">
            แก้ไขเนื้อหาบล็อกของคุณให้ดูน่าสนใจยิ่งขึ้น
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="หัวข้อเรื่อง..."
              value={post.title}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              Summary
            </label>
            <textarea
              name="summary"
              placeholder="คำอธิบายสั้นๆ..."
              value={post.summary}
              onChange={handleChange}
              rows="3"
              className={inputClass}
            />
          </div>

          {/* Cover Image URL */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              Cover Image URL
            </label>
            <input
              type="text"
              name="cover"
              placeholder="https://example.com/image.jpg"
              value={post.cover}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              Content
            </label>
            <textarea
              name="content"
              placeholder="เขียนเนื้อหาของคุณที่นี่..."
              value={post.content}
              onChange={handleChange}
              rows="10"
              className={inputClass}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all duration-200 active:scale-95"
            >
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
