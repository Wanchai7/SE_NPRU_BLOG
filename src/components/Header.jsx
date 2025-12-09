import React from 'react'

const Header = () => {
  const menuItems = [
    { text: "Login", link: "/login" },
    { text: "Register", link: "/register" }, 
  ];

  const home = [
    { text: "SE NPRU Bolg", link: "/home" },
  ]
  
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* ส่วนของ SE NPRU Blog */}
      <div className="navbar-start">
        <ui className="menu menu-horizontal px-6">
          {home.map((item) => (
            <li>
              <a href={item.link} className="link link-hover">{item.text}</a>
            </li>
          ))}
        </ui>
      </div>
      {/* ส่วนของ Login Register */}
      <div className="navbar-end">
        <ui className="menu menu-horizontal px-1">
          {menuItems.map((item) => (
            <li>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ui>
      </div>
    </div>
  );
}

export default Header