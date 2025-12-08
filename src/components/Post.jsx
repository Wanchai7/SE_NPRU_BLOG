import React from "react";

const Post = ({ title, author, summary, cover, createdAt, id }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${cover})`, // ดึงรูป cover จริง
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>{" "}
      {/* ทำให้ภาพมืดลงอ่านง่าย */}
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          {/* TITLE */}
          <h1 className="mb-5 text-4xl md:text-5xl font-bold">{title}</h1>

          {/* AUTHOR + DATE */}
          <p className="opacity-80 mb-3">
            ✍️ {author} • {createdAt}
          </p>

          {/* SUMMARY */}
          <p className="mb-5 text-lg leading-relaxed">{summary}</p>

          {/* ปุ่ม (ใส่หรือไม่ใส่ก็ได้) */}
          <button className="btn btn-primary">อ่านต่อ</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
