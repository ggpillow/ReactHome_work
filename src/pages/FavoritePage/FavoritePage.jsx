import { useSelector } from "react-redux"
import styles from "./styles.module.css"

function FavoritesPage() {
    const favorites = useSelector(state => state.favorites.films)

    return (
        <div className={styles.page}>
            <h2 className={styles.title}>❤️ Избранное</h2>

            {favorites.length === 0 ? (
                <p className={styles.empty}>Пока ничего нет 😢</p>
            ) : (
                <div className={styles.grid}>
                    {favorites.map(film => (
                        <div key={film.filmId} className={styles.card}>
                            <img
                                className={styles.poster}
                                src={film.posterUrlPreview}
                                alt={film.nameRu}
                            />
                            <p className={styles.name}>{film.nameRu}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FavoritesPage