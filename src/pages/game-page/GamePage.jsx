import "./gamepage-styles.css";
import puzzleImg1 from "../../assets/Rompe1.png";
import puzzleImg2 from "../../assets/Rompe2.png";
import puzzleImg3 from "../../assets/Rompe3.png";
import { useEffect, useState } from "react";

const initialPositions = [
  { id: 1, imgSrc: puzzleImg2, position: "position" },
  { id: 2, imgSrc: puzzleImg1, position: "position" },
  { id: 3, imgSrc: puzzleImg3, position: "position" },
];

function GamePage() {
  const [puzzlePieces, setPuzzlePieces] = useState(initialPositions);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const handleOnDrop = (e, newPosition) => {
    const id = e.dataTransfer.getData("id");
    const updatedPieces = puzzlePieces.map((piece) => {
      if (piece.id === parseInt(id)) {
        return { ...piece, position: newPosition };
      }
      return piece;
    });
    setPuzzlePieces(updatedPieces);
  };

  const handleReset = () => {
    setPuzzlePieces(initialPositions);
    setIsCompleted(false);
  };

  useEffect(() => {
    if (
      puzzlePieces[0].position !== "position" &&
      puzzlePieces[1].position !== "position" &&
      puzzlePieces[2].position !== "position"
    ) {
      setIsCompleted(true);
    }
  }, [puzzlePieces]);

  return (
    <>
      <header className="game-header">
        <h1 className="blue-bg">Juguemos un poco</h1>
      </header>

      <main className="game-container">
        <h2>Armemos el rompecabezas y veamos que imagen es...</h2>
        <section
          className={`puzzle-container ${isCompleted ? "completed-board" : ""}`}
        >
          {["pos1", "pos2", "pos3"].map((pos) => (
            <div
              className={`puzzle-block ${isCompleted ? "completed-block" : ""}`}
              key={pos}
              onDragOver={handleDragOver}
              onDrop={(e) => handleOnDrop(e, pos)}
            >
              {puzzlePieces
                .filter((p) => p.position === pos)
                .map((p) => (
                  <img
                    key={p.id}
                    src={p.imgSrc}
                    onDragStart={(e) => handleOnDragStart(e, p.id)}
                  />
                ))}
            </div>
          ))}
        </section>

        <section className="puzzle-pieces-container">
          {puzzlePieces
            .filter((p) => p.position === "position")
            .map((p) => (
              <div
                key={p.id}
                draggable
                onDragStart={(e) => handleOnDragStart(e, p.id)}
              >
                <img src={p.imgSrc} />
              </div>
            ))}
        </section>

        <button className="reset-button" onClick={() => handleReset()}>
          Reiniciar
        </button>
      </main>
    </>
  );
}

export default GamePage;
