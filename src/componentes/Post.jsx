import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    {/* Propriedade passada sem igualdade equivale a ela própria = true */}
                    {/* <Avatar hasBorder src="https://github.com/filipedeschamps.png" alt="" /> */}
                    <Avatar src="https://github.com/filipedeschamps.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Igor Klein</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time
                    title="27 de Setembro às 20:27"
                    dateTime="2022-05-11 08:00:00">
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galera!!</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat.</p>
                <p>👉&nbsp;&nbsp;<a>jane.design/doctorcare</a></p>
                <p>
                    <a>#novoprojeto</a>{' '}
                    <a>#nlw</a>{' '}
                    <a>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe o seu comentário.'
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}