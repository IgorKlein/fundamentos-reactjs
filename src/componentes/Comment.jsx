import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';



export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
        onDeleteComment(content)
        console.log('Post a ser deletado: ' + {content})
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/IgorKlein.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igor Klein</strong>
                            <time
                                title="28 de setembro às 12:57"
                                dateTime="2022-09-28 12:58:00">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar Comentário.">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>


            </div>


        </div>
    )
}