const puzzles =
[
    {
        date: "24/09/2026",

        grid:       // grid 6x8, columns 0-5, rows 0-7
        [
            [0, 0, 0, 1, 1, 0],   //row 0
            [0, 0, 0, 1, 1, 0],   //row 1
            [0, 0, 1, 1, 1, 0],   //row 2
            [0, 0, 1, 1, 1, 0],   //row 3
            [0, 0, 1, 1, 1, 0],   //row 4
            [0, 0, 1, 0, 1, 0],   //row 5
            [0, 0, 1, 1, 1, 0],   //row 6
            [0, 0, 1, 0, 0, 0]    //row 7
        ],

        start:
        {
            row: 7,
            column: 3
        },

        end:
        {
            row: 0,
            column: 5
        },

        dice:
        {
            top: 5,
            south: 3,
            west: 1
        },

        targetScore: 30,
        targetMoves: 9
    },

    {
        date: "25/09/2026",

        grid:       // grid 6x8, columns 0-5, rows 0-7
        [
            [0, 0, 1, 0, 0, 0],   //row 0
            [0, 1, 1, 1, 1, 0],   //row 1
            [0, 1, 0, 1, 0, 0],   //row 2
            [0, 1, 1, 1, 0, 0],   //row 3
            [0, 0, 1, 1, 0, 0],   //row 4
            [0, 0, 1, 1, 0, 0],   //row 5
            [0, 1, 1, 1, 0, 0],   //row 6
            [0, 1, 1, 0, 0, 0]    //row 7
        ],

        start:
        {
            row: 7,
            column: 2
        },

        end:
        {
            row: 0,
            column: 3
        },

        dice:
        {
            top: 1,
            south: 2,
            west: 4
        },

        targetScore: 54,
        targetMoves: 16
    }
];