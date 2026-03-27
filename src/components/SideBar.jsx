import styles from "./Sidebar.module.css";
import fotoPerfil from "../assets/perfil.jpg";
import { PencilLine } from "phosphor-react";

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <img src={fotoPerfil} className={styles.avatar} />

        <strong>Yasmin Dias</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
          </a>
      </footer>
    </aside>
  );
}
