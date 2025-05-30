import { Link } from "react-router-dom"

const Card = ({ movie }) => {

    const { id, title, director, genre, release_year, abstract, image } = movie

    return (
        <div className="col-12">
            <Link to={`${id}`}>
                <div className="card text-bg-dark">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{abstract}</p>
                        <p className="card-text"><small>Regista: {director}</small></p>
                        <p className="card-text"><small>Genere: {genre}</small></p>
                        <p className="card-text"><small>Anno di uscita: {release_year}</small></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
