// visible grid
const grid =
[
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0]
];

// set start and end positions
const start =
{
    row: 7,
    column: 3
};
const end =
{
    row: 0,
    column: 5
};

// create grid
const diceGrid = document.getElementById("diceGrid");

for (let row = 0; row < 8; row++) {

    for (let column = 0; column < 8; column++)
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

// set the dice top face and orientation for the puzzle 
const dice =
{
    top: 5,
    south: 3,
    west: 1
};

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

// set score for start
let score = 0;

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

rollForward();
rollForward();
rollRight();
rollBackward();
console.log("Final score:", score);