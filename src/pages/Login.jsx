import { useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "../services/authentication.service";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    // Validation เบื้องต้น
    if (!user.username || !user.password) {
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณากรอก Username และ Password ให้ครบถ้วน",
        icon: "warning",
      });
      return;
    }

    try {
      const response = await AuthService.login(user.username, user.password);

      // ลอง console.log ดูค่าที่ Backend ส่งกลับมา (กด F12 ดูใน Console)
      console.log("Response from Backend:", response);

      // เช็คทั้ง 200 และ 201 เพราะบาง Backend ส่ง 200 เมื่อสำเร็จ
      if (response.status === 201 || response.status === 200) {
        Swal.fire({
          title: "เข้าสู่ระบบสำเร็จ",
          text: response.data.message || "เข้าสู่ระบบสำเร็จ", // ใส่ข้อความสำรองเผื่อ backend ไม่ส่ง message
          icon: "success",
        }).then(() => {
          navigate("/home");
        });
      }
    } catch (error) {
      // กรณี Error จริงๆ
      console.error("Error Register:", error); // ดู log error จริงๆ
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text:
          error.response?.data?.message ||
          error.message ||
          "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        icon: "error",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <div className="card-actions">
            <h1>Username</h1>
            <input
              type="text"
              placeholder=""
              className="input input-neutral"
              name="username"
              onChange={handleChange}
            />
            <h1>Password</h1>
            <input
              type="password"
              placeholder=""
              className="input input-neutral"
              name="password"
              onChange={handleChange}
            />
            <button
              className="btn btn-primary bg-blue-600 items-center text-center card-body"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
