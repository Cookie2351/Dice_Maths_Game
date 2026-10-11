const puzzles =
[
    {
        date: "12/10/2026",
        devName: "SetPuzzle1", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 1, 1],   // row 0
            [0, 1, 1, 1, 1],   // row 1
            [1, 1, 0, 0, 1],   // row 2
            [1, 0, 0, 1, 1],   // row 3
            [1, 1, 1, 1, 1],   // row 4
        ],

        start: { row: 4, column: 0 },   // square has to be visible
        end:   { row: 0, column: 4 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 2,
            south: 3,
            west: 6
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 37,    // set target score for game win
                
                path:               // Get targetMoves from path    // index starts at 0
                [
                    "right",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "right",          // move 3
                    "up",          // move 4
                    "right",          // move 5       - index 4
                    "up",        // move 6
                    "up",          // move 7
                    "left",          // move 8
                    "up",           // move 9
                    "right",        // move 10 - move to end square
                ]
            },
            medium:
            {
                minus: { row: 4, column: 4 },
                multiply: { row: 1, column: 4 },
                square: null,

                targetScore: 100,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "",       // move 1 - move off start square - index 0
                    "",          // move 2
                    "",          // move 3
                    "",          // move 4
                    "",          // move 5       - index 4
                    "",        // move 6
                    "",          // move 7
                    "",          // move 8
                    "",           // move 9
                    "",        // move 10
                    "",        // move 11
                    "",        // move 12 - move to end square
                ]
            },
            hard:
            {
                minus: { row: 4, column: 4 },
                multiply: { row: 1, column: 4 },
                square: { row: 0, column: 2 },

                targetScore: 99,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "",       // move 1 - move off start square - index 0
                    "",          // move 2
                    "",          // move 3
                    "",          // move 4
                    "",          // move 5       - index 4
                    "",        // move 6
                    "",          // move 7
                    "",          // move 8
                    "",           // move 9
                    "",        // move 10
                    "",        // move 11 - move to end square
                ]
            }
        }
    },

    {
        date: "13/10/2026",
        devName: "SetPuzzle2", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [1, 1, 1, 1, 0],   // row 0
            [1, 0, 1, 1, 1],   // row 1
            [1, 1, 1, 0, 1],   // row 2
            [1, 1, 0, 1, 1],   // row 3
            [0, 1, 1, 1, 1],   // row 4
        ],

        start: { row: 4, column: 2 },   // square has to be visible
        end:   { row: 2, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 5,
            west: 6
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 36,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "up",          // move 3
                    "left",          // move 4
                    "up",          // move 5       - index 4
                    "up",        // move 6
                    "right",          // move 7
                    "right",          // move 8
                    "down",           // move 9
                    "down",          // move 10 - move to end square
                ]
            }
        }
    },

    {
        date: "14/10/2026",
        devName: "SetPuzzle3", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [1, 1, 1, 0, 0],   // row 0
            [1, 1, 1, 0, 0],   // row 1
            [0, 1, 1, 1, 0],   // row 2
            [0, 0, 1, 1, 1],   // row 3
            [0, 0, 1, 0, 0],   // row 4
        ],

        start: { row: 3, column: 4 },   // square has to be visible
        end:   { row: 1, column: 0 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 1,
            west: 5
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 30,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "left",       // move 1 - move off start square - index 0
                    "up",          // move 2
                    "left",          // move 3
                    "up",          // move 4
                    "up",          // move 5       - index 4
                    "left",        // move 6
                    "down",          // move 7
                    "left",          // move 8 - move to end square
                ]
            }
        }
    },

    {
        date: "15/10/2026",
        devName: "SetPuzzle4", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 0, 0],   // row 0
            [0, 1, 1, 0, 0],   // row 1
            [0, 1, 1, 1, 1],   // row 2
            [0, 0, 1, 1, 0],   // row 3
            [0, 0, 1, 0, 0],   // row 4
        ],

        start: { row: 1, column: 1 },   // square has to be visible
        end:   { row: 2, column: 4 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 3,
            south: 2,
            west: 1
        },

        difficulties:
        {
            normal:
            {
                minus: null,
                multiply: null,
                square: null,

                targetScore: 24,    // set target score for game win

                path:               // Get targetMoves from path    // index starts at 0
                [
                    "down",       // move 1 - move off start square - index 0
                    "right",          // move 2
                    "right",          // move 3
                    "down",          // move 4
                    "left",          // move 5
                    "up",          // move 6       - index 4
                    "right",        // move 7
                    "right",          // move 8 - move to end square
                ]
            }
        }
    },

    {
        date: "16/10/2026",
        devName: "Blank", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 0, 0],   // row 0
            [0, 0, 0, 0, 0],   // row 1
            [0, 0, 0, 0, 0],   // row 2
            [0, 0, 0, 0, 0],   // row 3
            [0, 0, 1, 0, 0],   // row 4
        ],

        start: { row: 4, column: 2 },   // square has to be visible
        end:   { row: 0, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 1,
            south: 2,
            west: 4
        },

        targetScore: 50,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "up",       // move 1 - move off start square - index 0
            "",          // move 2
            "",          // move 3
            "",          // move 4
            "",          // move 5       - index 4
            "",        // move 6
            "",          // move 7
            "",          // move 8
            "",           // move 9
            "",          // move 10
            "",           // move 11
            "",        // move 12 - move to end square
        ],
    },
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
//                                  Blank Puzzle                                    //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
    {
        date: "00/00/0000",
        devName: "Blank", // Set a dev command to select this puzzle

        grid:       // grid 5x5, columns 0-4, rows 0-4    // index starts at 0
        [
            [0, 0, 1, 0, 0],   // row 0
            [0, 0, 0, 0, 0],   // row 1
            [0, 0, 0, 0, 0],   // row 2
            [0, 0, 0, 0, 0],   // row 3
            [0, 0, 1, 0, 0],   // row 4
        ],

        start: { row: 4, column: 2 },   // square has to be visible
        end:   { row: 0, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 1,
            south: 2,
            west: 4
        },

        targetScore: 50,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "up",       // move 1 - move off start square - index 0
            "",          // move 2
            "",          // move 3
            "",          // move 4
            "",          // move 5       - index 4
            "",        // move 6
            "",          // move 7
            "",          // move 8
            "",           // move 9
            "",          // move 10
            "",           // move 11
            "",        // move 12 - move to end square
        ],
    },
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
//                                                                                  //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //

];