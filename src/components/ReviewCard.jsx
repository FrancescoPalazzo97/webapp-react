import MovieRating from "./MovieRating";

const ReviewCard = ({ review }) => {

    const { name, vote, text } = review;

    return (
        <div className="card my-2">
            <h5 className="card-header">{name}</h5>
            <div className="card-body">
                <p className="card-text">{text}</p>
                <p className="card-text">
                    <MovieRating vote={vote} />
                </p>
            </div>
        </div>
    )
}

export default ReviewCard
