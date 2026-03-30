import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";
import "./global.css";
import styles from "./App.module.css";

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },

      /*'<a href="">#novoprojeto</a>',
      '<a href="">#nlw</a>{" "}',
      '<a href="">#rocketseat</a>',*/
    ],
    publishedAt: new Date("2026-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/yasminferraridias.png",
      name: "Yasmin Ferrari Dias",
      role: "Estágiaria Front-End",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },

      /*'<a href="">#novoprojeto</a>',
      '<a href="">#nlw</a>{" "}',
      '<a href="">#rocketseat</a>',*/
    ],
    publishedAt: new Date("2026-05-10 20:00:00"),
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt}/>
          ))}
        </main>
      </div>
    </div>
  );
}
