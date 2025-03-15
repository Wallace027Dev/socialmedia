import styles from "../styles/Feed.module.css"

export default function FeedStatus(props) {
  return (
    <div className={styles.feed__status}>
      <img src={props.image} alt="Empty folder" />

      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}
