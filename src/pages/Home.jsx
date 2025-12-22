import { useState, useEffect } from "react";
import Header from "../components/Header";
import Post from "../components/Post"; // อย่าลืม import ไฟล์นี้
import PostService from "../services/post.service";
import Swal from "sweetalert2";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPost = async () => {
      try {
        const response = await PostService.getPosts();
        if (response.status === 200) {
          setPosts(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Home",
          text: error?.response?.data?.message || error?.message,
          icon: "error",
        });
      }
    };
    fetchAllPost();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Latest Posts ({posts.length})
        </h1>

        <div className="flex flex-col gap-4">
          {/* ส่วนที่คุณถามมา ใส่ตรงนี้ครับ */}
          {posts.map((post, index) => (
            <Post
              key={post._id || index}
              post={post}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
