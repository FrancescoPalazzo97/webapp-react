// import moviesArray from "../assets/moviesArray"
import { useState, useEffect } from "react"
import Card from "../components/Card"
import axios from "axios"
const MY_API = import.meta.env.VITE_MY_API;
const API_Movies = `${MY_API}/movies`

const HomePage = () => {

    const [movies, setMovies] = useState([])

    const getMovies = () => {
        axios.get(API_Movies)
            .then(res => {
                setMovies(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <div className="row my-4">
                <div className="col-12">
                    <h1 className="text-center">Libreria Film</h1>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-gap-4">
                {movies.map(movie => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>

        </>
    )
}

export default HomePage
