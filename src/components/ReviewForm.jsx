import { useState } from "react"
import axios from "axios"

const MY_API = import.meta.env.VITE_MY_API;

const ReviewForm = ({ movie_id, reloadMovie }) => {

    const initialData = {
        name: "",
        vote: "",
        text: ""
    };

    const [formData, setFormData] = useState(initialData);

    const setFieldValue = (e) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${MY_API}/movies/${movie_id}/review`, formData, {
            headers: { "Content-Type": "application/json" }
        })
            .then(() => {
                setFormData(initialData);
                reloadMovie();
            })
    }

    return (
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col">
                <div className="card bg-darkblue">
                    <div className="card-header">
                        <h4 className="text-light">Aggiungi la tua recensione</h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Nome"
                                    required
                                    value={formData.name}
                                    onChange={setFieldValue}
                                />
                            </div>
                            <div className="col-4">
                                <select
                                    class="form-select"
                                    name="vote"
                                    value={formData.vote}
                                    required
                                    onChange={setFieldValue}
                                >
                                    <option selected value="">Voto</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="col-12 my-4">
                                <textarea
                                    class="form-control"
                                    name="text"
                                    rows="3"
                                    placeholder="Inserisci la tua recensione"
                                    value={formData.text}
                                    onChange={setFieldValue}
                                />
                            </div>
                            <div className="col-auto">
                                <button
                                    type="submit"
                                    className="btn btn-primary mb-3"
                                >
                                    Pubblica
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ReviewForm
