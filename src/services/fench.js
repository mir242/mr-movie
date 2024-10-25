import axios from "axios";




const session_id = localStorage.getItem("session");



export const fench = axios.create ({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "af4c9f1e80dff26c7cbecc443e535d19",
     ...(session_id &&{session_id}),
    },
});

window.fench=fench;