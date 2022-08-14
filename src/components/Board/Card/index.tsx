import { IAnimal } from "interfaces/interface";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./Card.module.scss";

const Card = (props: IAnimal) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card__front"]}>
        <LazyLoadImage
          className={styles["card__image"]}
          src={props.image_link}
          alt={props.name}
          height={150}
          width={150}
          effect="blur"
        />

        <h1 className={styles["card__name"]}>{props.name}</h1>

        <p className={styles["card__specie"]}>
          <span>Specie: </span>
          {props.animal_type}
        </p>

        <p className={styles["card__habitat"]}>
          <span>Habitat: </span>
          {props.habitat}
        </p>

        <p className={styles["card__score"]}>
          <span>Score: </span>
          {+props.lifespan / 5 > 10 ? 10 : Math.floor(+props.lifespan / 5)}
        </p>
      </div>

      <div className={styles["card__back"]}></div>
    </div>
  );
};

export default Card;
