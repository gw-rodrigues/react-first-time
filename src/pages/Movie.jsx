import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OMDB_URL from '../api/omdb-api';
import axios from 'axios';

const Movie = () => {
    const [movie, setMovie] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`${OMDB_URL}&i=${id}`).then(res => {
            console.log(res.data)
            setMovie(res.data)
        }).catch(err => {
            console.log(err)
        })
        console.log(id)
    }, [id])

    return (
        <article>
            {}
        </article>
    )
}
export default Movie