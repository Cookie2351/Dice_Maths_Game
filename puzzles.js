const puzzles =
[
    {
        date: "24/09/2026",
        devName: "SetPuzzle1", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 0, 0, 1, 0, 0],   // row 0
            [0, 0, 0, 1, 1, 0],   // row 1
            [0, 0, 0, 1, 1, 0],   // row 2
            [0, 0, 0, 1, 0, 0],   // row 3
            [0, 0, 1, 1, 1, 0],   // row 4
            [0, 0, 1, 0, 1, 0],   // row 5
            [0, 0, 1, 1, 1, 0],   // row 6
            [0, 0, 1, 0, 0, 0]    // row 7
        ],

        start: { row: 7, column: 2 },   // square has to be visible
        end:   { row: 0, column: 3 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 5,
            south: 3,
            west: 1
        },

        targetScore: 28,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "up",           // move 1 - move off start square - index 0
            "right",        // move 2
            "right",        // move 3
            "up",           // move 4
            "up",           // move 5       - index 4
            "left",         // move 6
            "up",           // move 7
            "up",           // move 8
            "up",           // move 9
            "up"            // move 10 - move to end square
        ],
    },

    {
        date: "25/09/2026",
        devName: "SetPuzzle2", // Set a dev command to select this puzzle

        grid:       // grid 6x8, columns 0-5, rows 0-7    // index starts at 0
        [
            [0, 0, 1, 0, 0, 0],   // row 0
            [0, 1, 1, 1, 1, 1],   // row 1
            [0, 1, 0, 1, 0, 0],   // row 2
            [0, 1, 1, 1, 0, 0],   // row 3
            [0, 0, 1, 1, 0, 0],   // row 4
            [0, 0, 1, 1, 0, 0],   // row 5
            [0, 1, 1, 1, 0, 0],   // row 6
            [0, 1, 1, 0, 0, 0]    // row 7
        ],

        start: { row: 7, column: 1 },   // square has to be visible
        end:   { row: 0, column: 2 },   // square has to be visible

        dice:       // set three sides so dice orientation and values can all be set
        {
            top: 1,
            south: 2,
            west: 4
        },

        targetScore: 54,    // set target score for game win

        path:               // Get targetMoves from path    // index starts at 0
        [
            "right",       // move 1 - move off start square - index 0
            "up",          // move 2
            "up",          // move 3
            "up",          // move 4
            "up",          // move 5       - index 4
            "left",        // move 6
            "up",          // move 7
            "up",          // move 8
            "right",       // move 9
            "right",       // move 10
            "right",       // move 11
            "right",       // move 12
            "left",        // move 13
            "left",        // move 14
            "left",        // move 15
            "up",          // move 16 - move to end square
        ],
    }
];