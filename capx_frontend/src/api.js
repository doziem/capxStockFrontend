import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8282/api",
  headers: {
    "Content-Type": "application/json",
  },
});
