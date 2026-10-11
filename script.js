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

let previewTimeout;

// set states for panels for entering and exiting settings menu
startScreenOpen = false;
endScreenOpen = false;

// Set difficulty
let difficulty = "normal";

// Set forced puzzle save for replay
let replayPuzzle = null;

// Set difficulty tile initial state
let minus = null;
let movingToMinus = false;
let multiply = null;
let movingToMultiply = false;
let square = null;
let movingToSquare = false;

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
        top: currentPuzzle.dice.top, south: currentPuzzle.dice.south, west: currentPuzzle.dice.west
    };

    // Recalculate the other three sides
    dice.bottom = getSides(dice.top);
    dice.north = getSides(dice.south);
    dice.east = getSides(dice.west);

    // retrieve dice orientation
    diceStart =
    {
        top: dice.top, south: dice.south, west: dice.west
    };

    // Set aprropriate difficulty settings
    const difficultyData = currentPuzzle.difficulties[difficulty];

    // Retrieve coordinates of difficulty tiles on puzzle load
    minus = difficultyData.minus || null;
    multiply = difficultyData.multiply || null;
    square = difficultyData.square || null;

    targetScore = difficultyData.targetScore;
    targetMoves = difficultyData.path.length;
    
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

    // Check the puzzle exists
    if (!puzzle)
    {
        console.log("Could not find puzzle:", devName);
        return;
    }

    // Check the selected difficulty exists for this puzzle
    if (!puzzle.difficulties[difficulty])
    {
        console.warn(
            `Difficulty "${difficulty}" unavailable for ${devName}. Using normal.`
        );

        difficulty = "normal";

        // Update the radio button selection
        document.querySelector(
            'input[name="difficulty"][value="normal"]'
        ).checked = true;
    }

    replayPuzzle = puzzle; // remember forced puzzle for play again

    // Load and display the forced puzzle
    loadPuzzle(puzzle);
    createGrid();
    resetDice();

    // Update the start screen message
    document.getElementById("gameStartMessage").textContent =
        `Roll to reach the target score of ${targetScore}`;
    
    startScreen();
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
    forcePuzzle("WIPPuzzle");
}

function forcePuzzle0()
{
    forcePuzzle("Blank")
}
// --------------------------------------------------------------------------------//
//                                  END OF DEV TOOLS                               //
// --------------------------------------------------------------------------------//


// Create the grid
function createGrid()
{
    // Remove old tiles but keep the dice
    diceGrid.querySelectorAll(".tile").forEach(tile => tile.remove());

    for (let row = 0; row < 5; row++) { // for grid 5x5

        for (let column = 0; column < 5; column++) // for grid 5x5
        {
            const tile = document.createElement("div");
            const difficultyData = currentPuzzle.difficulties[difficulty];

            tile.classList.add("tile");

            // Store the tile positions
            tile.dataset.row = row;
            tile.dataset.column = column;

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

            // Check for special difficulty tiles
            if (difficultyData.minus &&
                row === difficultyData.minus.row && column === difficultyData.minus.column)
            {
                tile.classList.add("minus");
                if (tile.classList.contains("minus"))
                {
                    const MinusImage = document.createElement("img");
                    MinusImage.src = "Assets/Minus.png";
                    MinusImage.classList.add("tileMinusImage");

                    tile.appendChild(MinusImage);
                }
            }
            if (difficultyData.multiply &&
                row === difficultyData.multiply.row && column === difficultyData.multiply.column)
            {
                tile.classList.add("multiply");
                if (tile.classList.contains("multiply"))
                {
                    const MultiplyImage = document.createElement("img");
                    MultiplyImage.src = "Assets/Multiply.png";
                    MultiplyImage.classList.add("tileMultiplyImage");

                    tile.appendChild(MultiplyImage);
                }
            }
            if (difficultyData.square &&
                row === difficultyData.square.row && column === difficultyData.square.column)
            {
                tile.classList.add("square");
                if (tile.classList.contains("square"))
                {
                    const SquareImage = document.createElement("img");
                    SquareImage.src = "Assets/Square.png";
                    SquareImage.classList.add("tileSquareImage");

                    tile.appendChild(SquareImage);
                }
            }
        }
    }
}


// --------------------------------------------------------------------------------//
// --------------------------------------------------------------------------------//
selectPuzzle();
createGrid();
startScreen()

document.querySelectorAll('input[name="difficulty"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // 1. Temporarily update the difficulty variable to the one clicked
        difficulty = this.value;

        // 2. Re-run loadPuzzle to fetch the correct targetScore from your data matrix
        loadPuzzle(currentPuzzle);

        // 3. Update the start panel message text dynamically on-screen
        document.getElementById("gameStartMessage").textContent = `Roll to reach the target score of ${targetScore}`;
    });
});
// --------------------------------------------------------------------------------//
// -----------------------------------------------------------------------//
//              Set the other dice faces from orientation                 //
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
    const tileWidth = diceGrid.clientWidth / 5;
    const tileHeight = diceGrid.clientHeight / 5;

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

// -----------------------------------------------------------------------//
//                      Guide - Add movement preview                      //
// update the preview
function updateMovementPreviews()
{
    // stop from showing previews after game end
    if (gameEnd)
    {
        return;
    }

    // Remove existing previews
    diceGrid.querySelectorAll(".movementPreview").forEach(preview =>
    {
        preview.remove();
    });

    // Check all four directions
    addMovementPreview("forward", -1, 0);
    addMovementPreview("backward", 1, 0);
    addMovementPreview("right", 0, 1);
    addMovementPreview("left", 0, -1);
}
// create the preview
function addMovementPreview(direction, rowChange, columnChange)
{
    const newRow = diceLocation.row + rowChange;            // Update position
    const newColumn = diceLocation.column + columnChange;   // Update position

    // Check for valid move before showing preview
    if (!canMoveTo(newRow, newColumn))
    {
        return;
    }

    // Find the tile at valid locations
    const tile = diceGrid.querySelector(
        `.tile[data-row="${newRow}"][data-column="${newColumn}"]`
    );

    if (!tile)
    {
        return;
    }

    // Create a copy of the current dice orientation
    const previewDice = {...dice};

    // Simulate the roll for then calculating the image
    switch (direction)
    {
        case "forward":
            previewDice.top = dice.south;
            break;
        case "backward":
            previewDice.top = dice.north;
            break;
        case "right":
            previewDice.top = dice.west;
            break;
        case "left":
            previewDice.top = dice.east;
            break;
    }

    // Create preview image from the calculated valid moves
    const preview = document.createElement("img");

    preview.classList.add("movementPreview");

    preview.src = `Assets/Dice_side${previewDice.top}.png`;

    tile.appendChild(preview);
}
// -----------------------------------------------------------------------//
// -----------------------------------------------------------------------//
//                          Dice image update                             //
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
// -------------------------------------------------------------------------------- //
//                                    Start game                                    //
let score = 0;
let rollCount = 0;
let gameEnd = false;

let canMove = true;
const Delay = 350; //milliseconds    - set for normal colour reset
const previewDelay = 300; //milliseconds    - set for delay before showing previews
const moveDelay = 100; // milliseconds      - set for dice roll movement input delay
const failDelay = 1500; // milliseconds      - for the CSS fail colour flash
const winDelay = 5000;  // milliseconds     - for winning colour flash

updateDiceImage();

// set intial move preview delay
setTimeout(() =>
{
    updateMovementPreviews();
}, (previewDelay * 6));               // set delay before showing move preview

function canMoveTo(row, column)
{
    // Check if move position will be outside game grid
    if (row < 0 || row >= 5 || column < 0 || column >= 5) // for grid 5x5
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

// -----------------------------------------------------------------------//
//                    handle dice location updates (moving)               //
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

    // Cancel any queued preview
    clearTimeout(previewTimeout);

    // Remove current movement previews so can reapply after movement
    diceGrid.querySelectorAll(".movementPreview").forEach(preview =>
    {
        preview.remove();
    });

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

    // after valid move check if it is minus tile before moving
    movingToMinus =
        minus !== null &&
        newRow === minus.row &&
        newColumn === minus.column;

    // after valid move check if it is multiply tile before moving
    movingToMultiply =
        multiply !== null &&
        newRow === multiply.row &&
        newColumn === multiply.column;

    // after valid move check if it is square tile before moving
    movingToSquare =
        square !== null &&
        newRow === square.row &&
        newColumn === square.column;

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

    // start new preview timer
    previewTimeout = setTimeout(() =>
    {
        updateMovementPreviews();
    }, previewDelay);               // set delay before showing move preview

    // Allow for next move
    setTimeout(() =>
    {
        canMove = true;
    }, moveDelay);
}
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
//                          Win check - check if goal reached                       //
function checkGoal()
{
    if
    (
        diceLocation.row === end.row &&
        diceLocation.column === end.column
    )
    {
        if (score === targetScore)
        {
            // if (rollCount === targetMoves)
            // {
            gameEnd = true;
            console.log("Success! Score reached:", score);
            console.log("Rolls:", rollCount);

            flashWin();
            showSuccessPanel();
            // }
            // else
            // {
            //     console.log("Score reach but wrong moves");
            //     console.log("Rolls:", rollCount, "Target:", targetMoves);

            //     flashClose();
            //     showClosePanel()
            // }
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
// ----------------------------------------------------------------------------------------- //

// --------------------------------------------------------------------------//
// --------------------------------------------------------------------------//
//                           Game Panels                                     //
// --------------------------------------------------------------------------//
//    START PANELS    //
function startScreen()
{
    const gameStartPanel = document.getElementById("gameStartPanel");
    const gameStartTitle = document.getElementById("gameStartTitle");
    const gameStartMessage = document.getElementById("gameStartMessage");
    const gameStartButton = document.getElementById("gameStartButton");

    gameStartPanel.className = "start";
    gameStartTitle.textContent = `Today's puzzle - ${todayDate}`;
    gameStartMessage.textContent = `Roll to reach the target score of ${targetScore}`;
    gameStartButton.textContent = "PLAY";
    gameStartPanel.style.display = "flex";
    
    startScreenOpen = true;
    console.log("start set true");
}

gameStartButton.addEventListener("click", function()
{
    // Find difficulty selected
    const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked').value;

    // Update game state variable
    difficulty = selectedDifficulty;

    loadPuzzle(currentPuzzle);
    createGrid();

    // Hide the start panel
    document.getElementById("gameStartPanel").style.display = "none";
    startScreenOpen = false;
    console.log("start set false")
});
// ----------------------------------------------------------- //
// Settings Panel
const settingsPanel = document.getElementById("settingsPanel");
const settingsIcons = document.querySelectorAll(".settingsIcon");
const settingsExitButton = document.getElementById("settingsExitButton");

//Open Settings
settingsIcons.forEach(function(settingsIcon)
{
    settingsIcon.addEventListener("click", function()
    {
        if (startScreenOpen)     // Settings from start screen
        {
            gameStartPanel.style.display = "none";
            settingsPanel.style.display = "flex";
        }
        else if (endScreenOpen)      // Settings from end screen
        {
            gameEndPanel.style.display = "none";
            settingsPanel.style.display = "flex";
        }
        else        // Settings from play screen
        {
            settingsPanel.style.display = "flex";
        }
    });
});

// Exit settings
settingsExitButton.addEventListener("click", function ()
{
    if (startScreenOpen)     // Exit settings to start
    {
        settingsPanel.style.display = "none";
        gameStartPanel.style.display = "flex";
        startScreenOpen = false;
        console.log("start set false from exit");
    }
    else if (endScreenOpen)     // Exit settings to end
    {
        settingsPanel.style.display = "none";
        gameEndPanel.style.display = "flex";
        endScreenOpen = false;
        console.log("end set false from settings exit")
    }
    else        // Exit settings to play screen
    {
        settingsPanel.style.display = "none";
    }
});

// ----------------------------------------------------------- //
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

    endScreenOpen = true;
    console.log("end set true");
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
    if (replayPuzzle)
    {
        currentPuzzle = replayPuzzle;
    }

    // Reload the currently active puzzle and difficulty
    loadPuzzle(currentPuzzle);
    // Rebuild the grid for the selected difficulty
    createGrid();
    // Reset score, moves, dice position and orientation
    resetDice();
    // Restore the normal tile colours
    flashNormal();

    endScreenOpen = false;
    console.log("end set false");
});

// ----------------------------------------------------------------------------------------- //

// --------------------------------------------------------------------------------//
//                                     Dice movement directions NESW               //
// creating NESW roll functions for changing top number
    // and adding the new number to the score
function rollForward() // Roll north / up
{
    const oldTop = dice.top;

    dice.top = dice.south;
    dice.south = dice.bottom;
    dice.bottom = dice.north;
    dice.north = oldTop;

    if (movingToMinus)
    {
        console.log("minus", dice.top)
        score -= dice.top;
    }
    else if (movingToMultiply)
    {
        console.log("up to multiply", dice.top, "x", dice.north, "=", (dice.top * dice.north))
        score += (dice.top * dice.north) // not south because dice has already been rotated
    }
    else if (movingToSquare)
    {
        console.log("square", dice.top, "x", dice.top, "=", dice.top * dice.top)
        score += (dice.top * dice.top);
    }
    else
    {
        score += dice.top;
    }

    document.getElementById("currentscore").textContent = score;
}
function rollBackward() // Roll south / down
{
    const oldTop = dice.top;

    dice.top = dice.north;
    dice.north = dice.bottom;
    dice.bottom = dice.south;
    dice.south = oldTop;

    if (movingToMinus)
    {
        console.log("minus -", dice.top)
        score -= dice.top;
    }
    else if (movingToMultiply)
    {
        console.log("down to multiply", dice.top, "x", dice.south, "=", (dice.top * dice.south))
        score += (dice.top * dice.south) // not north because dice has already been rotated
    }
    else if (movingToSquare)
    {
        console.log("square -", dice.top, "x", dice.top, "=", dice.top * dice.top)
        score += (dice.top * dice.top);
    }
    else
    {
        score += dice.top;
    }

    document.getElementById("currentscore").textContent = score;
}
function rollRight() // Roll east / right
{
    const oldTop = dice.top;

    dice.top = dice.west;
    dice.west = dice.bottom;
    dice.bottom = dice.east;
    dice.east = oldTop;

    if (movingToMinus)
    {
        console.log("minus -", dice.top)
        score -= dice.top;
    }
    else if (movingToMultiply)
    {
        console.log("right to multiply", dice.top, "x", dice.east, "=", (dice.top * dice.east))
        score += (dice.top * dice.east) // not west because dice has already been rotated
    }
    else if (movingToSquare)
    {
        console.log("square", dice.top, "x", dice.top, "=", dice.top * dice.top)
        score += (dice.top * dice.top);
    }
    else
    {
        score += dice.top;
    }

    document.getElementById("currentscore").textContent = score;
}
function rollLeft() // Roll west / left
{
    const oldTop = dice.top;

    dice.top = dice.east;
    dice.east = dice.bottom;
    dice.bottom = dice.west
    dice.west = oldTop;

    if (movingToMinus)
    {
        console.log("minus -", dice.top)
        score -= dice.top;
    }
    else if (movingToMultiply)
    {
        console.log("left to multiply", dice.top, "x", dice.west, "=", (dice.top * dice.west))
        score += (dice.top * dice.west) // not east because dice has already been rotated
    }
    else if (movingToSquare)
    {
        console.log("square", dice.top, "x", dice.top, "=", dice.top * dice.top)
        score += (dice.top * dice.top);
    }
    else
    {
        score += dice.top;
    }

    document.getElementById("currentscore").textContent = score;
}
// --------------------------------------------------------------------------------//
// -----------------------------------------------------------------------//
//                              Puzzle reset                              //
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

    // Cancel any queued preview
    clearTimeout(previewTimeout);

    // Remove current movement previews on reset
    diceGrid.querySelectorAll(".movementPreview").forEach(preview =>
    {
        preview.remove();
    });

    // reset dice visual
    updateDicePosition();
    updateDiceImage();

    // set intial move preview delay on reset
    setTimeout(() =>
    {
        updateMovementPreviews();
    }, (previewDelay * 3));               // set delay before showing move preview


    // remove panel
    document.getElementById("gameEndPanel").style.display = "none";
}
// -------------------------------------------------------------------------------- //

// -------------------------------------------------------------------------------- //
//          Change the grid colour on puzzle failure / win and close                //
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
//                          Key controls for the game                              //
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