import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import AuthService from "../services/authentication.service";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { userinfo } = useContext(UserContext);
  useEffect(() => {
    if (userinfo) {
      navigate("/");
    }
  }, [userinfo, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

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
      const response = await AuthService.register(user.username, user.password);

      // ลอง console.log ดูค่าที่ Backend ส่งกลับมา (กด F12 ดูใน Console)
      console.log("Response from Backend:", response);

      // ✅ แก้ไขจุดที่ 1: เช็คทั้ง 200 และ 201 เพราะบาง Backend ส่ง 200 เมื่อสำเร็จ
      if (response.status === 201 || response.status === 200) {
        Swal.fire({
          title: "สมัครสมาชิกสำเร็จ",
          text: response.data.message || "การลงทะเบียนเสร็จสมบูรณ์", // ใส่ข้อความสำรองเผื่อ backend ไม่ส่ง message
          icon: "success",
        }).then(() => {
          // ✅ แก้ไขจุดที่ 2: สั่งให้เด้งไปหน้า Login หลังจากกด OK
          navigate("/login");
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

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Register</h2>
          <div className="card-actions">
            <h1>Username</h1>
            <input
              type="text"
              name="username"
              className="input input-neutral"
              onChange={handleChange}
              value={user.username}
            />

            <h1>Password</h1>
            <input
              type="password"
              name="password"
              className="input input-neutral"
              onChange={handleChange}
              value={user.password}
            />

            <button
              className="btn btn-primary bg-blue-600 w-full mt-4"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
