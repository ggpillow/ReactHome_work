import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import styles from "./styles.module.css"

function Header() {
    const name = useSelector(state => state.user.name)

    return (
        <header className={styles.header}>
            <span className={styles.logo}>🎬 КиноПоиск</span>

            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                }
            >
                Главная
            </NavLink>

            <NavLink
                to="/favorites"
                className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                }
            >
                Избранное
            </NavLink>

            <NavLink
                to="/profile"
                className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                }
            >
                Профиль
            </NavLink>

            {name && (
                <span className={styles.userName}>👤 {name}</span>
            )}
        </header>
    )
}

export default Header