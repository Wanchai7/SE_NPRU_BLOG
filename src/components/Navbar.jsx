// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";
// import { Link } from "react-router-dom"; // แนะนำให้ import Link ถ้ามีการลิ้งค์หน้า

// const Navbar = () => {
//   const { userInfo, logOut } = useContext(UserContext);

//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       {/* ส่วนซ้ายสุด */}
//       <div className="navbar-start">
//         <a className="btn btn-ghost text-xl">SE NPRU Blog</a>
//       </div>

//       {/* ส่วนขวาสุด (navbar-end จะดันทุกอย่างไปขวา) */}
//       <div className="navbar-end gap-2">
//         {userInfo ? (
//           <>
//             <button className="btn">CreatePost</button>
//             <button className="btn">Profile</button>
//             <button onClick={logOut} className="btn btn-error btn-outline">
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <button className="btn">Login</button>
//             <button className="btn">Register</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
