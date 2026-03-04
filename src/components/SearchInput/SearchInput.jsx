import styles from "./styles.module.css"

function SearchInput({ value, onChange }) {
    return (
        <input
            className={styles.input}
            type="text"
            placeholder="Поиск фильма..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default SearchInput