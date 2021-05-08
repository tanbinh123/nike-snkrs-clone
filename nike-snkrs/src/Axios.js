import Axios from "axios";

const Instance = Axios.create({
  baseURL: "http://localhost:8001",
});

export default Instance;
