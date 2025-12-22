import api from "./api";
const API_URL = import.meta.enc.VITE_POST_URL;

const getAllPosts = async () => {
  return await api.get(API_URL);
};
const getById = async (id) => {
  return await api.get(API_URL + "/" + id);
};
const getByAuthorId = async (id) => {
  return await api.get(`${API_URL}/author/${id}`);
};
const createPosts = async (post) => {
  return await api.post(API_URL, post);
};
const updatePosts = async (id, post) => {
  return await api.put(`${API_URL}/author/${id}`, post);
};
const deletePosts = async (id) => {
  return await api.delete(`${API_URL}/${id}`);
};

const PostService = {
  getAllPosts,
  getById,
  getByAuthorId,
  createPosts,
  updatePosts,
  deletePosts,
};

export default PostService;
