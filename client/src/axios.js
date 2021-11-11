import axios from "axios";

const Instance = axios.create({
  baseURL: "https://nike-snkrs-clone.herokuapp.com/",
});

export default Instance;
