import React from "react";

const Create = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header ส่วนหัวข้อ */}
        <div className="mb-8 border-b pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Create New Post
            </h1>
            <p className="text-gray-500 mt-2">
              เติมเต็มความคิดสร้างสรรค์ของคุณลงในบทความใหม่
            </p>
          </div>
          <button
            type="submit"
            form="post-form"
            className="px-6 py-2.5 bg-[#8B4DFF] hover:bg-[#7a39ff] text-white font-medium rounded-lg transition duration-200 shadow-md"
          >
            Publish Post
          </button>
        </div>

        <form id="post-form" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area (ฝั่งซ้าย - 2 ส่วน) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Post Title
                  </label>
                  <input
                    type="text"
                    placeholder="ใส่หัวข้อที่น่าสนใจ..."
                    className="w-full text-lg font-medium border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8B4DFF] focus:border-transparent outline-none border transition-all"
                  />
                </div>

                {/* Summary */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Summary
                  </label>
                  <textarea
                    rows="2"
                    placeholder="สรุปเนื้อหาสั้นๆ..."
                    className="w-full border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8B4DFF] focus:border-transparent outline-none border transition-all"
                  />
                </div>

                {/* Content Area */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Content
                  </label>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    {/* Placeholder for Editor */}
                    <div className="bg-gray-50 border-b px-4 py-2 flex gap-2">
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    </div>
                    <textarea
                      rows="12"
                      className="w-full p-4 focus:outline-none resize-none"
                      placeholder="เขียนเนื้อหาของคุณที่นี่..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area (ฝั่งขวา - 1 ส่วน) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Upload Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Feature Image
              </h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#8B4DFF] transition-colors cursor-pointer">
                <div className="text-gray-400 mb-2">
                  <svg
                    className="mx-auto h-10 w-10"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-xs text-gray-500">
                  Click to upload or drag and drop
                </p>
                <input type="file" className="hidden" />
              </div>
            </div>

            {/* Settings Post */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Post Settings
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase">
                    Status
                  </label>
                  <select className="mt-1 block w-full border-gray-200 rounded-md py-2 text-sm focus:ring-[#8B4DFF] outline-none border">
                    <option>Draft</option>
                    <option>Public</option>
                    <option>Private</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
