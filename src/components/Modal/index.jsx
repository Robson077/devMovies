import { useEffect, useState } from "react"

import api from "../../services/api"
import { Container, Background } from "./styles"

function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState()
    useEffect(() => {
        async function getMovies() {
            const {
                data: { results }
            } = await api.get(`/movie/${movieId}/videos`)

            setMovie(results[0])
        }

        getMovies()
    }, [])

    return (
        <Background onClick={() => setShowModal(false)}>
            {movie && (
                <Container>
                    <button onClick={() => setShowModal(false)}>x</button>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie.key}`}
                        title="Youtube Video Player"
                        height="500px"
                        width="100%"
                    ></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal
