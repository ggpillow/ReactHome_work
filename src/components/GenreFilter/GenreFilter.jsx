import styles from "./styles.module.css"

const genres = [
    "Все",
    "драма",
    "криминал",
    "фантастика",
    "боевик",
    "триллер",
    "комедия",
    "мелодрама",
]

function GenreFilter({ activeGenre, onChange }) {
    return (
        <div className={styles.genres}>
            {genres.map(genre => (
                <button
                    key={genre}
                    className={activeGenre === genre ? styles.active : styles.btn}
                    onClick={() => onChange(genre)}
                >
                    {genre}
                </button>
            ))}
        </div>
    )
}

export default GenreFilter