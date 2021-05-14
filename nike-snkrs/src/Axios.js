import Axios from "axios";

const Instance = Axios.create({
  baseURL: "https://nike-snkrs-clone.herokuapp.com/",
});

export default Instance;
