import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 4b10c06103f0204a7589f3a56b8dea04b1162b066ad261ad557f878446383d07"
  }
});
