
const ReviewCard = ({ review }) => {

    const { name, vote, created_at, text } = review;

    return (
        <div class="card my-2">
            <h5 class="card-header">{name}</h5>
            <div class="card-body">
                <p class="card-text">{text}</p>
                <p class="card-text">Voto: {vote}</p>
            </div>
        </div>
    )
}

export default ReviewCard
