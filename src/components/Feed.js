import styles from "../styles/Feed.module.css"
import spin from "../styles/Spin.module.css"

import userIcon from "../images/user.svg";
import clockIcon from "../images/clock.svg";
import emptyFolderIcon from "../images/empty-folder.svg";
import loader from "../images/loader-primary.svg";
import FeedStatus from "./FeedStatus";
import cloudErrorIcon from '../images/cloud-error.svg'

export default function Feed(props) {
  if (props.isLoading) {
    return <img src={loader} alt="Loading" className={spin.spin} />;
  }

  if(props.hasError){
    return (
      <FeedStatus
        image={cloudErrorIcon}
        title="Algo deu errado"
        subtitle="Não foi possível carregar o feed. Tente novamente mais tarde."
      />
    )
  }

  if (props.posts.length === 0) {
    return (
      <FeedStatus
        image={emptyFolderIcon}
        title="Não encontrou nada"
        subtitle="Parece que você e seus amigos não postaram nada. Comece a escrever uma
    nova história!"
      />
    );
  }

  return (
    <>
      <header>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </header>

      <section className={styles.feed}>
        {props.posts.map((post) => (
          <article key={post.id}>
            <p>{post.content}</p>

            <footer>
              <div className={styles.user__details}>
                <img src={userIcon} alt="User" />
                <strong>{post.userName}</strong>
              </div>

              <div className={styles.time}>
                <img src={clockIcon} alt="Clock" />
                <span>
                  Publicado em {post.publishedAt.toLocaleDateString("pt-br")}
                </span>
              </div>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
}
