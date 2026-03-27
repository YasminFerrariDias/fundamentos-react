import { Header } from './components/Header'
import { Post } from './components/Post'
import { SideBar } from './components/SideBar'
import "./global.css"
import styles from './App.module.css'

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="Yasmin Dias"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
          />
        </main>
      </div>
    </div>
  )
}
