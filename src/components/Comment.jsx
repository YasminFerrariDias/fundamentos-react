import styles from "./Comment.module.css";
import fotoPerfil from "../assets/perfil.jpg";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./avatar";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    console.log("delete");

    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={fotoPerfil} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yasmin Dias</strong>
              <time title="11 de Maio ás 11:50" dateTime="2026-03-27 11:30:59">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
