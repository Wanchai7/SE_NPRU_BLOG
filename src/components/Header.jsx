import React from "react";

const Header = () => {
  const menuItems = [
    { text: "Login", link: "/login" },
    { text: "Register", link: "/register" },
  ];

  const home = [{ text: "SE NPRU Bolg", link: "/home" }];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* ส่วนของ SE NPRU Blog */}
      <div className="navbar-start">
        {/* แก้ <ui> เป็น <ul> */}
        <ul className="menu menu-horizontal px-6">
          {home.map((item, index) => (
            /* เพิ่ม key={index} ตรงนี้ */
            <li key={index}>
              <a href={item.link} className="link link-hover">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ส่วนของ Login Register */}
      <div className="navbar-end">
        {/* แก้ <ui> เป็น <ul> */}
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item, index) => (
            /* เพิ่ม key={index} ตรงนี้ */
            <li key={index}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
