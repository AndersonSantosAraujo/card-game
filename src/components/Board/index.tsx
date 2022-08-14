import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "UserContext";
import { useNavigate } from "react-router";
import styles from "./Board.module.scss";
import Card from "./Card";
import { IAnimal } from "interfaces/interface";

const Board = () => {
  const initialQuant = 5;
  const url = "https://zoo-animal-api.herokuapp.com/animals/rand";
  const navigate = useNavigate();
  const userCX = useContext(UserContext);
  const [quantity, setQuantity] = useState(3);
  const [cards, setCards] = useState<IAnimal[]>([]);

  // Hook para setar as 5 cartas de entrada
  useEffect(() => {
    if (!userCX.user) navigate("/");

    fetch(`${url}/${initialQuant}`)
      .then((response) => response.json())
      .then((animal) => {
        setCards(animal);
      });
  }, []);

  // Função que adiciona mais cartas ao deck
  function handleClick() {
    setQuantity(quantity - 1);

    fetch(`${url}/1`)
      .then((response) => response.json())
      .then((animal) => {
        setCards((cards) => [...cards, ...animal]);
      });
  }

  // Função que faz o embralhamento das cartas
  function handleShuffle() {
    const shuffle = cards
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffle);
  }

  return (
    <main className={`container ${styles["board"]}`}>
      <div className={styles["board__nav"]}>
        <p className={styles["board__name"]}>{userCX.user}</p>
        <button className={styles["board__button"]} onClick={handleShuffle}>
          Embaralhar
        </button>
        {quantity > 0 && (
          <button className={styles["board__button"]} onClick={handleClick}>
            Nova Carta ( {quantity} )
          </button>
        )}
      </div>

      <div className={styles["board__container"]}>
        {cards &&
          cards.map((animal: IAnimal) => <Card key={animal.id} {...animal} />)}
      </div>
    </main>
  );
};

export default Board;
