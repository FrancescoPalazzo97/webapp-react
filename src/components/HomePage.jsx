import moviesArray from "../assets/moviesArray"
import Card from "./Card"

const HomePage = () => {
    return (
        <>
            <div className="row my-4">
                <div className="col-12">
                    <h1 className="text-center">Libreria Film</h1>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-gap-4">
                {moviesArray.map(movie => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>

        </>
    )
}

export default HomePage
