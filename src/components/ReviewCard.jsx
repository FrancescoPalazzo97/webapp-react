import React from 'react'

const ReviewCard = ({ review }) => {

    const { autore, voto, data, testo } = review;

    return (
        <div class="card my-2">
            <h5 class="card-header">{autore}</h5>
            <div class="card-body">
                <p class="card-text">{testo}</p>
                <p class="card-text">Voto: {voto}</p>
            </div>
        </div>
    )
}

export default ReviewCard
