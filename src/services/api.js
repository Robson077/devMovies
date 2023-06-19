import axios from "axios"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "9fe546f91387bfd2beffbd68bcb6b7d1",
        language: "pt-BR",
        page: 1
    }
})

export default api
