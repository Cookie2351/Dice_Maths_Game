// --------------------------------------------------------------------------------//
// --------------------------------------------------------------------------------//

// retrieve date
function getTodayDate()
{
    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
}

const todayDate = getTodayDate();

document.getElementById("puzzleDate").textContent = `Date ${todayDate}`;

// ------------------------------------------------------------------------------- //
//                         CURRENT PUZZLE DATA                                     //
// set puzzle values
let currentPuzzle;
let grid;
let start;
let end;
let dice;

let diceStart;
let gameLocked = false;

let targetScore;
let targetMoves;

const diceGrid = document.getElementById("diceGrid");

// Set the days puzzle and retrieve values
function loadPuzzle(puzzle)
{
    currentPuzzle = puzzle;

    grid = currentPuzzle.grid;
    start = currentPuzzle.start;
    end = currentPuzzle.end;

    // set dice
    dice =
    {
        top: currentPuzzle.dice.top,
        south: currentPuzzle.dice.south,
        west: currentPuzzle.dice.west
    };

    // retrieve dice orientation
    diceStart =
    {
        top: dice.top, south: dice.south, west: dice.west
    };

    targetScore = currentPuzzle.targetScore;
    targetMoves = currentPuzzle.path.length;
    
    document.getElementById("targetscore").textContent = targetScore;
    document.getElementById("targetmoves").textContent = targetMoves;
}
// ------------------------------------------------------------------------------- //


// ------------------------------------------------------------------------------- //
//                                  DEV TOOLS                                      //
// ------------------------------------------------------------------------------- //
function selectPuzzle()
{
    const puzzle = puzzles.find(puzzle => puzzle.date === todayDate);

    loadPuzzle(puzzle);
}
function forcePuzzle(devName)
{
    const puzzle = puzzles.find(puzzle => puzzle.devName === devName);

    loadPuzzle(puzzle);

    createGrid();
    resetDice();
}
function forcePuzzle1()
{
    forcePuzzle("SetPuzzle1");
}
function forcePuzzle2()
{
    forcePuzzle("SetPuzzle2");
}
function forcePuzzle3()
{
    forcePuzzle("SetPuzzle3");
}
function forcePuzzle4()
{
    forcePuzzle("SetPuzzle4");
}
function forcePuzzle5()
{
    forcePuzzle("SetPuzzle5");
}
function forcePuzzle6()
{
    forcePuzzle("SetPuzzle6");
}
function forcePuzzle7()
{
    forcePuzzle("SetPuzzle7");
}
function forcePuzzle8()
{
    forcePuzzle("SetPuzzle8");
}
function forcePuzzle9()
{
    forcePuzzle("SetPuzzle9");
}

// ----------------------------------- //
function forcePuzzleQ()
{
    forcePuzzle("CurrentPuzzle");
}

function forcePuzzle0()
{
    forcePuzzle("BlankPuzzle0")
}
// --------------------------------------------------------------------------------//
//                                  END OF DEV TOOLS                               //
// --------------------------------------------------------------------------------//


// Create the grid
function createGrid()
{
    // Remove old tiles but keep the dice
    diceGrid.querySelectorAll(".tile").forEach(tile => tile.remove());

    for (let row = 0; row < 8; row++) { // for grid 6x8

        for (let column = 0; column < 6; column++) // for grid 6x8
        {
            const tile = document.createElement("div");

            tile.classList.add("tile");

            // check if the tile is visible or not
            if (grid[row][column] === 1)
            {
                tile.classList.add("visible");
            }
            else
            {
                tile.classList.add("hidden");
            }

            // check for start tile
            if (row === start.row && column === start.column)
            {
                tile.classList.add("start");
            }
            // check for end tile
            if (row === end.row && column === end.column)
            {
                tile.classList.add("end")
            }

            diceGrid.appendChild(tile);
        }
    }
}
// --------------------------------------------------------------------------------//

// --------------------------------------------------------------------------------//
selectPuzzle();
createGrid();
// --------------------------------------------------------------------------------//


// Set the other dice faces from orientation
function getSides(number)
{
    const opposites =
    {
        1:6,
        2:5,
        3:4,
        4:3,
        5:2,
        6:1
    };

    return opposites[number];
}
dice.bottom = getSides(dice.top);
dice.north = getSides(dice.south);
dice.east = getSides(dice.west);

console.log(dice);

// set start square as dice start position
const diceLocation = {...start};

const diceElement = document.getElementById("dice");

function updateDicePosition()
{
    const tileWidth = diceGrid.clientWidth / 6;
    const tileHeight = diceGrid.clientHeight / 8;

    const diceWidth = diceElement.offsetWidth;
    const diceHeight = diceElement.offsetHeight;

    const offsetX = (tileWidth - diceWidth) / 2;
    const offsetY = (tileHeight - diceHeight) / 2;

    diceElement.style.left =
        `${diceLocation.column * tileWidth + offsetX}px`;

    diceElement.style.top =
        `${diceLocation.row * tileHeight + offsetY}px`;
}

updateDicePosition();

function updateDiceImage()
{
    const diceImage = document.getElementById("diceImage");
    const rollGuideTop = document.getElementById("rollGuideTop");
    const rollGuideUp = document.getElementById("rollGuideUp");
    const rollGuideLeft = document.getElementById("rollGuideLeft");
    const rollGuideRight = document.getElementById("rollGuideRight");
    const rollGuideDown = document.getElementById("rollGuideDown");

    const arrowUp = document.getElementById("arrowUp");
    const arrowLeft = document.getElementById("arrowLeft");
    const arrowRight = document.getElementById("arrowRight");
    const arrowDown = document.getElementById("arrowDown");

    diceImage.src = `Assets/Dice_side${dice.top}.png`;
    rollGuideTop.src = `Assets/Dice_side${dice.top}.png`;
    rollGuideUp.src = `Assets/Dice_side${dice.south}.png`;      // inverted - moving up shows south side
    rollGuideLeft.src = `Assets/Dice_side${dice.east}.png`;     // inverted - moving left shows east side
    rollGuideRight.src = `Assets/Dice_side${dice.west}.png`;    // inverted - moving right shows west side
    rollGuideDown.src = `Assets/Dice_side${dice.north}.png`;    // inverted - moving down shows north side

    arrowUp.src = `Assets/Arrow_UP.png`;
    arrowLeft.src = `Assets/Arrow_LEFT.png`;
    arrowRight.src = `Assets/Arrow_RIGHT.png`;
    arrowDown.src = `Assets/Arrow_DOWN.png`;
}
window.addEventListener("resize", function()
{
    updateDicePosition();
});

// -------------------------------------------------------------------------------- //

// Start game
let score = 0;
let rollCount = 0;
let gameEnd = false;

let canMove = true;
const Delay = 350; //milliseconds    - set for normal colour reset
const moveDelay = 100; // milliseconds      - set for dice roll movement input delay
const failDelay = 1500; // milliseconds      - for the CSS fail colour flash
const winDelay = 3000;  // milliseconds     - for winning colour flash

updateDiceImage();

function canMoveTo(row, column)
{
    // Check if move position will be outside game grid
    if (row < 0 || row >= 8 || column < 0 || column >= 6) // for grid 6x8
    {
        return false;
    }

    // Check if the position is hidden
    if (grid[row][column] === 0)
    {
        return false;
    }

    return true;
}
// --------------------------------------------------------------------------------//

// handle dice location updates
function move(direction)
{
    // stop game if ended
    if (gameEnd)
    {
        return;
    }

    // stop movement if within move delay
    if (!canMove)
    {
        return;
    }

    // start dice at correct start location
    let newRow = diceLocation.row;
    let newColumn = diceLocation.column;

    // set dice movement new location on grid
    switch (direction)
    {
        case "forward":
            newRow --;
            break;
        case "backward":
            newRow ++;
            break;
        case "right":
            newColumn ++;
            break;
        case "left":
            newColumn --;
            break;
    }

    // check if move location is valid
    if (!canMoveTo(newRow, newColumn))
    {
        return;
    }

    // start movement cooldown
    canMove = false;

    // update the dice position
    diceLocation.row = newRow;
    diceLocation.column = newColumn;

    // update dice visual
    updateDicePosition();

    // count moves
    rollCount++;
    document.getElementById("rollcount").textContent = rollCount;

    // Roll the dice
    switch (direction)
    {
        case "forward":
            rollForward();
            break;
        case "backward":
            rollBackward();
            break;
        case "right":
            rollRight();
            break;
        case "left":
            rollLeft();
            break;
    }

    // update the dice image after roll
    updateDiceImage();

    // Check if dice reached the goal
    checkGoal();

    // Allow for next move
    setTimeout(() =>
    {
        canMove = true;
    }, moveDelay);
}
// --------------------------------------------------------------------------------//

// check if goal reached
function checkGoal()
{
    if
    (
        diceLocation.row == end.row &&
        diceLocation.column === end.column
    )
    {
        if (score === targetScore)
        {
            if (rollCount === targetMoves)
            {
                gameEnd = true;
                console.log("Success! Score reached:", score);
                console.log("Rolls:", rollCount);

                flashWin();
                showSuccessPanel();

            }
            else
            {
                console.log("Score reach but wrong moves");
                console.log("Rolls:", rollCount, "Target:", targetMoves);

                flashClose();
                showClosePanel()

            }
        }
        else
        {
            console.log("Incorrect score:", score);
            console.log("Target score:", targetScore);
            console.log("Resetting puzzle...");
            
            gameLocked = true;
            flashFail();

            setTimeout(() =>
            {
                resetDice();
                gameLocked = false;
            }, failDelay);
        }


    }
}

// --------------------------------------------------------------------------------//
//                              Game Panels                                        //
// --------------------------------------------------------------------------------//

// Game Success Panel
function showSuccessPanel()
{
    const gameEndPanel = document.getElementById("gameEndPanel");
    const gameEndTitle = document.getElementById("gameEndTitle");
    const gameEndMessage = document.getElementById("gameEndMessage");
    const gameEndStats = document.getElementById("gameEndStats");
    const gameEndButton = document.getElementById("gameEndButton");

    gameEndPanel.className = "success";

    gameEndTitle.textContent = "Puzzle Complete!";
    

    gameEndMessage.textContent =
        "You solved today's puzzle!";

    gameEndStats.textContent =
        `Score: ${score} | Moves: ${rollCount}`;

    gameEndButton.textContent = "Play Again";

    gameEndPanel.style.display = "flex";
    
}
// Game Close Panel
function showClosePanel()
{
    const gameEndPanel = document.getElementById("gameEndPanel");
    const gameEndTitle = document.getElementById("gameEndTitle");
    const gameEndMessage = document.getElementById("gameEndMessage");
    const gameEndStats = document.getElementById("gameEndStats");
    const gameEndButton = document.getElementById("gameEndButton");

    gameEndPanel.className = "close";

    gameEndTitle.textContent = "Close one - try again";

    gameEndMessage.textContent =
        "Looks like you got the score but not the right number of moves.";

    gameEndStats.textContent =
        `Moves: ${rollCount} | Target Moves: ${targetMoves}`;

    gameEndButton.textContent = "Try Again";

    gameEndPanel.style.display = "flex";
}

gameEndButton.addEventListener("click", function()
{
    // Reset the game
    resetDice();
});

// --------------------------------------------------------------------------------//
// --------------------------------------------------------------------------------//

// creating NESW roll functions for changing top number
    // and adding the new number to the score
function rollForward() // Roll north / up
{
    const oldTop = dice.top;

    dice.top = dice.south;
    dice.south = dice.bottom;
    dice.bottom = dice.north;
    dice.north = oldTop;

    score += dice.top

    document.getElementById("currentscore").textContent = score;
}
function rollBackward() // Roll south / down
{
    const oldTop = dice.top;

    dice.top = dice.north;
    dice.north = dice.bottom;
    dice.bottom = dice.south;
    dice.south = oldTop;

    score += dice.top

    document.getElementById("currentscore").textContent = score;
}
function rollRight() // Roll east / right
{
    const oldTop = dice.top;

    dice.top = dice.west;
    dice.west = dice.bottom;
    dice.bottom = dice.east;
    dice.east = oldTop;

    score += dice.top

    document.getElementById("currentscore").textContent = score;
}
function rollLeft() // Roll west / left
{
    const oldTop = dice.top;

    dice.top = dice.east;
    dice.east = dice.bottom;
    dice.bottom = dice.west
    dice.west = oldTop;

    score += dice.top

    document.getElementById("currentscore").textContent = score;
}
// --------------------------------------------------------------------------------//

// Puzzle reset
function resetDice() // Reset puzzle for re-attempt
{
    score = 0;
    rollCount = 0;
    document.getElementById("rollcount").textContent = rollCount;
    document.getElementById("currentscore").textContent = score;

    gameEnd = false;
    // reset dice start location
    diceLocation.row = start.row;
    diceLocation.column = start.column;
    // reset dice start orientation
    dice.top = diceStart.top;
    dice.south = diceStart.south;
    dice.west = diceStart.west;
    dice.bottom = getSides(dice.top);
    dice.north = getSides(dice.south);
    dice.east = getSides(dice.west);

    // reset dice visual
    updateDicePosition();
    updateDiceImage();

    // remove panel
    document.getElementById("gameEndPanel").style.display = "none";
}
// --------------------------------------------------------------------------------//

// Change the grid colour on puzzle failure / win and close
function flashFail()
{
    const visibleTiles = diceGrid.querySelectorAll(".tile.visible");

    visibleTiles.forEach(tile =>
    {
        tile.classList.add("fail");
    });

    setTimeout(() =>
    {
        visibleTiles.forEach(tile =>
        {
            tile.classList.remove("fail");
        });
    }, failDelay);
}
function flashWin()
{
    const visibleTiles = diceGrid.querySelectorAll(".tile.visible");

    visibleTiles.forEach(tile =>
    {
        tile.classList.add("win");
    });

    setTimeout(() =>
    {
        visibleTiles.forEach(tile =>
        {
            tile.classList.remove("win");
        });
    }, winDelay);
}
function flashClose()
{
    const visibleTiles = diceGrid.querySelectorAll(".tile.visible");

    visibleTiles.forEach(tile =>
    {
        tile.classList.add("close");
    });

    setTimeout(() =>
    {
        visibleTiles.forEach(tile =>
        {
            tile.classList.remove("close");
        });
    }, winDelay);
}
function flashNormal()
{
    const visibleTiles = diceGrid.querySelectorAll(".tile.visible");

    visibleTiles.forEach(tile =>
    {
        tile.classList.remove("close");
        tile.classList.remove("win");
        tile.classList.remove("fail");
        tile.classList.add("normal");
    });

    setTimeout(() =>
    {
        visibleTiles.forEach(tile =>
        {
            tile.classList.remove("normal");
        });
    }, Delay);
}

// --------------------------------------------------------------------------------//

// Key controls for the game
document.addEventListener("keydown", function(event)
{
    // stop arrow keys from scrolling the page
    if
    (
        event.key === "ArrowUp" || event.key === "ArrowDown" ||
        event.key === "ArrowLeft" || event.key === "ArrowRight"
    )
    {
        event.preventDefault();
    }

    // lock game for game failed reset to stop accidental double reset
    if (gameLocked)
    {
        return;
    }

    // set controls for the dice rolling
    switch (event.key)
    {
        case "r": case "R": case "Backspace":
            resetDice();
            // reset background colour
            flashNormal()
            break;

        case "ArrowUp": case "w": case "W":
            move("forward");
            break;
        case "ArrowDown": case "s": case"S":
            move("backward");
            break;
        case "ArrowRight": case "d": case "D":
            move("right");
            break;
        case "ArrowLeft": case "a": case "A":
            move("left");
            break;

        // ------------------------------------------------------- //

        // ------------------------------------------------------- //
        //                          DEV KEYS                       //
        // ------------------------------------------------------- //
        case "1":
            forcePuzzle1();
            break;
        case "2":
            forcePuzzle2();
            break;
        case "3":
            forcePuzzle3();
            break;
        case "4":
            forcePuzzle4();
            break;
        case "5":
            forcePuzzle5();
            break;
        case "6":
            forcePuzzle6();
            break;
        case "7":
            forcePuzzle7();
            break;
        case "8":
            forcePuzzle8();
            break;
        case "9":
            forcePuzzle9();
            break;


        case "q": case "Q":
            forcePuzzleQ();
            break;
        case "0":
            forcePuzzle0();
            break;
        // ------------------------------------------------------- //
        //                     END OF DEV TOOLS                    //
        // ------------------------------------------------------- //
    }
});