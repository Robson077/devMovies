import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../components/Button"
import Modal from "../../components/Modal"
import Slider from "../../components/Slider"
import {
    getMovies,
    getPopularSeries,
    getTopMovies,
    getTopPeople,
    getTopSeries
} from "../../services/getData"
import { getImages } from "../../utils/get_images"
import { Background, Info, Poster, Container, ContainerButtons } from "./styles"

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getTopPeople()
            ])
                .then(
                    ([
                        movie,
                        topMovies,
                        topSeries,
                        popularSeries,
                        topPeople
                    ]) => {
                        setMovie(movie)
                        setTopMovies(topMovies)
                        setTopSeries(topSeries)
                        setPopularSeries(popularSeries)
                        setTopPeople(topPeople)
                    }
                )
                .catch((error) => console.error(error))
        }

        getAllData()
    }, [])

    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && (
                        <Modal movieId={movie.id} setShowModal={setShowModal} />
                    )}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button
                                    red={true}
                                    onClick={() =>
                                        navigate(`/detalhe/${movie.id}`)
                                    }
                                >
                                    Assista Agora
                                </Button>
                                <Button
                                    red={false}
                                    onClick={() => setShowModal(true)}
                                >
                                    Assista o Trailer
                                </Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img
                                src={getImages(movie.poster_path)}
                                alt="Poster do filme"
                            />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
            {topSeries && <Slider info={topSeries} title={"Top Séries"} />}
            {popularSeries && (
                <Slider info={popularSeries} title={"Séries populares"} />
            )}
            {topPeople && <Slider info={topPeople} title={"Top Artistas"} />}
        </>
    )
}

export default Home
