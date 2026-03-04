import KinopoiskList from "../../components/KinopoiskList"
import SearchInput from "../../components/SearchInput"
import GenreFilter from "../../components/GenreFilter"
import FilmCard from "../../components/FilmCard"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"

const HomePage = () => {
    const [films, setFilms] = useState([])
    const [search, setSearch] = useState("")
    const [genre, setGenre] = useState("Все")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedFilm, setSelectedFilm] = useState(null)

    useEffect(() => {
        fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/top", {
            headers: {
                "X-API-KEY": "f098ba98-fa56-41ba-90d9-1443d803c903",
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                if (!response.ok) throw new Error("Ошибка загрузки")
                return response.json()
            })
            .then(data => {
                setFilms(data.films)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    const filteredFilms = films.filter(film => {
        const matchSearch = film.nameRu?.toLowerCase().includes(search.toLowerCase())
        const matchGenre = genre === "Все" || film.genres?.some(g => g.genre === genre)
        return matchSearch && matchGenre
    })

    return (
        <div className={styles.content}>
            <header className={styles.header}>
                <SearchInput value={search} onChange={setSearch} />
            </header>

            <GenreFilter activeGenre={genre} onChange={setGenre} />

            {loading ? (
                <p className={styles.message}>Загрузка...</p>
            ) : error ? (
                <p className={styles.message}>Ошибка: {error}</p>
            ) : filteredFilms.length > 0 ? (
                <KinopoiskList
                    films={filteredFilms}
                    onFilmClick={setSelectedFilm}
                />
            ) : (
                <p className={styles.message}>Ничего не найдено 😢</p>
            )}

            {selectedFilm && (
                <FilmCard
                    film={selectedFilm}
                    onClose={() => setSelectedFilm(null)}
                />
            )}
        </div>
    )
}

export default HomePage