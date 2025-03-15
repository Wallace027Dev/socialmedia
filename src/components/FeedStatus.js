import Image from "next/image";
import { FeedStatusContainer } from "../styles/Feed";

export default function FeedStatus(props) {
  return (
    <FeedStatusContainer>
      <Image src={props.image} alt="Empty folder" />

      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </FeedStatusContainer>
  );
}
