import { useState, useContext, useEffect } from "react"; // 1. เพิ่ม useContext
import { useNavigate } from "react-router";
import AuthService from "../services/authentication.service";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext"; // 2. แก้ serContext เป็น UserContext

const Login = () => {
  // 3. เรียกใช้ Context อย่างถูกต้อง
  const { logIn, userinfo } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (userinfo) {
      navigate("/");
    }
  }, [userinfo, navigate]);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
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
      console.log("Response from Backend:", response);

      if (response.status === 201 || response.status === 200) {
        Swal.fire({
          title: "เข้าสู่ระบบสำเร็จ",
          text: response.data.message || "ยินดีต้อนรับ",
          icon: "success",
        }).then(() => {
          logIn({
            id: response.data.id,
            username: response.data.username,
            accessToken: response.data.accessToken,
          });
          navigate("/home");
        });
      }
    } catch (error) {
      console.error("Error Login:", error);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text:
          error.response?.data?.message ||
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
          <div className="card-actions w-full">
            <h1 className="text-left w-full">Username</h1>
            <input
              type="text"
              className="input input-neutral w-full"
              name="username"
              onChange={handleChange}
              value={user.username}
            />
            <h1 className="text-left w-full mt-2">Password</h1>
            <input
              type="password"
              className="input input-neutral w-full"
              name="password"
              onChange={handleChange}
              value={user.password}
            />
            <button
              className="btn btn-primary bg-blue-600 w-full mt-4"
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
