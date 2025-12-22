import api from "./api";
const API_URL = import.meta.env.VITE_AUTH_URL;
import TokenService from "./token.service";

const register = async (username, password) => {
  // ต้องส่งเป็น Object { username, password }
  return await api.post(API_URL + "/register", { username, password });
};

const login = async (username, password) => {
  // ✅ แก้ไขสำคัญ: ใส่ปีกกา { } ครอบ username, password
  const response = await api.post(API_URL + "/login", { username, password });

  if (response.status === 200) {
    if (response.data.accessToken) {
      TokenService.setUser(response.data);
    }
  }
  return response;
};

const logout = () => {
  TokenService.removeUser();
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
