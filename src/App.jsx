// Todo componente React precisa possuir a extensão JSX.
// JSX = JS + XML

import { Header } from './componentes/Header';
import { Post } from './componentes/Post'
import { Sidebar } from './componentes/Sidebar';


import './global.css';
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post />
        <Post />
        </main>
      </div>


    </div>
  )
}

