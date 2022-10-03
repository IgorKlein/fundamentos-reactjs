// Todo componente React precisa possuir a extensão JSX.
// JSX = JS + XML

import { Header } from './componentes/Header';
import { Post } from './componentes/Post'
import { Sidebar } from './componentes/Sidebar';


import './global.css';
import styles from './App.module.css'

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/IgorKlein.png",
      name: "Igor Klein",
      role: "Developer"
    },
    content: [
      { type: 'paragraph', content:  'Fala galera!!' },
      { type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat.'},
      { type: 'link', content:  'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-09-28 21:50:53')
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: 'paragraph', content:  'Fala galera!!' },
      { type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat.'},
      { type: 'link', content:  'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-09-26 11:51:12')
  },
]

//iteração: criar uma estrutura de repetição, percorrendo um array por exemplo.

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

