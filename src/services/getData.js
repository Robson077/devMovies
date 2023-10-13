import api from "./api"

export async function getMovies() {
    const {
        data: { results }
    } = await api.get("/movie/popular")

    return results[0]
}

export async function getTopMovies() {
    const {
        data: { results }
    } = await api.get("/movie/top_rated")

    // console.log(results)
    return results
}

export async function getTopSeries() {
    const {
        data: { results }
    } = await api.get("/tv/top_rated")

    // console.log(results)
    return results
}

export async function getPopularSeries() {
    const {
        data: { results }
    } = await api.get("/tv/popular")

    // console.log(results)
    return results
}

export async function getTopPeople() {
    const {
        data: { results }
    } = await api.get("/person/popular")

    // console.log(results)
    return results
}

export async function getMovie(movieId) {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/videos`)

    return results[0]
}
