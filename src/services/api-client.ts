// axios instance with custom configurations
import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f251d523b2514c7fb4db56404da39079",
  },
});
