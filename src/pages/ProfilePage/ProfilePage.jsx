import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setName } from "../../store/userSlice"
import styles from "./styles.module.css"

function ProfilePage() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const name = useSelector(state => state.user.name)

    const handleSave = () => {
        if (input.trim()) {
            dispatch(setName(input.trim()))
            setInput("")
        }
    }

    return (
        <div className={styles.page}>
            <h2 className={styles.title}>👤 Профиль</h2>

            {name && (
                <p className={styles.current}>
                    Привет, <span>{name}</span>! 👋
                </p>
            )}

            <div className={styles.form}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Введите ваше имя..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button className={styles.button} onClick={handleSave}>
                    Сохранить
                </button>
            </div>
        </div>
    )
}

export default ProfilePage