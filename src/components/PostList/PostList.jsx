import styles from "./styles.module.css"

function PostList({ posts }) {
    return (
        <div className={styles.postList}>
            {posts.map(post => (
                <div key={post.id} className={styles.post}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList