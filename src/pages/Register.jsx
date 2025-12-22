import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import AuthService from "../services/authentication.service";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  };
  const handleSubmit = async () => {
    // 1. เช็คว่ากรอกข้อมูลครบไหม
    if (!user.username || !user.password) {
      Swal.fire({
        title: "Error",
        text: "Username or Password cannot be empty!",
        icon: "error",
      });
      return; // ใส่ return เพื่อให้จบการทำงานทันทีถ้าข้อมูลไม่ครบ
    }

    try {
      // 2. เรียก API
      const response = await AuthService.register(user.username, user.password);
      
      // ลอง uncomment บรรทัดนี้เพื่อดูค่า response จริงๆ ใน Console
      // console.log("Register Response:", response); 

      // 3. เช็ค Status (รองรับทั้ง 200 และ 201)
      if (response.status === 201 || response.status === 200) {
        Swal.fire({
          title: "Success",
          text: response?.data?.message || "Register Successfully", // ถ้าไม่มี message จากหลังบ้าน ให้ใช้ข้อความ default
          icon: "success",
        }).then(() => {
          navigate("/login");
        });
      } else {
        // กรณีเชื่อมต่อได้ แต่ status ไม่ใช่สำเร็จ (เผื่อไว้)
        Swal.fire({
          title: "Registration Failed",
          text: "Unexpected status code: " + response.status,
          icon: "warning",
        });
      }

    } catch (error) {
      // 4. ดักจับ Error (เช่น Username ซ้ำ, Server ล่ม, เน็ตหลุด)
      const errorMsg = error.response?.data?.message || error.message || "Something went wrong";
      Swal.fire({
        title: "Register Failed",
        text: errorMsg,
        icon: "error",
      });
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body space-y-2">
        <h2 className="card-title">Register</h2>
        <label className="input input-bordered flex items-center gap-2">
          Username
          <input
            type="text"
            className="grow"
            placeholder="username"
            name="username"
            onChange={handleChange}
            value={user.username}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Password
          <input
            type="password"
            className="grow"
            placeholder="*****"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <button className="btn btn-soft btn-success" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
