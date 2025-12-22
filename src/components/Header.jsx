import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { userInfo, logOut } = useContext(UserContext);

  const LoginRegister = [
    { text: "Login", link: "/login" },
    { text: "Register", link: "/register" },
  ];

  const CreatePostProfile = [
    { text: "CreatePost", link: "/create" }, // แก้ Link ให้ตรงกับ Router ของคุณ
    { text: "Profile", link: "/profile" }, // แก้ Link ให้ตรงกับ Router ของคุณ
  ];

  const home = [{ text: "SE NPRU Blog", link: "/" }];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* ส่วนของ Logo / Home */}
      <div className="navbar-start">
        <ul className="menu menu-horizontal px-6">
          {home.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="link link-hover text-xl font-bold">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          {userInfo ? (
            <>
              {/* โชว์ชื่อ Username */}
              <li>
                <span className="font-bold text-primary">
                  {userInfo.username}
                </span>
              </li>

              {/* โชว์ปุ่ม CreatePost และ Profile */}
              {CreatePostProfile.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}

              {/* โชว์ปุ่ม Logout */}
              <li>
                <a onClick={logOut} className="text-error">
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              {/* โชว์แค่ Login และ Register เท่านั้น */}
              {LoginRegister.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
