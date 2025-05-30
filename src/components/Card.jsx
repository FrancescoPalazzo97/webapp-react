import { Link } from "react-router-dom"

const Card = ({ movie }) => {

    const { id, title, director, genre, release_year, abstract, image } = movie

    return (
        <div className="col-12">
            <Link>
                <div className="card text-bg-dark">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{abstract}</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
