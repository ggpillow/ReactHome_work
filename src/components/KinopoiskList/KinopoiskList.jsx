import { useDispatch, useSelector } from "react-redux"
import { toggleFavorite } from "../../store/favoritesSlice"
import styles from "./styles.module.css"

function KinopoiskList({ films, onFilmClick }) {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.films)

    return (
        <div className={styles.filmList}>
            {films.map(film => {
                const isFav = favorites.some(f => f.filmId === film.filmId)

                return (
                    <div
                        key={film.filmId}
                        className={styles.film}
                        onClick={() => onFilmClick(film)}
                    >
                        <div className={styles.poster}>
                            <img src={film.posterUrlPreview} alt={film.nameRu} />
                            <span className={styles.ratingBadge}>
                                ⭐ {film.rating}
                            </span>
                            <button
                                className={styles.favButton}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    dispatch(toggleFavorite(film))
                                }}
                            >
                                {isFav ? "❤️" : "🤍"}
                            </button>
                        </div>
                        <div className={styles.info}>
                            <h3>{film.nameRu}</h3>
                            <p className={styles.genres}>
                                {film.genres?.map(g => g.genre).join(", ")}
                            </p>
                            <p className={styles.year}>{film.year}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default KinopoiskList