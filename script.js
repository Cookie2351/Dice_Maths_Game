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

// visible grid
const grid = // grid 8x8 - row 0-7, column 0-7
[
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0]
];

// set start and end positions | grid 8x8 row0-7, column0-7
const start =
{
    row: 7,
    column: 2
};
const end =
{
    row: 0,
    column: 3
};

// set the dice top face and orientation for the puzzle 
const dice =
{
    top: 1,
    south: 2,
    west: 4
};

// Store starting dice orientation
const diceStart =
{
    top: dice.top, south: dice.south, west: dice.west
};

let targetScore = 45;

// create grid
const diceGrid = document.getElementById("diceGrid");

for (let row = 0; row < 8; row++) { // for grid 8x8

    for (let column = 0; column < 8; column++) // for grid 8x8
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
    diceElement.style.left = `${diceLocation.column * 60 + 10}px`;
    diceElement.style.top = `${diceLocation.row * 60 + 10}px`;
}

updateDicePosition();

function updateDiceImage()
{
    const diceImage = document.getElementById("diceImage");

    diceImage.src = `Assets/Dice_side${dice.top}.png`;
}

// Start game
let score = 0;
let rollCount = 0;
let gameEnd = false;
updateDiceImage();

function canMoveTo(row, column)
{
    // Check if move position will be outside game grid
    if (row < 0 || row >= 8 || column < 0 || column >= 8) // for grid 8x8
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

// handle dice location updates
function move(direction)
{
    // stop game if ended
    if (gameEnd)
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

    // update the dice position
    diceLocation.row = newRow;
    diceLocation.column = newColumn;

    // update dice visual
    updateDicePosition();

    // count moves
    rollCount++;

    console.log("Number of moves", rollCount);
    console.log("Dice grid position:", diceLocation.row, diceLocation.column);

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
}

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
            gameEnd = true;

            console.log("Success! Score reached:", score);
            console.log("Rolls:", rollCount);
        }
        else
        {
            console.log("Incorrect score:", score);
            console.log("Target score:", targetScore);
            console.log("Resetting puzzle...");

            setTimeout(() =>
            {
                resetDice();
            }, 1000);
        }


    }
}

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

    console.log("Rolled forwards");
    console.log("top from forwards roll:", dice.top);
    console.log("score:", score);
}
function rollBackward() // Roll south / down
{
    const oldTop = dice.top;

    dice.top = dice.north;
    dice.north = dice.bottom;
    dice.bottom = dice.south;
    dice.south = oldTop;

    score += dice.top

    console.log("Rolled backwards");
    console.log("top from backwards roll:", dice.top);
    console.log("score:", score);
}
function rollRight() // Roll east / right
{
    const oldTop = dice.top;

    dice.top = dice.west;
    dice.west = dice.bottom;
    dice.bottom = dice.east;
    dice.east = oldTop;

    score += dice.top

    console.log("Rolled right");
    console.log("top from right roll:", dice.top);
    console.log("score:", score);
}
function rollLeft() // Roll west / left
{
    const oldTop = dice.top;

    dice.top = dice.east;
    dice.east = dice.bottom;
    dice.bottom = dice.west
    dice.west = oldTop;

    score += dice.top

    console.log("Rolled left");
    console.log("top from left roll:", dice.top);
    console.log("score:", score);
}

function resetDice() // Reset puzzle for re-attempt
{
    score = 0;
    rollCount = 0;
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

    console.log("Dice reset to:", diceLocation.row, diceLocation.column);
    console.log("Dice orientation:", dice);
}

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

    // set controls for the dice rolling
    switch (event.key)
    {
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

        case "r": case "R":
            resetDice();
            break;
    }
});

// console.log("Final score:", score);