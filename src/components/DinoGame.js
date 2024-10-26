import React from "react";

import { Dino } from "react-dino-game";

const Game = () => {
  return (
    <div style={styles.gameContainer}>
      <Dino style={styles.dinoGame} />
    </div>
  );
};

const styles = {
  gameContainer: {
    position: "relative",
    bottom: "0",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "black",
    padding: "20px",
    overflow: "hidden",
  },
  dinoGame: {
    border: "none",
    boxShadow: "none",
  },
};

export default Game;
