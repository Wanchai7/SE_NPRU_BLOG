import React from "react";

// รับ Props 2 ตัว:
// 1. post: ข้อมูลของโพสต์นั้นๆ
// 2. isEven: ค่า boolean (true/false) เพื่อเช็คว่าเป็นแถวคู่หรือไม่ (เอาไว้สลับซ้ายขวา)
const Post = ({ post, isEven }) => {
  // ป้องกัน Error กรณีไม่มีข้อมูลส่งมา ให้ return null (ไม่แสดงผลอะไรเลย)
  if (!post) return null;

  // ดึงค่าออกจาก object post (Destructuring)
  const { title, author, summary, cover, createdAt } = post;

  // จัดรูปแบบวันที่ให้สวยงาม
  const formattedDate = new Date(createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className={`card card-side bg-base-100 shadow-xl mb-6 ${
        isEven ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <figure className="w-1/3">
        <img
          src={
            cover ||
            "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          }
          alt={title}
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="card-body w-2/3">
        <h2 className="card-title text-2xl font-bold">{title}</h2>

        <p className="text-sm text-gray-500">
          {author?.username || "Unknown Author"} | {formattedDate}
        </p>

        <p className="py-2">{summary}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
