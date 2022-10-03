import { format }  from 'date-fns';

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, publishedAt }) {

const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH':'mm'h'")

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    {/* Propriedade passada sem igualdade equivale a ela própria = true */}
                    {/* <Avatar hasBorder src="https://github.com/filipedeschamps.png" alt="" /> */}
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='' dateTime="2022-05-11 08:00:00">
                    {publishedDateFormatted}
                </time>
            </header>

            <div className={styles.content}>

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