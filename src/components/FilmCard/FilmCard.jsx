import { useState } from "react"
import styles from "./styles.module.css"

function FilmCard({ film, onClose }) {
    const [liked, setLiked] = useState(false)

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.card} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>✕</button>
                
                <img src={film.posterUrlPreview} alt={film.nameRu} />
                
                <div className={styles.info}>
                    <h2>{film.nameRu}</h2>
                    <p className={styles.year}>{film.year}</p>
                    <p className={styles.rating}>⭐ {film.rating}</p>
                    
                    <p className={styles.genres}>
                        {film.genres?.map(g => g.genre).join(", ")}
                    </p>

                    <button
                        className={liked ? styles.likedBtn : styles.likeBtn}
                        onClick={() => setLiked(!liked)}
                    >
                        {liked ? "❤️ Нравится" : "🤍 Нравится"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilmCard