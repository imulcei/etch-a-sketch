document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("container");
  const resizeButton = document.getElementById("resize");
  const resetButton = document.getElementById("reset");
  const colorButton = document.getElementById("random-color");

  let randomizeColor = false;

  gridContainer.classList.add("grid-container");

  function generateGrid(size) {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }

    const containerSize = 600 / size;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, ${containerSize}px)`;

    for (let i = 0; i < size * size; i++) {
      const gridDiv = document.createElement("div");
      gridDiv.classList.add("grid-div");
      gridDiv.style.width = `${containerSize}px`;
      gridDiv.style.height = `${containerSize}px`;
      gridContainer.appendChild(gridDiv);

      gridDiv.addEventListener("mouseover", function () {
        gridDiv.style.backgroundColor = "#7b7b7b";

        if (randomizeColor) {
          const randomColor = `rgb(${Math.random() * 256},${
            Math.random() * 256
          },${Math.random() * 256})`;
          gridDiv.style.backgroundColor = randomColor;
        }
      });
    }
  }

  resizeButton.addEventListener("click", function () {
    let chosenSize = prompt("How many squares do you want ? (max 100)");
    chosenSize = parseInt(chosenSize);
    if (!isNaN(chosenSize) && chosenSize > 0 && chosenSize <= 100) {
      generateGrid(chosenSize);
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  });

  resetButton.addEventListener("click", function () {
    const gridDivs = document.querySelectorAll(".grid-div");
    gridDivs.forEach((cube) => {
      cube.style.backgroundColor = "#ece1e1";
    });
  });

  colorButton.addEventListener("click", function () {
    randomizeColor = !randomizeColor;
    colorButton.textContent = randomizeColor ? "grey ?" : "color ?";
  });

  generateGrid(16);
});
