import { forwardRef, useRef, useImperativeHandle,  } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

// ใช้ forwardRef เพื่อให้ Component แม่ (Create.jsx) เข้าถึง quill ภายในได้
const Editor = forwardRef(({ value, onChange }, ref) => {
  const quillRef = useRef(null);

  // ส่งฟังก์ชัน getQuill ออกไปให้ภายนอกเรียกใช้ผ่าน ref
  useImperativeHandle(ref, () => ({
    getQuill: () => {
      return quillRef.current.getEditor();
    },
  }));

  const toolbarOptions = [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["blockquote", "code-block"],
    ["link", "image"],
    ["clean"],
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "blockquote",
    "code-block",
    "link",
    "image",
  ];

  return (
    <div className="h-64 mb-12">
      {" "}
      {/* หุ้มด้วย div เพื่อคุมความสูงของ Quill */}
      <ReactQuill
        ref={quillRef}
        className="h-48"
        modules={modules}
        formats={formats}
        theme="snow"
        value={value}
        onChange={onChange}
        
      />
    </div>
  );
});

export default Editor;
