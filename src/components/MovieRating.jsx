import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const MovieRating = ({ vote }) => {

    const maxVote = 5;

    return (
        <>
            {
                [...Array(maxVote)].map((item, i) => (
                    <FontAwesomeIcon
                        key={`star-${i}`}
                        color="gold"
                        icon={i < vote ? faStarSolid : faStarRegular}
                    />
                ))
            }
        </>
    )
}

export default MovieRating
