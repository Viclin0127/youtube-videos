import axios from "axios";

const KEY = "AIzaSyBp66lk5r_BGjd-UvPr_AZEc_MnA05rcKA";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: "video"
    }
});
