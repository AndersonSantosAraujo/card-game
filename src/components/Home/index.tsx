import { PersonSimpleRun } from "phosphor-react";
import React, { useContext } from "react";
import { UserContext } from "UserContext";
import { useNavigate } from "react-router";
import styles from "./Home.module.scss";

const Home = () => {
  const userCX = useContext(UserContext);
  const navigate = useNavigate();

  // Função que captura o nome e coloca na 'APIContext'
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { name } = event.target as typeof event.target & {
      name: { value: string };
    };

    userCX.handleUser(name.value);

    navigate("/board/");
  }

  return (
    <main className={`container ${styles["main"]}`}>
      <div className={styles["card"]}>
        <PersonSimpleRun size={64} color="#fff" />
        <h1 className={styles["card__title"]}>Iniciar</h1>
        <form onSubmit={handleSubmit}>
          <input
            className={styles["card__input"]}
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome..."
            required
          />
          <button className={styles["card__button"]}>Ver Cartas</button>
        </form>
      </div>
    </main>
  );
};

export default Home;
