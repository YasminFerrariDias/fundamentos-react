import { Header } from './components/Header'
import { Post } from './Post'
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
          <Post
            author="John Doe"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quo sed provident quasi ut minus eos mollitia nemo rerum delectus porro autem culpa repellat deleniti beatae, minima temporibus asperiores dolor."
          />
        </main>
      </div>
    </div>
  )
}
