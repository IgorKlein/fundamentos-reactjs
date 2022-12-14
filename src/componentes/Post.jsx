import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

// estado: variáveis que eu quero que o componente monitore.

export function Post({ author, publishedAt, content }) {

    //useState retorna duas variáveis que podem ser desestruturadas
    const [comments, setComments] = useState([
        "Post muito bacana, hein?!"
    ])

    const [newCommentText, setNewCommentText] = useState('')

    console.log(newCommentText)

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: 'true'
    })

    function handleCreateNewComment() {
        event.preventDefault()

        const newCommentText = (event.target.comment.value)

        setComments([...comments, newCommentText])
        setNewCommentText("")
    }

    function handleCreateNewCommentChange() {
        //Elimina ação de customização do comentário de validação.
        event.target.setCustomValidity('')

        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return (comment !== commentToDelete)
        })

        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid() {
        //Adiciona ação de customização do comentário de validação.
        event.target.setCustomValidity('Esse campo é obrigatório.')
    }

    const inNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    {/* Propriedade passada sem igualdade equivale a ela própria = true */}
                    {/* <Avatar hasBorder src="https://github.com/filipedeschamps.png" alt="" /> */}
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    placeholder='Deixe o seu comentário.'
                    value={newCommentText}
                    onChange={handleCreateNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button 
                        type="submit"
                        disabled={inNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}