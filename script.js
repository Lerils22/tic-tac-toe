body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

.container {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 36px;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

#game-board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  width: 320px;
  margin: auto;
}

.cell {
  border: 2px solid #333;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cell:hover {
  background-color: #ddd;
}

.cell.player-X {
  color: #f44336;
  animation: fadeIn 0.5s ease;
}

.cell.player-O {
  color: #4caf50;
  animation: fadeIn 0.5s ease;
}

.winning-cell {
  background-color: #ffeb3b;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#result {
  font-size: 24px;
  color: #333;
  margin-top: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.counter {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.counter span {
  font-size: 24px;
  color: #333;
  margin: 5px;
  transition: transform 0.3s ease;
}

.counter span::before {
  content: ":";
  margin-right: 5px;
}

.counter button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 18px;
  background: linear-gradient(to bottom, #4caf50 0%, #388e3c 100%);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.counter button:hover {
  background: linear-gradient(to bottom, #45a049 0%, #388e3c 100%);
}

#resetButton,
#exitButton {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background: linear-gradient(to bottom, #f44336 0%, #d32f2f 100%);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#resetButton:hover,
#exitButton:hover {
  background: linear-gradient(to bottom, #d32f2f 0%, #c62828 100%);
}

#exitButton {
  background: linear-gradient(to bottom, #ff9800 0%, #f57c00 100%);
}

#exitButton:hover {
  background: linear-gradient(to bottom, #f57c00 0%, #e65100 100%);
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #2196F3;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #0b7dda;
}

@media screen and (max-width: 768px) {
  #game-board {
    width: 90%;
    max-width: 300px;
  }

  .cell {
    font-size: 24px;
  }

  .container {
    margin-top: 20px;
  }

  .counter span {
    font-size: 20px;
  }

  .counter button {
    font-size: 14px;
  }

  #resetButton,
  #exitButton {
    font-size: 16px;
    margin-top: 10px;
  }
}
