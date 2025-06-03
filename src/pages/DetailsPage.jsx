import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import moviesArray from "../assets/moviesArray"
// import reviews from "../assets/reviews"
import ReviewCard from "../components/ReviewCard";
import axios from "axios";
const MY_API = import.meta.env.VITE_MY_API;
const API_Movies = `${MY_API}/movies`

const DetailsPage = () => {

    let { id } = useParams();
    id = parseInt(id);

    const [movie, setMovie] = useState({});

    const getMovie = () => {
        axios.get(`${API_Movies}/${id}`)
            .then(res => {
                setMovie(res.data);
            })
    }

    useEffect(() => {
        getMovie();
    }, [])

    // const movie = moviesArray.find(movie => movie.id === id);
    // console.log(movie);

    // const filteredReviews = reviews.filter(review => review.film_id === id);
    // console.log(filteredReviews)

    return (
        <div className="row py-5 h-100">
            <div className="col">
                <div id="movie-details" className="card mb-3 border-0">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={movie.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.abstract}</p>
                                <p className="card-text"><small>Regista: {movie.director}</small></p>
                                <p className="card-text"><small>Genere: {movie.genre}</small></p>
                                <p className="card-text"><small>Anno di uscita: {movie.release_year}</small></p>
                                <div className="reviews-container">
                                    <h4>Recensioni</h4>
                                    {!movie.reviews ? (
                                        <></>
                                    ) :
                                        movie.reviews.map(review => (
                                            <ReviewCard key={review.id} review={review} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage
